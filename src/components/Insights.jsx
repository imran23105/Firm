import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, User, Calendar, BookOpen, X } from 'lucide-react';
import Reveal from './Reveal';
import {
  insightsCategories,
  featuredInsight,
  insightsArticles
} from '../data/firmData';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeReadingModal, setActiveReadingModal] = useState(null);

  // Filter logic
  const filteredArticles = insightsArticles.filter((article) => {
    if (selectedCategory === 'All') return true;
    if (article.category === selectedCategory) return true;
    if (article.tags && article.tags.includes(selectedCategory)) return true;
    return false;
  });

  const isFeaturedVisible =
    selectedCategory === 'All' ||
    featuredInsight.category === selectedCategory ||
    selectedCategory === 'Cross-Border' ||
    selectedCategory === 'Editorials';

  return (
    <section id="insights" className="py-24 md:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-6 border-b border-gold/30">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1.5px] bg-gold" />
                <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-burgundy">
                  INTELLIGENCE &amp; COMMENTARY
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-burgundy leading-[1.12]">
                Insights
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="font-sans text-charcoal/70 text-base md:text-lg font-light mt-2">
                Perspectives on law, business and a changing world.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Filter Chips with Sliding Gold Pill */}
        <div className="mb-12 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-2 min-w-max">
            {insightsCategories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 py-2 text-xs font-sans font-medium uppercase tracking-wider transition-colors duration-200 z-10 ${
                    isActive ? 'text-burgundy font-bold' : 'text-charcoal/70 hover:text-burgundy'
                  }`}
                >
                  <span className="relative z-20">{category}</span>

                  {/* Sliding Gold Pill Highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="insightFilterPill"
                      className="absolute inset-0 bg-champagne/60 border border-gold rounded-none z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Layout */}
        <div className="space-y-12">
          
          {/* FEATURED INSIGHT */}
          {isFeaturedVisible && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-[#3B0718] text-white border border-gold/40 p-8 sm:p-12 shadow-elevated relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute right-0 top-0 w-96 h-96 bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-super-wide text-gold">
                      {featuredInsight.eyebrow}
                    </span>
                    <span className="text-gold/40">•</span>
                    <span className="text-[10px] font-sans text-champagne/80 tracking-wider uppercase">
                      {featuredInsight.readingTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-2 leading-tight">
                    {featuredInsight.title}
                  </h3>
                  <p className="font-serif italic text-lg sm:text-xl text-champagne mb-4">
                    {featuredInsight.subtitle}
                  </p>

                  <p className="font-sans text-champagne/85 text-sm sm:text-base font-light leading-relaxed max-w-3xl mb-6">
                    {featuredInsight.excerpt}
                  </p>

                  {/* Author & Meta */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-sans text-champagne/70 border-t border-gold/25 pt-4">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-gold" />
                      <span>{featuredInsight.author} ({featuredInsight.designation})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>{featuredInsight.date}</span>
                    </div>
                    <span className="text-gold uppercase tracking-wider text-[10px]">
                      {featuredInsight.jurisdiction}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <button
                    onClick={() => setActiveReadingModal(featuredInsight)}
                    className="group bg-gold text-burgundyDark hover:bg-white font-sans text-xs uppercase font-bold tracking-widest px-8 py-4 flex items-center gap-3 transition-colors duration-300"
                  >
                    <span>READ INSIGHT</span>
                    <ArrowRight className="w-4 h-4 text-burgundyDark group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Smaller Articles Grid with AnimatePresence */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveReadingModal(article)}
                  className="group cursor-pointer bg-white border border-gold/30 hover:border-gold p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-premium"
                >
                  <div>
                    {/* Top Meta info */}
                    <div className="flex items-center justify-between text-[10px] font-sans text-charcoal/60 mb-3 border-b border-gold/15 pb-2">
                      <span className="font-semibold text-burgundy uppercase tracking-wider">
                        {article.practiceArea}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3 text-gold" />
                        {article.readingTime}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl text-burgundy font-medium group-hover:text-gold transition-colors duration-200 mb-3 leading-snug">
                      {article.title}
                    </h4>

                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Bottom Meta */}
                  <div className="border-t border-gold/15 pt-4">
                    <div className="flex items-baseline justify-between text-[11px] font-sans">
                      <div>
                        <span className="font-medium text-charcoal/90 block">{article.author}</span>
                        <span className="text-[10px] text-charcoal/50">{article.designation}</span>
                      </div>
                      <span className="text-[10px] text-gold uppercase tracking-wider font-mono">
                        {article.jurisdiction}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredArticles.length === 0 && !isFeaturedVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center border border-dashed border-gold/40 p-8"
            >
              <BookOpen className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="font-serif text-xl text-burgundy mb-2">No articles in this classification yet.</p>
              <p className="font-sans text-xs text-charcoal/60 mb-4">Please select another topic or return to all perspectives.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="bg-burgundy text-white font-sans text-xs uppercase px-4 py-2"
              >
                VIEW ALL INSIGHTS
              </button>
            </motion.div>
          )}

        </div>

      </div>

      {/* Article Full Reading Modal */}
      <AnimatePresence>
        {activeReadingModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-burgundyDark/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="bg-ivory border border-gold/60 shadow-elevated w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 relative text-left"
            >
              <button
                onClick={() => setActiveReadingModal(null)}
                className="absolute top-5 right-5 p-2 text-charcoal/60 hover:text-burgundy"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3 text-[10px] font-sans font-bold uppercase tracking-wider text-burgundy">
                <span>{activeReadingModal.practiceArea || 'EDITORIAL'}</span>
                <span>•</span>
                <span className="text-gold">{activeReadingModal.jurisdiction}</span>
                <span>•</span>
                <span className="text-charcoal/50">{activeReadingModal.readingTime}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-burgundy font-medium mb-3">
                {activeReadingModal.title}
              </h3>
              {activeReadingModal.subtitle && (
                <p className="font-serif italic text-lg text-gold mb-4">
                  {activeReadingModal.subtitle}
                </p>
              )}

              <div className="border-y border-gold/30 py-3 mb-6 flex items-center justify-between text-xs font-sans text-charcoal/70">
                <span>By {activeReadingModal.author} ({activeReadingModal.designation})</span>
                <span>{activeReadingModal.date}</span>
              </div>

              <div className="font-sans text-charcoal/85 text-sm sm:text-base font-light leading-relaxed space-y-4">
                <p className="font-medium text-charcoal">
                  {activeReadingModal.excerpt}
                </p>
                <p>
                  {activeReadingModal.content ||
                    "International legal practices operate at the confluence of disparate statutory frameworks. When handling transnational engagements across Indian courts, UAE Free Zones, and common law jurisdictions, precision in contract wording and regulatory anticipation forms the principal hedge against commercial liability."}
                </p>
                <p>
                  Our partners regularly synthesize multijurisdictional precedents to advise corporate boards on capital preservation, bilateral treaty rights, and cross-border enforceability before international arbitration tribunals.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gold/20 flex justify-end">
                <button
                  onClick={() => setActiveReadingModal(null)}
                  className="bg-burgundy text-white font-sans text-xs uppercase font-semibold px-6 py-2.5 tracking-wider hover:bg-burgundyDark"
                >
                  CLOSE INSIGHT
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
