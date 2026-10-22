export const COMPANY_INFO = {
  name: "BeastBros Entertainment",
  tagline: "Bring Every Creator to Beast Level.",
  email: "beastbrosentertainment@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/beastbrosent/",
    instagramHandle: "@beastbrosent",
    youtube: "https://www.youtube.com/@beastbrosentertainment",
    youtubeHandle: "@beastbrosentertainment",
    discord: "https://discord.gg/nJFBuX8dn",
  }
};

export const FOUNDERS = [
  {
    name: "Harry",
    role: "Founder & Producer",
    bio: "Harry is the Founder and Producer of BeastBros Entertainment, leading projects from planning to production with a focus on creativity, quality, and storytelling.",
    instagram: "https://www.instagram.com/iamharryrs/",
    youtube: "https://www.youtube.com/@mrharryrs",
    instagramHandle: "@iamharryrs",
    youtubeHandle: "@mrharryrs",
    badge: "Producer"
  },
  {
    name: "Pritha Roy",
    role: "The Real Boss",
    bio: "Pritha Roy is the real boss behind BeastBros Entertainment,:)",
    instagram: "https://www.instagram.com/vinasaka.here/",
    youtube: "https://www.youtube.com/@vinasakaHere",
    instagramHandle: "@vinasaka.here",
    youtubeHandle: "@vinasakaHere",
    badge: "The Real Boss"
  },
  {
    name: "Arush Verma",
    role: "Founder & Marketing Manager",
    bio: "Arush Verma is the Founder and Marketing Manager of BeastBros Entertainment, overseeing brand growth, marketing strategies, and business development to help the company reach a wider audience.",
    instagram: "https://www.instagram.com/alwaysarushh/",
    youtube: "https://www.youtube.com/@A4ushhh",
    instagramHandle: "@alwaysarushh",
    youtubeHandle: "@A4ushhh",
    badge: "Marketing"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Krish",
    role: "Creative Producer",
    bio: "Krish is the Creative Producer at BeastBros Entertainment, leading creative ideas, guiding projects, and making sure every production meets the team's vision and quality standards."
  },
  {
    name: "Farhan",
    role: "Recording Manager",
    bio: "Farhan is the Recording Manager, responsible for recording scenes for our Minecraft projects."
  },
  {
    name: "Notwierdo",
    role: "Director of Photography (DOP)",
    bio: "Notwierdo is the Director of Photography (DOP), responsible for camera work, shot composition, and visual quality in BeastBros video projects."
  },
  {
    name: "Polu",
    role: "Mysterious Entity",
    bio: "error 404 information not found",
    isGlitch: true
  }
];

export const SERVICES = [
  {
    id: "video-editing",
    number: "01",
    title: "Video Editing",
    description: "Professional video editing that transforms raw footage into engaging, polished, and cinematic content.",
    features: [
      "YouTube video editing",
      "Short-form videos and reels",
      "Cinematic edits",
      "Story-driven editing",
      "Smooth transitions, sound design, and color grading"
    ]
  },
  {
    id: "thumbnail-poster-design",
    number: "02",
    title: "Thumbnail & Poster Design",
    description: "Eye-catching visual designs created to attract attention, communicate ideas, and strengthen a brand's identity.",
    features: [
      "YouTube thumbnails with maximum CTR",
      "Promotional posters and key visuals",
      "Social media creatives and banners",
      "Custom visual compositions and typography"
    ]
  },
  {
    id: "scriptwriting",
    number: "03",
    title: "Scriptwriting",
    description: "Creative scripts that communicate ideas effectively, capture attention, and keep audiences engaged.",
    features: [
      "YouTube video scripts & hooks",
      "Story and concept development",
      "Promotional and commercial scripts",
      "Creative storytelling & retention-first pacing"
    ]
  }
];

export const RECRUITMENT_ROLES = [
  {
    id: "video-editors",
    title: "Video Editors",
    description: "High-paced, story-driven editing experts with mastery over Premiere Pro, After Effects, or DaVinci Resolve. Focus on retention, pacing, sound design, and visual polish.",
    tags: ["Premiere Pro", "After Effects", "Sound Design", "Pacing"]
  },
  {
    id: "thumbnail-designers",
    title: "Thumbnail Designers",
    description: "Creative artists skilled at high-CTR thumbnails, 3D composition, facial expression lighting, and vibrant color theory that stops the scroll.",
    tags: ["Photoshop", "CTR Strategy", "Color Grading", "Visual Hierarchy"]
  },
  {
    id: "poster-graphic-designers",
    title: "Poster & Graphic Designers",
    description: "Designers who craft cinematic key art, branding posters, banners, and promotional assets with minimal, impactful aesthetic execution.",
    tags: ["Key Art", "Branding", "Typography", "Illustrator"]
  },
  {
    id: "scriptwriters",
    title: "Scriptwriters",
    description: "Storytellers who know how to engineer compelling hooks, high audience retention, character arcs, and punchy comedic or dramatic beats.",
    tags: ["Narrative Hook", "Retention", "Story Arcs", "Scripting"]
  },
  {
    id: "minecraft-players",
    title: "Minecraft PLAYERS",
    description: "Skilled Minecraft players for custom scene staging, multiplayer acting, SMP storytelling, and cinematic gameplay roleplay.",
    tags: ["In-game Acting", "SMP Experience", "Scene Blocking", "Communication"]
  },
  {
    id: "minecraft-replay-editor",
    title: "Minecraft REPLAY & FLASHBACK EDITOR",
    description: "Specialists in ReplayMod camera paths, cinematic camera tracking, custom shader atmospheres, keyframing, and dramatic flashback sequences.",
    tags: ["ReplayMod", "Camera Paths", "Shaders", "Flashback Edits"]
  }
];

// 10 16:9 blank thumbnail slots ready for assets, with modal preview
export const THUMBNAIL_ITEMS = Array.from({ length: 10 }, (_, i) => ({
  id: `thumb-${i + 1}`,
  title: `Thumbnail & Visual Art #${i + 1 < 10 ? '0' + (i + 1) : (i + 1)}`,
  category: i % 2 === 0 ? "YouTube CTR Masterpiece" : "Promotional Visual Artwork",
  aspectRatio: "16:9",
  image: null, // Ready for user's artwork
  tags: ["16:9", "Custom Design", "Beast Tier"]
}));

// Video editing showcase with YouTube embed support
export const VIDEO_PROJECTS = [
  {
    id: "vid-1",
    title: "Cinematic Creator Showcase",
    description: "High-energy pacing with narrative sound design and dynamic motion accents.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:40",
    category: "Long-Form YouTube",
    tags: ["Story Driven", "Color Grade", "Sound Design"]
  },
  {
    id: "vid-2",
    title: "Minecraft SMP Epic Trailer",
    description: "Multi-angle ReplayMod scene direction, custom dramatic score, and sound staging.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "03:15",
    category: "Cinematic & Gaming",
    tags: ["Minecraft Replay", "Cinematic", "4K HDR"]
  },
  {
    id: "vid-3",
    title: "Viral Short-Form Retention Edit",
    description: "Rapid visual hooks, custom subtitles, sound-effects layering, and 3D graphics.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "00:58",
    category: "Reels & Shorts",
    tags: ["Shorts", "Retention", "Motion Graphics"]
  },
  {
    id: "vid-4",
    title: "Docu-Style Brand Story",
    description: "Emotional pacing, atmospheric lighting transitions, and sound-engineered narrative.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "18:22",
    category: "Documentary",
    tags: ["Documentary", "Cinematic", "Storytelling"]
  }
];

// Section 13: BeastBros Upcoming & Released Projects
export const BEASTBROS_PROJECTS = [
  {
    id: "proj-1",
    title: "Beast Level SMP: Season 1",
    status: "Released",
    releaseYear: "2025",
    type: "Minecraft Narrative Series",
    description: "An immersive Minecraft cinematic storyline featuring custom camera replay choreography, high-stakes roleplay, and cinematic sound engineering.",
    credits: "Produced by Harry • Directed by BeastBros",
    tags: ["Minecraft", "Cinematic Series", "Released"]
  },
  {
    id: "proj-2",
    title: "Creator Spotlight: The 100-Hour Edit",
    status: "Released",
    releaseYear: "2025",
    type: "Long-form Production",
    description: "Behind-the-scenes documentary format showcasing masterclass editing, thumbnail psychology, and retention secrets that scaled channels.",
    credits: "Creative Direction: Krish • DOP: Notwierdo",
    tags: ["YouTube", "Production", "Released"]
  },
  {
    id: "proj-3",
    title: "Project Titan: Next-Gen Replay Chronicles",
    status: "Upcoming",
    releaseYear: "2026",
    type: "Cinematic Lore Series",
    description: "A monumental cinematic universe combining scripted drama, custom VFX, and ground-breaking Minecraft cinematic recording by Farhan & Notwierdo.",
    credits: "In Active Pre-Production • BeastBros Entertainment",
    tags: ["Upcoming", "VFX & Replay", "In Production"]
  },
  {
    id: "proj-4",
    title: "The Beast Vault: Creator Collaboration Hub",
    status: "Upcoming",
    releaseYear: "2026",
    type: "Platform & Collaborative Universe",
    description: "A dedicated initiative uniting elite editors, designers, and scriptwriters to power the next generation of digital creators to Beast Level.",
    credits: "Marketing & Strategy: Arush Verma",
    tags: ["Upcoming", "Creator Hub", "Announced"]
  }
];
