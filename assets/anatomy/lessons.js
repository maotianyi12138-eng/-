/* Names in the secondary display slot are common English names. A relation describes
   one joint action, not a permanent pairing, and a highlight is not an EMG reading. */
(() => {
  'use strict';
  const rel = (label, explanation, target = null) => ({label, explanation, target});
  const phase = (kind, en, zh, text) => ({kind, en, zh, text});
  const muscles = {
    pectoralis: {
      en:'Pectoralis major', zh:'Pecs', group:'Chest', view:'front',
      fn:'Wrap your arms around a wide tree. Your upper arms sweep across the front of your chest: horizontal adduction at the shoulder. The pecs can also turn the upper arms inward.',
      clue:'Pectoral means “of the chest”; major means “larger.” Pecs is simply the gym-floor shorthand.',
      synergy:rel('Anterior deltoid','During a bench press, the front deltoid helps the pecs carry the upper arm across the chest. Straightening the elbow is a separate job.','deltoid'),
      antagonist:rel('Posterior deltoid','With the arm at shoulder height, the rear deltoid can take it backward, opening the arc that the pecs close.','deltoid')
    },
    deltoid: {
      en:'Deltoid', zh:'Delts', group:'Shoulder', view:'front',
      fn:'The shoulder cap has three parts. Its front fibres lift the upper arm forward, its middle fibres lift it out to the side, and its rear fibres draw it back.',
      clue:'Think of the Greek letter delta, a triangle. The deltoid narrows from a broad shoulder cap to a point on the upper arm.',
      synergy:rel('Supraspinatus','Both muscles help lift the upper arm out to the side. Supraspinatus sits above the spine of the shoulder blade.'),
      antagonist:rel('Latissimus dorsi','For this sideways lift, the lats can reverse the movement, bringing the upper arm back to the ribs.','latissimus')
    },
    biceps: {
      en:'Biceps brachii', zh:'Biceps', group:'Arm', view:'front',
      fn:'Turn your palm up, then bend your elbow to lift a bowl. The biceps helps with both actions: rotating the forearm palm-up and bending the elbow.',
      clue:'Bi- means two; brachii means “of the arm.” The two heads are two starting points for one muscle.',
      synergy:rel('Brachialis','This muscle lies beneath the biceps. It helps bend the elbow without turning the palm up.'),
      antagonist:rel('Triceps brachii','Biceps bends the elbow and triceps straightens it. Both can also contract together to hold the joint steady.','triceps')
    },
    triceps: {
      en:'Triceps brachii', zh:'Triceps', group:'Arm', view:'back',
      fn:'Push a heavy door open. As the elbow straightens, all three heads at the back of your upper arm contribute. The long head also crosses the shoulder and can draw the arm backward.',
      clue:'Tri- means three. Pair it with bi-: triceps at the back to straighten the elbow, biceps at the front to bend it.',
      synergy:rel('Anconeus','This small muscle behind the elbow assists the triceps when the forearm straightens.'),
      antagonist:rel('Biceps brachii','At the elbow, the biceps draws the forearm toward the upper arm, the opposite direction to extension.','biceps')
    },
    trapezius: {
      en:'Trapezius', zh:'Traps', group:'Upper back', view:'back',
      fn:'Shrugging, drawing the shoulder blades together and reaching overhead use different parts of this broad muscle. Its upper and lower fibres work together to turn the shoulder blade upward.',
      clue:'A shrug is only one clue to the traps. Watch a shoulder blade turn as the arm rises overhead: that is the same muscle playing a different part.',
      synergy:rel('Serratus anterior','During an overhead reach, serratus anterior works with the upper and lower traps to turn the shoulder socket upward.'),
      antagonist:rel('Rhomboids','The rhomboids rotate the shoulder blade downward, opposing upward rotation. Yet they work alongside the middle traps when the blades draw together.')
    },
    latissimus: {
      en:'Latissimus dorsi', zh:'Lats', group:'Back', view:'back',
      fn:'Reach up, then draw your upper arm down toward your ribs. The lats help bring the arm in, sweep it backward and turn it inward. They do not cross the elbow.',
      clue:'Latissimus means “widest”; dorsi means “of the back.” The familiar nickname is lats.',
      synergy:rel('Posterior deltoid','In a row, the rear deltoid helps the lats draw the upper arm backward. The biceps handles part of the pull at the elbow.','deltoid'),
      antagonist:rel('Middle deltoid','At the shoulder, the middle deltoid takes the arm out to the side, opposing the inward pull of the lats.','deltoid')
    },
    rectus: {
      en:'Rectus abdominis', zh:'Six-pack muscle', group:'Trunk', view:'front',
      fn:'As you curl your trunk, this pair of long muscles draws the front of the rib cage and pelvis closer. It can also work without visible motion, resisting a backward arch.',
      clue:'Rectus means “straight.” Follow the vertical run of the fibres rather than the horizontal grooves of a six-pack.',
      synergy:rel('External obliques','When both sides contract together, the external obliques help rectus abdominis curl the trunk forward.','obliques'),
      antagonist:rel('Erector spinae','On either side of the spine, these muscles can pull the trunk into extension, opposing the forward curl.')
    },
    obliques: {
      en:'External oblique', zh:'Outer obliques', group:'Trunk', view:'front',
      fn:'Keep the pelvis still and turn your chest to the left. The right external oblique helps make that turn. Both sides together can bend the trunk forward and compress the abdomen.',
      clue:'External means outer; oblique means slanting. Most fibres slope down and inward like your fingers sliding into front trouser pockets.',
      synergy:rel('Internal oblique','To turn left, the right external oblique teams up with the left internal oblique. The pair works across the body.'),
      antagonist:rel('Opposite external oblique','With the pelvis fixed, the left external oblique turns the chest to the right, opposing the left turn described above.')
    },
    gluteus: {
      en:'Gluteus maximus', zh:'Glute max', group:'Hip', view:'back',
      fn:'As you rise from a chair, this muscle opens the angle between trunk and thigh. This is hip extension. It can also rotate the thigh outward at the hip.',
      clue:'Maximus means “largest.” Glute max names one muscle; glutes usually refers to a family of muscles.',
      synergy:rel('Hamstrings','When you stand out of a hip hinge, the hamstrings that cross the hip help glute max extend it.','hamstrings'),
      antagonist:rel('Iliopsoas','Lifting a thigh toward the trunk bends the hip. Iliopsoas produces that motion, opposing hip extension.')
    },
    quadriceps: {
      en:'Quadriceps femoris', zh:'Quads', group:'Thigh', view:'front',
      fn:'Sit down and straighten one knee. All four parts of the quadriceps can produce that movement. Only one, rectus femoris, also crosses the hip.',
      clue:'Quadri- means four; femoris means “of the thigh.” Quads is the everyday name for this group on the front of the thigh.',
      synergy:rel('Gluteus maximus','Watch a squat from the side: the quads open the knee while glute max opens the hip. They share the task, not the same joint action.','gluteus'),
      antagonist:rel('Hamstrings','At the knee, the hamstrings bend the lower leg back, opposite to the extension produced by the quads.','hamstrings')
    },
    hamstrings: {
      en:'Hamstrings', zh:'Back of thigh', group:'Thigh', view:'back',
      fn:'These muscles bend the knee. Semitendinosus, semimembranosus and the long head of biceps femoris also extend the hip. The short head of biceps femoris crosses the knee only.',
      clue:'Hamstrings is a group name, not a single tendon. For a landmark, start at the back of the thigh, just above the knee.',
      synergy:rel('Gluteus maximus','During the rise in a Romanian deadlift, the hamstrings that cross the hip join glute max to bring the body upright.','gluteus'),
      antagonist:rel('Quadriceps femoris','At the knee, the quads straighten the leg while the hamstrings bend it.','quadriceps')
    },
    gastrocnemius: {
      en:'Gastrocnemius', zh:'Surface calf muscle', group:'Calf', view:'back',
      fn:'Rise onto your toes. Gastrocnemius pulls through the Achilles tendon to lift the heel, an action called plantar flexion. Its two heads also cross the knee and can help bend it.',
      clue:'Calf names the whole area; gastrocnemius names the muscle making the two visible bulges high on the back of the lower leg.',
      synergy:rel('Soleus','Soleus sits beneath gastrocnemius and also helps lift the heel. Unlike gastrocnemius, it does not cross the knee.'),
      antagonist:rel('Tibialis anterior','Keeping the heel down and lifting the forefoot is dorsiflexion: the opposite ankle action to rising onto the toes.')
    }
  };
  const exercises = {
    bench: {
      en:'Barbell bench press', zh:'Bench press', view:'front', focus:'pectoralis', primary:['pectoralis'], secondary:['triceps','deltoid'], stabilizer:['trapezius'],
      phases:[phase('concentric','Press','From chest to arms extended','The upper arms sweep together as the elbows straighten. The pecs help drive the shoulder motion; the triceps extend the elbows.'),phase('eccentric','Lower','Return toward the chest','The elbows bend and the upper arms open. The pecs and triceps lengthen under tension to control the bar on its return.')],
      note:'Follow the upper arm and forearm separately. The pecs do not cross the elbow; the middle traps help hold the shoulder blades against the bench.'
    },
    pullup: {
      en:'Overhand pull-up', zh:'Pull-up', view:'back', focus:'latissimus', primary:['latissimus'], secondary:['biceps'], stabilizer:['rectus','obliques'],
      phases:[phase('concentric','Pull','Raise the torso','The hands stay on the bar while the elbows bend and the upper arms approach the ribs. Here the body moves toward the hands.'),phase('eccentric','Lower','Return to the hang','As the elbows straighten and the arms return overhead, the lats and elbow flexors resist gravity to control the descent.')],
      note:'The biceps is one of several elbow flexors in a pull-up. The abdominal wall helps steady the trunk and limit swinging.'
    },
    squat: {
      en:'Barbell back squat', zh:'Back squat', view:'front', focus:'quadriceps', primary:['quadriceps','gluteus'], secondary:[], stabilizer:['obliques','rectus'],
      phases:[phase('eccentric','Descend','Fold at hips and knees','The bar travels down with the torso as the hips and knees bend. The knee extensors stay active while they lengthen under load.'),phase('concentric','Stand','Open the hips and knees','The quads straighten the knees while glute max helps extend the hips. The abdominal wall helps maintain the shape of the trunk.')],
      note:'The adductor magnus also helps extend the hip. The coloured regions are a selection of contributors, not a complete list.'
    },
    rdl: {
      en:'Romanian deadlift', zh:'RDL', view:'back', focus:'hamstrings', primary:['hamstrings','gluteus'], secondary:[], stabilizer:['latissimus','obliques'],
      phases:[phase('eccentric','Hinge','Send the hips back','The knees stay slightly bent as the hips move backward and the bar travels down close to the legs. The hamstrings crossing the hip lengthen under tension.'),phase('concentric','Extend','Bring the hips forward','The hamstrings and glute max extend the hips to bring the torso upright. The arms carry the bar rather than curling it upward.')],
      note:'Watch the hip angle change. The lats help keep the bar close; the spinal extensors and abdominal wall help hold the trunk steady.'
    },
    ohp: {
      en:'Standing overhead press', zh:'Overhead press', view:'front', focus:'deltoid', primary:['deltoid','triceps'], secondary:['trapezius'], stabilizer:['rectus','gluteus'],
      phases:[phase('concentric','Press','From shoulders to overhead','The upper arms lift, the elbows extend and the shoulder blades turn upward as the bar travels overhead.'),phase('eccentric','Return','Lower to the shoulders','The elbows bend as the upper arms lower. The deltoids and triceps stay under tension to control the return.')],
      note:'Three actions, three jobs: deltoids lift the upper arms, triceps extend the elbows, and the traps work with serratus anterior to rotate the shoulder blades.'
    },
    row: {
      en:'Bent-over barbell row', zh:'Bent-over row', view:'back', focus:'latissimus', primary:['latissimus','trapezius'], secondary:['biceps','deltoid'], stabilizer:['hamstrings','gluteus'],
      phases:[phase('concentric','Row','Draw the elbows back','With the torso angled forward, the elbows bend and travel behind the body. The lats move the upper arms while the middle traps draw the shoulder blades together.'),phase('eccentric','Reach','Release the arms forward','The elbows straighten and the shoulder blades can glide apart. The hips and torso keep about the same angle throughout.')],
      note:'The rear fibres are the part of the deltoid that helps draw the upper arm back. Glutes and hamstrings help hold the hip hinge while the trunk muscles hold the spine.'
    }
  };
  const sources = [
    {name:'OpenStax · Abdominal wall and thorax',url:'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-4-axial-muscles-of-the-abdominal-wall-and-thorax'},
    {name:'OpenStax · Shoulder girdle and upper limbs',url:'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-5-muscles-of-the-pectoral-girdle-and-upper-limbs'},
    {name:'OpenStax · Pelvic girdle and lower limbs',url:'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs'},
    {name:'ACE · Exercise library',url:'https://www.acefitness.org/resources/everyone/exercise-library/'},
    {name:'CSCCa · The barbell Romanian deadlift',url:'https://www.cscca.org/content.aspx?club_id=408309&module_id=732309&page_id=22'}
  ];
  window.AnatomyLessons = {muscles, exercises, sources};
})();
