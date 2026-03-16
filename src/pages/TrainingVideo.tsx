import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SimpleFooter } from "../components/SimpleFooter";

export function TrainingVideo() {
  const navigate = useNavigate();

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    function isCalendlyEvent(e: MessageEvent) {
      return e.data.event && e.data.event.indexOf('calendly') === 0;
    }

    const handleMessage = (e: MessageEvent) => {
      if (isCalendlyEvent(e)) {
        if (e.data.event === 'calendly.event_scheduled') {
          navigate('/thank-you');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [navigate]);

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-20 flex flex-col relative overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
          <h2 className="text-sm font-medium text-[#c2f2d0] tracking-widest uppercase mb-4">Step 1</h2>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-10">
            WATCH THE FREE TRAINING
          </h1>
          
          <div className="aspect-video bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent pointer-events-none" />
            <p className="text-gray-500 font-medium tracking-widest uppercase">(Placeholder for video adding)</p>
          </div>
        </motion.div>

        {/* Step 2: Calendly */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-sm font-medium text-[#c2f2d0] tracking-widest uppercase mb-4">Step 2</h2>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
            LIKE WHAT YOU HEAR? LET'S TALK...
          </h1>
          <p className="text-xl text-gray-400 mb-10">
            Schedule a time to speak below.
          </p>
          
          <div className="bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Calendly inline widget begin */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/pulkit-rawcanvas/discovery-call-x-pulkit?hide_gdpr_banner=1&background_color=050505&text_color=ffffff&primary_color=c2f2d0" 
              style={{ minWidth: '320px', height: '1050px' }}
            ></div>
            {/* Calendly inline widget end */}
          </div>
        </motion.div>
      </div>

      <SimpleFooter />
    </div>
  );
}
