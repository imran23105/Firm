import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from './Reveal';
import { firmData } from '../data/firmData';

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 70%']
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#ECE3D4] via-[#F7F1E7] to-[#EDE3D2] border-y border-gold/25 relative overflow-hidden">
      {/* Subtle background ambient seal & radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gold/15 pointer-events-none -mr-32" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-gold/40 via-gold to-gold" />
              <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-burgundy">
                OUR JOURNEY
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.18] mb-4">
              <span className="text-gradient-burgundy">{firmData.journeyHeading}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-xs sm:text-sm font-semibold tracking-super-wide uppercase text-gradient-gold">
              {firmData.journeyTagline}
            </p>
          </Reveal>
        </div>

        {/* Vertical Timeline with Scroll Progress Line & Popping Dots */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto pl-6 sm:pl-10 md:pl-16">
          
          {/* Static Background Vertical Track */}
          <div className="absolute left-[11px] sm:left-[19px] md:left-[27px] top-4 bottom-4 w-[1.5px] bg-gold/20" />

          {/* Animated Gold Line that Draws Down on Scroll */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-[11px] sm:left-[19px] md:left-[27px] top-4 bottom-4 w-[2.5px] bg-gradient-to-b from-gold via-[#E8CF8C] to-gold origin-top shadow-sm"
          />

          <div className="space-y-14 md:space-y-20">
            {firmData.timeline.map((step, idx) => (
              <div key={step.title} className="relative group">
                
                {/* Popping Dot with Ripple */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="absolute -left-[30px] sm:-left-[38px] md:-left-[46px] top-1.5 w-6 h-6 flex items-center justify-center"
                >
                  {/* Ripple pulse circle */}
                  <span className="absolute w-full h-full rounded-full bg-gold/25 animate-ping opacity-75" />
                  {/* Outer ring */}
                  <span className="relative w-4 h-4 rounded-full bg-ivory border-2 border-gold flex items-center justify-center shadow-sm">
                    {/* Inner gold center dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  </span>
                </motion.div>

                {/* Milestone Content sliding in */}
                <Reveal delay={0.15} xOffset={24} yOffset={0}>
                  <div className="bg-gradient-to-br from-white/95 via-white/85 to-[#FAF5EC]/90 backdrop-blur-sm border border-gold/30 p-6 sm:p-8 hover:border-gold shadow-sm hover:shadow-premium transition-all duration-300 rounded-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3 border-b border-gold/15 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-2xl sm:text-3xl font-light text-gradient-gold">
                          {step.year}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-medium text-burgundy tracking-wide">
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-charcoal/50">
                        PHASE 0{idx + 1}
                      </span>
                    </div>

                    <p className="font-sans text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
