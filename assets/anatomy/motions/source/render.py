"""Offline generator: python render.py /path/to/cc0-mesh-files /path/to/output [exercise ...]
Needs numpy, Pillow, c++17 compiler. No downloaded project runtime or animations.
"""
import ctypes as C, hashlib, json, math, pathlib, subprocess, sys, tempfile
import numpy as np
from PIL import Image
P=pathlib.Path
src,out=map(P,sys.argv[1:3]); out.mkdir(parents=True,exist_ok=True)
tmp=tempfile.TemporaryDirectory(); lib=P(tmp.name)/'raster.so'
subprocess.run(['c++','-std=c++17','-O3','-shared','-fPIC',str(P(__file__).with_name('raster.cpp')),'-o',str(lib)],check=True)
paint=C.CDLL(str(lib)).paint
paint.argtypes=[C.c_int,C.c_int]+[C.c_void_p]*5+[C.c_int]
meta=json.loads((src/'figure.json').read_text()); raw=(src/'figure.bin').read_bytes()
assert hashlib.sha256(raw).hexdigest()==meta['sha256']=='abcca3ea712ddadde2a27c1e51a68685d7201d65d4ad49c60c736e7ea1835927'
def read(k,d,n):
    m=meta['layout'][k];return np.frombuffer(raw,d,offset=m['offset'],count=m['length']).reshape(-1,n)
v=read('position','<f4',3); weights=read('skinWeight','<f4',4); ids=read('skinIndex','<u2',4); tri=read('index','<u4',3)
def a(*x):return np.array(x,dtype=float)
def unit(x):return x/(np.linalg.norm(x,axis=-1,keepdims=True)+1e-14)
def rotation(w,deg):
    x,y,z=unit(w); c=np.cos(deg); s=np.sin(deg); V=1-c
    return a([x*x*V+c,x*y*V-z*s,x*z*V+y*s],[x*y*V+z*s,y*y*V+c,y*z*V-x*s],[x*z*V-y*s,y*z*V+x*s,z*z*V+c])
def align(u,w):
    u,w=unit(u),unit(w); axis=np.cross(u,w); cos=np.clip(u@w,-1,1)
    if np.linalg.norm(axis)<1e-8:return np.eye(3) if cos>0 else rotation([1,0,0],np.pi)
    return rotation(axis,np.arccos(cos))
def ik(root,end,L1,L2,pole):
    delta=end-root; dist=np.clip(np.linalg.norm(delta),abs(L1-L2)+.0001,L1+L2-.0002)
    d=unit(delta); axis=unit(pole-(pole@d)*d); u=(L1**2-L2**2+dist**2)/(2*dist)
    return root+d*u+axis*np.sqrt(max(0,L1**2-u**2)), root+d*dist
def move(e,t):
    # X lateral / Y vertical / +Z forward. Targets are in metres; limbs solve fixed lengths.
    hp=a(0,.955,0); ang=0; bar_y=0; bar_z=0; width=.33
    if e=='bench':hp=a(0,.545,.03);ang=-90;bar_y=.72+.439*t;bar_z=-.348-.115*t;width=.335
    elif e=='squat':hp=a(0,.966-.415*t,-.19*t);ang=8+32*t
    elif e=='rdl':hp=a(0,.966-.118*t,-.328*t);ang=4+69*t
    elif e=='row':hp=a(0,.852,-.18);ang=55
    elif e=='pullup':hp=a(0,1.087+.352*t,-.055-.055*t);ang=-3-7*t;bar_y=2.047;bar_z=.035;width=.32
    elif e=='ohp':ang=-3*(1-t);bar_y=1.492+.584*t;bar_z=.17*(1-t)+.077*np.sin(np.pi*t)+.012*t;width=.248
    R=rotation([1,0,0],np.radians(ang)); rest=a(*meta['rest']['hip']); bones=meta['bones']; ms={}
    def put(i,r,p):
        origin=np.array(bones[i]['head']); ms[i]=(r,p-r@origin)
    put(0,R if e=='bench' else rotation([1,0,0],np.radians(ang*.35)),hp);put(1,R,hp)
    headR=rotation([1,0,0],np.radians(ang*(.8 if e in ('row','rdl','squat') else .98)))
    put(2,headR,hp+R@(a(*bones[2]['head'])-rest))
    for side,(ai,li) in [(-1,(3,6)),(1,(9,12))]:
        key='left' if side<0 else 'right'; ar=np.array(meta['rest'][key+'Arm']); leg=np.array(meta['rest'][key+'Leg'])
        # Hip-to-knee and ankle-to-floor distances are fixed. Feet remain planted unless hanging.
        G=hp+(leg[0]-rest); A=a(side*(.201 if e=='squat' else .172),.075,.025)
        if e=='bench':A=a(side*.208,.076,.428)
        if e=='pullup':A=a(side*.105,hp[1]-.74,-.318)
        knee,A=ik(G,A,np.linalg.norm(leg[1]-leg[0]),np.linalg.norm(leg[2]-leg[1]),a(side*(.25 if e=='squat' else .028),0,1))
        put(li,align(leg[1]-leg[0],knee-G),G);put(li+1,align(leg[2]-leg[1],A-knee),knee)
        put(li+2,rotation([0,1,0],side*.12)@rotation([1,0,0],.5 if e=='pullup' else 0),A)
        S=hp+R@(ar[0]-rest); pole=a(side*.32,-.6,-1)
        if e=='bench':pole=a(side*.85,-1,.44)
        if e=='pullup':pole=a(side*.95,-.7,-.3)
        if e=='ohp':pole=a(side*.3,-1,.25)
        if e=='rdl':
            width=.242;bar_z=.13+.035*t
            bar_y=S[1]-np.sqrt(max(.01,.536**2-(width-abs(S[0]))**2-(bar_z-S[2])**2))-.044
        if e=='row':width=.294;bar_y=S[1]-.558+.338*t;bar_z=S[2]+.025-.21*t;pole=a(side*.1,-.5,-1)
        if e=='squat':width=.385;bar_z=S[2]-.091;bar_y=S[1]+.092;pole=a(side*.36,-1,-.6)
        grip=a(side*width,bar_y,bar_z)
        # The bar goes through the palm, not the wrist origin.
        dir0=unit(grip-S)
        if e in ('bench','ohp','squat'):dir0=unit(a(0,1,-.12))
        if e=='pullup':dir0=unit(a(0,1,.035))
        if e in ('row','rdl'):dir0=unit(a(0,-1,.12))
        target=grip-dir0*.095
        elbow,wrist=ik(S,target,np.linalg.norm(ar[1]-ar[0]),np.linalg.norm(ar[2]-ar[1]),pole)
        U=align(ar[1]-ar[0],elbow-S); F=align(ar[2]-ar[1],wrist-elbow)
        put(ai,U,S);put(ai+1,F,elbow)
        # Rest finger direction from the wrist to the middle metacarpal, corrected for each hand.
        fingerIDs=[i for i,b in enumerate(bones) if i>=15 and np.sign(b['head'][0])==side]
        bases=[i for i in fingerIDs if '-1.' in bones[i]['name']]
        restp=np.mean([bones[i]['head'] for i in bases[1:]],axis=0)-ar[2]
        # Line of the knuckles runs along the bar, regardless of forearm angle.
        long=unit(restp);across=a(*bones[bases[-1]]['head'])-a(*bones[bases[1]]['head'])
        across=unit(across-long*(across@long));handBase=np.stack([long,across,np.cross(long,across)],axis=1)
        destAcross=a(side,0,0); destAcross=unit(destAcross-dir0*(dir0@destAcross))
        handTarget=np.stack([dir0,destAcross,np.cross(dir0,destAcross)],axis=1)
        H=handTarget@handBase.T;put(ai+2,H,wrist)
        # Close the metacarpals about the bar instead of leaving flat palms.
        for i in fingerIDs:
            finger=bones[i]; orig=np.array(finger['head']); level=int(finger['name'].split('-')[1][0]); parent=i-1
            parentR,parentT=ms[ai+2] if level==1 else ms[parent]
            pos=parentR@orig+parentT; restDigit=np.array(finger['tail'])-orig
            bendSide=1 if dir0[1]<0 else -1
            if 'finger1-' in finger['name']:
                goal=unit(grip-pos+destAcross*.008); digit=align(restDigit,goal)
            else:
                # Curl around the near / far sides of a 32-mm bar instead of pointing straight.
                angle=bendSide*[1.0,2.08,3.27][level-1]
                digit=align(restDigit,rotation([1,0,0],angle)@dir0)
            put(i,digit,pos)
    return ms,bar_y,bar_z
def normals(verts,idx):
    n=np.zeros_like(verts); f=np.cross(verts[idx[:,1]]-verts[idx[:,0]],verts[idx[:,2]]-verts[idx[:,0]])
    for j in range(3):
        for axis in range(3):n[:,axis]+=np.bincount(idx[:,j],f[:,axis],minlength=len(verts))
    return unit(n)
def equipment(e,by,bz):
    verts=[]; tris=[]; colors=[]; nv=0
    def cyl(A,B,r,col,n=40):
        nonlocal nv
        A=np.asarray(A);B=np.asarray(B);d=unit(B-A);p=unit(np.cross(d,[0,1,0] if abs(d[1])<.9 else [1,0,0]));q=unit(np.cross(d,p))
        pts=[A,B]+[E+r*(p*np.cos(2*np.pi*i/n)+q*np.sin(2*np.pi*i/n)) for E in (A,B) for i in range(n)]
        inds=[]
        for i in range(n):
            j=(i+1)%n
            inds.extend([[0,2+j,2+i],[1,2+n+i,2+n+j],[2+i,2+j,2+n+i],[2+j,2+n+j,2+n+i]])
        verts.extend(pts);tris.extend(np.array(inds)+nv);colors.extend([col]*len(pts));nv+=len(pts)
    def box(lo,hi,col):
        nonlocal nv
        x,y,z=lo; X,Y,Z=hi;verts.extend([[x,y,z],[X,y,z],[X,Y,z],[x,Y,z],[x,y,Z],[X,y,Z],[X,Y,Z],[x,Y,Z]])
        tris.extend(np.array([[0,2,1],[0,3,2],[4,5,6],[4,6,7],[0,4,7],[0,7,3],[1,2,6],[1,6,5],[3,7,6],[3,6,2],[0,1,5],[0,5,4]])+nv); colors.extend([col]*8);nv+=8
    metal=(160,171,172); weight=(65,78,80); ring=(125,137,137)
    cyl([-.83,by,bz],[.83,by,bz],.016,metal)
    if e!='pullup':
        for s in (-1,1):
            rad=.168 if e not in ('ohp','row') else .117
            cyl([s*.66,by,bz],[s*.705,by,bz],rad,weight,56)
            cyl([s*.705,by,bz],[s*.71,by,bz],rad*.9,ring,56)
            cyl([s*.71,by,bz],[s*.745,by,bz],rad*.72,weight,56)
            cyl([s*.745,by,bz],[s*.80,by,bz],.026,metal)
    else:
        for s in (-1,1):cyl([s*.81,by+.32,bz],[s*.81,by,bz],.019,ring)
    if e=='bench':
        box([-.132,.399,-.88],[.132,.452,.31],(77,89,90))
        for z in (-.64,.2):
            cyl([0,.02,z],[0,.4,z],.033,ring);cyl([-.18,.025,z],[.18,.025,z],.023,ring)
    return np.array(verts),np.array(tris,dtype=np.uint32),np.array(colors)
def musclepaint(e):
    x,y,z=v.T;X=np.abs(x)
    # Smooth, directional surface pigment; positions in bind coordinates.
    shapes={'chest':[(.094,1.419,.116,.112,.101,.086)],'quad':[(.136,.735,.079,.104,.223,.086)],'glute':[(.096,.955,-.077,.113,.121,.080)],'ham':[(.136,.735,-.055,.082,.20,.068)],'delt':[(.214,1.458,.02,.073,.081,.08)],'lats':[(.103,1.274,-.077,.103,.175,.083)],'upperback':[(.05,1.424,-.082,.123,.104,.06)],'triceps':[(.28,1.35,-.015,.097,.13,.069)]}
    chosen={'bench':['chest'],'ohp':['delt'],'row':['lats','upperback'],'pullup':['lats'],'rdl':['ham','glute'],'squat':['quad','glute']}[e]
    masks=[]
    for muscle in chosen:
        if muscle=='lats':
            h=np.clip((y-1.08)/.34,0,1)
            mid=.042+.125*h;radius=.026+.042*np.sin(np.pi*h)
            strip=np.clip((radius-np.abs(X-mid))/.015+.5,0,1)
            strip*=np.clip((y-1.075)/.068,0,1)*np.clip((1.433-y)/.040,0,1)
            strip*=np.clip((.026-z)/.035,0,1)
            masks.append(strip);continue
        for xx,yy,zz,rx,ry,rz in shapes[muscle]:
            ds=((X-xx)/rx)**2+((y-yy)/ry)**2+((z-zz)/rz)**2
            masks.append(np.clip((1.22-ds)/.43,0,1))
    return np.max(masks,axis=0)[:,None]
def contiguous(x):return np.ascontiguousarray(x,dtype=np.float32)
W,H=600,400; SS=1.8; ww,hh=int(W*SS),int(H*SS)
YY,XX=np.mgrid[0:hh,0:ww]; back=np.clip(1-((XX/ww-.5)**2*2+(YY/hh-.52)**2),0,1)[:,:,None]*a(12,13,13)+a(27,32,34)
back-=np.exp(-(((XX/ww-.52)/.23)**2+((YY/hh-.902)/.024)**2))[:,:,None]*a(6,7,7)
background=np.ascontiguousarray(back,np.uint8)
def render(e,t):
    ms,by,bz=move(e,t)
    dst=np.zeros(v.shape,float)
    for b,(rot,off) in ms.items():
        row,w=influences[b];dst[row]+=(v[row]@rot.T+off)*w[:,None]
    ev,et,ec=equipment(e,by,bz);body_n=normals(dst,tri)
    front={'bench':[.91,.49,-.55],'pullup':[.78,.07,-1],'row':[.91,.35,-.73],'ohp':[.83,.16,1],'squat':[.96,.13,.73],'rdl':[1.05,.18,-.72]}[e]
    eye=unit(front);right=unit(np.cross([0,1,0],eye));up=unit(np.cross(eye,right))
    center,scale={'bench':([0,.59,-.12],1.56),'pullup':([0,1.19,0],2.44),'row':([0,.72,.02],1.63),'ohp':([0,1.04,.01],2.35),'squat':([0,.89,0],2.07),'rdl':([0,.90,0],2.05)}[e]
    base=np.array([194,190,175])+np.zeros_like(v)
    # Pelvic neutral study garment, separate from the targeted posterior hip.
    x,y,z=v.T; garment=(y<1.052)&(y>.859+.025*np.minimum(1,np.abs(x)/.19))&(np.abs(x)<.21)
    base[garment]=a(87,96,95)
    mark=masks[e]
    grain=.98+.022*np.sin((y*1.5+np.abs(x)*.42+z*.7)*430)
    base=base*(1-mark)+(a(236,103,76)*grain[:,None])*mark
    verts=np.vstack([dst,ev]); N=np.vstack([body_n,normals(ev,et)]); colors=np.vstack([base,ec])
    # Two large studio sources: one warm key and cool rim.
    key=unit(-right*.51+up*.78+eye*.58); rim=unit(right*.86+up*.3-eye*.23)
    diff=np.maximum(0,N@key);rf=np.maximum(0,N@rim); facing=np.clip(N@eye,0,1)
    intensity=(.46+.54*diff+.20*rf+.06*facing)[:,None]
    colours=contiguous(colors*intensity + ((1-facing)**3)[:,None]*a(13,18,19))
    vcam=verts-center
    proj=contiguous(np.stack([ww/2+(vcam@right)*hh/scale,hh*.505-(vcam@up)*hh/scale,vcam@eye],axis=1))
    faces=np.ascontiguousarray(np.vstack([tri,et+len(v)]),dtype=np.uint32);im=background.copy();dep=np.full((hh,ww),-1e4,dtype=np.float32)
    paint(ww,hh,*[x.ctypes.data for x in (im,dep,proj,colours,faces)],len(faces))
    return Image.fromarray(im).resize((W,H),Image.Resampling.LANCZOS)
influences={}
for b in range(len(meta['bones'])):
    r,j=np.where(ids==b);non=weights[r,j]>.00001;influences[b]=(r[non],weights[r[non],j[non]])
exercises=sys.argv[3:] or ['bench','pullup','squat','rdl','ohp','row'];masks={e:musclepaint(e) for e in exercises}
for ex in exercises:
    image=Image.new('RGB',(6*W,6*H))
    for i in range(36):
        fr=render(ex,i/35);image.paste(fr,((i%6)*W,(i//6)*H))
        if i==0:fr.save(out/(ex+'-start.webp'),quality=88,method=4)
    image.save(out/(ex+'.webp'),quality=84,method=4);print(ex,flush=True)
