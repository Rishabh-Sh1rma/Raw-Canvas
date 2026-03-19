import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SimpleFooter } from "../components/SimpleFooter";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function TrainingVideo() {
  const navigate = useNavigate();
  const playerRef = useRef<any>(null);
  const fired50Ref = useRef(false);
  const fired70Ref = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // ── YouTube IFrame API ──────────────────────────────────────────
    const initPlayer = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: "o94gxW8qU_8",
        width: "100%",
        height: "100%",
        playerVars: {
          rel: 0,          // no related videos at end
          modestbranding: 1,
          controls: 1,
        },
        events: {
          onStateChange: (event: any) => {
            // YT.PlayerState.PLAYING === 1
            if (event.data === 1) {
              // Poll every 2 seconds while playing
              intervalRef.current = setInterval(() => {
                const player = playerRef.current;
                if (!player) return;
                const duration = player.getDuration();
                const current = player.getCurrentTime();
                if (!duration || duration === 0) return;

                const percent = (current / duration) * 100;

                if (percent >= 50 && !fired50Ref.current) {
                  fired50Ref.current = true;
                  if (window.fbq) {
                    window.fbq("trackCustom", "VSL_50");
                  }
                }

                if (percent >= 70 && !fired70Ref.current) {
                  fired70Ref.current = true;
                  if (window.fbq) {
                    window.fbq("trackCustom", "VSL_70");
                  }
                }
              }, 2000);
            } else {
              // Paused / ended — clear interval
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      // API already loaded (e.g. user navigated back)
      initPlayer();
    } else {
      // Load the API script once
      if (!document.getElementById("yt-api-script")) {
        const tag = document.createElement("script");
        tag.id = "yt-api-script";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // ── Calendly ───────────────────────────────────────────────────
    const calendlyScript = document.createElement("script");
    calendlyScript.src =
      "https://assets.calendly.com/assets/external/widget.js";
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);

    function isCalendlyEvent(e: MessageEvent) {
      return e.data.event && e.data.event.indexOf("calendly") === 0;
    }

    const handleMessage = (e: MessageEvent) => {
      if (isCalendlyEvent(e)) {
        if (e.data.event === "calendly.event_scheduled") {
          if (window.fbq) {
            window.fbq("track", "Schedule");
          }
          navigate("/thank-you");
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // ── Cleanup ────────────────────────────────────────────────────
    return () => {
      window.removeEventListener("message", handleMessage);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (document.body.contains(calendlyScript)) {
        document.body.removeChild(calendlyScript);
      }
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [navigate]);

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-20 flex flex-col relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto w-full px-6 flex-grow relative z-10 mb-20">
        {/* Step 1: Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-medium text-[#c2f2d0] tracking-widest uppercase mb-4">
            Step 1
          </h2>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-10">
            WATCH THE FREE TRAINING
          </h1>

          {/* YouTube Player */}
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
            <div className="absolute inset-0 w-full h-full">
              <div id="yt-player" />
            </div>
          </div>
        </motion.div>

        {/* Step 2: Calendly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-sm font-medium text-[#c2f2d0] tracking-widest uppercase mb-4">
            Step 2
          </h2>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
            LIKE WHAT YOU HEAR? LET'S TALK...
          </h1>
          <p className="text-xl text-gray-400 mb-10">
            Schedule a time to speak below.
          </p>

          <div className="bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/pulkit-rawcanvas/discovery-call-x-pulkit?hide_gdpr_banner=1&background_color=050505&text_color=ffffff&primary_color=c2f2d0"
              style={{ minWidth: "320px", height: "1050px" }}
            />
          </div>
        </motion.div>
      </div>

      <SimpleFooter />
    </div>
  );
}