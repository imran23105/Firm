import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isLoaded, onAnimationComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }
          }}
          className="fixed inset-0 z-[999] bg-burgundy flex flex-col items-center justify-center text-white px-6 overflow-hidden select-none"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute w-96 h-96 rounded-full bg-champagne/10 blur-3xl pointer-events-none" />

          {/* Official Brand Logo with Smooth Unveil */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-6"
          >
            <img
              src="/firm-logo-light.png"
              alt="Kshetry & Co. — Law Firm"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_6px_30px_rgba(232,213,175,0.35)]"
            />
          </motion.div>

          {/* Expanding Gold Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-48 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
          />

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-4"
          >
            <p className="font-sans text-[10.5px] md:text-xs tracking-[0.26em] uppercase text-champagne/90 font-medium">
              LEGAL SOLUTIONS BEYOND BORDERS
            </p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/50 mt-1 font-mono">
              INDIA • UAE • UK • US • THAILAND
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
