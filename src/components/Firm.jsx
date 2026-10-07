import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from './Reveal';
import { firmData } from '../data/firmData';

/**
 * Animated counter that counts up once when scrolled into view
 */
function CounterItem({ value, suffix = '', label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;

    // For 2009, start at 1980 to make counting smooth and brisk
    const initial = end > 100 ? end - 40 : 0;
    start = initial;
    const duration = 1600; // ms
    const stepTime = Math.max(16, Math.floor(duration / (end - initial)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center sm:text-left py-4 sm:py-0">
      <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-gradient-burgundy">
        {count || value}
        <span className="text-gold font-normal text-3xl sm:text-4xl ml-0.5">{suffix}</span>
      </div>
      <div className="text-[11px] sm:text-xs font-sans font-semibold tracking-super-wide uppercase text-charcoal/70 mt-1">
        {label}
      </div>
    </div>
  );
}

export default function Firm() {
  return (
    <section id="firm" className="py-24 md:py-32 bg-gradient-to-b from-[#FAF6EE] via-[#F4EDE2] to-[#ECE3D4] text-charcoal relative overflow-hidden">
      {/* Subtle radial luxury glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-b from-champagne/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-gradient-to-tr from-gold/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: THE FIRM */}
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-gold/40 via-gold to-gold" />
              <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-burgundy">
                {firmData.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] mb-6">
              <span className="text-gradient-burgundy">{firmData.heading}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-charcoal/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              {firmData.description}
            </p>
          </Reveal>
        </div>

        {/* Counter Strip: 2009 Founded | 5 Jurisdictions | 12 Practice Areas */}
        <div className="my-16 py-8 border-y border-gold/30 bg-gradient-to-r from-transparent via-white/50 to-transparent backdrop-blur-[2px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gold/25">
            {firmData.counters.map((item, idx) => (
              <div key={item.label} className={idx > 0 ? 'sm:pl-8' : ''}>
                <CounterItem
                  value={item.value}
                  suffix={item.suffix}
                  label={item.label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* WHAT DEFINES US: Editorial large statements (no cards, big numerals & thin dividers) */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-baseline justify-between border-b border-gold/30 pb-4 mb-8">
              <span className="text-xs font-sans font-bold tracking-super-wide uppercase text-burgundy">
                WHAT DEFINES US
              </span>
              <span className="text-[11px] font-mono tracking-widest text-charcoal/50">
                01 — 04
              </span>
            </div>
          </Reveal>

          <div className="space-y-0 divide-y divide-gold/25">
            {firmData.definingPrinciples.map((principle, index) => (
              <div
                key={principle.number}
                className="group py-8 sm:py-10 transition-all duration-300 hover:bg-gradient-to-r hover:from-white/70 hover:via-champagne/20 hover:to-transparent px-4 -mx-4 rounded-sm"
              >
                <Reveal delay={index * 0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                    {/* Big Numeral */}
                    <div className="md:col-span-2">
                      <span className="font-serif text-3xl sm:text-4xl font-light text-gradient-gold group-hover:scale-105 inline-block transition-transform duration-300">
                        {principle.number}
                      </span>
                    </div>

                    {/* Headline */}
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-2xl sm:text-3xl text-burgundy font-medium tracking-wide group-hover:text-[#4A071A] transition-colors">
                        {principle.title}
                      </h3>
                    </div>

                    {/* One Line Description */}
                    <div className="md:col-span-6">
                      <p className="font-sans text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
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
