import { motion } from "motion/react";
import { User, Mail, Star, ChevronDown, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/src/utils/cn";
import { SimpleFooter } from "../components/SimpleFooter";

export function FreeTraining() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    businessType: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new URLSearchParams();
      data.append('First Name', formData.firstName);
      data.append('Email', formData.email);
      data.append('Business Type', formData.businessType);

      await fetch('https://script.google.com/macros/s/AKfycbxETYgxPmQy0z_pcafrHaHHjKJfGGa3laRMAoh5JGDxVnSYs9c3HqdiLbkgUsPGR__8/exec', {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors'
      });

      if (window.fbq) {
        window.fbq('track', 'Lead');
      }

      navigate('/training-video');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still navigate on error to not block the user
      navigate('/training-video');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-32 pb-0 relative overflow-hidden flex flex-col">
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10 mb-32">
        
        {/* Left Column: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#c2f2d0]/30 text-[#c2f2d0] text-sm font-medium tracking-wide mb-6 uppercase">
              Free Training Video
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
              We will build you a organic + Paid ads funnel that will book you <span className="text-[#c2f2d0]">10+ calls per month</span>. If we don't, you don't pay us.
            </h1>
            <p className="text-xl text-gray-400 italic">
              (Without Cold Calling, Networking, Relying on Referrals or any of that stuff...)
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-medium mb-8">You will learn...</h3>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c2f2d0]/10 text-[#c2f2d0] flex items-center justify-center font-bold">1</div>
              <p className="text-lg text-gray-300 leading-relaxed">
                How to <strong className="text-white">STOP</strong> getting low quality leads (and get leads chasing YOU instead...)
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c2f2d0]/10 text-[#c2f2d0] flex items-center justify-center font-bold">2</div>
              <p className="text-lg text-gray-300 leading-relaxed">
                How to get <strong className="text-white">5-30 appointments each month</strong> (and then scale up when the time is right...)
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c2f2d0]/10 text-[#c2f2d0] flex items-center justify-center font-bold">3</div>
              <p className="text-lg text-gray-300 leading-relaxed">
                The <strong className="text-white">EXACT 4-step strategy</strong> to get predictable appointments each month
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium tracking-tight uppercase">Where should we send the video?</h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                  <User className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="First name" 
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c2f2d0]/50 transition-all pr-12"
                />
                <span className="absolute top-4 right-12 text-red-500">*</span>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c2f2d0]/50 transition-all pr-12"
                />
                <span className="absolute top-4 right-12 text-red-500">*</span>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg font-medium mb-4">Which best describes your business? <span className="text-red-500">*</span></p>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded-full border border-white/30 group-hover:border-[#c2f2d0] transition-colors">
                    <input 
                      type="radio" 
                      name="business_type" 
                      value="Financial advisor, insurance agent or tax planner"
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="peer sr-only" 
                      required 
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#c2f2d0] opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">I'm a financial advisor, insurance agent or tax planner</span>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded-full border border-white/30 group-hover:border-[#c2f2d0] transition-colors">
                    <input 
                      type="radio" 
                      name="business_type" 
                      value="Coach or consultant"
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="peer sr-only" 
                      required 
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#c2f2d0] opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">I'm a coach or consultant</span>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded-full border border-white/30 group-hover:border-[#c2f2d0] transition-colors">
                    <input 
                      type="radio" 
                      name="business_type" 
                      value="Other service-based industry"
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="peer sr-only" 
                      required 
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#c2f2d0] opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">I'm a business owner in another service-based industry</span>
                </label>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#c2f2d0] hover:bg-[#a7e8b9] disabled:opacity-70 disabled:cursor-not-allowed text-black font-bold text-lg tracking-wide py-5 rounded-xl transition-colors mt-8 uppercase flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Get Access Now"
              )}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              We respect your privacy. Your information is safe.
            </p>
          </form>
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto relative z-10 px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Don't just take our words, listen to theirs.
          </h2>
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Justin Dry"
              role="Co-founder & CEO Vinomofo"
              quote="Rawcanvas helped us bring clarity to our content and growth efforts. Their work strengthened our positioning and supported steady momentum across campaigns."
              image="https://i.ibb.co/XxXBZvpB/justin-dry.jpg"
              delay={0.1}
            />
            <TestimonialCard 
              name="Pranav Sharma"
              role="Co-founder and GP at Woodstock"
              quote="Rawcanvas helped us refine our brand presence and build stronger traction through thoughtful strategy and execution."
              image="https://i.ibb.co/mLsJBNp/pravab-sharma.jpg"
              delay={0.2}
            />
            <TestimonialCard 
              name="Arun Aravindakshan"
              role="Co-founder at 9Media Online"
              quote="Working with Rawcanvas helped us improve clarity in our content and drive steady growth through focused execution."
              image="https://i.ibb.co/232jFWS0/arun.jpg"
              delay={0.3}
            />
            <TestimonialCard 
              name="Luke Davis"
              role="Founder - Bull Market Blueprint"
              quote="Our BMB Workshop saw a 200% increase in bookings, and for the first time, my DMs are filled with pre-qualified leads. If you're serious about scaling your brand and your bottom line, Pulkit and his team are the only ones I'd trust."
              image="https://i.ibb.co/q9GQzSy/luke-divas.jpg"
              delay={0.4}
            />
            <TestimonialCard 
              name="Dr. Miguel Mascaró, MD"
              role="Florida, USA"
              quote="The biggest bottleneck in my practice was the 'Complexity Gap', patients were interested but hesitant. Raw Canvas solved this by turning our clinical results into cinematic educational assets. They didn't just give us more leads; they gave us better leads who were pre-educated and ready to book."
              image="https://i.ibb.co/spC40Kt9/miguel.jpg"
              delay={0.5}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button 
              onClick={() => navigate('/#testimonials')}
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 font-medium"
            >
              View more testimonials on our website
            </button>
          </motion.div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto relative z-10 px-6 mb-32 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">FAQs</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Frequently asked questions
          </h2>
        </motion.div>
        
        <div className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <FaqItem 
              question="Who is this best suited for?"
              answer="We work with founders, service businesses, and high-ticket brands that already deliver strong outcomes and want to build a predictable pipeline of qualified opportunities through authority and strategic media."
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <FaqItem 
              question="What exactly do you mean by 'building an inbound pipeline'?"
              answer="It means creating a system where the right prospects discover you, trust your expertise, and book conversations consistently without relying on random outreach or inconsistent referrals. We design content, campaigns, and infrastructure that turn attention into qualified demand."
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <FaqItem 
              question="What happens during the first 90 days?"
              answer="We move through a structured process: Deep discovery and positioning. Content and campaign deployment. Lead capture and qualification setup. Performance monitoring and optimisation. The goal is to establish clear momentum and a visible inbound pipeline. If that isn't achieved, we continue working until it is."
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <FaqItem 
              question="How is this different from hiring a typical marketing or video agency?"
              answer="Most agencies deliver isolated services videos, ads, or campaigns. We build an integrated system that connects strategy, production, distribution, and lead flow so every effort compounds toward pipeline growth. Our focus is outcomes: conversations, opportunities, and revenue."
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            <FaqItem 
              question="What level of involvement is expected from us?"
              answer="Our role is to provide insight into your expertise and participate in key decisions. We handle strategy, execution, and optimisation, keeping your time commitment focused and efficient."
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
            <FaqItem 
              question="How quickly can we expect to see traction?"
              answer="Most clients begin seeing signals, engagement, inquiries, and pipeline activity within the first few weeks, with clearer momentum building through the 90-day window."
            />
          </motion.div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10 py-6">
      <button 
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium pr-8">{question}</h3>
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
          <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
        </div>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 text-gray-400 leading-relaxed pr-12"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

function TestimonialCard({ name, role, quote, image, delay = 0 }: { name: string; role: string; quote: string; image?: string; delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:bg-white/10 transition-colors"
    >
      <div className="flex gap-1 mb-6 text-[#c2f2d0]">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-gray-300 leading-relaxed mb-8 flex-grow">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
          <img src={image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <div className="font-medium text-white">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}
