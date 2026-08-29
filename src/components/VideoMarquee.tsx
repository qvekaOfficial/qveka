"use client";

const videos = [
  "https://framerusercontent.com/assets/yxbKfqdkCsxSfhxuQ5RQn3iMtB0.mp4",
  "https://framerusercontent.com/assets/usbtrQ1dyvyquVYEYcXdq2u3bmQ.mp4",
  "https://framerusercontent.com/assets/9OGE1PZN2XKC7tcJE3hlXeAd4M.mp4",
  "https://framerusercontent.com/assets/jQsB3PkZw96s0EUiMaeYHAzDpak.mp4",
  "https://framerusercontent.com/assets/teUH5Ixd9fD6YdMLmSYLxdp92Q.mp4",
  "https://framerusercontent.com/assets/lNCpgbSwYRucWZrtdHbgdsBsUWw.mp4",
  "https://framerusercontent.com/assets/1jQmGscoImrS6owHtbkJOefkPnQ.mp4",
  "https://framerusercontent.com/assets/DK6KsZNwo4IrqCyhipdq3g4.mp4",
];

export default function VideoMarquee() {
  // Double the videos for seamless loop
  const loopVideos = [...videos, ...videos];

  return (
    <>
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
        }
      `}</style>

      <section className="relative w-full overflow-hidden bg-white py-5">
        {" "}
        {/* py-12 md:py-16 */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 md:gap-6 marquee-track will-change-transform">
            {loopVideos.map((video, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[420px] lg:w-[500px] xl:w-[560px] aspect-video rounded-xl overflow-hidden bg-foreground/5 shadow-md"
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Subtle fade overlays */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white/70 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white/70 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}
