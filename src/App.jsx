import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  ShieldCheck,
  Zap,
  ChevronRight, 
  Menu, 
  X,
  Smartphone,
  CheckCircle2,
  Activity,
  Download,
  Globe,
  Clock,
  DollarSign,
  Layers,
  Ruler,
  Sparkles
} from 'lucide-react';
import { content } from './locales';

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hours, setHours] = useState(4.5);
  const [lang, setLang] = useState('en');

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculator Logic
  const rawRevenue = 5 * hours * 40 * 360;
  const ebitda = rawRevenue * 0.60;

  const formatter = new Intl.NumberFormat(lang === 'es' ? 'es-US' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  return (
    <div className={`min-h-screen text-white selection:bg-brand-primary selection:text-brand-darker ${lang === 'es' ? 'lang-es' : ''}`}>
      {/* --- DEEP BLUE FLOW BACKGROUND --- */}
      <div className="fixed inset-0 z-[-2] deep-blue-bg"></div>
      {/* Gradiente de transición suave entre secciones */}
      <div className="fixed inset-0 z-[-1] bg-[url('/images/grain.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      {/* ---------------- NAVIGATION (Premium) ---------------- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-darker/80 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20 group-hover:scale-105 transition-transform">
              <span className="font-heading font-black text-brand-darker text-xl">P</span>
            </div>
            <span className="font-heading font-black text-xl tracking-tight">
              {t.nav.brand} <span className="text-brand-primary">{t.nav.brandSub}</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#why-now" className="text-sm font-semibold transition-all hover:text-brand-primary text-zinc-300 hover:scale-105">{t.nav.market}</a>
            <a href="#galeria" className="text-sm font-semibold transition-all hover:text-brand-primary text-zinc-300 hover:scale-105">{t.nav.project}</a>
            <a href="#roi" className="text-sm font-semibold transition-all hover:text-brand-primary text-zinc-300 hover:scale-105">{t.nav.profitability}</a>
            
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 text-sm font-semibold transition-all hover:text-brand-primary text-zinc-300 border border-white/10 px-3 py-1.5 rounded-full hover:border-brand-primary"
            >
              <Globe size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <a href="#contacto" className="bg-brand-primary text-brand-darker px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50">
              {t.nav.cta}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1 text-sm font-bold text-white bg-white/10 px-3 py-1.5 rounded-full"
            >
              <Globe size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button 
              className="text-white bg-white/10 p-2 rounded-xl backdrop-blur"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-full left-0 w-full glass-panel py-6 px-6 flex flex-col gap-5 border-t border-white/10 rounded-b-3xl">
            <a href="#why-now" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold block py-2">{t.nav.market}</a>
            <a href="#galeria" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold block py-2">{t.nav.project}</a>
            <a href="#roi" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold block py-2">{t.nav.profitability}</a>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-primary text-brand-darker text-center font-black py-4 rounded-xl mt-4 shadow-lg">
              {t.nav.cta}
            </a>
          </motion.div>
        )}
      </nav>

      {/* ---------------- HERO SECTION (Numbers First) ---------------- */}
      <section className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/images/render_aereo.jpg" 
            alt="Padel Court Background" 
            className="w-full h-full object-cover object-bottom opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-transparent to-brand-darker"></div>
        </div>

        <div className="max-w-7xl relative z-10 px-6 mx-auto w-full">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-bold tracking-wide mb-8 uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              {t.hero.badge}
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent leading-[1.05] tracking-tighter mb-8 max-w-4xl hero-title">
              {t.hero.title1}<span className="opacity-90">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl font-sans font-light leading-relaxed text-white/80 max-w-2xl mb-12">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#contacto" className="group relative inline-flex items-center justify-center gap-3 bg-brand-primary text-brand-darker px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(141,224,44,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.btnPrimary}
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </a>
              <a href="#roi" className="inline-flex items-center justify-center gap-2 glass-panel text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors border border-white/20">
                <Activity size={20} className="text-brand-primary" />
                {t.hero.btnSecondary}
              </a>
            </div>

            {/* Key Metrics Highlight */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-white/10">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-black text-brand-primary">24.8%</p>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">{t.hero.irrLabel}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-black text-white">$600K</p>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">{t.hero.priceLabel}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-black text-white">{t.hero.statusLabel}</p>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">{t.hero.statusSub}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-black text-white">Cape Coral</p>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">{t.hero.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- HIGHLIGHTS & RESEARCH (Unified) ---------------- */}
      <section id="why-now" className="py-24 relative">
        <div className="max-w-7xl px-6 mx-auto">
          <Reveal>
            <div className="mb-20 text-center flex flex-col items-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                {t.highlights.title}
              </h2>
              <div className="w-10 h-1 bg-[#39FF14] mb-8"></div>
              <p className="text-xl font-sans font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
                {t.highlights.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: TrendingUp, title: t.highlights.card1Title, text: t.highlights.card1Text, delay: 0.1 },
              { icon: MapPin, title: t.highlights.card2Title, text: t.highlights.card2Text, delay: 0.2 },
              { icon: Clock, title: t.highlights.card3Title, text: t.highlights.card3Text, delay: 0.3, highlight: true },
              { icon: DollarSign, title: t.highlights.card4Title, text: t.highlights.card4Text, delay: 0.4 }
            ].map((card, idx) => (
              <Reveal key={idx} delay={card.delay}>
                <div className={`glass-panel p-8 rounded-[2rem] transition-all duration-300 hover:border-brand-primary/50 hover:scale-[1.02] h-full ${card.highlight ? 'border-brand-primary/30 bg-brand-primary/5' : ''}`}>
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${card.highlight ? 'bg-brand-primary text-brand-darker' : 'bg-white/10 text-brand-secondary'}`}>
                    <card.icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-blue-100/80 font-medium text-sm">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="glass-panel p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div className="md:w-5/12">
                   <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">{t.research.title}</h2>
                   <div className="h-1 w-10 bg-[#39FF14] mt-8"></div>
                </div>
                <div className="md:w-7/12">
                   <p className="text-xl font-sans font-light text-white/80 leading-relaxed">
                     {t.research.text}
                   </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- INTERACTIVE GALLERY (Enhanced) ---------------- */}
      <section id="galeria" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl px-6 mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-[#39FF14] font-sans font-bold tracking-[0.2em] uppercase mb-4 text-xs opacity-80">{t.gallery.badge}</h2>
                <h3 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                  {t.gallery.title}
                </h3>
                <div className="w-10 h-1 bg-[#39FF14] mt-8"></div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/images/render_01.jpg", badge: t.gallery.card1Badge, title: t.gallery.card1Title, span: "md:col-span-2" },
              { img: "/images/render_1.jpg", badge: t.gallery.card2Badge, title: t.gallery.card2Title, span: "" },
              { img: "/images/render_2.jpg", badge: t.gallery.card3Badge, title: t.gallery.card3Title, span: "" },
              { img: "/images/render_3.jpg", badge: t.gallery.card4Badge, title: t.gallery.card4Title, span: "" },
              { img: "/images/render_4.jpg", badge: null, title: t.gallery.card5Title, span: "" },
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className={`relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl ${item.span}`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-transparent to-transparent"></div>
                {item.badge && (
                  <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur px-3 py-1.5 rounded-full border border-white/20 text-xs font-black text-brand-darker shadow-lg">
                    {item.badge}
                  </div>
                )}
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="font-serif text-xl md:text-2xl font-bold text-white">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ROI DASHBOARD & CALCULATOR (Glassmorphism) ---------------- */}
      <section id="roi" className="py-24 relative">
        <div className="max-w-7xl px-6 mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                {t.roi.title}
              </h2>
              <div className="w-10 h-1 bg-[#39FF14] mb-8"></div>
              <p className="text-xl font-sans font-light text-white/80 leading-relaxed">
                {t.roi.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Table Comparison */}
            <Reveal delay={0.1}>
              <div className="glass-panel rounded-[2rem] p-8 h-full flex flex-col justify-center">
                <h3 className="font-heading text-2xl font-bold text-white mb-6">{t.roi.tableTitle}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-4 text-blue-100/70 font-semibold text-sm uppercase">{t.roi.col1}</th>
                        <th className="py-4 text-white font-bold">{t.roi.col2}</th>
                        <th className="py-4 text-brand-primary font-bold">{t.roi.col3}</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-4 text-blue-100 font-medium">{t.roi.row1Col1}</td>
                        <td className="py-4 font-bold text-white">{t.roi.row1Col2}</td>
                        <td className="py-4 font-bold text-white">{t.roi.row1Col3}</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-blue-100 font-medium">{t.roi.row2Col1}</td>
                        <td className="py-4 font-bold text-white">{t.roi.row2Col2}</td>
                        <td className="py-4 font-bold text-brand-secondary">{t.roi.row2Col3}</td>
                      </tr>
                      <tr className="bg-brand-primary/5">
                        <td className="py-4 text-blue-100 font-bold">{t.roi.row3Col1}</td>
                        <td className="py-4 font-black text-white">{t.roi.row3Col2}</td>
                        <td className="py-4 font-black text-brand-primary text-2xl">{t.roi.row3Col3}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>

            {/* Interactive Calculator - Glassmorphism Style */}
            <Reveal delay={0.2}>
              <div className="glass-panel rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
                <Sparkles className="absolute top-6 right-6 text-brand-primary/30" size={32} />
                
                <h3 className="font-heading text-2xl font-bold text-white mb-2 relative z-10">{t.roi.calcTitle}</h3>
                <p className="text-zinc-400 mb-8 relative z-10 text-sm">{t.roi.calcSubtitle}</p>
                
                <div className="relative z-10 space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-sm font-bold text-zinc-300">{t.roi.calcLabel}</label>
                      <span className="font-heading font-black text-4xl text-brand-primary">{hours}<span className="text-lg">h</span></span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="8" 
                      step="0.5"
                      value={hours} 
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                    />
                    <div className="flex justify-between text-xs text-zinc-500 font-bold mt-2">
                      <span>{t.roi.pesimistic}</span>
                      <span>{t.roi.realistic}</span>
                      <span>{t.roi.soldout}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div>
                      <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">{t.roi.gross}</h4>
                      <p className="font-heading text-2xl font-black text-white">{formatter.format(rawRevenue)}</p>
                    </div>
                    <div>
                      <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">{t.roi.ebitda}</h4>
                      <p className="font-heading text-2xl font-black text-brand-primary">{formatter.format(ebitda)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- DATA & PLANS (Technical Grid) ---------------- */}
      <section id="planos" className="py-24 relative technical-grid-bg border-t border-white/10">
        <div className="max-w-7xl relative z-10 px-6 mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
              <div className="max-w-3xl">
                <h2 className="text-[#39FF14] font-sans font-bold tracking-[0.2em] uppercase mb-4 text-xs opacity-80">{t.data.badge}</h2>
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
                  {t.data.title}
                </h2>
                <div className="w-10 h-1 bg-[#39FF14] mb-8"></div>
                <p className="text-xl font-sans font-light text-white/80 leading-relaxed">
                  {t.data.subtitle}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: MapPin, title: t.data.card1Title, text: t.data.card1Text },
              { icon: Building2, title: t.data.card2Title, text: t.data.card2Text },
              { icon: Zap, title: t.data.card3Title, text: t.data.card3Text },
              { icon: ShieldCheck, title: t.data.card4Title, text: t.data.card4Text }
            ].map((card, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="glass-panel p-8 rounded-3xl hover:border-brand-primary/50 transition-all h-full">
                  <div className="text-brand-primary mb-4">
                    <card.icon size={32} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{card.title}</h4>
                  <p className="text-blue-100/70 text-sm leading-relaxed">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mb-12">
               <h3 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">{t.data.plansTitle}</h3>
               <p className="text-xl font-sans font-light text-white/80 max-w-2xl leading-relaxed">{t.data.plansSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { img: "/images/plano_1.png", tag: t.data.plan1Tag, title: t.data.plan1Title, color: "bg-brand-primary" },
                { img: "/images/plano_2.png", tag: t.data.plan2Tag, title: t.data.plan2Title, color: "bg-amber-500" },
                { img: "/images/plano_3.png", tag: t.data.plan3Tag, title: t.data.plan3Title, color: "bg-brand-secondary" },
                { img: "/images/plano_4.png", tag: t.data.plan4Tag, title: t.data.plan4Title, color: "bg-zinc-200 text-brand-darker" }
              ].map((plan, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3]">
                  <img src={plan.img} alt={plan.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className={`${plan.color} text-brand-darker text-[10px] font-black tracking-wider py-1 px-3 rounded-full inline-block mb-2 shadow-lg`}>{plan.tag}</p>
                    <h4 className="text-white font-serif font-bold text-xl">{plan.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
               <a href="#contacto" className="inline-flex items-center gap-3 bg-white text-brand-darker px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl">
                 <Download size={20} />
                 {t.data.downloadFull}
               </a>
            </div>
          </Reveal>
        </div> 
      </section>

      {/* ---------------- CTA CONTACT (Final Push) ---------------- */}
      <section id="contacto" className="py-24 relative">
        <div className="max-w-5xl px-6 mx-auto">
          <Reveal>
            <div className="glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
                <div className="md:col-span-3">
                  <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-white">
                    {t.contact.title}
                  </h2>
                  <p className="text-xl text-blue-100/80 mb-8 font-medium">
                    {t.contact.subtitle}
                  </p>
                  
                  <ul className="space-y-5 text-white/90 font-bold mb-8">
                    <li className="flex gap-3"><CheckCircle2 className="text-brand-primary shrink-0" /> {t.contact.check1}</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-brand-primary shrink-0" /> {t.contact.check2}</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-brand-primary shrink-0" /> {t.contact.check3}</li>
                  </ul>
                </div>
                
                <div className="md:col-span-2 bg-white/5 backdrop-blur p-6 rounded-[2rem] border border-white/10">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none font-medium placeholder-white/40 text-white" placeholder={t.contact.name} required />
                    <input type="email" className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none font-medium placeholder-white/40 text-white" placeholder={t.contact.email} required />
                    <input type="tel" className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none font-medium placeholder-white/40 text-white" placeholder={t.contact.phone} required />
                    
                    <button type="submit" className="w-full bg-brand-primary text-brand-darker font-bold text-lg py-4 rounded-xl mt-4 hover:bg-brand-primary/90 transition-all flex justify-center items-center gap-2 group shadow-[0_0_20px_rgba(141,224,44,0.3)]">
                      {t.contact.submit}
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[11px] text-zinc-400 text-center font-medium px-4 leading-tight mt-3">
                      {t.contact.protect}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FOOTER (Clean & Minimal) ---------------- */}
      <footer className="text-white/40 py-12 border-t border-white/10 relative">
        <div className="max-w-7xl px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-xl tracking-tight text-white/80">
              {t.nav.brand} <span className="text-white/40">{t.nav.brandSub}</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm font-semibold">
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;