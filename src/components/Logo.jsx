import React, { useState } from 'react';

/**
 * Official Brand Logo for Kshetry & Co.
 * Displays the firm's official emblem:
 * Globe + Classical Pillar + Ribbon K + Scales of Justice + Typography
 * Completely transparent background, crisp rendering, with light & dark variants.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light';
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center select-none ${className}`}>
      {!imgError ? (
        <img
          src={isLight ? '/firm-logo-light.png' : '/firm-logo-perfect.png'}
          alt="Kshetry & Co. — Law Firm"
          onError={() => setImgError(true)}
          className={`h-9 sm:h-10 md:h-11 w-auto max-w-[190px] sm:max-w-[230px] md:max-w-[260px] object-contain transition-transform duration-300 hover:scale-[1.02] ${
            isLight
              ? 'brightness-110 drop-shadow-[0_2px_10px_rgba(232,213,175,0.3)]'
              : 'drop-shadow-[0_1px_4px_rgba(59,7,24,0.08)]'
          }`}
        />
      ) : (
        /* Fallback typography */
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold text-burgundy">
            KSHETRY &amp; CO.
          </span>
          <span className="text-[9px] font-sans text-gold uppercase tracking-widest">
            LAW FIRM
          </span>
        </div>
      )}
    </div>
  );
}
