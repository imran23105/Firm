import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Globe, Mail, Shield } from 'lucide-react';
import Logo from './Logo';
import { navLinks, socialLinks } from '../data/firmData';

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
    <footer className="bg-gradient-to-b from-[#24030D] via-[#1A0208] to-[#100105] text-white relative border-t border-gold/30 pt-20 pb-12 overflow-hidden select-none">
      {/* Background radial highlight & subtle gold ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-champagne/10 via-gold/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gradient-to-tl from-gold/5 to-transparent rounded-full blur-3xl pointer-events-none" />

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

          {/* Discretion & Official Social Media Channels */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10.5px] font-sans font-bold uppercase tracking-super-wide text-gold mb-4">
              OFFICIAL CHANNELS &amp; MEDIA
            </h4>
            <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
              Connect with Kshetry &amp; Co. across our verified professional platforms, legal commentaries, and institutional updates.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                  aria-label={item.label}
                  className="w-9 h-9 border border-gold/40 flex items-center justify-center text-champagne hover:text-gold hover:border-gold hover:bg-gold/15 transition-all duration-300 rounded-sm shadow-sm"
                >
                  {item.icon === 'linkedin' && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  )}
                  {item.icon === 'facebook' && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                    </svg>
                  )}
                  {item.icon === 'instagram' && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {item.icon === 'youtube' && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )}
                </a>
              ))}
              <a
                href="#contact"
                title="Direct Inquiries"
                aria-label="Direct Inquiries"
                className="w-9 h-9 border border-gold/40 flex items-center justify-center text-champagne hover:text-gold hover:border-gold hover:bg-gold/15 transition-all duration-300 rounded-sm shadow-sm"
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
            className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-burgundy via-[#80132F] to-burgundy hover:from-[#5A0D20] hover:to-burgundy border border-gold text-champagne hover:text-white p-3 shadow-elevated transition-all duration-300 rounded-sm"
          >
            <ArrowUp className="w-4 h-4 text-gold" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
