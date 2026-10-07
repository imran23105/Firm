import React, { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Firm from './components/Firm';
import Journey from './components/Journey';
import Practice from './components/Practice';
import Marquee from './components/Marquee';
import Network from './components/Network';
import Awards from './components/Awards';
import Insights from './components/Insights';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-ivory text-charcoal font-sans selection:bg-burgundy selection:text-white">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Brand Preloader (~1.2s SVG Stroke Animation) */}
      <Preloader
        isLoaded={preloaderDone}
        onAnimationComplete={() => setPreloaderDone(true)}
      />

      {/* Sticky Editorial Navbar */}
      <Navbar />

      {/* Main Single Page Demo Sections */}
      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. THE FIRM & JOURNEY */}
        <Firm />
        <Journey />

        {/* 3. PRACTICE AREAS */}
        <Practice />

        {/* Slow Editorial Outlined Marquee Ribbon */}
        <Marquee
          text="INDIA • UAE • UK • USA • THAILAND • CROSS-BORDER COUNSEL"
          speed={45}
        />

        {/* 4. OUR NETWORK with Interactive World Map */}
        <Network />

        {/* 5. AWARDS & RECOGNITION */}
        <Awards />

        {/* 6. INSIGHTS */}
        <Insights />

        {/* 7. CAREERS */}
        <Careers />

        {/* 8. CONTACT */}
        <Contact />
      </main>

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
}
