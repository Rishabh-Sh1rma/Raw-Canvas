import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SimpleFooter } from "../components/SimpleFooter";
import { CheckCircle2 } from "lucide-react";

export function ThankYou() {
  return (
    <div className="bg-[#050505] min-h-screen text-white pt-32 pb-20 px-6 relative overflow-hidden flex flex-col">
      {/* Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 flex-grow flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-[#c2f2d0]/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-12 h-12 text-[#c2f2d0]" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
        >
          Call Scheduled!
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12"
        >
          We've sent a confirmation email with the calendar invite. We look forward to speaking with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            to="/#testimonials" 
            className="bg-[#c2f2d0] text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-[#a7e8b9] transition-colors inline-flex items-center gap-2"
          >
            View more case studies
          </Link>
        </motion.div>
      </div>

      <SimpleFooter />
    </div>
  );
}
