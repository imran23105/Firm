import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable Reveal component
 * Animates only transform and opacity using the brand cubic-bezier(0.22, 1, 0.36, 1) easing.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  yOffset = 28,
  xOffset = 0,
  className = '',
  width = 'auto',
  threshold = 0.15
}) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset,
      x: shouldReduceMotion ? 0 : xOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
