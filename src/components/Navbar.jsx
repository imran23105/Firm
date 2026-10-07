import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../data/firmData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const lastScrollY = useRef(0);

  // Smart Hide on Scroll Down / Reveal on Scroll Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect background blur transition
      setIsScrolled(currentScrollY > 30);

      // Always show near top
      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling DOWN -> Slide navbar UP out of view
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling UP -> Slide navbar DOWN into view
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for tracking active section
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.id);
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Prevent background scrolling when mobile menu or search modal is open
  useEffect(() => {
    if (mobileMenuOpen || searchModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, searchModalOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Smart Animated Header: Hides on Scroll Down, Reveals on Scroll Up */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-400 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-[0_4px_25px_rgba(59,7,24,0.06)] border-b border-gold/30 py-3'
            : 'bg-gradient-to-b from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-transparent backdrop-blur-[2px] py-3.5 md:py-4.5 border-b border-gold/15'
        }`}
      >
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Official Logo on the Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex-shrink-0 transition-opacity hover:opacity-95 focus:outline-none"
            aria-label="Kshetry & Co. Home"
          >
            <Logo variant="dark" />
          </a>

          {/* Desktop Nav Links - Single Line strictly enforced with whitespace-nowrap */}
          <nav className="hidden xl:flex items-center space-x-3 2xl:space-x-5 text-[10.5px] 2xl:text-[11.5px] font-sans font-medium tracking-[0.12em] 2xl:tracking-[0.14em] uppercase">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative py-2 px-1 whitespace-nowrap transition-colors duration-200 focus:outline-none flex flex-col items-center group ${
                    isActive ? 'text-burgundy font-bold' : 'text-charcoal/75 hover:text-burgundy font-medium'
                  }`}
                >
                  <span className="group-hover:-translate-y-[0.5px] transition-transform">
                    {link.label}
                  </span>
                  
                  {/* Active Indicator: Clean, centered gold hairline */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveUnderline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/60 via-gold to-gold/60 rounded-full"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 flex-shrink-0">
            {/* Search Icon */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search Law Firm"
              className="p-2 sm:p-2.5 text-charcoal/70 hover:text-burgundy hover:bg-champagne/40 rounded-none border border-transparent hover:border-gold/30 transition-all focus:outline-none"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* ENQUIRE CTA button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-burgundy hover:bg-burgundyDark text-white text-[11px] md:text-xs uppercase font-sans font-semibold tracking-[0.15em] px-4 sm:px-6 py-2.5 sm:py-3 border border-burgundy hover:border-gold transition-all duration-300 shadow-sm"
            >
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
                <span>ENQUIRE</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Left-to-right subtle gold sweep */}
              <span className="absolute inset-0 bg-[#520C1F] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />
            </button>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 text-burgundy hover:bg-champagne/40 border border-gold/30 transition-colors focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu with Circular Clip-Path Reveal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at top right)', opacity: 0 }}
            animate={{ clipPath: 'circle(150% at top right)', opacity: 1 }}
            exit={{ clipPath: 'circle(0% at top right)', opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-burgundyDark text-white flex flex-col justify-between p-6 sm:p-10 select-none overflow-y-auto"
          >
            {/* Header in Mobile Menu with Official Logo */}
            <div className="flex items-center justify-between border-b border-gold/20 pb-6">
              <Logo variant="light" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gold" />
              </button>
            </div>

            {/* Staggered Navigation Items */}
            <div className="flex flex-col space-y-4 my-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + idx * 0.05, duration: 0.4 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-left font-serif text-2xl sm:text-3xl tracking-wide text-champagne/90 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3 w-full group py-1"
                  >
                    <span className="text-xs font-sans text-gold/60 font-mono tracking-widest">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-gold transition-opacity" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className="border-t border-gold/20 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-widest text-gold uppercase font-sans font-semibold">
                  LEGAL SOLUTIONS BEYOND BORDERS
                </p>
                <p className="text-xs text-white/60 font-sans mt-0.5">
                  India • UAE • United Kingdom • USA • Thailand
                </p>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-gold hover:bg-white text-burgundyDark font-sans font-bold text-xs uppercase px-6 py-3 tracking-widest text-center transition-colors"
              >
                SCHEDULE CONSULTATION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discreet Search Modal */}
      <AnimatePresence>
        {searchModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-start justify-center pt-24 px-4 bg-burgundyDark/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-ivory border border-gold/40 shadow-elevated w-full max-w-xl p-6 relative"
            >
              <div className="flex items-center justify-between border-b border-gold/30 pb-3 mb-4">
                <span className="font-serif text-lg text-burgundy font-medium">Search Practice &amp; Jurisdictions</span>
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="text-charcoal/60 hover:text-burgundy"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  autoFocus
                  placeholder="e.g., Cross-Border, UAE Free Zones, Arbitration, FIDIC..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gold/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-burgundy pr-10"
                />
                <Search className="w-4 h-4 text-gold absolute right-3 top-3.5" />
              </div>

              {/* Quick links inside search */}
              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-wider text-charcoal/60 font-semibold mb-2">
                  Frequent Queries
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Cross-Border M&A', 'UAE CEPA Advisory', 'Commercial Litigation', 'International Arbitration', 'FIDIC Contracts'].map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setSearchModalOpen(false);
                        scrollToSection('practice');
                      }}
                      className="px-2.5 py-1 bg-champagne/40 hover:bg-gold/30 text-burgundy text-[11px] transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
