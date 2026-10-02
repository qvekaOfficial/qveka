// ============================================================
// CLOUDINARY ASSETS — SINGLE FILE FOR ALL IMAGES + VIDEOS
// ------------------------------------------------------------
// - Plain https URLs + plain <img>/<video> tags = NO Next.js
//   Image Optimization, NO Vercel edge requests / no `_next/image`.
// - Size control happens HERE via Cloudinary transforms:
//   logos    -> w_300  (~10-30 KB each, rendered at 40-48px high)
//   services -> w_600  (~30-80 KB each, rendered at ~280px column)
//   videos   -> w_640  (marquee cards are 280-560px wide)
//   f_auto delivers webp/avif automatically, q_auto keeps quality.
// - To tweak size, only change w_XXX in this file. Nothing else.
// Social embeds (X pbs.twimg.com / video.twimg.com, LinkedIn
// media.licdn.com) are NOT here — they hotlink directly.
// ============================================================

export const cloudinaryLogos: Record<string, string> = {
  airwallex:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922680/leaders_logo_airwallex.jpg",
  heygen:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922676/leaders_logo_heygen.jpg",
  higgsfield:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922675/leaders_logo_higgsfield.jpg",
  imagineArt:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922674/leaders_logo_imagine_art.jpg",
  invideo:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922673/leaders_logo_invideo.jpg",
  openai:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922681/leaders_logo_openai.jpg",
  apodex:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922679/leaders_logo_apodex.jpg",
  lumaAi:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922673/leaders_logo_luma_ai.jpg",
  outboxLab:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922679/leaders_logo_outbox_lab.jpg",
  omneky:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922672/leaders_logo_omneky.jpg",
  gamma:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922678/leaders_logo_gamma.jpg",
  deepseek:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_300,c_limit/v1790922677/leaders_logo_deepseek.jpg",
};

export const cloudinaryServices: Record<string, string> = {
  completeAZ:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_600,c_limit/v1790922696/services_1_Complete_A_Z_influencer_marketing.jpg",
  launchesXLinkedIn:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_600,c_limit/v1790922695/services_2_Launches_on_X_and_LinkedIn.jpg",
  headhunting:
    "https://res.cloudinary.com/qbqfk64w/image/upload/f_auto,q_auto,w_600,c_limit/v1790922697/services_3_Curated_creator_talent_headhunting.jpg",
};

export const cloudinaryVideos: string[] = [
  "https://res.cloudinary.com/qbqfk64w/video/upload/f_auto,q_auto,w_640,c_limit/v1790924261/yxbKfqdkCsxSfhxuQ5RQn3iMtB0.mp4",
  "https://res.cloudinary.com/qbqfk64w/video/upload/f_auto,q_auto,w_640,c_limit/v1790924264/9OGE1PZN2XKC7tcJE3hlXeAd4M.mp4",
  "https://res.cloudinary.com/qbqfk64w/video/upload/f_auto,q_auto,w_640,c_limit/v1790924266/jQsB3PkZw96s0EUiMaeYHAzDpak.mp4",
  "https://res.cloudinary.com/qbqfk64w/video/upload/f_auto,q_auto,w_640,c_limit/v1790924263/1jQmGscoImrS6owHtbkJOefkPnQ.mp4",
  "https://res.cloudinary.com/qbqfk64w/video/upload/f_auto,q_auto,w_640,c_limit/v1790924261/usbtrQ1dyvyquVYEYcXdq2u3bmQ.mp4",
  "https://res.cloudinary.com/qbqfk64w/video/upload/f_auto,q_auto,w_640,c_limit/v1790924260/teUH5Ixd9fD6YdMLmSYLxdp92Q.mp4",
  "https://res.cloudinary.com/qbqfk64w/video/upload/f_auto,q_auto,w_640,c_limit/v1790924260/lNCpgbSwYRucWZrtdHbgdsBsUWw.mp4",
  "https://res.cloudinary.com/qbqfk64w/video/upload/f_auto,q_auto,w_640,c_limit/v1790924259/DK6KsZNwo4IrqCyhipdq3g4.mp4",
];

// Faces render at ~280-460px card width, cropped to h-48/64.
// w_400 keeps each avatar in the ~10-30 KB range.
export const cloudinaryTestimonials: Record<string, string> = {
  alexMoore:
    "https://res.cloudinary.com/qbqfk64w/image/upload/v1790925254/heyalexmoore.jpg",
  harishKumar:
    "https://res.cloudinary.com/qbqfk64w/image/upload/v1790925249/harishkumar-sh.jpg",
  victoriaBlake:
    "https://res.cloudinary.com/qbqfk64w/image/upload/v1790925250/VictoriaBlddd.jpg",
  arfaFarheen:
    "https://res.cloudinary.com/qbqfk64w/image/upload/v1790925737/arfa-farheen.jpg",
};

// Convenience exports for components — do not edit below.
export const logoUrls = Object.values(cloudinaryLogos);

export const serviceUrls = {
  completeAZ: cloudinaryServices.completeAZ,
  launchesXLinkedIn: cloudinaryServices.launchesXLinkedIn,
  headhunting: cloudinaryServices.headhunting,
};

export const videoUrls = [...cloudinaryVideos];
