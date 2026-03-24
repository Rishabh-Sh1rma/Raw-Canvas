import { motion, useInView } from "motion/react";
import { User, Mail, Star, ChevronDown, Loader2, ArrowRight, CheckCircle2, Shield, Clock, TrendingUp } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { cn } from "@/src/utils/cn";
import { SimpleFooter } from "../components/SimpleFooter";
import { Logo } from "../components/Logo";

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
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        mode: 'no-cors'
      });

      if (window.fbq) {
        window.fbq('track', 'Lead');
      }

      navigate('/training-video');
    } catch (error) {
      console.error('Error submitting form:', error);
      navigate('/training-video');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      {/* ── HEADER ── */}
      <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4 flex justify-center">
        <Link to="/" className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight">
          <Logo className="w-8 h-8" />
          Rawcanvas
        </Link>
      </header>

      {/* ── HERO: Form First on Mobile ── */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6">
        {/* BG glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Mobile: Form comes FIRST */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* ── RIGHT COLUMN: Form (shows first on mobile) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[480px] lg:order-2 lg:sticky lg:top-8"
            >
              {/* Social proof bar above form */}
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
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

              <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                {/* Form header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-[#c2f2d0]/10 border border-[#c2f2d0]/20 rounded-full px-3 py-1 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#c2f2d0] animate-pulse" />
                    <span className="text-[#c2f2d0] text-xs font-medium tracking-wide uppercase">Free Training Video</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight">
                    Watch How We Get You<br />
                    <span className="text-[#c2f2d0]">10–20 Qualified Calls/Month</span>
                  </h2>
                  <p className="text-gray-400 text-sm mt-2">Enter your details to get instant access.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First name */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="First name *"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c2f2d0]/50 focus:bg-white/8 transition-all text-base"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="Email address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c2f2d0]/50 focus:bg-white/8 transition-all text-base"
                    />
                  </div>

                  {/* Business type */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Which best describes you? *</p>
                    {[
                      { value: "Founder", label: "Founder" },
                      { value: "Service business owner", label: "Service business owner" },
                      { value: "Consultant", label: "Consultant" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all",
                          formData.businessType === opt.value
                            ? "border-[#c2f2d0]/60 bg-[#c2f2d0]/8"
                            : "border-white/10 bg-white/3 hover:border-white/20"
                        )}
                      >
                        <div className={cn(
                          "w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                          formData.businessType === opt.value ? "border-[#c2f2d0]" : "border-gray-600"
                        )}>
                          {formData.businessType === opt.value && (
                            <div className="w-2 h-2 rounded-full bg-[#c2f2d0]" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="business_type"
                          value={opt.value}
                          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                          className="sr-only"
                          required
                        />
                        <span className="text-sm text-gray-300">{opt.label}</span>
                      </label>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#c2f2d0] hover:bg-[#a7e8b9] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-black font-bold text-base sm:text-lg tracking-wide py-4 sm:py-5 rounded-xl transition-all mt-2 flex items-center justify-center gap-2 shadow-lg shadow-[#c2f2d0]/10"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                    ) : (
                      <> GET INSTANT ACCESS <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>

                  {/* Trust signals under button */}
                  <div className="flex items-center justify-center gap-4 pt-1">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Shield className="w-3 h-3" /> 100% Free
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock className="w-3 h-3" /> Instant access
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <CheckCircle2 className="w-3 h-3" /> No spam ever
                    </span>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* ── LEFT COLUMN: Copy (shows second on mobile) ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:flex-1 lg:order-1 lg:pt-4"
            >
              <div className="inline-block px-3 py-1.5 rounded-full border border-[#c2f2d0]/20 text-[#c2f2d0] text-xs font-medium tracking-widest uppercase mb-5">
                Free Training Video
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] mb-5">
                We Get You{" "}
                <span className="text-[#c2f2d0]">10+ Qualified<br />Appointments/Month.</span>
                <br />
                <span className="text-gray-400 font-normal">Or You Don't Pay.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-400 italic mb-8">
                (Without Cold Calling, Networking, or Relying on Referrals...)
              </p>

              {/* What you'll learn */}
              <div className="space-y-4 mb-8">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Inside the free training:</p>
                {[
                  "How to STOP getting low quality leads and get leads chasing YOU instead",
                  "How to get 5–30 qualified appointments each month on autopilot",
                  "The EXACT 4-step system to build a predictable client pipeline",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c2f2d0]/10 text-[#c2f2d0] flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              {/* Stat strip */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
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
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── AS SEEN / LOGO STRIP ── */}
      <section className="py-8 border-y border-white/5 bg-white/2">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-6">Trusted by founders across</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {["Vinomofo", "Bull Market Blueprint", "9Media Online", "Woodstock"].map((brand) => (
              <span key={brand} className="text-gray-500 text-sm font-medium">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF: Key results ── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">Real Results</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Founders Who Built the Same System
            </h2>
          </motion.div>

          {/* Featured results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <ResultCard
              quote="Our BMB Workshop saw a 200% increase in bookings, and for the first time, my DMs are filled with pre-qualified leads. If you're serious about scaling your brand, Pulkit and his team are the only ones I'd trust."
              name="Luke Davis"
              role="Founder — Bull Market Blueprint"
              metric="200% more qualified bookings"
              image="https://i.ibb.co/q9GQzSy/luke-divas.jpg"
              delay={0.1}
            />
            <ResultCard
              quote="The biggest bottleneck in my practice was the 'Complexity Gap'. Raw Canvas solved this by turning our clinical results into cinematic educational assets — giving us better leads who were pre-educated and ready to book."
              name="Dr. Miguel Mascaró, MD"
              role="Florida, USA"
              metric="Pre-qualified leads on demand"
              image="https://i.ibb.co/spC40Kt9/miguel.jpg"
              delay={0.2}
            />
          </div>

          {/* Secondary testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                quote: "Rawcanvas helped us bring clarity to our content and growth efforts. Their work strengthened our positioning and supported steady momentum across campaigns.",
                name: "Justin Dry",
                role: "Co-founder & CEO, Vinomofo",
                image: "https://i.ibb.co/XxXBZvpB/justin-dry.jpg"
              },
              {
                quote: "Rawcanvas helped us refine our brand presence and build stronger traction through thoughtful strategy and execution.",
                name: "Pranav Sharma",
                role: "Co-founder, Woodstock",
                image: "https://i.ibb.co/mLsJBNp/pravab-sharma.jpg"
              },
              {
                quote: "Working with Rawcanvas helped us improve clarity in our content and drive steady growth through focused execution.",
                name: "Arun Aravindakshan",
                role: "Co-founder, 9Media Online",
                image: "https://i.ibb.co/232jFWS0/arun.jpg"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-5"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-[#c2f2d0] text-[#c2f2d0]" />)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 px-4 sm:px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">The System</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              What We Build For You
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              We handle everything — from the first frame of a video to the final line of code on your site.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🎬",
                title: "High-Calibre Content",
                desc: "Studio-quality video content engineered to build trust and position you as the obvious choice in your market."
              },
              {
                icon: "🎯",
                title: "Precision Paid Distribution",
                desc: "Strategic Meta campaigns that put your content in front of your exact ideal buyers — not random clicks."
              },
              {
                icon: "⚙️",
                title: "Full Funnel Build",
                desc: "Landing pages, lead capture, and qualification systems that convert attention into booked calls automatically."
              },
              {
                icon: "📈",
                title: "Predictable Pipeline",
                desc: "A done-for-you system that delivers 10–20 qualified appointments every month, on repeat."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-5 bg-white/3 border border-white/8 rounded-2xl"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECOND CTA ── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Ready to Stop Guessing Where<br />Your Next Client Is Coming From?
            </h2>
            <p className="text-gray-400 mb-8">
              Watch the free training and see exactly how the system works. No fluff, no pitch — just the blueprint.
            </p>
            <a
              href="#top"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-[#c2f2d0] text-black font-bold px-8 py-4 rounded-xl text-base hover:bg-[#a7e8b9] transition-colors shadow-lg shadow-[#c2f2d0]/10"
            >
              GET INSTANT ACCESS <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-gray-600 mt-4">Free • No credit card • Instant access</p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 px-4 sm:px-6 bg-white/2 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Common Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {[
              {
                q: "Who is this best suited for?",
                a: "Service businesses, coaches, consultants, and founders who already deliver strong outcomes but want a predictable, scalable pipeline of qualified clients — without relying on referrals or cold outreach."
              },
              {
                q: "What exactly is in the free training?",
                a: "A full breakdown of the 4-step content and paid distribution system we use to generate 10–20 qualified appointments per month for our clients. No upsell, no fluff — just the actual strategy."
              },
              {
                q: "What happens after I watch the video?",
                a: "You'll have the option to book a strategy call where we look at your business specifically and map out how the system would work for your offer and market."
              },
              {
                q: "How quickly can I expect to see results?",
                a: "Most clients start seeing pipeline activity within the first few weeks. By month 2–3, the system is fully optimised and generating consistent qualified appointments."
              },
              {
                q: "How is this different from a typical agency?",
                a: "We don't sell isolated services. We build an integrated content + paid distribution system that compounds over time — turning your expertise into a client acquisition machine."
              },
              {
                q: "What does 'Or You Don't Pay' mean?",
                a: "If we don't deliver the agreed appointment volume within the first 90 days, we keep working for free until we do. We only win when you win."
              }
            ].map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
}

// ── Sub-components ──

function ResultCard({ quote, name, role, metric, image, delay }: {
  quote: string; name: string; role: string; metric: string; image: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white/3 border border-white/10 rounded-2xl p-6 flex flex-col"
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#c2f2d0] text-[#c2f2d0]" />)}
      </div>
      <div className="inline-flex items-center gap-2 bg-[#c2f2d0]/10 border border-[#c2f2d0]/20 rounded-full px-3 py-1 mb-4 w-fit">
        <TrendingUp className="w-3 h-3 text-[#c2f2d0]" />
        <span className="text-[#c2f2d0] text-xs font-semibold">{metric}</span>
      </div>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}

function FaqItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="border border-white/8 rounded-xl overflow-hidden"
    >
      <button
        className="w-full flex justify-between items-center text-left px-5 py-4 bg-white/3 hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-sm sm:text-base pr-4">{question}</span>
        <div className="flex-shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center">
          <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform duration-200", isOpen && "rotate-180")} />
        </div>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-5 py-4 bg-white/1 text-gray-400 text-sm leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
}
