import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2, Scale, Building2, Shield, Globe } from 'lucide-react';
import Reveal from './Reveal';
import { practiceAreas } from '../data/firmData';

export default function Practice() {
  const [activePracticeIndex, setActivePracticeIndex] = useState(0);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const toggleMobileExpand = (index) => {
    setExpandedMobileIndex(expandedMobileIndex === index ? null : index);
  };

  const scrollToContact = () => {
    setShowAllModal(false);
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth'
      });
    }
  };

  const currentPractice = practiceAreas[activePracticeIndex];

  return (
    <section id="practice" className="py-24 md:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-gold/30">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1.5px] bg-gold" />
                <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-burgundy">
                  AREAS OF COUNSEL
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-burgundy leading-[1.12]">
                Comprehensive Legal Solutions Across Jurisdictions
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-sans text-charcoal/70 text-base md:text-lg font-light mt-3">
                Integrated legal counsel for complex matters.
              </p>
            </Reveal>
          </div>

          <div className="mt-6 md:mt-0 flex-shrink-0">
            <span className="text-xs font-mono tracking-widest text-gold uppercase font-medium">
              12 SPECIALIZED DISCIPLINES
            </span>
          </div>
        </div>

        {/* Desktop View: Interactive Numbered Editorial List + Harmonious Executive Dossier */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-10 items-start">
          
          {/* Left Column: 12 Practice Rows with Burgundy Flood on Hover */}
          <div className="lg:col-span-7 xl:col-span-7 divide-y divide-gold/25 border-y border-gold/25">
            {practiceAreas.map((item, idx) => {
              const isActive = activePracticeIndex === idx;

              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setActivePracticeIndex(idx)}
                  className="relative group cursor-pointer overflow-hidden transition-colors duration-300"
                >
                  {/* Left-to-Right Burgundy Flood Fill */}
                  <div
                    className={`absolute inset-0 bg-burgundy transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -z-0 ${
                      isActive ? 'translate-x-0' : '-translate-x-full'
                    }`}
                  />

                  {/* Row Content */}
                  <div className="relative z-10 py-5 px-6 flex items-baseline justify-between transition-colors duration-300">
                    <div className="flex items-baseline gap-6 max-w-2xl">
                      {/* Big Numeral */}
                      <span
                        className={`font-serif text-2xl font-light transition-colors duration-300 flex-shrink-0 ${
                          isActive ? 'text-gold' : 'text-gold/80'
                        }`}
                      >
                        {item.number}
                      </span>

                      <div>
                        {/* Title */}
                        <h3
                          className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${
                            isActive ? 'text-ivory font-normal' : 'text-burgundy font-medium'
                          }`}
                        >
                          {item.title}
                        </h3>

                        {/* One Line Description */}
                        <p
                          className={`font-sans text-xs md:text-sm font-light mt-1 leading-relaxed transition-colors duration-300 ${
                            isActive ? 'text-champagne/90' : 'text-charcoal/75'
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="pl-4 flex-shrink-0 self-center">
                      <ArrowRight
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActive
                            ? 'text-gold translate-x-1 opacity-100'
                            : 'text-burgundy/40 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-End Executive Practice Dossier Card (Redesigned & Elevated) */}
          <div className="lg:col-span-5 xl:col-span-5 sticky top-28">
            <div className="border-2 border-gold/50 bg-gradient-to-b from-[#FDFCF9] via-[#FAF6EE] to-[#F5EFE4] p-7 shadow-[0_20px_50px_-15px_rgba(59,7,24,0.12)] relative">
              
              {/* Corner Ornamental Accents */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-gold" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-gold" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-gold" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-gold" />

              {/* Dossier Header */}
              <div className="flex items-center justify-between border-b border-gold/30 pb-3.5 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-burgundy">
                    PRACTICE MANDATE DOSSIER
                  </span>
                </div>
                <div className="flex items-baseline gap-1 font-serif text-gold font-light">
                  <span className="text-2xl text-burgundy font-medium">{currentPractice.number}</span>
                  <span className="text-sm opacity-60">/ 12</span>
                </div>
              </div>

              {/* Practice Headline & Focus */}
              <div className="mb-5">
                <h3 className="font-serif text-2xl sm:text-[26px] text-burgundy font-semibold leading-snug mb-2">
                  {currentPractice.title}
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-charcoal/80 font-light leading-relaxed">
                  {currentPractice.description}
                </p>
              </div>

              {/* Refined Architectural Engraving Vignette (Replaces the awkward dark maroon box) */}
              <div className="relative bg-gradient-to-tr from-[#F1E8D6] via-[#FAF6EE] to-[#EFE5D1] border border-gold/40 p-4 mb-5 shadow-inner overflow-hidden">
                {/* Subtle Geometric Background Watermark */}
                <div className="absolute right-2 -bottom-4 w-28 h-28 opacity-10 pointer-events-none">
                  <Scale className="w-full h-full text-burgundy stroke-[1]" />
                </div>

                <div className="relative z-10 flex flex-col justify-between min-h-[90px]">
                  <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-gold uppercase border-b border-gold/20 pb-1.5 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-gold" />
                      <span>CORRIDOR FOCUS</span>
                    </span>
                    <span className="text-burgundy font-bold">KSHETRY &amp; CO.</span>
                  </div>

                  <div>
                    <span className="text-[9.5px] font-sans font-bold uppercase tracking-wider text-charcoal/70 block mb-0.5">
                      Practice Context &amp; Registry Archetype:
                    </span>
                    <p className="font-serif italic text-sm text-burgundy font-medium leading-tight">
                      &ldquo;{currentPractice.imageTheme}&rdquo;
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-gold/20 flex items-center justify-between text-[9px] font-mono tracking-wider text-charcoal/60 uppercase">
                    <span>✦ TRANSNATIONAL SCOPE ✦</span>
                    <span className="text-gold font-semibold">PAN-CORRIDOR</span>
                  </div>
                </div>
              </div>

              {/* Core Practice Scopes with Refined Diamond Bullets */}
              <div className="space-y-3 mb-6">
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-burgundy/90 flex items-center justify-between">
                  <span>KEY ADVISORY &amp; ENGAGEMENT MATTERS</span>
                  <span className="text-gold font-mono text-[9px]">4 VERTICALS</span>
                </div>

                <div className="space-y-2 bg-white/70 border border-gold/25 p-3.5">
                  {currentPractice.scope.map((item, idx) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs font-sans text-charcoal/85 leading-tight">
                      <span className="font-mono text-[10px] text-gold font-bold flex-shrink-0 mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Refined & Elegant */}
              <button
                onClick={scrollToContact}
                className="group w-full relative overflow-hidden bg-burgundy hover:bg-burgundyDark text-white text-xs uppercase font-sans font-semibold tracking-[0.16em] py-3.5 border border-burgundy hover:border-gold transition-all duration-300 shadow-sm text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  <span>CONSULT PRACTICE HEAD</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1.5 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-[#4D0619] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />
              </button>
            </div>
          </div>

        </div>

        {/* Mobile View: Accordion style with clean architectural vignette */}
        <div className="lg:hidden space-y-3">
          {practiceAreas.map((item, idx) => {
            const isExpanded = expandedMobileIndex === idx;

            return (
              <div
                key={item.number}
                className="border border-gold/30 bg-white/90 transition-colors duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleMobileExpand(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-xl text-gold font-light">{item.number}</span>
                    <h3 className="font-serif text-xl text-burgundy font-medium">{item.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden px-5 pb-6 pt-2 border-t border-gold/15 bg-[#FAF6EE]"
                    >
                      <p className="font-sans text-sm text-charcoal/85 font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Clean Mobile Vignette */}
                      <div className="bg-white/80 border border-gold/30 p-3.5 mb-4 text-xs font-sans">
                        <div className="flex items-center justify-between text-[9px] font-mono uppercase text-gold mb-1">
                          <span>ENGAGEMENT CONTEXT</span>
                          <span>{item.number} / 12</span>
                        </div>
                        <p className="font-serif italic text-burgundy text-sm font-medium">
                          &ldquo;{item.imageTheme}&rdquo;
                        </p>
                      </div>

                      <div className="space-y-1.5 mb-5 bg-white/70 border border-gold/20 p-3">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-burgundy block mb-1">
                          Core Practice Scopes:
                        </span>
                        {item.scope.map((s, sIdx) => (
                          <div key={s} className="text-xs font-sans text-charcoal/80 flex items-center gap-2">
                            <span className="text-[9px] font-mono text-gold font-bold">0{sIdx + 1}.</span>
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={scrollToContact}
                        className="w-full bg-burgundy hover:bg-burgundyDark text-white font-sans text-xs uppercase font-semibold tracking-wider py-3 text-center transition-colors"
                      >
                        ENQUIRE FOR THIS PRACTICE →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button per brief: "VIEW ALL PRACTICE AREAS →" */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAllModal(true)}
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase font-semibold tracking-super-wide text-burgundy border-b-2 border-gold pb-1 hover:border-burgundy transition-colors"
          >
            <span>VIEW ALL PRACTICE AREAS</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* Full Practice Areas Directory Modal */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-burgundyDark/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-ivory border border-gold/50 shadow-elevated w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative text-left"
            >
              <div className="flex items-center justify-between border-b border-gold/30 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-super-wide text-gold">
                    PRACTICE DIRECTORY
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-burgundy font-medium mt-1">
                    Complete Legal Capabilities Across 12 Practice Domains
                  </h3>
                </div>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="p-2 text-charcoal/60 hover:text-burgundy"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {practiceAreas.map((p) => (
                  <div key={p.number} className="border border-gold/25 p-4 bg-white/60">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-serif text-lg text-gold font-light">{p.number}</span>
                      <h4 className="font-serif text-lg text-burgundy font-medium">{p.title}</h4>
                    </div>
                    <p className="font-sans text-xs text-charcoal/80 font-light leading-relaxed mb-3">
                      {p.description}
                    </p>
                    <div className="space-y-1">
                      {p.scope.map((sc) => (
                        <div key={sc} className="text-[11px] font-sans text-charcoal/70 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-gold flex-shrink-0" />
                          <span>{sc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-sans text-xs text-charcoal/60">
                  Custom advisory frameworks available for multi-jurisdictional mandates.
                </p>
                <button
                  onClick={scrollToContact}
                  className="bg-burgundy text-white font-sans text-xs uppercase font-semibold tracking-widest px-6 py-3"
                >
                  START PRACTICE ENQUIRY →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
