import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowUpRight, X } from 'lucide-react';
import Reveal from './Reveal';
import { awardsData } from '../data/firmData';

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <section id="awards" className="py-24 md:py-32 bg-[#F6F2EB] border-t border-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-gold" />
              <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-burgundy">
                RECOGNITION
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-burgundy leading-[1.15] mb-4">
              Recognition of Professional Excellence
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
              Our work is shaped by professional standards, client trust and a commitment to continuous development.
            </p>
          </Reveal>
        </div>

        {/* Awards Timeline alternating sliding from left and right */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {awardsData.map((award, index) => {
            const isSlideFromLeft = index % 2 === 0;

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: isSlideFromLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                onClick={() => setSelectedAward(award)}
                className="group cursor-pointer bg-white/80 hover:bg-white border border-gold/30 hover:border-gold transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-premium"
              >
                <div className="flex items-start sm:items-baseline gap-6">
                  {/* Year Tag */}
                  <div className="flex flex-col flex-shrink-0">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-gold group-hover:text-burgundy transition-colors">
                      {award.year}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-charcoal/40">
                      CITATION
                    </span>
                  </div>

                  {/* Award Content */}
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-burgundy group-hover:translate-x-1 transition-transform duration-300">
                      {award.title}
                    </h3>
                    <p className="font-sans text-xs text-gold uppercase tracking-wider font-semibold mt-1">
                      {award.organisation}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-2 max-w-2xl leading-relaxed">
                      {award.summary}
                    </p>
                  </div>
                </div>

                {/* Right side prompt */}
                <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-burgundy/80 group-hover:text-burgundy flex-shrink-0 self-end md:self-center">
                  <span className="hidden sm:inline">VIEW PARTICULARS</span>
                  <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle Disclaimer */}
        <div className="mt-12 text-center text-[10.5px] font-sans text-charcoal/50 italic">
          * Citations and benchmark listings presented for informational demo purposes.
        </div>

      </div>

      {/* Recognition Dossier Modal */}
      <AnimatePresence>
        {selectedAward && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-burgundyDark/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ivory border border-gold/60 shadow-elevated w-full max-w-xl p-6 sm:p-8 relative text-left"
            >
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-5 right-5 p-2 text-charcoal/60 hover:text-burgundy transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-[10px] font-sans font-bold tracking-super-wide text-burgundy uppercase">
                  HONOUR &amp; PEER BENCHMARK
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-4 pr-6">
                {selectedAward.title}
              </h3>

              <div className="space-y-3.5 border-y border-gold/30 py-4 mb-5 text-xs font-sans">
                <div className="grid grid-cols-3">
                  <span className="font-semibold text-charcoal/60 uppercase text-[10px]">Awarding Body</span>
                  <span className="col-span-2 text-charcoal/90 font-medium">{selectedAward.organisation}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-semibold text-charcoal/60 uppercase text-[10px]">Conferral Year</span>
                  <span className="col-span-2 text-burgundy font-serif text-base">{selectedAward.year}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-semibold text-charcoal/60 uppercase text-[10px]">Category</span>
                  <span className="col-span-2 text-charcoal/90">{selectedAward.category}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-semibold text-charcoal/60 uppercase text-[10px]">Recipient</span>
                  <span className="col-span-2 text-charcoal/90 font-medium">{selectedAward.recipient}</span>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal/70 mb-2">
                  Supporting Details &amp; Citation Benchmark
                </h4>
                <p className="font-sans text-xs text-charcoal/80 font-light leading-relaxed">
                  {selectedAward.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold/20 flex justify-end">
                <button
                  onClick={() => setSelectedAward(null)}
                  className="bg-burgundy text-white font-sans text-xs uppercase font-semibold px-5 py-2.5 tracking-wider hover:bg-burgundyDark transition-colors"
                >
                  DISMISS CITATION
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
