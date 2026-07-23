/* ────────────────────────────────────────────────────────────
   Project content. Edit here — index.html renders from this.

   PROJECTS  → cards in the "Projects" grid
   GAMES     → thumbnails in the scrolling gallery

   art / cover : CSS class defined in index.html (.art-* / .g1–.g6)
   summary     : short text on the card
   detail      : full text shown in the popup
   ──────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    art: 'art-gs',
    title: 'Web-Based Real-Time 3D/4D Gaussian Splatting Editor',
    role: 'R&D Researcher, CV · SFACSPACE · 2026',
    summary: 'A browser-based 3D/4D Gaussian Splatting viewer with point-level editing, camera animation, and real-time shader relighting.',
    detail: 'Built a web-based 3D/4D Gaussian Splatting viewer with point-level editing and camera animation. Implemented shader-based real-time relighting — both point-light and HDRI — running live in the browser.',
    tags: ['WebGL', 'Shaders', '3D/4D GS', 'TypeScript'],
  },
  {
    art: 'art-lidar',
    title: 'LiDAR–360° Camera Fusion Pipeline for 3DGS',
    role: 'R&D Researcher, CV · SFACSPACE · 2026',
    summary: 'End-to-end pipeline fusing LiDAR and a 360° camera into 3DGS / SLAM inputs, with custom calibration and time-synchronization tools.',
    detail: 'Built an end-to-end pipeline fusing LiDAR and a 360° camera into 3DGS / SLAM inputs. Developed custom tools for sensor calibration, time synchronization, and data fusion across the capture rig.',
    tags: ['LiDAR', 'SLAM', 'Calibration', 'Python'],
  },
  {
    art: 'art-tcn',
    title: 'Real-Time Immersive Sports Game Based on TCN',
    role: 'Team Lead / AI Developer · Capstone Design · 2026',
    summary: "Led the full motion-recognition pipeline — labeling to real-time inference — delivering a deployable, GPU-free model as the project's core output.",
    detail: "Led AI development for the capstone project, building an end-to-end motion-recognition pipeline from data labeling through model training to real-time inference. Delivered a deployable, GPU-free real-time recognition model as the project's core AI output.",
    tags: ['PyTorch', 'TCN', 'MediaPipe', 'Unity'],
  },
];

const GAMES = [
  {
    cover: 'g1',
    title: 'ATTIS',
    meta: 'Unity · Team Leader',
    year: '2024–2026',
    badge: '2024–26',
    detail: 'A defense and healing adventure built in Unity. Led the team across design and development over two years — the longest-running project of the set.',
  },
  {
    cover: 'g2',
    title: 'DDANG! DDANG! DDANG!',
    meta: 'Unreal Engine · Team Leader',
    year: '2025',
    detail: 'A split-screen PvP game built in Unreal Engine. Led the team through local-multiplayer design and implementation.',
  },
  {
    cover: 'g3',
    title: 'Grow My Farm',
    meta: 'Unity · Team Member',
    year: '2025',
    detail: 'A farming and tycoon simulation built in Unity, contributing as a team member.',
  },
  {
    cover: 'g4',
    title: "Cat's Meow",
    meta: 'Unity · Team Leader',
    year: '2024',
    detail: 'A 3D stealth platformer built in Unity. Led the team on level and stealth-mechanic design.',
  },
  {
    cover: 'g5',
    title: 'Voidlight',
    meta: 'Unity · Team Leader',
    year: '2024',
    detail: 'A narrative game made for a game jam in Unity, led under jam time constraints.',
  },
  {
    cover: 'g6',
    title: 'FluX',
    meta: 'Unity · Team Leader',
    year: '2024',
    detail: 'An arcade shooter built in Unity. Placed 1st in the judging round of the 10-Minute Contest.',
  },
];
