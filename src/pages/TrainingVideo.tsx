import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { SimpleFooter } from "../components/SimpleFooter";
import { Logo } from "../components/Logo";

declare global {
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
    <div className="bg-[#050505] min-h-screen text-white pt-20 flex flex-col relative overflow-hidden">
      {/* ── HEADER ── */}
      <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4 flex justify-center">
        <Link to="/" className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight">
          <Logo className="w-8 h-8" />
          Rawcanvas
        </Link>
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
              SEE WHAT OTHERS SAY
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                quote: "Rawcanvas helped us bring clarity to our content and growth efforts. Their work strengthened our positioning and supported steady momentum across campaigns.",
                name: "Justin Dry",
                role: "Co-founder & CEO, Vinomofo",
                image: "https://i.ibb.co/XxXBZvpB/justin-dry.jpg"
              },
              {
                quote: "Our BMB Workshop saw a 200% increase in bookings, and for the first time, my DMs are filled with pre-qualified leads. If you're serious about scaling your brand, Pulkit and his team are the only ones I'd trust.",
                name: "Luke Davis",
                role: "Founder — Bull Market Blueprint",
                image: "https://i.ibb.co/q9GQzSy/luke-divas.jpg"
              },
              {
                quote: "The biggest bottleneck in my practice was the 'Complexity Gap'. Raw Canvas solved this by turning our clinical results into cinematic educational assets — giving us better leads who were pre-educated and ready to book.",
                name: "Dr. Miguel Mascaró, MD",
                role: "Florida, USA",
                image: "https://i.ibb.co/spC40Kt9/miguel.jpg"
              }
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white/3 border border-white/8 rounded-2xl p-5 flex flex-col"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-[#c2f2d0] text-[#c2f2d0]" />)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
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

        {/* Step 4: Back to Website */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center border-t border-white/10 pt-16"
        >
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
            Want to see more?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Check out our website for more testimonials, case studies, and a detailed breakdown of our process.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl transition-colors"
          >
            Visit Full Website <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <SimpleFooter />
    </div>
  );
}
