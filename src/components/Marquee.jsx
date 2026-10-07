import React from 'react';

/**
 * Editorial Marquee ribbon
 * Slow marquee of "INDIA • UAE • UK • USA • THAILAND" in outlined serif text.
 * Uses GPU-accelerated CSS marquee with smooth repeat.
 */
export default function Marquee({
  text = "INDIA • UAE • UK • USA • THAILAND • GLOBAL PRACTICES",
  speed = 40,
  className = "py-4 bg-burgundyDark/95 border-y border-gold/20 text-champagne/40"
}) {
  const repeatedItems = Array(6).fill(text);

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none relative ${className}`}>
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-burgundyDark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-burgundyDark to-transparent z-10 pointer-events-none" />

      <div
        className="inline-flex gap-8 items-center font-serif text-lg md:text-2xl tracking-[0.25em] uppercase font-light"
        style={{
          animation: `marqueeScroll ${speed}s linear infinite`,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <span key={idx} className="flex items-center gap-8">
            <span
              className="hover:text-gold transition-colors duration-300"
              style={{
                WebkitTextStroke: '0.8px rgba(232, 213, 175, 0.45)',
                color: 'transparent',
              }}
            >
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-gold/40" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
