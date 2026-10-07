import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, GraduationCap, X, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { careerFilters, careerOpenings } from '../data/firmData';

export default function Careers() {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedPractice, setSelectedPractice] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedJobModal, setSelectedJobModal] = useState(null);

  // Filter vacancies
  const filteredJobs = careerOpenings.filter((job) => {
    const locMatch = selectedLocation === 'All' || job.location === selectedLocation;
    const pracMatch = selectedPractice === 'All' || job.practice === selectedPractice;
    const expMatch = selectedExperience === 'All' || job.experience === selectedExperience;
    return locMatch && pracMatch && expMatch;
  });

  const scrollToContact = (roleTitle = '') => {
    setSelectedJobModal(null);
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

  return (
    <section id="careers" className="py-24 md:py-32 bg-gradient-to-b from-[#EDE4D5] via-[#F8F4EC] to-[#ECE2D4] border-t border-gold/25 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-champagne/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-gold/40 via-gold to-gold" />
              <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-burgundy">
                CAREERS
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.14] mb-4">
              <span className="text-gradient-burgundy">Build Your Practice. Expand Your Perspective.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
              We seek professionals who are <strong className="font-medium text-burgundy">Curious</strong> in their legal enquiry, <strong className="font-medium text-burgundy">Commercially Minded</strong> in their client advice, and <strong className="font-medium text-burgundy">Precise</strong> in their execution. We offer an intellectual environment that rewards cross-border insight and individual excellence.
            </p>
          </Reveal>
        </div>

        {/* 3-Tier Filter Console */}
        <div className="bg-gradient-to-br from-white/95 via-white/85 to-[#FAF5EC]/90 border border-gold/30 p-6 mb-12 shadow-sm space-y-4 rounded-sm">
          <div className="text-[10px] font-sans font-bold tracking-super-wide uppercase text-burgundy">
            CAREER OPPORTUNITY FILTERS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Location Filter */}
            <div>
              <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/60 mb-2">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-ivory border border-gold/40 px-3 py-2 text-xs font-sans text-charcoal focus:outline-none focus:border-burgundy"
              >
                {careerFilters.locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === 'All' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Practice Filter */}
            <div>
              <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/60 mb-2">
                Practice Area
              </label>
              <select
                value={selectedPractice}
                onChange={(e) => setSelectedPractice(e.target.value)}
                className="w-full bg-ivory border border-gold/40 px-3 py-2 text-xs font-sans text-charcoal focus:outline-none focus:border-burgundy"
              >
                {careerFilters.practices.map((pr) => (
                  <option key={pr} value={pr}>
                    {pr === 'All' ? 'All Practices' : pr}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div>
              <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/60 mb-2">
                Experience Level
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full bg-ivory border border-gold/40 px-3 py-2 text-xs font-sans text-charcoal focus:outline-none focus:border-burgundy"
              >
                {careerFilters.experiences.map((exp) => (
                  <option key={exp} value={exp}>
                    {exp === 'All' ? 'All Experience Levels' : exp}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Openings Board */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="bg-gradient-to-r from-white/95 via-white/90 to-[#FAF6EE]/85 hover:to-[#F7EDE0] border border-gold/30 hover:border-gold p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 shadow-sm hover:shadow-premium group rounded-sm"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-gradient-to-r from-champagne/60 to-gold/20 text-burgundy font-semibold">
                        {job.location}
                      </span>
                      <span className="text-[10px] font-sans tracking-wider uppercase text-charcoal/50">
                        • {job.practice}
                      </span>
                      <span className="text-[10px] font-sans tracking-wider uppercase text-charcoal/50">
                        • {job.experience}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-burgundy font-medium group-hover:text-gold transition-colors">
                      {job.position}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light max-w-2xl leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="flex-shrink-0 self-start md:self-center">
                    <button
                      onClick={() => setSelectedJobModal(job)}
                      className="group/btn bg-transparent hover:bg-gradient-to-r hover:from-burgundy hover:to-[#8B1433] text-burgundy hover:text-white border border-burgundy text-xs uppercase font-sans font-semibold tracking-wider px-5 py-3 flex items-center gap-2 transition-all duration-300 shadow-sm"
                    >
                      <span>VIEW POSITION</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              /* No Match Empty State per requirements */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center border border-dashed border-gold/40 p-8 bg-white/50"
              >
                <Briefcase className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-serif text-xl text-burgundy mb-2">
                  No current openings match your selection.
                </p>
                <p className="font-sans text-xs text-charcoal/60 mb-6 max-w-md mx-auto">
                  We are always open to reviewing credentials from exceptional legal minds, advocates and operational specialists.
                </p>
                <button
                  onClick={() => scrollToContact('General Application')}
                  className="bg-burgundy text-white font-sans text-xs uppercase font-semibold tracking-wider px-6 py-3 hover:bg-burgundyDark transition-colors"
                >
                  SUBMIT A GENERAL APPLICATION →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Vacancy Detail Modal */}
      <AnimatePresence>
        {selectedJobModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-burgundyDark/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="bg-ivory border border-gold/60 shadow-elevated w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative text-left"
            >
              <button
                onClick={() => setSelectedJobModal(null)}
                className="absolute top-5 right-5 p-2 text-charcoal/60 hover:text-burgundy"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-[10px] font-sans font-bold uppercase tracking-wider text-gold">
                <span>{selectedJobModal.location}</span>
                <span>•</span>
                <span>{selectedJobModal.type}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-burgundy font-medium mb-4 pr-6">
                {selectedJobModal.position}
              </h3>

              <div className="space-y-4 border-y border-gold/30 py-4 mb-6 font-sans text-xs text-charcoal/85">
                <div>
                  <h4 className="font-semibold text-charcoal/70 uppercase text-[10px] mb-1">
                    Role Summary
                  </h4>
                  <p className="font-light leading-relaxed">{selectedJobModal.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-charcoal/70 uppercase text-[10px] mb-1">
                    Ideal Candidate Profile &amp; Qualifications
                  </h4>
                  <p className="font-light leading-relaxed">{selectedJobModal.qualifications}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] font-sans text-charcoal/60">
                  Applications reviewed by the Senior Practice Board.
                </span>
                <button
                  onClick={() => scrollToContact(selectedJobModal.position)}
                  className="w-full sm:w-auto bg-burgundy hover:bg-burgundyDark text-white font-sans text-xs uppercase font-semibold px-6 py-3 tracking-wider transition-colors"
                >
                  APPLY FOR THIS VACANCY →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
