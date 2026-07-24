/* ────────────────────────────────────────────────────────────
   Project content. Edit here — index.html renders from this.

   PROJECTS  → cards in the "Projects" grid
   GAMES     → thumbnails in the scrolling gallery

   art / cover : CSS class defined in index.html (.art-* / .g1–.g6)
                 — used only while `images` is empty
   dir         : image folder for this project
   link        : optional {label, url} shown as a button in the popup
   video       : optional clip inside `dir`. Takes over the card cover and the
                 popup hero (autoplay, muted, looped). `poster` is its still frame.
   images      : file names inside `dir`. First one becomes the card cover,
                 the rest show as thumbnails in the popup. Leave [] to keep
                 the generated CSS art.
   summary     : short text on the card
   detail      : full text shown in the popup
   ──────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    art: 'art-gs',
    dir: 'img/projects/gs-editor/',
    media: [                                             // 상세창 썸네일 순서 (첫 항목이 커버)
      { video: 'gs-editor.mp4',   poster: 'gs-editor-poster.jpg' },
      { video: 'gs-editor-3.mp4', poster: 'gs-editor-3-poster.jpg' },
      { video: 'point-selection.mp4', poster: 'point-selection-poster.jpg' },
      { video: 'gs-editor-2.mp4', poster: 'gs-editor-2-poster.jpg' },
    ],
    links: [
      { label: 'Live demo', url: 'https://sfacstudio-viewer.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/sfacspace/sfacstudio-viewer' },
    ],
    title: 'Web-Based Real-Time 3D/4D Gaussian Splatting Editor',
    role: 'R&D Researcher, Computer Vision · SFACSPACE · 2026',
    summary: 'A browser-based 3D/4D Gaussian Splatting editor with point-level editing, camera animation, and real-time shader relighting.',
    detail:
      'A trained Gaussian Splatting capture is millions of unordered splats with no mesh and no ' +
      'handle to grab. This browser-based editor turns that raw output into something you can ' +
      'work with — clean it, relight it, and film it. We built it on WebGL so a capture opens in ' +
      'a link rather than an install, which is what lets a client review a scene the same day it ' +
      'is shot.\n\n' +
      'Working in a four-person team, I owned the editing, camera, and lighting stages. For ' +
      'editing I built the selection tools — a 2D screen-space brush and 3D box/sphere volumes — ' +
      'that let noise and stray floating splats be removed directly on the model. For camera I ' +
      'built keyframed markers interpolated into a path, doubling as the timeline that scrubs 4D ' +
      'playback. And I implemented shader-based real-time relighting for both 3D and 4D splats, ' +
      'shading each splat at draw time against point lights and HDRI so a capture can be re-lit ' +
      'live in the browser — holding 60 FPS on scenes of over a million splats.\n\n' +
      'Relighting a splat scene is an approximation by nature: the original lighting is already ' +
      'baked into each splat\'s colour, and splats have no true surface normal. I estimate ' +
      'normals offline from local neighbourhoods and carry a confidence value per splat, so ' +
      'shading can lean on geometry where it is trustworthy and fall back where it is not. It ' +
      'reads convincingly for soft and ambient light; strong directional relighting on a harshly ' +
      'lit capture is still beyond what this approach can do honestly.',
    tags: ['Gaussian Splatting', 'Real-Time Rendering', 'Shading', 'Relighting', 'WebGL'],
  },
  {
    art: 'art-lidar',
    dir: 'img/projects/lidar-fusion/',
    video: 'fusion-3dgs.mp4',          // COLMAP: 917 frames · 4.6M points
    poster: 'fusion-3dgs-poster.jpg',
    title: 'LiDAR–360° Camera Fusion Pipeline for 3DGS',
    role: 'R&D Researcher, Computer Vision · SFACSPACE · 2026',
    summary: 'End-to-end pipeline fusing LiDAR and a 360° camera into 3DGS / SLAM inputs, with custom calibration and time-synchronization tools.',
    detail:
      'Photorealistic reconstruction needs accurate geometry and dense colour, and no single ' +
      'sensor gives both. Pairing a Livox MID-360 LiDAR with an Insta360 X5, I built the ' +
      'pipeline that fuses their two independent recordings into one calibrated, time-aligned ' +
      'dataset for SLAM and Gaussian Splatting. I was the sole engineer on the pipeline, working ' +
      'alongside the team member who ran the capture rig.\n\n' +
      'I built the image path and the calibration behind it. A 360° camera records one warped ' +
      'spherical image, which no standard reconstruction tool can use directly, so each frame is ' +
      'unwrapped into six flat perspective views — cube faces — and every face is treated as its ' +
      'own ordinary pinhole camera. I recovered each face\'s intrinsics from checkerboards and ' +
      'validated them against the values a cube projection should mathematically produce, ' +
      'landing at 0.99 px reprojection error, then solved the LiDAR-to-camera extrinsics against ' +
      'the 3.7-million-point cloud.\n\n' +
      'The two devices also keep separate clocks and cannot be hardware-triggered together, so I ' +
      'designed a shake-based sync method: a deliberate shake at the start of every take leaves ' +
      'a signature in both the IMU trace and the video, and matching the two fixes the offset so ' +
      'every frame pairs with its nearest LiDAR scan. I packaged the whole thing as a ' +
      'containerised tool that merges the two recordings and outputs rectified images, camera ' +
      'poses, and a registered point cloud — exactly what the downstream stages ingest.',
    tags: ['Sensor Fusion', 'Calibration', 'Time Sync', 'SLAM', '3D Reconstruction'],
  },
  {
    art: 'art-tcn',
    dir: 'img/projects/tcn-sports/',
    link: { label: 'Demo video', url: 'https://youtu.be/-o-8sM5wLj8' },
    title: 'Real-Time Immersive Sports Game Based on TCN',
    role: 'Team Leader / AI Developer · Senior Capstone Project · 2025',
    summary: 'A badminton simulator that reads your swing from a single webcam. Led the AI pipeline end to end — labeling, training, real-time inference.',
    detail:
      'The goal: swing a real racket and have the game recognise the stroke in real time, from ' +
      'one webcam and no GPU. We tried an IMU sensor on the racket first and abandoned it to ' +
      'noise and latency. As team leader of a five-person team I designed the architecture and ' +
      'built the recognition pipeline end to end.\n\n' +
      'From MediaPipe pose landmarks I kept the six joints that carry a swing and turned them ' +
      'into a 16-dimensional feature — positions, velocities, accelerations, angles — normalised ' +
      'against the torso so body size and distance stop mattering, then segmented the stream ' +
      'into fixed clips centred on the wrist-speed peak. A Temporal Convolutional Network of ' +
      'dilated convolutions classifies each clip into five strokes plus idle.\n\n' +
      'I also built the labelling tool and a 2,000-swing dataset from 40 videos, split at the ' +
      'video level so no clip from a recording could appear in both training and testing — ' +
      '0.980 macro F1 on held-out recordings, meaning it was near-perfect on people and sessions ' +
      'it had never seen. I exported the model to ONNX to run inside Unity on CPU and stream ' +
      'over UDP. It was the project\'s core AI output and won the Grand Prize at the 2025 Winter ' +
      'Capstone Design Competition.',
    tags: ['Pose Estimation', 'Action Recognition', 'Time-Series', 'Real-Time Inference', 'Dataset Design'],
  },
];

const GAMES = [
  {
    cover: 'g1',
    dir: 'img/games/attis/',
    title: 'ATTIS',
    meta: 'Unity · Team Leader / PM · Game Design',
    year: '2024–2026',
    badge: '2024–26',
    link: { label: 'Play on itch.io', url: 'https://potatoteam.itch.io/attis' },
    detail:
      'A defence game where you never attack and never control the character you protect. ' +
      'Aetheris moves toward your light; you guide him, spark him to react, and shield him while ' +
      'he revives the dying. Save ten to clear a stage — and if he falls, a creature you already ' +
      'saved is sacrificed to bring him back.\n\n' +
      'I was team leader and lead designer of a seven-person team, responsible for the story, the ' +
      'emotional direction, and the system balance. I made the assistive cursor control the core ' +
      'verb — harder to build than direct control, but it is what makes the player a guardian ' +
      'rather than a pilot — directed the camera as a mood tool storyboarded in Figma, and drove ' +
      'the character\'s art direction with the artists. When two members left early, I rebuilt ' +
      'the team on fixed deadlines, weekly reviews, and one-on-ones.',
  },
  {
    cover: 'g2',
    dir: 'img/games/ddang/',
    title: 'DDANG! DDANG! DDANG!',
    meta: 'Unreal Engine · Team Leader / PM · Game Design · Systems',
    year: '2025',
    detail:
      'Whack-a-mole where the mole plays too. Two players share one keyboard and a split screen ' +
      '— farmer versus mole — and neither can see the other\'s half, so the information gap is ' +
      'the whole game.\n\n' +
      'As team leader I owned the game design, the system design, and the UI. I built the ' +
      'split-screen local multiplayer on Unreal so the asymmetry comes from the camera rather ' +
      'than from rules, and designed every item against two axes — disrupt the opponent, or ' +
      'adjust risk — balancing them by cooldown rather than power to hold a steady tempo while ' +
      'still allowing sudden reversals. The whole design targets local play: short, loud rounds ' +
      'where you read the person beside you.',
  },
  {
    cover: 'g3',
    dir: 'img/games/grow-my-farm/',
    title: 'Grow My Farm',
    meta: 'Web · Game Design · PM · UI',
    year: '2025',
    link: { label: 'Play', url: 'https://farminglog.farmsystem.kr/game' },
    detail:
      'A slow, decorative farming sim built into a software club\'s website — plant once a day, ' +
      'harvest, and make a quarter-view plot your own. Paced to reward a two-minute visit, not a ' +
      'session.\n\n' +
      'I joined after the project had broken — its planner was new to specs and the PM had left ' +
      '— and took it over as lead designer, PM, and UI designer. Before any feature I rebuilt the ' +
      'scaffolding: a Notion workspace, written dev conventions, separate art and dev specs, ' +
      'Figma UI flows, weekly sprints. I produced the UI assets myself, and when the game ' +
      'shipped with no tutorial and nobody played, I designed a visual detail page that showed ' +
      'the whole loop in one scroll — lifting play among members from 12% to 65%.',
  },
  {
    cover: 'g4',
    dir: 'img/games/cats-meow/',
    title: "Cat's Meow",
    meta: 'Unity · Team Leader / PM · Game Design · Art · Dev',
    year: '2024',
    detail:
      'You are the cat, stealing a treat across the house while the human cleans up after your ' +
      'mess. Knock something over, slip through the gap it creates, and reach the box before the ' +
      'timer runs out. The cat is the strategist; the human is the obstacle.\n\n' +
      'As team leader I was my three-person team\'s only designer, artist, and third developer ' +
      'alongside two programmers — I designed the game, drew its art, and wrote gameplay code. I ' +
      'made the mess mechanic the strategic core: knocking things over is instinctive, but doing ' +
      'it too often teaches the human your pattern, turning a joke into a risk budget. I designed ' +
      'three stages that escalate through material, from quiet cushions to breakable dishes to a ' +
      'room with nowhere to hide. It placed first in both peer and professor evaluation.',
  },
  {
    cover: 'g5',
    dir: 'img/games/voidlight/',
    title: 'Voidlight',
    meta: 'Unity · Scenario & Game Design · 48h Jam',
    year: '2024',
    detail:
      'A man wakes in the dark without his name. Voidlight is an interactive story about ' +
      'recovering three fragments of an identity across the rooms of a life — built in 48 hours ' +
      'for a game jam.\n\n' +
      'I was the scenario and game designer, owning the story and structure. My goal was to make ' +
      'the player feel a memory rather than read one: nothing is exposition — each fragment is ' +
      'recovered by handling objects, and lighting, colour, and sound brighten with what is ' +
      'remembered, so progress reads without a single UI element. I scripted the emotional beats ' +
      'and cutscene timing, documented the flow so developers could build it inside a jam, and ' +
      'mediated between developers and artists to keep the emotional intent intact. Drawn from ' +
      'the real death of a firefighter on duty, it was praised as short but lasting.',
  },
  {
    cover: 'g6',
    dir: 'img/games/flux/',
    title: 'FluX',
    meta: 'Unity · Team Leader / PM · Game Design · Art',
    year: '2024',
    link: { label: 'Play', url: 'https://mandlemandle.com/project/flux/game' },
    detail:
      'An arcade game that changes how you control it every ten seconds — runner, then mouse, ' +
      'then shooter — so it never settles into muscle memory. Fuel doubles as health, and ' +
      'bullets caught while dodging are what you fire at the boss.\n\n' +
      'My first competition and first team project. As team leader I owned the game design and, ' +
      'with no artist on the team, produced all of its art myself — UI and UX in Figma, ' +
      'characters and backgrounds in Illustrator, on a minimal geometric system. It was where I ' +
      'learned what a spec is for: my first one left developers guessing, so I redrew the systems ' +
      'as algorithm flowcharts and broke every feature down to something readable straight into ' +
      'code. FluX placed 1st in the judging round and 3rd in user score.',
  },
];