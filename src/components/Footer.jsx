import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Globe, Mail, Shield } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../data/firmData';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
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
    <footer className="bg-burgundyDark text-white relative border-t border-gold/30 pt-20 pb-12 overflow-hidden select-none">
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-champagne/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier: Logo & Tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-gold/20 gap-8">
          <div>
            <Logo variant="light" className="mb-4" />
            <p className="font-serif italic text-xl md:text-2xl text-champagne font-normal max-w-md">
              &ldquo;Legal Solutions Beyond Borders.&rdquo;
            </p>
          </div>

          <div className="flex flex-col md:items-end text-xs font-sans text-champagne/70">
            <span className="text-[10px] uppercase font-bold tracking-super-wide text-gold mb-1">
              ESTABLISHED IN 2009
            </span>
            <span>Multi-Jurisdictional Strategic Practice</span>
            <span className="text-[11px] text-white/50 mt-1">India • UAE • UK • USA • Thailand</span>
          </div>
        </div>

        {/* Middle Tier: Links Grid & Jurisdictions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14 border-b border-gold/20">
          
          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <h4 className="text-[10.5px] font-sans font-bold uppercase tracking-super-wide text-gold mb-4">
              PRACTICE NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-sans">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white/80 hover:text-gold hover:translate-x-1 transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Key Jurisdictions */}
          <div className="md:col-span-5">
            <h4 className="text-[10.5px] font-sans font-bold uppercase tracking-super-wide text-gold mb-4">
              JURISDICTIONAL HUBS &amp; DESKS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-white/80">
              <div>
                <strong className="text-white block font-medium">India Hubs</strong>
                <span className="text-[11px] text-champagne/70">Kolkata, Delhi, Mumbai, Bengaluru</span>
              </div>
              <div>
                <strong className="text-white block font-medium">UAE &amp; GCC</strong>
                <span className="text-[11px] text-champagne/70">Dubai Mainland, DIFC &amp; ADGM Corridors</span>
              </div>
              <div>
                <strong className="text-white block font-medium">United Kingdom</strong>
                <span className="text-[11px] text-champagne/70">London Partner Liaison (LCIA / English Law)</span>
              </div>
              <div>
                <strong className="text-white block font-medium">United States &amp; ASEAN</strong>
                <span className="text-[11px] text-champagne/70">New York, Delaware &amp; Bangkok Desk</span>
              </div>
            </div>
          </div>

          {/* Discretion & Social Placeholders */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10.5px] font-sans font-bold uppercase tracking-super-wide text-gold mb-4">
              PROFESSIONAL ENGAGEMENT
            </h4>
            <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
              Counsel retains utmost discretion on all privileged client representations and international arbitration briefs.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                aria-label="LinkedIn placeholder"
                className="w-9 h-9 border border-gold/40 flex items-center justify-center text-champagne hover:text-white hover:border-gold hover:bg-gold/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="#contact"
                aria-label="X / Twitter placeholder"
                className="w-9 h-9 border border-gold/40 flex items-center justify-center text-champagne hover:text-white hover:border-gold hover:bg-gold/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#contact"
                aria-label="Email counsel"
                className="w-9 h-9 border border-gold/40 flex items-center justify-center text-champagne hover:text-white hover:border-gold hover:bg-gold/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10.5px] font-sans text-white/50">
          <div>
            &copy; {new Date().getFullYear()} Kshetry &amp; Co. All rights reserved. | Client Presentation Demo Edition.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-champagne/60">
            <span>Privileged Communication</span>
            <span>•</span>
            <span>Terms of Advisory</span>
            <span>•</span>
            <span>Anti-Money Laundering Compliance</span>
          </div>
        </div>

      </div>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Return to top"
            className="fixed bottom-6 right-6 z-40 bg-burgundy hover:bg-burgundyDark border border-gold text-champagne hover:text-white p-3 shadow-elevated transition-colors"
          >
            <ArrowUp className="w-4 h-4 text-gold" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
