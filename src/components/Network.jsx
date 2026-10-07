import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Building2, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import WorldMap from './WorldMap';
import { networkData } from '../data/firmData';

export default function Network() {
  const [hoveredCountryId, setHoveredCountryId] = useState(null);

  return (
    <section id="network" className="py-24 md:py-32 bg-gradient-to-b from-[#EBE2D4] via-[#F8F4EC] to-[#ECE3D5] text-charcoal relative overflow-hidden">
      {/* Background ambient radial glow under the globe/map */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-champagne/35 via-gold/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-gold/40 via-gold to-gold" />
              <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-burgundy">
                {networkData.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.14] mb-2">
              <span className="text-gradient-burgundy">{networkData.heading}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xs sm:text-sm font-sans font-semibold tracking-super-wide uppercase text-gradient-gold mb-5">
              {networkData.subheading}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
              {networkData.description}
            </p>
          </Reveal>
        </div>

        {/* Large Inline SVG World Map with Sequential Arterial Flow */}
        <Reveal delay={0.25} duration={1.0}>
          <div className="mb-16">
            <WorldMap
              activeCountryId={hoveredCountryId}
              onHoverNode={(id) => setHoveredCountryId(id)}
            />
          </div>
        </Reveal>

        {/* Location List with Three Distinct Editorial Labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gold/30">
          
          {/* Group 1: OFFICES */}
          <div className="bg-gradient-to-b from-white/95 via-white/85 to-[#FAF5EC]/90 border border-gold/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-premium transition-all duration-300 rounded-sm">
            <div>
              <div className="flex items-center gap-2.5 mb-4 border-b border-gold/20 pb-3">
                <Building2 className="w-4 h-4 text-burgundy" />
                <h3 className="text-xs font-sans font-bold uppercase tracking-super-wide text-burgundy">
                  OFFICES
                </h3>
              </div>

              <div className="space-y-4">
                {networkData.offices.map((office) => {
                  const nodeMatch = office.country.toLowerCase().includes('uae') ? 'uae' : 'india';
                  return (
                    <div
                      key={office.country}
                      onMouseEnter={() => setHoveredCountryId(nodeMatch)}
                      onMouseLeave={() => setHoveredCountryId(null)}
                      className="cursor-pointer group hover:bg-champagne/15 p-2 -mx-2 transition-colors rounded-none"
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="font-serif text-xl font-medium text-burgundy group-hover:text-gold transition-colors">
                          {office.country}
                        </span>
                        <span className="text-[9px] font-mono tracking-wider uppercase text-charcoal/50">
                          Primary
                        </span>
                      </div>
                      <p className="font-sans text-xs text-charcoal/80 font-light mt-1">
                        {office.cities}
                      </p>
                      <span className="text-[10px] font-sans text-gold/80 italic mt-0.5 block">
                        {office.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-gold/15 mt-6 text-[10px] font-sans text-charcoal/60">
              * Dedicated physical legal chambers and client partner facilities.
            </div>
          </div>

          {/* Group 2: NETWORK LOCATIONS */}
          <div className="bg-gradient-to-b from-white/95 via-white/85 to-[#FAF5EC]/90 border border-gold/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-premium transition-all duration-300 rounded-sm">
            <div>
              <div className="flex items-center gap-2.5 mb-4 border-b border-gold/20 pb-3">
                <Globe className="w-4 h-4 text-burgundy" />
                <h3 className="text-xs font-sans font-bold uppercase tracking-super-wide text-burgundy">
                  NETWORK LOCATIONS
                </h3>
              </div>

              <div className="space-y-3.5">
                {networkData.networkLocations.map((loc) => {
                  let matchId = null;
                  if (loc.country.includes('UAE')) matchId = 'uae';
                  if (loc.country.includes('United Kingdom')) matchId = 'uk';
                  if (loc.country.includes('United States')) matchId = 'usa';
                  if (loc.country.includes('Thailand')) matchId = 'thailand';

                  return (
                    <div
                      key={loc.country}
                      onMouseEnter={() => matchId && setHoveredCountryId(matchId)}
                      onMouseLeave={() => setHoveredCountryId(null)}
                      className="cursor-pointer group hover:bg-gradient-to-r hover:from-champagne/20 hover:to-transparent p-2 -mx-2 transition-colors rounded-none"
                    >
                      <span className="font-serif text-lg font-medium text-burgundy group-hover:text-gold transition-colors block">
                        {loc.country}
                      </span>
                      <p className="font-sans text-xs text-charcoal/80 font-light mt-0.5">
                        {loc.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-gold/15 mt-6 text-[10px] font-sans text-charcoal/60">
              * Integrated cross-border partner counsel &amp; registry representations.
            </div>
          </div>

          {/* Group 3: AFFILIATED / PROFESSIONAL NETWORK */}
          <div className="bg-gradient-to-b from-white/95 via-white/85 to-[#FAF5EC]/90 border border-gold/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-premium transition-all duration-300 rounded-sm">
            <div>
              <div className="flex items-center gap-2.5 mb-4 border-b border-gold/20 pb-3">
                <MapPin className="w-4 h-4 text-burgundy" />
                <h3 className="text-xs font-sans font-bold uppercase tracking-super-wide text-burgundy">
                  AFFILIATED / PROFESSIONAL NETWORK
                </h3>
              </div>

              <div className="space-y-4">
                {networkData.affiliatedNetwork.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-xs text-charcoal/85 font-light leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gold/15 mt-6 text-[10px] font-sans text-charcoal/60">
              * Non-exclusive referral &amp; correspondent institutional relationships worldwide.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
