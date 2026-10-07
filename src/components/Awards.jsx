import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowUpRight, X } from 'lucide-react';
import { awardsData } from '../data/firmData';

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <section id="awards" className="py-20 md:py-28 bg-gradient-to-b from-[#ECE3D5] via-[#F8F4EC] to-[#ECE2D2] border-t border-gold/25 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-gradient-to-l from-champagne/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-gold/40 via-gold to-gold" />
            <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-burgundy">
              RECOGNITION
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] mb-4">
            <span className="text-gradient-burgundy">Recognition of Professional Excellence</span>
          </h2>

          <p className="font-sans text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
            Our work is shaped by professional standards, client trust and a commitment to continuous development.
          </p>
        </div>

        {/* Awards Cards: Pure Responsive Layout Without Horizontal Transform Effects */}
        <div className="space-y-4 sm:space-y-5 max-w-5xl mx-auto w-full">
          {awardsData.map((award) => (
            <div
              key={award.id}
              onClick={() => setSelectedAward(award)}
              className="group cursor-pointer bg-gradient-to-r from-white/95 via-white/90 to-[#FAF6EE]/85 hover:to-[#F7EDE0] border border-gold/30 hover:border-gold transition-all duration-300 p-5 sm:p-7 md:p-8 shadow-sm hover:shadow-premium flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6 w-full rounded-sm"
            >
              {/* Left Details: Year + Title + Summary */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 flex-1 min-w-0">
                {/* Year Tag */}
                <div className="flex sm:flex-col items-baseline sm:items-start gap-2 sm:gap-0 flex-shrink-0">
                  <span className="font-serif text-3xl sm:text-4xl font-light text-gradient-gold group-hover:scale-105 inline-block transition-transform">
                    {award.year}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-charcoal/40">
                    CITATION
                  </span>
                </div>

                {/* Award Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-burgundy leading-snug break-words">
                    {award.title}
                  </h3>
                  <p className="font-sans text-xs text-gold uppercase tracking-wider font-semibold mt-1">
                    {award.organisation}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-2 leading-relaxed">
                    {award.summary}
                  </p>
                </div>
              </div>

              {/* Right Action Prompt */}
              <div className="flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wider uppercase text-burgundy/80 group-hover:text-burgundy flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-gold/15">
                <span>VIEW PARTICULARS</span>
                <ArrowUpRight className="w-4 h-4 text-gold flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Disclaimer */}
        <div className="mt-10 sm:mt-12 text-center text-[10.5px] font-sans text-charcoal/50 italic px-4">
          * Citations and benchmark listings presented for informational demo purposes.
        </div>

      </div>

      {/* Recognition Dossier Modal (Fully Mobile Responsive) */}
      <AnimatePresence>
        {selectedAward && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-burgundyDark/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-ivory border border-gold/60 shadow-elevated w-full max-w-xl max-h-[90vh] overflow-y-auto p-5 sm:p-8 relative text-left my-auto"
            >
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-charcoal/60 hover:text-burgundy transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2 pr-8">
                <Award className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-[10px] font-sans font-bold tracking-super-wide text-burgundy uppercase">
                  HONOUR &amp; PEER BENCHMARK
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-burgundy mb-4 pr-6 leading-tight">
                {selectedAward.title}
              </h3>

              <div className="space-y-3 border-y border-gold/30 py-4 mb-5 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                  <span className="font-semibold text-charcoal/60 uppercase text-[10px]">Awarding Body</span>
                  <span className="sm:col-span-2 text-charcoal/90 font-medium">{selectedAward.organisation}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                  <span className="font-semibold text-charcoal/60 uppercase text-[10px]">Conferral Year</span>
                  <span className="sm:col-span-2 text-burgundy font-serif text-base">{selectedAward.year}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                  <span className="font-semibold text-charcoal/60 uppercase text-[10px]">Category</span>
                  <span className="sm:col-span-2 text-charcoal/90">{selectedAward.category}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                  <span className="font-semibold text-charcoal/60 uppercase text-[10px]">Recipient</span>
                  <span className="sm:col-span-2 text-charcoal/90 font-medium">{selectedAward.recipient}</span>
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
                  className="w-full sm:w-auto bg-burgundy text-white font-sans text-xs uppercase font-semibold px-5 py-2.5 tracking-wider hover:bg-burgundyDark transition-colors text-center"
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
