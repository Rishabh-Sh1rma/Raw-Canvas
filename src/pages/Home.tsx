import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Play, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/utils/cn";

export function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center">
        {/* Background Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" 
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            Content that captures.<br />
            <span className="text-gray-400">Marketing that converts.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop shouting into the void. We create the high-calibre content that earns your audience's attention, then deploy the precision marketing that turns that attention into profit. From the first frame of a video to the final line of code on your site, we handle the grind so you can handle the growth.
          </p>
          <a href="https://calendly.com/pulkit-rawcanvas/discovery-call-x-pulkit" target="_blank" rel="noopener noreferrer" className="bg-[#c2f2d0] text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-[#a7e8b9] transition-colors inline-flex items-center gap-2">
            Schedule a Call
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-32 max-w-6xl mx-auto w-full border-t border-white/10 pt-16"
        >
          <Stat value="20+" label="Projects launched" />
          <Stat value="2+" label="Years of experience" />
          <Stat value="96%" label="Client satisfaction" />
          <Stat value="20+" label="Brands evolved" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 relative" id="about">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" 
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
              We don't just create content<br />
              <span className="text-gray-500">we engineer client acquisition systems.</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-400"
          >
            <p>
              We partner with service businesses, founders, and high-ticket brands to turn their expertise into authority at scale.
            </p>
            <p>
              Through strategy-led content, high-performance paid campaigns, and precision production, we build media ecosystems that attract the right clients and convert attention into revenue.
            </p>
            <p>
              Our focus isn't vanity metrics — it's qualified conversations, deal flow, and predictable growth.
            </p>
            <a href="https://calendly.com/pulkit-rawcanvas/discovery-call-x-pulkit" target="_blank" rel="noopener noreferrer" className="mt-8 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 w-fit">
              Let's Talk <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>



      {/* Services */}
      <section className="py-32 px-6 relative">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" 
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-center"
          >
            Digital Services That Scale<br />Your Business
          </motion.h2>
          <div className="space-y-4">
            <ServiceCard 
              title="Creative Content" 
              description="From messaging and scripting to filming and editing, every piece is crafted to build credibility and drive meaningful engagement."
            />
            <ServiceCard 
              title="High-Performance Paid Growth" 
              description="We plan, launch, and optimise paid campaigns that generate qualified demand."
            />
            <ServiceCard 
              title="Lead Qualification & Pipeline" 
              description="We implement systems that capture, qualify, and route leads efficiently ensuring you spend time only on serious opportunities while maintaining visibility across your pipeline."
            />
            <ServiceCard 
              title="Performance Analytics" 
              description="We track performance across channels, extract insights, and refine strategy to scale what works while maintaining efficiency and lead quality over time."
            />

          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-32 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">Selected Projects</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl mx-auto">
              Curated campaigns built for impact by the Raw Canvas team.
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Zood" 
              tags={['Branding', 'Website Development', 'Performance Marketing']}
              image="https://i.ibb.co/PvysnB8L/image1.jpg"
              delay={0.1}
            />
            <ProjectCard 
              title="Dr. Miguel Mascaró" 
              tags={['Performance Marketing', 'Content Management']}
              image="https://i.ibb.co/dsq3M6Px/Whats-App-Image-2026-03-16-at-7-41-31-PM.jpg"
              delay={0.2}
            />
            <ProjectCard 
              title="Bull Market Blueprint" 
              tags={['Branding', 'Performance Marketing', 'Content Management']}
              image="https://i.ibb.co/N2C33WKV/Whats-App-Image-2026-03-16-at-7-40-54-PM.jpg"
              delay={0.3}
            />
            <ProjectCard 
              title="9 Media online" 
              tags={['Branding', 'Website Development', 'Performance Marketing']}
              image="https://i.ibb.co/W43CKqg8/image.jpg"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 relative" id="process">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" 
        />
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">How we work?</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-3xl mx-auto">
              We Simplify The Journey From Design To Launch.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ProcessStep 
              step="01"
              title="Kickoff"
              description="We start by deeply understanding your business, offer, and growth objectives. Through research, positioning, and audience insight, we define the narrative, messaging angles, and strategic roadmap needed to attract high-value clients and build authority in your market."
              tags={['Comprehensive Discovery call', 'Project Roadmap']}
              delay={0.1}
            />
            <ProcessStep 
              step="02"
              title="Content & Production"
              description="We plan and execute high-impact content designed to build trust and demand. From pre-production and scripting to filming and editing, every asset is crafted to communicate your expertise and perform across social and paid channels."
              tags={['On Site Shoots', 'Production']}
              delay={0.2}
            />
            <ProcessStep 
              step="03"
              title="Launch, Distribution & Pipeline Setup"
              description="We deploy campaigns, paid ads, and distribution systems while setting up lead capture, qualification flows, and booking infrastructure. Everything is built to convert attention into qualified conversations and measurable opportunities."
              tags={['Qualified Conversations', 'Predictable Deal Flow']}
              delay={0.3}
            />
            <ProcessStep 
              step="04"
              title="Optimise & Scale Performance"
              description="Once live, we continuously monitor performance, refine creatives, and optimise campaigns to improve efficiency and results. By doubling down on what works, we scale your inbound pipeline while maintaining lead quality and predictable growth."
              tags={['Optimization', 'Inbound Outreach']}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 bg-white/5 relative">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" 
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center relative overflow-hidden" id="contact">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
            Want to work with us?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's start with a discovery call to understand what you need.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://calendly.com/pulkit-rawcanvas/discovery-call-x-pulkit" target="_blank" rel="noopener noreferrer" className="bg-[#c2f2d0] text-black px-10 py-5 rounded-full font-medium text-xl hover:bg-[#a7e8b9] transition-colors inline-flex items-center gap-2"
          >
            Book a call
          </motion.a>
        </motion.div>
      </section>

      {/* Philosophy & Mission */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-20 text-center max-w-4xl mx-auto"
          >
            Your strategic partners creating influence, generating demand, and building reliable growth systems.
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
            {/* Left side: Text with vertical line */}
            <div className="relative pl-8 md:pl-12">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 to-transparent" 
              />
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8 text-gray-300 text-lg leading-relaxed"
              >
                <p>We're a team of strategists, creators, and performance operators focused on helping businesses attract high-value clients through intelligent media systems.</p>
                <p>Our work sits at the intersection of strategy, storytelling, and performance, combining deep market understanding with high-impact content and data-driven campaigns to create sustainable growth.</p>
                <p>We don't believe in fragmented marketing efforts or vanity metrics. Instead, we design systems that build trust, generate demand, and turn attention into meaningful conversations.</p>
                <p>When you work with us, you're not hiring an agency, you're partnering with a team invested in building your long-term growth engine.</p>
              </motion.div>
            </div>

            {/* Right side: Cards */}
            <div className="space-y-8 relative">
              {/* Background Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#c2f2d0]/10 rounded-full blur-[100px] pointer-events-none" 
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-10 relative z-10 shadow-2xl"
              >
                <h3 className="text-2xl font-medium mb-6 text-white">Our Philosophy</h3>
                <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                  <p>Growth isn't random — it's engineered.</p>
                  <p>By aligning positioning, content, and distribution, we help businesses establish authority in their category and create consistent inbound opportunities that compound over time.</p>
                  <p>Our focus is simple: clarity, execution, and measurable outcomes.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-10 relative z-10 shadow-2xl"
              >
                <h3 className="text-2xl font-medium mb-6 text-white">Our Mission</h3>
                <ul className="space-y-3 text-gray-400 text-base">
                  <li>Strategy first, execution second</li>
                  <li>Built for high-ticket client acquisition</li>
                  <li>Authority-driven growth approach</li>
                  <li>Integrated production + performance</li>
                  <li>Long-term partnership mindset</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-6 bg-white/5 relative">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" 
        />
        <div className="max-w-4xl mx-auto relative z-10">
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
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">{label}</div>
      <div className="text-5xl md:text-6xl font-medium">{value}</div>
    </div>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">{title}</h3>
        <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform", isOpen && "rotate-180")} />
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 text-gray-400 leading-relaxed"
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  );
}

function ProjectCard({ title, tags, image, delay = 0 }: { title: string; tags: string[]; image: string; delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
      </div>
      <h3 className="text-2xl font-medium mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs font-medium text-gray-400 uppercase tracking-wider border border-white/10 rounded-full px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProcessStep({ step, title, description, tags, delay = 0 }: { step: string; title: string; description: string; tags: string[]; delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all hover:bg-white/10"
    >
      <div className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">Step {step}</div>
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-8">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, i) => (
          <span key={i} className="bg-white/10 text-white text-sm px-4 py-2 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
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
