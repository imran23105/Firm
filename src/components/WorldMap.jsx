import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { networkData } from '../data/firmData';

/**
 * WorldMap Component:
 * Inline SVG stylized world map in champagne/beige tones with soft gold glow.
 * Nodes at USA, UK, UAE, India, Thailand joined by curved gold arcs.
 * Sequential travel along paths: USA -> UK -> UAE -> India -> Thailand.
 */
export default function WorldMap({ activeCountryId, onHoverNode }) {
  const [activeStep, setActiveStep] = useState(0); // 0: USA->UK, 1: UK->UAE, 2: UAE->IND, 3: IND->THA, 4: All glow

  // Sequential cycle timer (USA -> UK -> UAE -> India -> Thailand -> glow -> repeat)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Node coordinates on 900x480 coordinate space
  // USA: 210, 160
  // UK: 440, 130
  // UAE: 590, 205
  // India: 665, 215
  // Thailand: 725, 245
  const nodes = networkData.mapNodes;

  // Connecting arcs:
  // Path 0: USA to UK
  const d_usa_uk = "M 210 160 Q 320 80 440 130";
  // Path 1: UK to UAE
  const d_uk_uae = "M 440 130 Q 510 140 590 205";
  // Path 2: UAE to India
  const d_uae_ind = "M 590 205 Q 625 185 665 215";
  // Path 3: India to Thailand
  const d_ind_tha = "M 665 215 Q 695 210 725 245";

  const paths = [
    { from: 'usa', to: 'uk', d: d_usa_uk, step: 0 },
    { from: 'uk', to: 'uae', d: d_uk_uae, step: 1 },
    { from: 'uae', to: 'india', d: d_uae_ind, step: 2 },
    { from: 'india', to: 'thailand', d: d_ind_tha, step: 3 },
  ];

  return (
    <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto bg-[#F4EFE6] border border-gold/40 p-4 sm:p-6 shadow-premium overflow-hidden select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-champagne/40 via-transparent to-transparent pointer-events-none" />

      {/* Grid Coordinates watermark */}
      <div className="absolute top-3 left-4 text-[9px] font-mono tracking-widest text-charcoal/40 uppercase">
        MULTI-JURISDICTIONAL ARTERIAL TRANSIT • LAT/LONG COORDINATES
      </div>
      <div className="absolute top-3 right-4 text-[9px] font-mono tracking-widest text-gold uppercase">
        ACTIVE NETWORK CORRIDOR
      </div>

      <svg
        viewBox="0 0 900 480"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Node and arc glows */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="nodeAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8A15A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6F1028" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Latitude and Longitude subtle guidelines */}
        <g opacity="0.25" stroke="#C8A15A" strokeWidth="0.5" strokeDasharray="4 4">
          <line x1="0" y1="120" x2="900" y2="120" />
          <line x1="0" y1="240" x2="900" y2="240" />
          <line x1="0" y1="360" x2="900" y2="360" />
          <line x1="225" y1="0" x2="225" y2="480" />
          <line x1="450" y1="0" x2="450" y2="480" />
          <line x1="675" y1="0" x2="675" y2="480" />
        </g>

        {/* Simplified World Continents (Stylized geometric landmass outlines in Champagne/Beige) */}
        <g fill="#EADBC0" stroke="#D1BE98" strokeWidth="0.8" opacity="0.65">
          {/* North America */}
          <path d="M 110 110 L 160 90 L 260 90 L 280 140 L 250 180 L 190 230 L 160 210 L 130 160 Z" />
          {/* South America */}
          <path d="M 230 250 L 290 270 L 270 370 L 230 420 L 205 330 Z" />
          {/* Europe */}
          <path d="M 410 90 L 480 80 L 510 130 L 460 170 L 410 150 Z" />
          {/* Africa */}
          <path d="M 420 180 L 520 170 L 540 260 L 500 380 L 440 330 L 410 240 Z" />
          {/* Asia / Eurasia */}
          <path d="M 500 90 L 720 70 L 820 110 L 790 200 L 710 240 L 630 230 L 540 160 Z" />
          {/* India Subcontinent */}
          <path d="M 640 180 L 690 190 L 675 270 L 645 220 Z" />
          {/* Southeast Asia */}
          <path d="M 700 230 L 760 230 L 740 300 L 705 270 Z" />
          {/* Australia */}
          <path d="M 740 330 L 830 320 L 840 400 L 760 410 Z" />
        </g>

        {/* Base Static Connection Arcs */}
        <g stroke="#C8A15A" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4">
          <path d={d_usa_uk} />
          <path d={d_uk_uae} />
          <path d={d_uae_ind} />
          <path d={d_ind_tha} />
        </g>

        {/* Animated Sequential Travel Paths */}
        {paths.map((p, index) => {
          const isTraveling = activeStep === index;
          const isNetworkGlowing = activeStep === 4;

          return (
            <g key={p.step}>
              {/* Active Golden Flow Highlight */}
              {(isTraveling || isNetworkGlowing) && (
                <motion.path
                  d={p.d}
                  stroke="#C8A15A"
                  strokeWidth="2.5"
                  fill="none"
                  filter="url(#goldGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    opacity: isNetworkGlowing ? [0.6, 1, 0.6] : [0.2, 1, 0.8],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: isNetworkGlowing ? Infinity : 0,
                  }}
                />
              )}

              {/* Sequential Pulse Dot / Arrow Moving Along Path */}
              {isTraveling && (
                <circle r="4" fill="#6F1028" stroke="#C8A15A" strokeWidth="1.5">
                  <animateMotion
                    path={p.d}
                    dur="1.6s"
                    repeatCount="1"
                    rotate="auto"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Network Nodes (USA, UK, UAE, India, Thailand) */}
        {nodes.map((node) => {
          const isHovered = activeCountryId === node.id;
          const isGlowingStep = activeStep === 4;

          return (
            <g
              key={node.id}
              className="cursor-pointer transition-transform duration-300"
              onMouseEnter={() => onHoverNode && onHoverNode(node.id)}
              onMouseLeave={() => onHoverNode && onHoverNode(null)}
            >
              {/* Pulsing Aura */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 24 : isGlowingStep ? 18 : 12}
                fill="url(#nodeAura)"
                className="transition-all duration-300"
              />

              {/* Concentric Node Rings */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 8 : 6}
                fill="#6F1028"
                stroke="#C8A15A"
                strokeWidth={isHovered ? "2.5" : "1.8"}
                filter="url(#goldGlow)"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="2.5"
                fill="#FFFFFF"
              />

              {/* Text Label */}
              <text
                x={node.x}
                y={node.y - 12}
                textAnchor="middle"
                className="font-sans font-bold text-[10px] tracking-widest uppercase transition-colors"
                fill={isHovered ? '#6F1028' : '#242124'}
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y={node.y + 18}
                textAnchor="middle"
                className="font-sans text-[8.5px] tracking-wider text-charcoal/70"
                fill="#6F1028"
              >
                {node.city}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Editorial Node Dossier Tooltip if hovered */}
      {activeCountryId && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 bg-white/95 backdrop-blur-md border border-gold p-3.5 shadow-elevated">
          {(() => {
            const found = nodes.find((n) => n.id === activeCountryId);
            if (!found) return null;
            return (
              <div>
                <div className="flex items-center justify-between border-b border-gold/30 pb-1.5 mb-2">
                  <span className="font-serif text-base font-semibold text-burgundy">
                    {found.label} • {found.city}
                  </span>
                  <span className="text-[9px] font-mono text-gold">
                    {found.lat}, {found.lon}
                  </span>
                </div>
                <p className="font-sans text-xs text-charcoal/85 leading-tight">
                  {found.details}
                </p>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
