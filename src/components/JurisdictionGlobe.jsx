import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Sparkles, Navigation } from 'lucide-react';

/**
 * 5 Key Jurisdictions Data
 */
const jurisdictions = [
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    hub: 'Supreme Court & High Courts',
    cities: 'Kolkata • New Delhi • Mumbai • Bengaluru',
    lat: '28.6° N',
    lon: '77.2° E',
    globeX: 255,
    globeY: 175,
    highlightPath: 'M 240 155 Q 260 160 268 185 Q 255 205 245 190 Z',
    desc: 'National trial, appellate advocacy & corporate headquarters'
  },
  {
    id: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    hub: 'DIFC, ADGM & Mainland',
    cities: 'Dubai (Downtown & DIFC Corridor)',
    lat: '25.2° N',
    lon: '55.3° E',
    globeX: 215,
    globeY: 168,
    highlightPath: 'M 210 162 L 222 165 L 218 174 L 210 170 Z',
    desc: 'Middle East regional gateway & Indo-Gulf CEPA corridor'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    hub: 'London Partner Chambers',
    cities: 'London (Fleet Street Corridor)',
    lat: '51.5° N',
    lon: '0.1° W',
    globeX: 142,
    globeY: 110,
    highlightPath: 'M 138 102 L 146 106 L 144 116 L 138 112 Z',
    desc: 'LCIA international arbitrations & English common law liaison'
  },
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    hub: 'New York & Delaware Desk',
    cities: 'New York City • Delaware',
    lat: '40.7° N',
    lon: '74.0° W',
    globeX: 72,
    globeY: 132,
    highlightPath: 'M 60 120 L 85 122 L 78 145 L 62 140 Z',
    desc: 'Cross-border M&A, VC transactions & transatlantic structuring'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    hub: 'Bangkok ASEAN Desk',
    cities: 'Bangkok (Sathorn Financial District)',
    lat: '13.7° N',
    lon: '100.5° E',
    globeX: 295,
    globeY: 202,
    highlightPath: 'M 290 192 L 302 195 L 298 214 L 292 208 Z',
    desc: 'Southeast Asia regional investments & BOI regulatory advisory'
  }
];

export default function JurisdictionGlobe() {
  const [activeCountry, setActiveCountry] = useState(jurisdictions[0]);
  const [pulseIndex, setPulseIndex] = useState(0);

  // Auto-pulse sequentially through the 5 countries every 3 seconds if not user-interacted
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % jurisdictions.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[510px] sm:h-[560px] bg-gradient-to-b from-[#280410] via-[#45091C] to-[#1A020A] overflow-hidden flex flex-col justify-between p-5 sm:p-6 text-champagne select-none">
      
      {/* Ambient Celestial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-champagne/10 blur-[80px] pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gold/15 blur-[60px] pointer-events-none" />

      {/* Top Header: Badge & Active Coordinates */}
      <div className="relative z-10 flex items-center justify-between border-b border-gold/30 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-champagne">
            GLOBAL JURISDICTIONAL SPHERE
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[9.5px] font-mono tracking-widest text-gold bg-black/40 px-2.5 py-1 border border-gold/30">
          <MapPin className="w-3 h-3 text-gold" />
          <span>{activeCountry.lat}, {activeCountry.lon}</span>
        </div>
      </div>

      {/* Main 3D Spherical Globe Visual Canvas */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center">
        
        {/* Spherical Globe Container */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72">
          
          {/* Outer Atmospheric Aura */}
          <div className="absolute inset-0 rounded-full bg-radial-gradient from-gold/20 via-burgundy/10 to-transparent blur-md pointer-events-none" />
          <div className="absolute -inset-2 rounded-full border border-gold/30 opacity-40 animate-pulse pointer-events-none" />

          {/* 3D Glass / Convex Sphere SVG */}
          <svg
            viewBox="0 0 360 360"
            className="w-full h-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Spherical Gradient - giving realistic 3D sphere curvature */}
              <radialGradient id="sphereShading" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#7B142F" />
                <stop offset="50%" stopColor="#430718" />
                <stop offset="85%" stopColor="#22030C" />
                <stop offset="100%" stopColor="#0F0105" />
              </radialGradient>

              {/* Specular Highlight on Sphere */}
              <radialGradient id="sphereHighlight" cx="30%" cy="25%" r="45%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
                <stop offset="40%" stopColor="#EAD5AF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>

              {/* Gold Glow filter */}
              <filter id="globeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base Sphere Body */}
            <circle
              cx="180"
              cy="180"
              r="165"
              fill="url(#sphereShading)"
              stroke="#C8A15A"
              strokeWidth="1.8"
            />

            {/* Latitude Parallels */}
            <g stroke="#C8A15A" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.35">
              <ellipse cx="180" cy="180" rx="165" ry="40" />
              <ellipse cx="180" cy="180" rx="165" ry="90" />
              <ellipse cx="180" cy="180" rx="165" ry="135" />
              <line x1="15" y1="180" x2="345" y2="180" stroke="#C8A15A" strokeWidth="1" opacity="0.6" />
            </g>

            {/* Longitude Meridians */}
            <g stroke="#C8A15A" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.35">
              <ellipse cx="180" cy="180" rx="45" ry="165" />
              <ellipse cx="180" cy="180" rx="95" ry="165" />
              <ellipse cx="180" cy="180" rx="138" ry="165" />
              <line x1="180" y1="15" x2="180" y2="345" stroke="#C8A15A" strokeWidth="1" opacity="0.6" />
            </g>

            {/* Stylized Continents & Landmass Shapes on the Globe */}
            <g fill="#A97E3E" opacity="0.45" stroke="#C8A15A" strokeWidth="0.6">
              {/* North America / US Atlantic Coast */}
              <path d="M 50 115 Q 75 105 85 125 Q 75 160 55 145 Z" />
              
              {/* Europe & UK Island */}
              <path d="M 130 95 Q 155 85 165 115 Q 145 135 128 115 Z" />
              <path d="M 138 100 Q 146 103 143 115 Q 136 112 138 100 Z" fill="#E8D5AF" opacity="0.8" />
              
              {/* Middle East & Arabian Peninsula (UAE) */}
              <path d="M 195 150 Q 225 145 230 180 Q 205 190 195 165 Z" />
              
              {/* Indian Subcontinent */}
              <path d="M 235 150 Q 270 152 268 205 Q 248 220 235 175 Z" />
              
              {/* Southeast Asia & Thailand */}
              <path d="M 275 180 Q 305 175 305 220 Q 285 225 275 195 Z" />

              {/* Africa */}
              <path d="M 150 145 Q 190 140 195 240 Q 155 255 140 180 Z" opacity="0.3" />
            </g>

            {/* Curved Golden Flight / Transnational Legal Corridors */}
            {/* USA (72,132) -> UK (142,110) -> UAE (215,168) -> India (255,175) -> Thailand (295,202) */}
            <g stroke="#C8A15A" strokeWidth="1.5" fill="none">
              {/* USA to UK arc */}
              <path
                d="M 72 132 Q 105 100 142 110"
                strokeDasharray="4 3"
                opacity="0.75"
              />
              {/* UK to UAE arc */}
              <path
                d="M 142 110 Q 175 125 215 168"
                strokeDasharray="4 3"
                opacity="0.75"
              />
              {/* UAE to India arc */}
              <path
                d="M 215 168 Q 235 160 255 175"
                strokeDasharray="4 3"
                opacity="0.85"
              />
              {/* India to Thailand arc */}
              <path
                d="M 255 175 Q 275 180 295 202"
                strokeDasharray="4 3"
                opacity="0.75"
              />
            </g>

            {/* Glowing Arterial Pulse moving along Corridors */}
            <circle r="3" fill="#E8D5AF" filter="url(#globeGlow)">
              <animateMotion
                path="M 72 132 Q 105 100 142 110 Q 175 125 215 168 Q 235 160 255 175 Q 275 180 295 202"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Country Highlight Pins & Markers */}
            {jurisdictions.map((item, idx) => {
              const isSelected = activeCountry.id === item.id;
              const isAutoPulsing = pulseIndex === idx;

              return (
                <g
                  key={item.id}
                  className="cursor-pointer group"
                  onClick={() => setActiveCountry(item)}
                >
                  {/* Pulsing Target Halo */}
                  <circle
                    cx={item.globeX}
                    cy={item.globeY}
                    r={isSelected ? 16 : isAutoPulsing ? 12 : 8}
                    fill="#C8A15A"
                    fillOpacity={isSelected ? "0.3" : "0.15"}
                    className="transition-all duration-300"
                  />

                  {/* Radiating beacon wave if active */}
                  {(isSelected || isAutoPulsing) && (
                    <circle
                      cx={item.globeX}
                      cy={item.globeY}
                      r="12"
                      stroke="#E8D5AF"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.8"
                    >
                      <animate
                        attributeName="r"
                        from="6"
                        to="20"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.9"
                        to="0"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}

                  {/* Golden Center Node */}
                  <circle
                    cx={item.globeX}
                    cy={item.globeY}
                    r={isSelected ? 5.5 : 4}
                    fill={isSelected ? "#FFFFFF" : "#C8A15A"}
                    stroke="#6F1028"
                    strokeWidth="1.8"
                    filter="url(#globeGlow)"
                  />

                  {/* Country Label on Globe */}
                  <text
                    x={item.globeX}
                    y={item.globeY - 9}
                    textAnchor="middle"
                    className="font-sans font-bold text-[9px] uppercase tracking-wider"
                    fill={isSelected ? "#FFFFFF" : "#E8D5AF"}
                    style={{
                      textShadow: '0 1px 3px rgba(0,0,0,0.9)',
                      fontWeight: isSelected ? '700' : '500'
                    }}
                  >
                    {item.name}
                  </text>
                </g>
              );
            })}

            {/* Specular 3D Glass Convex Highlight */}
            <circle
              cx="180"
              cy="180"
              r="165"
              fill="url(#sphereHighlight)"
              pointerEvents="none"
            />
          </svg>
        </div>

        {/* Active Country Jurisdictional Dossier Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCountry.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-3 w-full bg-[#1A0209]/90 border border-gold/50 p-3 sm:p-3.5 backdrop-blur-md shadow-elevated text-left"
          >
            <div className="flex items-center justify-between border-b border-gold/25 pb-1.5 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm">{activeCountry.flag}</span>
                <span className="font-serif text-lg font-medium text-white tracking-wide">
                  {activeCountry.name}
                </span>
                <span className="text-[9px] font-sans text-gold/80 uppercase font-semibold">
                  • {activeCountry.hub}
                </span>
              </div>
              <span className="text-[8.5px] font-mono tracking-widest text-champagne/60 uppercase">
                ACTIVE PRACTICE DESK
              </span>
            </div>

            <p className="text-[11px] font-sans text-champagne/90 leading-tight">
              {activeCountry.desc}
            </p>
            <p className="text-[9.5px] font-sans text-gold/80 italic mt-0.5">
              Chambers &amp; Desks: {activeCountry.cities}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Country Selector Tabs & Required Labelled Slot */}
      <div className="relative z-10 border-t border-gold/30 pt-3 space-y-2.5">
        
        {/* Interactive 5 Country Switcher Tabs */}
        <div className="grid grid-cols-5 gap-1 text-center">
          {jurisdictions.map((c) => {
            const isActive = activeCountry.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCountry(c)}
                className={`py-1 px-0.5 text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-gold text-burgundyDark border-gold font-bold shadow-sm'
                    : 'bg-black/30 text-champagne/75 border-gold/30 hover:border-gold hover:text-white'
                }`}
              >
                <span>{c.name}</span>
              </button>
            );
          })}
        </div>

        {/* Required Client-Brief Placeholder Indicator */}
        <div className="flex items-center justify-between text-[8.5px] font-mono tracking-[0.16em] uppercase text-champagne/70 bg-black/40 px-3 py-1.5 border border-gold/30">
          <span className="flex items-center gap-1.5 text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>KSHETRY &amp; CO. GLOBAL CORRIDOR</span>
          </span>
          <span className="text-white/80 font-bold">[ REPLACE WITH ORIGINAL PHOTO ]</span>
        </div>
      </div>

    </div>
  );
}
