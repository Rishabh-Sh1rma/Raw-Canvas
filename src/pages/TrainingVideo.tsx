import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Star, ArrowRight, TrendingUp } from "lucide-react";
import { SimpleFooter } from "../components/SimpleFooter";
import { Logo } from "../components/Logo";

declare global {
  interface Window {
    fbq?: any;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': any;
    }
  }
}

export function TrainingVideo() {
  const navigate = useNavigate();

  useEffect(() => {
    // ── Wistia ───────────────────────────────────────────────────
    const wistiaPlayerScript = document.createElement("script");
    wistiaPlayerScript.src = "https://fast.wistia.com/player.js";
    wistiaPlayerScript.async = true;
    document.body.appendChild(wistiaPlayerScript);

    const wistiaEmbedScript = document.createElement("script");
    wistiaEmbedScript.src = "https://fast.wistia.com/embed/occcm1oal3.js";
    wistiaEmbedScript.async = true;
    wistiaEmbedScript.type = "module";
    document.body.appendChild(wistiaEmbedScript);

    // Wistia Tracking
    let trackingTimeout: NodeJS.Timeout;
    const setupWistiaTracking = () => {
      const player = document.querySelector('wistia-player[media-id="occcm1oal3"]') as any;
      
      if (!player) {
        trackingTimeout = setTimeout(setupWistiaTracking, 500);
        return;
      }

      let tracked50 = false;
      let tracked70 = false;

      player.addEventListener('percentwatchedchanged', (e: CustomEvent) => {
        const percent = e.detail.percent;

        if (percent >= 0.5 && !tracked50) {
          tracked50 = true;
          if (window.fbq) window.fbq('trackCustom', 'VSL_50');
        }

        if (percent >= 0.7 && !tracked70) {
          tracked70 = true;
          if (window.fbq) window.fbq('trackCustom', 'VSL_70');
        }
      });
    };

    // Start after scripts load
    trackingTimeout = setTimeout(setupWistiaTracking, 2000);

    // ── Calendly ───────────────────────────────────────────────────
    const calendlyScript = document.createElement("script");
    calendlyScript.src = "https://assets.calendly.com/assets/external/widget.js";
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
      clearTimeout(trackingTimeout);
      window.removeEventListener("message", handleMessage);
      if (document.body.contains(calendlyScript)) {
        document.body.removeChild(calendlyScript);
      }
      if (document.body.contains(wistiaPlayerScript)) {
        document.body.removeChild(wistiaPlayerScript);
      }
      if (document.body.contains(wistiaEmbedScript)) {
        document.body.removeChild(wistiaEmbedScript);
      }
    };
  }, [navigate]);

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-36 flex flex-col relative overflow-hidden">
      {/* ── HEADER ── */}
      <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight">
          <Logo className="w-8 h-8" />
          Rawcanvas
        </div>
        <div className="flex items-center gap-3 justify-center">
          <div className="flex -space-x-2">
            {['justin-dry', 'luke-divas', 'miguel', 'arun'].map((name, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-white/10 overflow-hidden">
                <img
                  src={`https://i.ibb.co/${name === 'justin-dry' ? 'XxXBZvpB/justin-dry' : name === 'luke-divas' ? 'q9GQzSy/luke-divas' : name === 'miguel' ? 'spC40Kt9/miguel' : '232jFWS0/arun'}.jpg`}
                  alt=""
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            <span className="text-white font-medium">200+ founders</span> already inside
          </p>
        </div>
      </header>

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

      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 flex-grow relative z-10 mb-20">
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

          {/* Wistia Player */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative w-full">
            <style>{`wistia-player[media-id='occcm1oal3']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/occcm1oal3/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
            <wistia-player media-id="occcm1oal3" aspect="1.7777777777777777"></wistia-player>
          </div>
        </motion.div>

        {/* Step 2: Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-sm font-medium text-[#c2f2d0] tracking-widest uppercase mb-4">
              Step 2
            </h2>
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              REAL RESULTS
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Founders Who Built the Same System
            </p>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-2xl mx-auto">
              {[
                { value: "200%", label: "Booking increase" },
                { value: "10–20", label: "Qualified calls/mo" },
                { value: "28+", label: "Countries served" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl font-semibold text-[#c2f2d0]">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                quote: "Our BMB Workshop saw a 200% increase in bookings, and for the first time, my DMs are filled with pre-qualified leads. If you're serious about scaling your brand, Pulkit and his team are the only ones I'd trust.",
                name: "Luke Davis",
                role: "Founder — Bull Market Blueprint",
                metric: "200% more qualified bookings",
                image: "https://i.ibb.co/q9GQzSy/luke-divas.jpg"
              },
              {
                quote: "The biggest bottleneck in my practice was the 'Complexity Gap'. Raw Canvas solved this by turning our clinical results into cinematic educational assets — giving us better leads who were pre-educated and ready to book.",
                name: "Dr. Miguel Mascaró, MD",
                role: "Florida, USA",
                metric: "Pre-qualified leads on demand",
                image: "https://i.ibb.co/spC40Kt9/miguel.jpg"
              },
              {
                quote: "Rawcanvas helped us bring clarity to our content and growth efforts. Their work strengthened our positioning and supported steady momentum across campaigns.",
                name: "Justin Dry",
                role: "Co-founder & CEO, Vinomofo",
                metric: "Consistent growth & clarity",
                image: "https://i.ibb.co/XxXBZvpB/justin-dry.jpg"
              }
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white/3 border border-white/10 rounded-2xl p-6 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-[#c2f2d0] text-[#c2f2d0]" />)}
                </div>
                <div className="inline-flex items-center gap-2 bg-[#c2f2d0]/10 border border-[#c2f2d0]/20 rounded-full px-3 py-1 mb-4 w-fit">
                  <TrendingUp className="w-3 h-3 text-[#c2f2d0]" />
                  <span className="text-[#c2f2d0] text-xs font-semibold">{t.metric}</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Step 3: Calendly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-sm font-medium text-[#c2f2d0] tracking-widest uppercase mb-4">
            Step 3
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
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </motion.div>
      </div>

      <SimpleFooter />
    </div>
  );
}
