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
    title: 'Web-Based Real-Time 3D/4D Gaussian Splatting Editor',
    role: 'R&D Researcher, CV · SFACSPACE · 2026',
    summary: 'A browser-based 3D/4D Gaussian Splatting viewer with point-level editing, camera animation, and real-time shader relighting.',
    detail:
      'A trained Gaussian Splatting capture has millions of unstructured points and no handles. ' +
      'This viewer gives it an editor — inspect, clean, animate, and export a 3D or 4D splat ' +
      'in the browser.\n\n' +
      'As an R&D researcher on the CV team I built the editing and camera side: a 2D brush and ' +
      '3D box/sphere volumes for removing stray splats, and keyframed camera markers ' +
      'interpolated into paths that drive 4D playback along a timeline. I also implemented ' +
      'shader-based real-time relighting with point lights and HDRI, so a capture can be re-lit ' +
      'interactively — all in WebGL, no plugin, no desktop build.',
    tags: ['Gaussian Splatting', 'Real-Time Rendering', 'Shading', 'Relighting', 'WebGL'],
  },
  {
    art: 'art-lidar',
    dir: 'img/projects/lidar-fusion/',
    video: 'fusion-3dgs.mp4',          // COLMAP: 917 frames · 4.6M points
    poster: 'fusion-3dgs-poster.jpg',
    title: 'LiDAR–360° Camera Fusion Pipeline for 3DGS',
    role: 'R&D Researcher, CV · SFACSPACE · 2026',
    summary: 'End-to-end pipeline fusing LiDAR and a 360° camera into 3DGS / SLAM inputs, with custom calibration and time-synchronization tools.',
    detail:
      'Photorealistic reconstruction needs accurate geometry and dense colour, which rarely ' +
      'arrive together. We paired a Livox MID-360 with an Insta360 X5, and I built the pipeline ' +
      'that turns two unrelated recordings into one time-aligned dataset.\n\n' +
      'On the image side, equirectangular footage is projected into cube faces and then a ' +
      'pinhole view per face. On the fusion side, an anchor-based scheme reconciles a 10 Hz ' +
      'LiDAR stream with 30 Hz video using a shared clock and a physical shake marker. I also ' +
      'developed the calibration tools it depends on — per-face intrinsics validated against ' +
      'their theoretical values, and LiDAR-to-camera extrinsics refined against the point ' +
      'cloud. Output feeds SLAM and 3DGS training directly.',
    tags: ['Sensor Fusion', 'Calibration', 'Time Sync', 'SLAM', '3D Reconstruction'],
  },
  {
    art: 'art-tcn',
    dir: 'img/projects/tcn-sports/',
    link: { label: 'Demo video', url: 'https://youtu.be/-o-8sM5wLj8' },
    title: 'Real-Time Immersive Sports Game Based on TCN',
    role: 'Team Lead / AI Developer · Capstone Design · 2026',
    summary: 'A badminton simulator that reads your swing from a single webcam. Led the AI pipeline end to end — labeling, training, real-time inference.',
    detail:
      'Play badminton against an AI using nothing but a webcam. We tried the hardware route ' +
      'first — an IMU taped to a racket — and abandoned it once noise and latency made ' +
      'real-time response impossible.\n\n' +
      'As team lead I designed the architecture and built the recognition system. MediaPipe ' +
      'tracks the body without a GPU; six key joints become a 16-dimensional feature sequence, ' +
      'normalised against the torso so body size and camera distance stop mattering. Swings ' +
      'are cut into 33-frame clips centred on the wrist-speed peak and classified by a TCN into ' +
      'five stroke types. I also built the labelling tool and a dataset of 2,000 swings from 40 ' +
      'videos, split at video level to prevent leakage — 0.980 macro F1 on the held-out set. ' +
      'Exported to ONNX, it runs inside Unity on CPU and streams over UDP. Grand Prize, 2025 ' +
      'Winter Capstone Design Competition.',
    tags: ['Pose Estimation', 'Action Recognition', 'Time-Series', 'Real-Time Inference', 'Dataset Design'],
  },
];

const GAMES = [
  {
    cover: 'g1',
    dir: 'img/games/attis/',
    title: 'ATTIS',
    meta: 'Unity · Team Leader',
    year: '2024–2026',
    badge: '2024–26',
    link: { label: 'Play on itch.io', url: 'https://potatoteam.itch.io/attis' },
    detail:
      'ATTIS inverts the defence genre: you never attack, and you never control the ' +
      'protagonist. Aetheris walks toward wherever you shine your light, and your job is to ' +
      'guide him and shield him while he revives the dying. If he falls, a creature you already ' +
      'saved is sacrificed to bring him back.\n\n' +
      'I led a team of seven as team lead and lead designer, owning the story, emotional ' +
      'direction, and system balance. The assistive cursor control was the hardest call — less ' +
      'intuitive and far buggier to build than direct control, but it is why the player reads ' +
      'as a guardian rather than a pilot. Leadership was the harder lesson: two members left ' +
      'early, and my flexibility quietly dissolved the deadlines with them. Fixed deadlines, ' +
      'weekly progress reviews, and one-on-ones rebuilt it. Art and sound are done; the game is ' +
      'in polish ahead of release.',
  },
  {
    cover: 'g2',
    dir: 'img/games/ddang/',
    title: 'DDANG! DDANG! DDANG!',
    meta: 'Unreal Engine · Team Lead / Systems Design',
    year: '2025',
    detail:
      'Whack-a-mole where the mole plays too. Two people share one keyboard and a split screen ' +
      '— the farmer hunts with a hammer, the mole tunnels underground and surfaces to steal ' +
      'crops. Neither can see the other\'s half, and that asymmetry is the game.\n\n' +
      'I led a team of five as team lead and systems designer. The technical core is Unreal\'s ' +
      'local multiplayer: two controller IDs, two pawns, one split screen, so the information ' +
      'gap is enforced by the camera rather than by rules. Items were designed against two axes ' +
      '— disrupt the opponent, or adjust risk — and tuned by cooldown rather than power. The ' +
      'goal was local play itself: short rounds where you react to the person beside you, not ' +
      'their avatar.',
  },
  {
    cover: 'g3',
    dir: 'img/games/grow-my-farm/',
    title: 'Grow My Farm',
    meta: 'Web · Lead Designer / PM / UI',
    year: '2025',
    link: { label: 'Play', url: 'https://farminglog.farmsystem.kr/game' },
    detail:
      'A decorative tycoon sim built into a software club\'s homepage — plant a seed once a ' +
      'day, harvest, and slowly make a quarter-view plot your own. Deliberately slow: a browser ' +
      'game on a club site should reward a two-minute visit, not demand a session.\n\n' +
      'I joined after the project had broken — the original designer was writing specs for the ' +
      'first time and the PM had left mid-development — as lead designer, PM, and UI designer ' +
      'at once. Before any feature work I rebuilt the scaffolding: a Notion workspace, written ' +
      'development conventions, art specs kept separate from development specs, UI flows ' +
      'prototyped in Figma, weekly sprint reviews. After launch almost nobody played it; there ' +
      'was no tutorial. I designed a visual detail page showing the loop in one scroll, and ' +
      'play rate among members went from 12% to 65%.',
  },
  {
    cover: 'g4',
    dir: 'img/games/cats-meow/',
    title: "Cat's Meow",
    meta: 'Unity · Team Lead / Design / Art / Dev',
    year: '2024',
    detail:
      'You are the cat. The goal is a treat locked in a box across the house, and the only ' +
      'obstacle is the human. Knock a cup off a table and the sound pulls them away to clean ' +
      'it up — that gap is your opening. Most cat games ask you to admire one; here the cat is ' +
      'the strategist.\n\n' +
      'A three-person project where I was team lead and the only designer, artist, and third ' +
      'developer. The system I care most about is the mess mechanic: knocking things over is ' +
      'the cat\'s most instinctive behaviour, so I made it the strategic verb. Doing it too ' +
      'often teaches the human your pattern and speeds up their response, which turns a joke ' +
      'into a risk budget. Three stages escalate from quiet cushions to breakable plates to a ' +
      'room with nowhere to hide. Placed first in both peer and professor evaluation.',
  },
  {
    cover: 'g5',
    dir: 'img/games/voidlight/',
    title: 'Voidlight',
    meta: 'Unity · Narrative & Systems Design · 48h Game Jam',
    year: '2024',
    detail:
      'A man wakes in the dark without his name. Voidlight is an interactive story about ' +
      'recovering three fragments — a name, a calling, a family — across the rooms of a life, ' +
      'built in 48 hours for the 2024 GameMakers jam.\n\n' +
      'I owned the scenario and the structure. The design question was how to make a player ' +
      'feel a memory rather than read one, so nothing is exposition: each fragment is recovered ' +
      'by handling objects in a first-person scene, and lighting, colour, and sound brighten in ' +
      'step with how much has been remembered — progress is legible without a single UI ' +
      'element. The story was drawn from the real death of a firefighter on duty. The feedback ' +
      'we kept hearing was that it was short but stayed with people.',
  },
  {
    cover: 'g6',
    dir: 'img/games/flux/',
    title: 'FluX',
    meta: 'Unity · Team Lead / Design / Art',
    year: '2024',
    link: { label: 'Play', url: 'https://mandlemandle.com/project/flux/game' },
    detail:
      'FluX changes how you control it every ten seconds — runner, then mouse-driven, then ' +
      'shooter. The switch is the mechanic, keeping a ten-minute arcade game from ever settling ' +
      'into muscle memory. Fuel doubles as health, and bullets collected while running are what ' +
      'you fire at the boss.\n\n' +
      'My first competition and first team project, in my second semester. I led four people as ' +
      'designer and, with no artist available, made all the art myself — UI in Figma, ' +
      'characters and backgrounds in Illustrator, on a minimal geometric system borrowed from ' +
      'Geometry Dash. It is also where I learned what a spec is for: my first one was written ' +
      'from the designer\'s point of view and left developers guessing, so I redrew the systems ' +
      'as flowcharts and broke every feature down to something readable straight into code. ' +
      '1st in the judging round, 3rd in user score.',
  },
];
