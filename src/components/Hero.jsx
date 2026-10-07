import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Scale, Globe2, Building2, Award, Landmark } from 'lucide-react';
import { heroData } from '../data/firmData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[96vh] pt-36 pb-20 md:pt-44 md:pb-28 flex flex-col justify-center items-center text-center overflow-hidden border-b border-gold/30"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-BLEED DRAMATIC NEOCLASSICAL ARCHITECTURAL BACKGROUND
         ───────────────────────────────────────────────────────────── */}
      
      {/* High-Resolution Architectural Photography Layer with Slow Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <motion.img
          src="/hero-palace-bg.jpg"
          alt="Kshetry & Co. Supreme Court Architectural Portico"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08]"
        />
        
        {/* Luxury Editorial Overlay: Blends the grand architecture with warm ivory & gold ambience */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF8F2]/90 via-[#F8F4EB]/70 to-[#F2EADB]/95 backdrop-blur-[1px]" />
        
        {/* Warm Amber & Burgundy Radial Spotlight behind Center Headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-champagne/40 via-gold/20 to-burgundy/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle Vignette Gradient at Edges */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-ivory/30 to-ivory/80 pointer-events-none" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. ELEGANT CELESTIAL WATERMARK HAIRLINES (GLOBAL TRANSIT)
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 flex items-center justify-center">
        <svg viewBox="0 0 1200 800" className="w-full h-full max-w-7xl" fill="none">
          {/* Subtle Golden Celestial Coordinates Arcs */}
          <ellipse cx="600" cy="420" rx="550" ry="240" stroke="#C8A15A" strokeWidth="1" strokeDasharray="5 5" />
          <ellipse cx="600" cy="420" rx="380" ry="160" stroke="#C8A15A" strokeWidth="0.8" />
          <ellipse cx="600" cy="420" rx="200" ry="85" stroke="#C8A15A" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="100" y1="420" x2="1100" y2="420" stroke="#C8A15A" strokeWidth="0.8" strokeDasharray="6 4" opacity="0.6" />
        </svg>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. CENTERED HERO CONTENT (AUTHORITATIVE & COMMANDING)
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Eyebrow: Centered with Symmetrical Gold Double Notches */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6"
        >
          <span className="w-8 sm:w-12 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-gold" />
          <span className="w-1.5 h-1.5 rotate-45 bg-gold flex-shrink-0" />
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.28em] uppercase text-burgundy drop-shadow-sm">
            {heroData.eyebrow}
          </span>
          <span className="w-1.5 h-1.5 rotate-45 bg-gold flex-shrink-0" />
          <span className="w-8 sm:w-12 h-[1.5px] bg-gradient-to-l from-transparent via-gold to-gold" />
        </motion.div>

        {/* H1 Headline: Masked Line-by-Line with Crisp Contrast */}
        <div className="space-y-2 mb-6 max-w-4xl">
          {/* Line 1: Trusted Legal Advisors */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-semibold leading-[1.05] text-burgundy tracking-[-0.01em] drop-shadow-[0_2px_12px_rgba(255,255,255,0.8)]"
            >
              {heroData.titlePrimary}
            </motion.h1>
          </div>

          {/* Line 2: for a Global Tomorrow (Metallic Gold Shimmer) */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-normal leading-[1.05]"
            >
              <span
                className="gold-shimmer"
                style={{
                  background: 'linear-gradient(135deg, #A8762D 0%, #E2C278 38%, #8E5C1B 70%, #D4AC5F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 4px rgba(168,118,45,0.35))',
                }}
              >
                {heroData.titleSecondary}
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Editorial Description: Generous Readability with subtle backdrop enhancement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-[#231F20] text-base sm:text-lg md:text-[1.22rem] leading-[1.8] max-w-3xl mx-auto font-normal mb-8 drop-shadow-[0_1px_8px_rgba(255,255,255,0.7)]"
        >
          {heroData.paragraph}
        </motion.p>

        {/* Centered Core Disciplines Architectural Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="bg-white/90 backdrop-blur-md border border-gold/50 px-6 sm:px-8 py-4 mb-9 max-w-3xl shadow-[0_8px_25px_rgba(59,7,24,0.06)]"
        >
          <div className="text-[9.5px] font-sans font-bold uppercase tracking-[0.24em] text-gold mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>PRIMARY TRANSNATIONAL ENGAGEMENT PRACTICES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-y-2 text-[11px] sm:text-[12px] font-sans font-semibold uppercase tracking-[0.16em] text-charcoal">
            {heroData.disciplines.map((item, idx) => (
              <React.Fragment key={item}>
                <span className="hover:text-burgundy transition-colors cursor-default">{item}</span>
                {idx < heroData.disciplines.length - 1 && (
                  <span className="mx-3 text-gold font-light opacity-90">◆</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Centered Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8 w-full sm:w-auto"
        >
          {/* Primary Burgundy CTA with Gold Bevel */}
          <button
            onClick={() => scrollTo('practice')}
            className="group relative overflow-hidden bg-burgundy hover:bg-burgundyDark text-white font-sans text-xs uppercase font-semibold tracking-[0.18em] px-9 py-4 sm:py-4.5 border border-burgundy hover:border-gold transition-all duration-300 shadow-[0_12px_28px_rgba(111,16,40,0.25)] hover:-translate-y-0.5 text-center w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>EXPLORE OUR PRACTICE AREAS</span>
              <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
            <span className="absolute inset-0 bg-[#4F071A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
          </button>

          {/* Secondary Editorial CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="group bg-white/95 hover:bg-white text-burgundy border-2 border-gold hover:border-burgundy font-sans text-xs uppercase font-semibold tracking-[0.18em] px-8 py-4 sm:py-4.5 flex items-center justify-center gap-2.5 transition-all duration-300 shadow-sm w-full sm:w-auto"
          >
            <span>CONNECT WITH US</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Centered Credibility & Jurisdictional Corridor Micro-strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10.5px] font-sans font-semibold uppercase tracking-[0.2em] text-charcoal/80 bg-white/60 backdrop-blur-sm px-5 py-2 border border-gold/30"
        >
          <span className="flex items-center gap-1.5 text-burgundy">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>ESTABLISHED 2009</span>
          </span>
          <span className="text-gold">◆</span>
          <span>INDIA</span>
          <span>•</span>
          <span>UAE</span>
          <span>•</span>
          <span>UK</span>
          <span>•</span>
          <span>USA</span>
          <span>•</span>
          <span>THAILAND</span>
          <span className="text-gold">◆</span>
          <span className="text-burgundy font-bold">LCIA &amp; DIAC ADVOCACY</span>
        </motion.div>

      </div>

      {/* Symmetrical Scroll Indicator at Bottom Center */}
      <div className="mt-14 md:mt-18 flex flex-col items-center justify-center text-center relative z-10">
        <span className="text-[9.5px] font-sans font-semibold tracking-[0.3em] text-charcoal/60 uppercase mb-2">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1.5px] h-10 bg-gold/50 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 40] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: 'easeInOut',
            }}
            className="w-full h-3.5 bg-burgundy rounded-full shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
