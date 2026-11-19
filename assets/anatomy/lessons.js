/* Original bilingual study notes. Muscle roles describe one joint action or one
   exercise, never a measured activation percentage. Null targets are deliberately
   not clickable: some related structures are outside the twelve visible plates. */
(() => {
  'use strict';
  const rel = (label, explanation, target = null) => ({label, explanation, target});
  const phase = (kind, en, zh, text) => ({kind, en, zh, text});
  const muscles = {
    pectoralis: {
      en:'Pectoralis major', zh:'胸大肌', group:'Chest', view:'front',
      fn:'向前抱住一个大球时，两侧上臂在肩关节处向胸前靠拢。这个动作叫水平内收；胸大肌也能使上臂内旋。',
      clue:'Pectoral 是「胸部的」，major 是「较大的」。健身房里说的 pecs，就是它。',
      synergy:rel('Anterior deltoid · 三角肌前束','卧推时，前束与胸大肌一起把上臂带向胸前；手肘伸直是另一组肌肉的工作。','deltoid'),
      antagonist:rel('Posterior deltoid · 三角肌后束','只看肩水平运动：后束让上臂向后打开，与胸大肌水平内收的方向相反。','deltoid')
    },
    deltoid: {
      en:'Deltoid', zh:'三角肌', group:'Shoulder', view:'front',
      fn:'这块肩帽有三个部分：前束把上臂带向前，中束把它向侧面抬起，后束把它带向后。',
      clue:'Delta 是希腊字母 Δ。看到肩外侧的三角形，就能想起 deltoid。',
      synergy:rel('Supraspinatus · 冈上肌','侧抬手臂时，冈上肌与三角肌中束一起产生肩外展；它不是肘部的动作。'),
      antagonist:rel('Latissimus dorsi · 背阔肌','就肩外展而言，背阔肌让抬开的上臂回到体侧，即肩内收。','latissimus')
    },
    biceps: {
      en:'Biceps brachii', zh:'肱二头肌', group:'Arm', view:'front',
      fn:'掌心向上端起一只碗，包含两个动作：肘关节屈曲，以及前臂旋后。肱二头肌两者都参与。',
      clue:'Bi- 是「二」，brachii 指上臂。两个「头」是两处起点，不是两块肌肉。',
      synergy:rel('Brachialis · 肱肌','弯曲手肘时，位于肱二头肌深面的肱肌也拉动前臂；它不负责翻转掌心。'),
      antagonist:rel('Triceps brachii · 肱三头肌','肱二头肌屈肘，肱三头肌伸肘。两者作用方向相反，也可一起用力来稳定肘部。','triceps')
    },
    triceps: {
      en:'Triceps brachii', zh:'肱三头肌', group:'Arm', view:'back',
      fn:'把弯曲的手肘推直时，上臂后侧的三头共同伸肘。其中长头还跨过肩关节，能参与肩伸展。',
      clue:'Tri- 是「三」。把 triceps 和 biceps 放在一起记：一个在上臂后侧伸肘，一个在前侧屈肘。',
      synergy:rel('Anconeus · 肘肌','伸直手肘时，肘后方的肘肌协助肱三头肌完成伸肘。'),
      antagonist:rel('Biceps brachii · 肱二头肌','只看肘关节，肱二头肌把前臂拉近上臂，方向与伸肘相反。','biceps')
    },
    trapezius: {
      en:'Trapezius', zh:'斜方肌', group:'Upper back', view:'back',
      fn:'耸肩、把肩胛骨向脊柱靠拢和举手过头，并非同一种耸动。上、中、下部纤维牵引方向不同；上部和下部还共同参与肩胛上回旋。',
      clue:'Trapezius 常简称 traps。别只记耸肩：把手举过头时，肩胛骨也要随之转动。',
      synergy:rel('Serratus anterior · 前锯肌','举手过头时，前锯肌配合斜方肌上、下部，使肩胛骨上回旋，让关节盂朝向上方。'),
      antagonist:rel('Rhomboids · 菱形肌','若只看肩胛旋转，菱形肌的下回旋与上回旋相反；若看后缩，它却与斜方肌中部合作。')
    },
    latissimus: {
      en:'Latissimus dorsi', zh:'背阔肌', group:'Back', view:'back',
      fn:'从高处把上臂拉向身体两侧时，背阔肌参与肩内收。它也能使上臂向后伸展和向内旋转，但不直接弯曲手肘。',
      clue:'Latissimus 是「最宽的」，dorsi 是「背部的」。英语口语 lats，指的就是这对背部大肌肉。',
      synergy:rel('Posterior deltoid · 三角肌后束','划船时，后束可协助背阔肌让上臂向后。肱二头肌则在肘关节完成另一部分动作。','deltoid'),
      antagonist:rel('Middle deltoid · 三角肌中束','在肩内收／外展这个方向，三角肌中束抬开上臂，与背阔肌的内收相反。','deltoid')
    },
    rectus: {
      en:'Rectus abdominis', zh:'腹直肌', group:'Trunk', view:'front',
      fn:'卷起上半身时，它使胸廓和骨盆前侧靠近，形成躯干屈曲。保持身体不向后仰时，它也能在几乎不改变长度的情况下出力。',
      clue:'Rectus 是「直的」，abdominis 是「腹部的」。腹前壁的纤维沿身体长轴排列。',
      synergy:rel('External oblique · 腹外斜肌','左右腹外斜肌同时收缩时，能与腹直肌一起使躯干向前屈。','obliques'),
      antagonist:rel('Erector spinae · 竖脊肌群','比较屈伸方向：竖脊肌群双侧共同收缩可伸展脊柱，与躯干屈曲相反。')
    },
    obliques: {
      en:'External oblique', zh:'腹外斜肌', group:'Trunk', view:'front',
      fn:'骨盆固定，向左转胸口时，右侧腹外斜肌可以参与发力。左右两侧同时工作时，则可帮助屈曲躯干和压缩腹部。',
      clue:'External 是「外层」，oblique 是「斜」。它的纤维像双手从身体两侧斜插进前裤袋。',
      synergy:rel('Internal oblique · 腹内斜肌','同一次左转，右侧腹外斜肌与左侧腹内斜肌合作。注意它们位于身体的两侧。'),
      antagonist:rel('Opposite external oblique · 对侧腹外斜肌','比较转体方向：左侧腹外斜肌偏向使躯干右转，与上述左转相反。')
    },
    gluteus: {
      en:'Gluteus maximus', zh:'臀大肌', group:'Hip', view:'back',
      fn:'从坐位站起来时，臀大肌把屈曲的髋伸直；它也能使大腿在髋关节向外旋转。',
      clue:'Gluteal 指臀部，maximus 是「最大的」。英语训练口令 squeeze your glutes 说的是臀肌群。',
      synergy:rel('Hamstrings · 腘绳肌','从髋铰链姿势起身，跨髋的腘绳肌与臀大肌共同伸髋。','hamstrings'),
      antagonist:rel('Iliopsoas · 髂腰肌','大腿向躯干抬起是屈髋，髂腰肌的这一作用与臀大肌的伸髋相反。')
    },
    quadriceps: {
      en:'Quadriceps femoris', zh:'股四头肌', group:'Thigh', view:'front',
      fn:'坐着把小腿向前踢直，膝关节伸展。大腿前侧四个组成部分都能伸膝，只有股直肌还跨过髋关节。',
      clue:'Quadri- 是「四」，femoris 指大腿。常听到的 quads 就是这组伸膝肌。',
      synergy:rel('Gluteus maximus · 臀大肌','在深蹲起身这个整体任务中，两组肌肉分工：股四头肌伸膝，臀大肌伸髋。臀大肌不直接伸膝。','gluteus'),
      antagonist:rel('Hamstrings · 腘绳肌','只比较膝关节，腘绳肌使膝盖弯曲，与股四头肌的伸膝作用相反。','hamstrings')
    },
    hamstrings: {
      en:'Hamstrings', zh:'腘绳肌群', group:'Thigh', view:'back',
      fn:'它们位于大腿后侧，可弯曲膝盖。半腱肌、半膜肌、股二头肌长头还跨过髋部，能够伸髋；股二头肌短头不跨髋。',
      clue:'Hamstrings 是一组肌肉的合称，不是单独一根肌腱。记位置：大腿后侧、膝盖上方。',
      synergy:rel('Gluteus maximus · 臀大肌','罗马尼亚硬拉站起时，跨髋的腘绳肌和臀大肌一同产生伸髋力矩。','gluteus'),
      antagonist:rel('Quadriceps femoris · 股四头肌','就膝关节而言，腘绳肌弯曲膝盖，股四头肌把膝盖伸直。','quadriceps')
    },
    gastrocnemius: {
      en:'Gastrocnemius', zh:'腓肠肌', group:'Calf', view:'back',
      fn:'站着踮脚，脚跟离地，踝关节做跖屈。腓肠肌经跟腱牵拉跟骨，两头还跨过膝关节，能协助屈膝。',
      clue:'训练中常说的 calf 是小腿肚区域；gastrocnemius 特指表面轮廓明显的这块肌肉。',
      synergy:rel('Soleus · 比目鱼肌','踮脚时，深层的比目鱼肌与腓肠肌都参与跖屈。与腓肠肌不同，比目鱼肌不跨膝。'),
      antagonist:rel('Tibialis anterior · 胫骨前肌','脚跟留在地面、抬起前脚掌是背屈，与踮脚时的踝跖屈相反。')
    }
  };
  const exercises = {
    bench: {
      en:'Bench press', zh:'杠铃卧推', view:'front', focus:'pectoralis', primary:['pectoralis'], secondary:['triceps','deltoid'], stabilizer:['trapezius'],
      phases:[phase('concentric','Press','推起','上臂向胸前合拢，同时手肘伸直。前者主要由胸大肌完成，后者由肱三头肌完成。'),phase('eccentric','Lower','下放','手肘逐渐弯曲、上臂打开，胸大肌和伸肘肌群带着张力延长，使杠铃受控地靠近胸部。')],
      note:'关注上臂和前臂如何分工：胸大肌不跨肘；斜方肌中部等帮助维持肩胛位置。'
    },
    pullup: {
      en:'Pull-up', zh:'正握引体向上', view:'back', focus:'latissimus', primary:['latissimus'], secondary:['biceps'], stabilizer:['rectus','obliques'],
      phases:[phase('concentric','Pull','拉起','双手固定在杠上，肘逐渐弯曲，上臂向躯干靠近。这里是躯干靠近固定的手，而不是把杠拉下来。'),phase('eccentric','Lower','下降','肩与肘沿原路径打开；背阔肌和屈肘肌群仍在出力，控制身体下降。')],
      note:'肱二头肌参与屈肘，但不是唯一的屈肘肌；腹壁稳定躯干、减少摆动。'
    },
    squat: {
      en:'Back squat', zh:'杠铃背蹲', view:'front', focus:'quadriceps', primary:['quadriceps','gluteus'], secondary:[], stabilizer:['obliques','rectus'],
      phases:[phase('eccentric','Descend','下蹲','髋与膝一起弯曲，杠铃随身体下降。伸膝肌群在延长中控制下蹲，不等于停止发力。'),phase('concentric','Stand','起身','膝和髋逐渐伸直。股四头肌负责伸膝，臀大肌参与伸髋，腹壁帮助维持躯干姿态。')],
      note:'另有内收大肌等参与伸髋。图上只标出本图谱收录的代表肌群，不是完整参与名单。'
    },
    rdl: {
      en:'Romanian deadlift', zh:'罗马尼亚硬拉', view:'back', focus:'hamstrings', primary:['hamstrings','gluteus'], secondary:[], stabilizer:['latissimus','obliques'],
      phases:[phase('eccentric','Hinge','髋部折叠','从站立开始，髋向后移、膝保持微屈，杠铃贴近腿下降；跨髋的腘绳肌在张力下延长。'),phase('concentric','Extend','伸髋站起','腘绳肌与臀大肌产生伸髋力矩，骨盆和躯干回到站立位置；不是靠弯肘抬杠。')],
      note:'主要观察髋角变化。背阔肌帮助杠靠近身体，竖脊肌和腹壁共同稳定躯干。'
    },
    ohp: {
      en:'Overhead press', zh:'站姿杠铃推举', view:'front', focus:'deltoid', primary:['deltoid','triceps'], secondary:['trapezius'], stabilizer:['rectus','gluteus'],
      phases:[phase('concentric','Press','推过头顶','杠从肩前上行。上臂抬起、手肘伸直，肩胛骨随之上回旋，让手能到达头顶。'),phase('eccentric','Return','降回肩前','手肘逐渐弯曲，上臂回落。三角肌和肱三头肌控制回程，而不是突然卸力。')],
      note:'区分三个部位：三角肌抬上臂，肱三头肌伸肘，斜方肌配合前锯肌转动肩胛骨。'
    },
    row: {
      en:'Bent-over row', zh:'杠铃俯身划船', view:'back', focus:'latissimus', primary:['latissimus','trapezius'], secondary:['biceps','deltoid'], stabilizer:['hamstrings','gluteus'],
      phases:[phase('concentric','Row','向躯干拉起','在俯身位置，手肘向后移动并弯曲，肩胛骨向脊柱靠拢。背阔肌作用于肩，斜方肌中部参与肩胛后缩。'),phase('eccentric','Reach','受控放回','手肘逐渐伸直，肩胛骨受控地向外移动；髋角和躯干角度相对保持。')],
      note:'图中三角肌表示参与肩伸的后束。躯干由竖脊肌、腹壁等稳定，臀肌和腘绳肌协助保持髋部位置。'
    }
  };
  const sources = [
    {name:'OpenStax · 腹壁与胸廓',url:'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-4-axial-muscles-of-the-abdominal-wall-and-thorax'},
    {name:'OpenStax · 肩带与上肢',url:'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-5-muscles-of-the-pectoral-girdle-and-upper-limbs'},
    {name:'OpenStax · 骨盆带与下肢',url:'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs'},
    {name:'ACE · 动作资料库',url:'https://www.acefitness.org/resources/everyone/exercise-library/'},
    {name:'CSCCa · 髋铰链与罗马尼亚硬拉',url:'https://www.cscca.org/content.aspx?club_id=408309&module_id=732309&page_id=22'}
  ];
  window.AnatomyLessons = {muscles, exercises, sources};
})();
