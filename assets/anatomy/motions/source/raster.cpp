// Minimal orthographic z-buffer with interpolated vertex colour; offline asset build.
#include <cmath>
#include <algorithm>
#include <cstdint>
extern "C" void paint(int W,int H,unsigned char *img,float *depth,const float *v,const float *c,const uint32_t *ix,int triangles) {
  for(int j=0;j<triangles;j++,ix+=3){
    const float *a=v+3*ix[0],*b=v+3*ix[1],*d=v+3*ix[2];
    float bx=b[0]-a[0], by=b[1]-a[1], cx=d[0]-a[0], cy=d[1]-a[1], det=bx*cy-by*cx;
    if(std::abs(det)<.000001f) continue;
    int xmin=std::max(0,(int)std::floor(std::min({a[0],b[0],d[0]})));
    int xmax=std::min(W-1,(int)std::ceil(std::max({a[0],b[0],d[0]})));
    int ymin=std::max(0,(int)std::floor(std::min({a[1],b[1],d[1]})));
    int ymax=std::min(H-1,(int)std::ceil(std::max({a[1],b[1],d[1]})));
    const float *ca=c+3*ix[0],*cb=c+3*ix[1],*cd=c+3*ix[2];
    for(int y=ymin;y<=ymax;y++) for(int x=xmin;x<=xmax;x++){
       float dx=x+.5f-a[0],dy=y+.5f-a[1],s=(cy*dx-cx*dy)/det,t=(bx*dy-by*dx)/det;
       if(s<0 || t<0 || s+t>1) continue;
       int id=y*W+x; float u=1-s-t, z=u*a[2]+s*b[2]+t*d[2];
       if(z<=depth[id]) continue;
       depth[id]=z; for(int k=0;k<3;k++)img[id*3+k]=(unsigned char)std::clamp(u*ca[k]+s*cb[k]+t*cd[k],0.f,255.f);
    }
  }
}
