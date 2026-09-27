export type WorkPlatform = "x" | "linkedin";

export interface WorkPost {
  slug: string;
  platform: WorkPlatform;
  postUrl: string;
  author: string;
  handle: string;
  avatar: string;
  title: string;
  text: string;
  mediaType: "image" | "video" | null;
  mediaUrl: string | null;
  thumbnailUrl: string | null;
  likes: number;
  reposts: number;
  replies: number;
  postedAt: string;
  brand: string;
}

export const workPosts: WorkPost[] = [
  {
    slug: "hypit-ai-video-clone",
    platform: "x",
    postUrl: "https://x.com/cccyd_qwq/status/2099545996766388304",
    author: "Alvin Chen",
    handle: "cccyd_qwq",
    avatar:
      "https://pbs.twimg.com/profile_images/2077789761490817025/TVwPlevP_normal.jpg",
    title: "Hypit — Clone any viral video with AI agents",
    text: "Introducing Hypit: Clone any viral video with AI agents.\n\n1 clone, 100 variants, 100M views.\nHypit lets your AI agent (Claude Code, Codex...) clone any viral video.\n\nPaste any viral video link from TikTok, Instagram, or YouTube into your agent. Hypit clones it into a complete agentic video workflow: footage, captions, B-roll, effects.\n\nGitHub:",
    mediaType: "video",
    mediaUrl:
      "https://video.twimg.com/amplify_video/2099545643836743680/vid/avc1/3840x2160/MCG7JKw--8vMrgjt.mp4",
    thumbnailUrl:
      "https://pbs.twimg.com/amplify_video_thumb/2099545643836743680/img/rKpmQ23TSkeu0v8H.jpg",
    likes: 741,
    reposts: 211,
    replies: 158,
    postedAt: "Sep 14, 2026",
    brand: "Hypit",
  },
  {
    slug: "apodex-traces-gpt6",
    platform: "x",
    postUrl: "https://x.com/Apodex_AI/status/2098285234571936078",
    author: "Apodex",
    handle: "Apodex_AI",
    avatar:
      "https://pbs.twimg.com/profile_images/2059991237273501696/HS3UBNas_normal.jpg",
    title: "Apodex TRACES — GPT-6 vs GPT-5.6 agent benchmark",
    text: "A generational leap, but not on every dimension.\n\nYesterday we put the TRACES board up. Here is the first comparison worth pulling out of it.\n\nGPT-6-astra @OpenAI tops the board but that is not the interesting part. Against GPT-5.6-sol, same harness, 140 agent episodes, it gains on all six capabilities. The gains are not even, and the uneven part is the story:\n\n➡️ Tools: 2.34 → 2.80\n➡️ Repair: 1.81 → 2.01\n➡️ Alternatives: 2.10 → 2.80\n➡️ Coherence: 2.63 → 3.15\n➡️ Evidence: 2.26 → 2.76\n➡️ Scope: 2.20 → 2.75\n\nFive of the six moved into the top three on the board. Repair did not.\n\nA single score tells you who won. TRACES tells you why, and where the frontier still breaks.\n\nLive leaderboard:",
    mediaType: "image",
    mediaUrl: "https://pbs.twimg.com/media/HR6avmLbIAAt2RJ.jpg",
    thumbnailUrl: "https://pbs.twimg.com/media/HR6avmLbIAAt2RJ.jpg",
    likes: 425,
    reposts: 115,
    replies: 76,
    postedAt: "Sep 11, 2026",
    brand: "Apodex",
  },
  {
    slug: "tencent-hy4-preview",
    platform: "x",
    postUrl: "https://x.com/TencentAI_News/status/2093232936434954659",
    author: "Tencent AI",
    handle: "TencentAI_News",
    avatar:
      "https://pbs.twimg.com/profile_images/2003780428591960064/H6DEq1-G_normal.jpg",
    title: "Tencent Hy4 preview — 770B MoE open weights",
    text: "Introducing Hy4 preview\n\n◆ Open weights: 770B MoE, 49B active, 1M context\n◆ Built for real work: code, docs and analysis, scientific research\n◆ Hy4 preview helped optimize its own training pipeline, kernels included\n◆ We ship upgrades, not price hikes\n\nFree in @WorkBuddy_AI for the next two weeks",
    mediaType: "image",
    mediaUrl: "https://pbs.twimg.com/media/HQyn5vtaoAAGLLB.jpg",
    thumbnailUrl: "https://pbs.twimg.com/media/HQyn5vtaoAAGLLB.jpg",
    likes: 1454,
    reposts: 121,
    replies: 68,
    postedAt: "Aug 28, 2026",
    brand: "Tencent",
  },
  {
    slug: "miya-music-cat",
    platform: "x",
    postUrl: "https://x.com/miya__fm/status/2092976666964636115",
    author: "Miya",
    handle: "miya__fm",
    avatar:
      "https://pbs.twimg.com/profile_images/2092983875647811585/abu-V36-_normal.jpg",
    title: "Miya — a whole new way to experience music",
    text: "hiii i'm Miya 🐱 I'm a music cat, and a whole new way to experience music.\n\nI make music, play music...whatever.\nAll you gotta do is talk to me. I'm basically your personal musician + DJ.\n\nanywayyy I wrote my first song about myself because obviously…\n\ncome try me:",
    mediaType: "video",
    mediaUrl:
      "https://video.twimg.com/amplify_video/2092976447120121856/vid/avc1/2560x1440/J1dIpteV6rCOsxvF.mp4",
    thumbnailUrl:
      "https://pbs.twimg.com/amplify_video_thumb/2092976447120121856/img/r9Cv2zPD0u-EHvq1.jpg",
    likes: 458,
    reposts: 224,
    replies: 186,
    postedAt: "Aug 27, 2026",
    brand: "Miya",
  },
  {
    slug: "sensenova-u15-lite",
    platform: "x",
    postUrl: "https://x.com/SenseTime_AI/status/2090483079412580442",
    author: "SenseTime",
    handle: "SenseTime_AI",
    avatar:
      "https://pbs.twimg.com/profile_images/1929821082561007618/3v_F-BOw_normal.jpg",
    title: "SenseNova U1.5 Lite — open-source unified multimodal",
    text: "𝗦𝗲𝗻𝘀𝗲𝗡𝗼𝘃𝗮 𝗨𝟭.𝟱 𝗟𝗶𝘁𝗲 — 𝗦𝗵𝗮𝗿𝗽𝗲𝗿. 𝗠𝗼𝗿𝗲 𝗖𝗼𝗻𝘁𝗿𝗼𝗹𝗹𝗮𝗯𝗹𝗲. 𝗠𝗼𝗿𝗲 𝗖𝗼𝘀𝘁-𝗘𝗳𝗳𝗶𝗰𝗶𝗲𝗻𝘁. An 𝗼𝗽𝗲𝗻-𝘀𝗼𝘂𝗿𝗰𝗲, lightweight native unified multimodal model for visual understanding, generation & editing.\n\n𝗕𝘂𝗶𝗹𝘁 𝗳𝗼𝗿 𝗿𝗲𝗮𝗹-𝘄𝗼𝗿𝗹𝗱 𝘃𝗶𝘀𝘂𝗮𝗹 𝗮𝗿𝘁𝗶𝗳𝗮𝗰𝘁 𝘄𝗼𝗿𝗸𝗳𝗹𝗼𝘄𝘀:\n🔹 Native 4K generation\n🔹 Complex instruction following\n🔹 Enhanced Chinese/English text rendering\n🔹 Precise image editing & control\n\nJust 8B parameters — outperforming same-size models while competing with large commercial models.",
    mediaType: "image",
    mediaUrl: "https://pbs.twimg.com/media/HQLjJZVaQAA5eYH.jpg",
    thumbnailUrl: "https://pbs.twimg.com/media/HQLjJZVaQAA5eYH.jpg",
    likes: 713,
    reposts: 211,
    replies: 163,
    postedAt: "Aug 20, 2026",
    brand: "SenseTime",
  },
  {
    slug: "nuphos-devops-workspace",
    platform: "x",
    postUrl: "https://x.com/yuaan1in/status/2086833877902061595",
    author: "Yuanlin Lin",
    handle: "yuaan1in",
    avatar:
      "https://pbs.twimg.com/profile_images/2092019004072448000/fJFuJD1a_normal.jpg",
    title: "Nuphos — AI-Native DevOps Workspace",
    text: "Introducing @NuphosAI, the AI-Native DevOps Workspace.\n\nWe realized AI-native DevOps shouldn't just be Claude Code or Codex with access to your AWS CLI.\n\nIt needs a new workspace where humans and agents can investigate incidents, understand infrastructure, take action, and build shared knowledge together.\n\nBuilt for your infrastructure, your tools, and your rules.\n\nHere's Nuphos in action ↓",
    mediaType: "video",
    mediaUrl:
      "https://video.twimg.com/amplify_video/2086830387028971520/vid/avc1/1920x1080/LvJlfEoMq3S-jy84.mp4",
    thumbnailUrl:
      "https://pbs.twimg.com/amplify_video_thumb/2086830387028971520/img/nTTexAoOgy4afnfC.jpg",
    likes: 1013,
    reposts: 152,
    replies: 260,
    postedAt: "Aug 10, 2026",
    brand: "Nuphos",
  },
  {
    slug: "sensenova-u1-pro",
    platform: "x",
    postUrl: "https://x.com/SenseTime_AI/status/2078681943680704993",
    author: "SenseTime",
    handle: "SenseTime_AI",
    avatar:
      "https://pbs.twimg.com/profile_images/1929821082561007618/3v_F-BOw_normal.jpg",
    title: "SenseNova U1 Pro — flagship multimodal foundation model",
    text: "𝗨𝗻𝘃𝗲𝗶𝗹𝗶𝗻𝗴 𝗦𝗲𝗻𝘀𝗲𝗡𝗼𝘃𝗮 𝗨1 𝗣𝗿𝗼\nSenseTime's flagship native multimodal foundation model. Built on the NEO-Unify architecture, U1 Pro unifies understanding, generation, and action with native interleaved vision-language thinking.\n\nKey upgrades:\n✨ Native long-horizon interleaved reasoning\n✨ Enhanced text + visual analysis\n✨ Reliable control over text and image details\n✨ Up to 8K native resolution output\n✨ Ultra-wide and ultra-tall image creation\n\nPreview (invite-only) available now.\nOfficial launch with API + pricing: August 2026.",
    mediaType: "image",
    mediaUrl: "https://pbs.twimg.com/media/HNj2DcDawAAtKIY.jpg",
    thumbnailUrl: "https://pbs.twimg.com/media/HNj2DcDawAAtKIY.jpg",
    likes: 178,
    reposts: 67,
    replies: 38,
    postedAt: "Jul 19, 2026",
    brand: "SenseTime",
  },
  {
    slug: "uncommon-route-opensource",
    platform: "x",
    postUrl: "https://x.com/commonstack_ai/status/2056389351269933545",
    author: "Commonstack",
    handle: "commonstack_ai",
    avatar:
      "https://pbs.twimg.com/profile_images/2017174039819894784/MJQhE4j6_normal.jpg",
    title: "UncommonRoute — fully local, open source routing",
    text: "Fraction of the bill. Same results.\n\nFully local, open source, works with any client.\n\nJust > pipx install uncommon-route\n\nhttp://github.com/CommonstackAI/UncommonRoute",
    mediaType: "video",
    mediaUrl:
      "https://video.twimg.com/amplify_video/2056258537626677248/vid/avc1/1920x1080/X7BCZkKmij-xokos.mp4",
    thumbnailUrl:
      "https://pbs.twimg.com/media/HIlNH5BbUAAqq4B.jpg",
    likes: 135,
    reposts: 43,
    replies: 38,
    postedAt: "May 18, 2026",
    brand: "Commonstack",
  },
  {
    slug: "medo-hackathon",
    platform: "x",
    postUrl: "https://x.com/Medo_CodeFree/status/2054582731582165460",
    author: "MeDo",
    handle: "Medo_CodeFree",
    avatar:
      "https://pbs.twimg.com/profile_images/1978402593987870720/i5YV3vcc_normal.png",
    title: "MeDo Hackathon — $50,000+ prize pool",
    text: "Still thinking about building something… or actually going to ship it?\nBuild with MeDo Hackathon is still live.\nAlready 71033 builders have joined, and this is just the beginning.\nYou still have time to build something real, ship it, and get seen 🔥\n💰 $50,000+ prize pool\n⏰ Deadline: May 20, 2026 @ 6:00 AM PDT\nThis isn't about ideas.\nIt's about who can actually ship faster.",
    mediaType: "image",
    mediaUrl: "https://pbs.twimg.com/media/HINXPV9aoAAaJjF.png",
    thumbnailUrl: "https://pbs.twimg.com/media/HINXPV9aoAAaJjF.png",
    likes: 212,
    reposts: 29,
    replies: 74,
    postedAt: "May 13, 2026",
    brand: "MeDo",
  },
  {
    slug: "world2agent-protocol",
    platform: "x",
    postUrl: "https://x.com/LeahW_2077/status/2048750466046279681",
    author: "LeahW",
    handle: "LeahW_2077",
    avatar:
      "https://pbs.twimg.com/profile_images/2101308888872026112/xSHyDx1O_normal.jpg",
    title: "World2Agent — open protocol for agent perception",
    text: "The future belongs to proactive agents. But without real-time perception, they're stuck reacting.\n\n\"World2Agent\" isn't a product. It's an open protocol and an invitation — to build the perception layer for AI agents, together.\n\nWe're open-sourcing everything: the protocol, the SDK, and first sensors.\n\nGITHUB + DEMO in comments.",
    mediaType: "video",
    mediaUrl:
      "https://video.twimg.com/amplify_video/2048750053658099713/vid/avc1/3840x2160/wNrCnHHlhO9Oqx4a.mp4",
    thumbnailUrl:
      "https://pbs.twimg.com/amplify_video_thumb/2048750053658099713/img/-3TwiLmkYKfnOjgC.jpg",
    likes: 258,
    reposts: 76,
    replies: 48,
    postedAt: "Apr 27, 2026",
    brand: "World2Agent",
  },
  {
    slug: "spira-ai-influencers",
    platform: "x",
    postUrl: "https://x.com/llmaworld/status/2047714560480866359",
    author: "Long Ma",
    handle: "llmaworld",
    avatar:
      "https://pbs.twimg.com/profile_images/2044577857977151489/nQgPE5EX_normal.jpg",
    title: "Spira — AI Influencers that grow your brand 24/7",
    text: "I've spent 10+ years building social media products at Meta, TikTok, and CapCut and Creatify AI.\n\nThe one problem nobody solved: most brands know they should be posting more. They just never do.\n\nSo we built Spira: AI Influencers that catch trends, create content, and grow your brand 24/7 while you focus on everything else.\n\nHere's how Spira works:\n- Drop your URL, and we set up a branded AI influencer in 2 minutes\n- Set a schedule, your influencer gets to work\n- Spira AI influencers get smarter everyday\n- Watch as your profile stats grow!",
    mediaType: "video",
    mediaUrl:
      "https://video.twimg.com/amplify_video/2047713639063576576/vid/avc1/1920x1080/pW2zQh5Gu60Nxrbs.mp4",
    thumbnailUrl:
      "https://pbs.twimg.com/amplify_video_thumb/2047713639063576576/img/gFZaxQg28ZS_zZjB.jpg",
    likes: 115,
    reposts: 28,
    replies: 48,
    postedAt: "Apr 24, 2026",
    brand: "Spira",
  },
  {
    slug: "pollyreach-voice-agent",
    platform: "x",
    postUrl: "https://x.com/PollyR89900/status/2036469335095644574",
    author: "PollyReach",
    handle: "PollyR89900",
    avatar:
      "https://pbs.twimg.com/profile_images/2032290503971282944/Q3dpQYBC_normal.jpg",
    title: "PollyReach — give your AI Agent a voice",
    text: "Introducing PollyReach 🦜\n\nGive your AI Agent a voice and a number.\n\nYour Agent (OpenClaw) can now make real phone calls.\nNo sign-up. No config. One install command.\n\nFeel the future at",
    mediaType: "video",
    mediaUrl:
      "https://video.twimg.com/amplify_video/2036423705530867713/vid/avc1/1920x1080/orCEKgoukmPJQUOP.mp4",
    thumbnailUrl:
      "https://pbs.twimg.com/amplify_video_thumb/2036423705530867713/img/AHw41PK-6cjDbUuU.jpg",
    likes: 501,
    reposts: 85,
    replies: 64,
    postedAt: "Mar 24, 2026",
    brand: "PollyReach",
  },
];

export function getWorkPost(slug: string): WorkPost | undefined {
  return workPosts.find((p) => p.slug === slug);
}

export function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return `${n}`;
}
