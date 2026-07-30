export const GAMES_CATALOG = [
  {
    id: "edge-born",
    slug: "edge-born",
    title: "Edge Born",
    badge: "NARRATIVE RPG",
    tagline:
      "Lead the courageous Queen in a branching RPG where every choice decides your clan's fate.",
    description:
      "Step into the armor of a Queen fighting a relentless invasion threatening to erase her people. Draw your blade, defend your town, and earn your crown.",
    longDescription: `
      Your clan is under siege. The forest has turned against you, and the crown weighs heavier with every decision you make. Step into the armor of a Queen fighting a desperate invasion threatening to erase her ancestral people from history. Survival demands instinct, timing, and the will to make tough choices.
      
      Edge Born is a game driven by your decisions. With a deeply branching storyline and multiple distinct endings, no two playthroughs lead to the same fate. Face waves of warrior infantry and hunt down Forest Demons—ancient forces of nature that demand everything you have.
      
      Keep a close eye on your weapons: your blade weakens with every battle, and a damaged weapon deals half its power. Repair early at the forge or watch costs scale exponentially when your steel reaches critical condition.
    `,
    category: "Narrative Tactics",
    difficulty: "Advanced",
    releaseDate: "2025",
    version: "Version 1.2.0",
    featured: true,

    heroImage: {
      src: "/images/games/edge-born/hero.png",
      altText:
        "Metallic shield emblem featuring a central gold cross crosslet, representing Edge Born",
    },
    iconImage: {
      src: "/images/games/edge-born/icon.png",
      altText: "Edge Born royal crown emblem icon",
    },

    platforms: ["mobile", "desktop"],
    downloads: {
      ios: {
        label: "Download on the App Store",
        url: "https://apps.apple.com/app/edge-born/id6774776233",
        ariaLabel:
          "Download Edge Born on the Apple App Store (opens in new tab)",
      },
      pc: {
        label: "PC Download (itch.io)",
        url: "https://unmboxgames.itch.io/edge-born",
        ariaLabel:
          "Download Edge Born for Windows PC on itch.io (opens in new tab)",
      },
      trailer: {
        label: "Watch Video Gameplay",
        url: "#",
        ariaLabel: "Watch Edge Born video gameplay trailer",
      },
    },

    technicalSpecs: [
      { label: "Engine", value: "Unmbox Tactical Core v2.1" },
      { label: "Combat", value: "Directional Swing & Cooldown Discipline" },
      { label: "Economy", value: "Exponential Weapon Repair Scaling" },
      { label: "Platforms", value: "iOS, Windows PC" },
    ],

    accessibilityFeatures: [
      {
        title: "VoiceOver & Audio Cues",
        description:
          "Full directional sound effects and compatibility with screen readers.",
      },
      {
        title: "Unhurried Story Decisions",
        description:
          "Branching choice crossroads have no mandatory countdown timers.",
      },
      {
        title: "High Contrast UI",
        description: "Text formatting conforms to WCAG AAA contrast standards.",
      },
    ],

    keyFeatures: [
      "Branching royal narrative with multiple distinct endings shaped entirely by your choices.",
      "Real-time tactical combat with directional swing mechanics and cooldown discipline.",
      "Dynamic enemy roster including standard infantry and high-threat generals.",
      "Weapon health and degradation system with exponential repair cost scaling.",
      "Full accessibility via specialized audio cues and VoiceOver compatibility.",
    ],
  },

  {
    id: "dark-frequency",
    slug: "dark-frequency",
    title: "Dark Frequency",
    badge: "AUDIO ROGUELITE",
    tagline:
      "Shatter invisible Glass Beasts in this intense audio-driven roguelite.",
    description:
      "Master celestial hammers, stack powerful Boons, and survive the Forge in a world where sound is your primary guide against the darkness.",
    longDescription: `
      The Forge has shattered. The Glass Beasts have risen, and you are the only thing standing between the world and eternal darkness. You are Crucible-Born, a being of molten glass and bound-soul, summoned into existence by The Ancient One. Armed with a celestial hammer, you must fight through endless trials to reclaim scattered Shards and rekindle the Forge.
      
      Every run is different: forge your path through a brutal roguelite system where no two attempts play the same. Stack abilities, build synergies, and learn the sound rhythms of each beast. Swing your hammer in fast, punishing arcs or charge a ground-shattering slam that sends shockwaves through enemy groups.
      
      Spend earned Shards on permanent Sigils that carry power across future runs, unlocking game-changing Boons that fundamentally alter how you fight.
    `,
    category: "Action Roguelite",
    difficulty: "Advanced",
    releaseDate: "2025",
    version: "Version 1.1.0",
    featured: true,

    heroImage: {
      src: "/images/games/dark-frequency/hero.png",
      altText:
        "Luminous glowing blue warrior holding a massive hammer surrounded by shockwave energy rings",
    },
    iconImage: {
      src: "/images/games/dark-frequency/icon.png",
      altText: "Celestial hammer emblem icon for Dark Frequency",
    },

    platforms: ["mobile", "desktop"],
    downloads: {
      ios: {
        label: "iOS Download",
        url: "https://apps.apple.com/app/dark-frequency/id6760829593",
        ariaLabel:
          "Download Dark Frequency on the Apple App Store (opens in new tab)",
      },
      pc: {
        label: "Desktop Download (itch.io)",
        url: "https://unmboxgames.itch.io/dark-frequency",
        ariaLabel:
          "Download Dark Frequency for Desktop on itch.io (opens in new tab)",
      },
    },

    technicalSpecs: [
      { label: "Audio Engine", value: "3D Positional Spatial Sound System" },
      { label: "Progression", value: "Permanent Sigils & Stackable Boons" },
      {
        label: "Control Mapping",
        value: "Full Keyboard & Touch Gesture Support",
      },
      { label: "Platforms", value: "iOS, Windows PC, macOS" },
    ],

    accessibilityFeatures: [
      {
        title: "Audio-Driven Gameplay",
        description:
          "100% playable via directional acoustic spatial sound cues.",
      },
      {
        title: "Screen Reader Navigation",
        description: "Full VoiceOver and TalkBack menu routing.",
      },
      {
        title: "High Contrast Mode",
        description:
          "Bright glowing character models designed for low-vision clarity.",
      },
    ],

    keyFeatures: [
      "Endless waves of Glass Beasts with scaling difficulty.",
      "Upgrade system with stackable abilities and unique Boons.",
      "Permanent progression through Sigils that carry over across every run.",
      "Intense hammer combat built around positional audio feedback.",
    ],
  },

  {
    id: "shadows-of-the-circuit",
    slug: "shadows-of-the-circuit",
    title: "Shadows of The Circuit",
    badge: "STEALTH STEER",
    tagline: "Escape a dystopian world where sound is your ultimate guide.",
    description:
      "Navigate low-light megastructures using 3D audio stealth. Avoid surveillance drones, bypass sector traps, and make your escape.",
    longDescription: `
      No one knows the true origin of The Circuit. They only know the pattern: a lone Runner, a sea of surveillance drones, and a desperate race for the exit. In Shadows of The Circuit, you are that Runner. Navigate a dystopian, low-light megastructure where sight is a luxury and sound is your only true ally.
      
      In the darkness of The Circuit, your eyes will deceive you—this game is engineered around high-fidelity 3D Spatial Audio. Listen for the subtle hum of a drone behind you or chest locations to your left and right.
      
      Choose between two game modes:
      1. Operations: Face 5 high-stakes initiation levels designed to introduce evasion and resource management mechanics.
      2. Deployment (Infinite Mode): Escape procedurally generated sectors before the surveillance grid closes in.
      
      Collect and deploy upgrade modules like Silent Soles to dampen footstep noise, Structural Scanners to locate traps, and Core Bypasses to manage echo fragments.
    `,
    category: "Spatial Audio Stealth",
    difficulty: "Advanced",
    releaseDate: "2025",
    version: "Version 1.0.8",
    featured: false,

    heroImage: {
      src: "/images/games/shadows-of-the-circuit/hero.png",
      altText:
        "Futuristic chrome title logo reading Shadows of the Circuit against a dark tech background",
    },
    iconImage: {
      src: "/images/games/shadows-of-the-circuit/icon.png",
      altText: "Circuit board runner emblem icon",
    },

    platforms: ["mobile", "desktop"],
    downloads: {
      ios: {
        label: "Available on the App Store",
        url: "https://apps.apple.com/app/shadows-of-the-circuit",
        ariaLabel:
          "Download Shadows of The Circuit on the Apple App Store (opens in new tab)",
      },
      pc: {
        label: "Available for Windows and macOS",
        url: "https://unmboxgames.itch.io/shadows-of-the-circuit",
        ariaLabel:
          "Download Shadows of The Circuit on itch.io for Windows and macOS (opens in new tab)",
      },
    },

    technicalSpecs: [
      { label: "Sound Core", value: "3D Binaural Spatial Positioning Engine" },
      {
        label: "Level Generation",
        value: "Procedural Infinite Sector Algorithm",
      },
      {
        label: "Upgrades",
        value: "Silent Soles, Structural Scanners, Core Bypass",
      },
      { label: "Platforms", value: "iOS, Windows, macOS" },
    ],

    accessibilityFeatures: [
      {
        title: "100% Visually Impaired Playable",
        description:
          "Complete gameplay loop solvable purely through audio cues.",
      },
      {
        title: "VoiceOver Integration",
        description:
          "Full screen reader support across menus, inventory, and leaderboards.",
      },
      {
        title: "Subtle Haptic Feedback",
        description: "Vibration alerts for drone proximity on mobile devices.",
      },
    ],

    keyFeatures: [
      "Two distinct modes: Operations (Story Campaign) and Deployment (Infinite Survival).",
      "Strategic Upgrade Modules (Silent Soles, Structural Scanner, Core Bypass).",
      "Immersive 3D Spatial Audio navigation system.",
      "The Intel & The Records: In-game lore database and global sector leaderboards.",
      "100% accessible to blind and low-vision players.",
    ],
  },

  {
    id: "echo-chain",
    slug: "echo-chain",
    title: "Echo Chain",
    badge: "PUZZLE MEMORY",
    tagline: "A premium, accessible sound memory experience for everyone.",
    description:
      "Take turns repeating and extending sound sequences. Test your focus in single-player Arcade or 4-player Battle Royale mode.",
    longDescription: `
      At its heart, Echo Chain is simple to learn but endlessly challenging: a sequence of sounds is played, and your task is to repeat the sequence back correctly. Each round, the chain grows longer. One wrong move... and the chain breaks!
      
      Reimagined for both casual players and the visually impaired community, Echo Chain offers two ways to play:
      - Arcade Mode (Single Player): Push yourself to set personal high scores and sharpen focus.
      - Battle Royale Mode (Multiplayer, up to 4 players): Face off against friends or online opponents where sequences get longer and tougher until one player remains standing.
      
      Echo Chain is built with an inclusive UI, no manipulative upsells, and no ads—ensuring sighted and blind players can compete on equal footing.
    `,
    category: "Audio Memory",
    difficulty: "Beginner",
    releaseDate: "2025",
    version: "Version 1.0.0",
    featured: false,

    heroImage: {
      src: "/images/games/echo-chain/hero.png",
      altText:
        "Colorful graphic title logo reading Echo Chain in rounded bubble lettering",
    },
    iconImage: {
      src: "/images/games/echo-chain/icon.png",
      altText: "Echo Chain audio wave loop icon",
    },

    platforms: ["mobile"],
    downloads: {
      ios: {
        label: "Download on the App Store",
        url: "https://apps.apple.com/app/echo-chain",
        ariaLabel:
          "Download Echo Chain on the Apple App Store (opens in new tab)",
      },
      trailer: {
        label: "Watch Video Gameplay",
        url: "https://www.youtube.com/watch?v=echo-chain",
        ariaLabel:
          "Watch Echo Chain full audio gameplay preview on YouTube (opens in new tab)",
      },
      web: {
        label: "Join Game Discord Channel",
        url: "https://discord.gg/unmboxgames",
        ariaLabel: "Join the Unmbox Games Discord community (opens in new tab)",
      },
    },

    technicalSpecs: [
      {
        label: "Modes",
        value: "Arcade (Solo) & Battle Royale (Up to 4 Players)",
      },
      { label: "Sound Packs", value: "Customizable Audio Themes" },
      {
        label: "Monetization",
        value: "Ad-free, No Manipulative In-App Purchases",
      },
      { label: "Platforms", value: "iOS (Android coming soon)" },
    ],

    accessibilityFeatures: [
      {
        title: "100% Audio-Driven",
        description:
          "Seamless integration with VoiceOver and Android TalkBack.",
      },
      {
        title: "Non-Visual Navigation",
        description: "Intuitive gesture menus navigable without sight.",
      },
      {
        title: "Cognitive Training",
        description: "Designed to improve memory and auditory processing.",
      },
    ],

    keyFeatures: [
      "Arcade Solo Mode and 4-Player Battle Royale Multiplayer.",
      "100% audio-driven mechanics compatible with VoiceOver/TalkBack.",
      "Global leaderboards and player achievement tracking.",
      "Custom sound packs for audio variety and personalization.",
      "Respectful design: zero ads or pay-to-win mechanics.",
    ],
  },

  {
    id: "multishoot",
    slug: "multishoot",
    title: "Multishoot",
    badge: "COMING SOON",
    tagline: "An action-packed multiplayer shooter built for tactical play.",
    description:
      "Team up with friends or face off against rivals in fast-paced combat arenas. Engage in tactical firefights with customized weaponry.",
    longDescription: `
      Multishoot brings intense, low-latency tactical combat to web and mobile browsers. Coordinate strategy with teammates, secure objective points, and test your reaction times across dynamic urban arenas.
      
      Currently in active development at Unmbox Studios. Stay tuned for open playtest announcements!
    `,
    category: "Action Shooter",
    difficulty: "Intermediate",
    releaseDate: "Coming Soon",
    version: "In Development",
    featured: false,

    heroImage: {
      src: "/images/games/multishoot/hero.png",
      altText:
        "Tactical soldier in dark body armor holding an assault rifle against an orange fire backdrop",
    },
    iconImage: {
      src: "/images/games/multishoot/icon.png",
      altText: "Multishoot crosshair emblem icon",
    },

    platforms: ["desktop", "web"],
    downloads: {},

    technicalSpecs: [
      { label: "Status", value: "In Active Development" },
      { label: "Genre", value: "Multiplayer Tactical Action Shooter" },
      { label: "Networking", value: "Low-Latency WebSockets Infrastructure" },
      { label: "Platforms", value: "Web, Desktop" },
    ],

    accessibilityFeatures: [
      {
        title: "Custom Keybindings",
        description: "Fully remappable keyboard and controller inputs.",
      },
      {
        title: "Subtitled Audio",
        description: "Visual directional indicators for gunfire and footsteps.",
      },
    ],

    keyFeatures: [
      "Fast-paced multiplayer arena shooter mechanics.",
      "Tactical team coordination and loadout customization.",
      "Coming soon to Unmbox Games platform.",
    ],
  },
];

export function getAllGames() {
  return GAMES_CATALOG;
}

export function getGameBySlug(slug) {
  return GAMES_CATALOG.find((game) => game.slug === slug);
}

export function getFeaturedGames() {
  return GAMES_CATALOG.filter((game) => game.featured);
}
