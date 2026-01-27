import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, MapPin, Briefcase, Zap, 
  Check, ArrowRight, Target, Globe, Cpu, Users, Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Shared Animation Components ---

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="h-px w-6 bg-blue-600"></span>
    <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
      {children}
    </span>
  </div>
);


const About = () => {
    const navigate= useNavigate();
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO: Executive Summary */}
      <section className="relative pt-32 pb-32 px-6 border-b border-slate-100 overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white -z-10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <SectionLabel>About Aultum</SectionLabel>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-10 text-slate-900 leading-[1.05]">
              Closing the <br />
              <span className="text-slate-300">Execution Gap.</span>
            </h1>
            
            <div className="grid md:grid-cols-12 gap-12 items-start mt-16 border-t border-slate-200 pt-12">
              <div className="md:col-span-8">
                <p className="text-xl md:text-3xl text-slate-500 leading-tight font-light">
                  Aultum was built to solve a specific problem: <span className="text-slate-900 font-medium">Software Adoption.</span>
                </p>
                <p className="mt-6 text-lg text-slate-500 max-w-2xl leading-relaxed">
                  The gap is not technology—it’s execution. We move technology from "purchased" to "proficiently used."
                </p>
              </div>
              
              <div className="md:col-span-4 md:border-l md:border-slate-200 md:pl-12">
                 <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-2">Definition</p>
                 <p className="text-base text-slate-600 leading-loose">
                   A SaaS growth and deployment platform helping businesses adopt technology faster and more effectively.
                 </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE PROBLEM: Clean Split */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-4xl font-semibold mb-6 tracking-tight text-slate-900">The Reality of Software</h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Too many businesses invest in tools that never get implemented properly. Teams buy software, but deployment is delayed, setup is incomplete, and real usage never happens.
            </p>
            
            <div className="pl-6 border-l-2 border-blue-600">
              <p className="text-xl text-slate-900 font-medium italic">
                "The friction isn't in the code—it's in the daily habits of teams."
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            {/* Graphic: No Usage Found */}
            <div className="relative aspect-square md:aspect-[4/3] bg-slate-50 rounded-3xl border border-slate-100 p-8 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
               
               <div className="relative bg-white p-8 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 w-64 rotate-3">
                 <div className="flex justify-between items-center mb-6">
                    <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                      <Zap size={16} className="text-red-500" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                 </div>
                 <div className="h-2 w-20 bg-slate-100 rounded mb-2"></div>
                 <div className="h-2 w-32 bg-slate-100 rounded mb-8"></div>
                 <div className="h-10 w-full bg-slate-50 rounded border border-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                   Status: Dormant
                 </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. WHAT WE DO: Solution Pillars */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 max-w-2xl">
             <SectionLabel>Our Solution</SectionLabel>
             <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">What Aultum Does</h2>
             <p className="text-slate-500 text-lg">We bring together software, automation, and humans to ensure technology actually works inside your business.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Layers, 
                title: "Business-Ready Software", 
                desc: "Curated products for immediate impact. We filter out the noise and deliver tools ready for deployment." 
              },
              { 
                icon: Zap, 
                title: "Growth Automation", 
                desc: "Streamlining operations to reduce manual workload and accelerate growth automatically." 
              },
              { 
                icon: MapPin, 
                title: "On-Ground Network", 
                desc: "A nationwide network of tech professionals for real, physical deployment and support." 
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
                <div className="mb-8 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPROACH: Doorstep-First (Dark Section) */}
      <section className="py-32 px-6 bg-[#0F172A] text-white overflow-hidden relative">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 border border-blue-500/20">
                <Globe size={14} /> Doorstep-First Approach
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight tracking-tight">
                Beyond the <br/><span className="text-slate-500">Dashboard.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                Technology should not stop at access credentials. Aultum enables on-site setup, configuration, and training through a verified network of tech professionals across India.
              </p>
              
              <div className="space-y-6 border-t border-slate-800 pt-8">
                {[
                  "On-site setup & configuration",
                  "Proper implementation guaranteed",
                  "Active usage ensured"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                      <Check size={14} />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors font-light">{text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative h-full">
              {/* Glassmorphism Card */}
              <div className="h-full w-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-[2.5rem] p-1 border border-slate-700/50">
                <div className="h-full w-full bg-[#0F172A] rounded-[2.3rem] p-12 flex flex-col justify-between relative overflow-hidden min-h-[450px]">
                   
                   <div className="relative z-10">
                     <Cpu size={56} className="text-blue-500 mb-8" strokeWidth={1} />
                   </div>
                   
                   <div className="mt-auto relative z-10">
                     <h4 className="text-2xl font-semibold mb-4 text-white">The Aultum Network</h4>
                     <p className="text-slate-400 leading-relaxed">Powered by a growing network of trained professionals delivering consistent deployments across cities and regions. Reliability meets reach.</p>
                   </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. TARGET AUDIENCE */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Built For Real Businesses</SectionLabel>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">If execution matters, Aultum fits.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Founders", sub: "Scaling operations" },
              { title: "Agencies", sub: "Delivering tech to clients" },
              { title: "Growing Biz", sub: "Adopting multiple tools" },
              { title: "Partners", sub: "Service-driven revenue" }
            ].map((card, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-default border border-slate-100 h-full">
                  <h4 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{card.title}</h4>
                  <p className="text-sm text-slate-500">{card.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PHILOSOPHY: How We Think */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <SectionLabel>Philosophy</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">How We Think</h2>
            </div>
            <p className="text-slate-500 max-w-sm text-right hidden md:block text-lg">
              We prioritize clarity over complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
             {[
                { title: "Practicality", text: "Implementation over feature overload. We focus on how software performs in daily operations, not just how it looks." },
                { title: "Automation", text: "We respect human time. We ruthlessly automate repetitive tasks to free up creativity and reduce manual work." },
                { title: "Accountability", text: "From deployment to usage. We take ownership of the outcome ensuring the value is actually realized." }
              ].map((principle, idx) => (
                <FadeIn key={idx} delay={idx * 0.2} className="border-t border-slate-200 pt-8">
                  <div className="mb-6 text-slate-300">
                    <Target size={24} strokeWidth={1} />
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 mb-3">{principle.title}</h4>
                  <p className="text-slate-500 text-base leading-relaxed">{principle.text}</p>
                </FadeIn>
              ))}
          </div>
        </div>
      </section>

      {/* 7. MISSION & VISION: Redesigned Professional Grid */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          
          <FadeIn>
            <div className="grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
              
              {/* Mission Block */}
              <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-8">
                    <Target size={24} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">Our Mission</span>
                  <h3 className="text-2xl md:text-3xl font-medium text-slate-900 leading-tight">
                    To help businesses adopt, deploy, and scale technology without friction.
                  </h3>
                </div>
              </div>

              {/* Vision Block */}
              <div className="p-12 md:p-16 flex flex-col justify-between bg-slate-50/50">
                <div>
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-900 mb-8">
                    <Eye size={24} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">Our Vision</span>
                  <h3 className="text-2xl md:text-3xl font-medium text-slate-500 leading-tight">
                    To build a trusted ecosystem where software, automation, and on-ground execution work as one.
                  </h3>
                </div>
              </div>

            </div>

            <div className="mt-16 text-center">
              <button onClick={()=> navigate("/register")} className="bg-black text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3 group">
                Join the Network 
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  );
};

export default About;
