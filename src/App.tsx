import React, { useState } from 'react';
import { TopContactBar } from './components/TopContactBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { DiplomaPrograms } from './components/DiplomaPrograms';
import { Faculty } from './components/Faculty';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { AdmissionCTA } from './components/AdmissionCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';

export default function App() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#063B4A] flex flex-col selection:bg-[#16A34A]/20 selection:text-[#063B4A]">
      {/* 1. Top Contact Bar */}
      <TopContactBar />

      {/* 2. Main Navigation Header */}
      <Header onApplyClick={() => setApplyModalOpen(true)} />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onApplyClick={() => setApplyModalOpen(true)} />

        {/* 4. Stats Strip */}
        <Stats />

        {/* 5. About + Degree Programs Split Section */}
        <About />

        {/* 6. Diploma Programs Full-Width Section */}
        <DiplomaPrograms />

        {/* 7. Faculty & Staff Section */}
        <Faculty />

        {/* 8. Facilities Section */}
        <Facilities />

        {/* 9. Gallery Section */}
        <Gallery />

        {/* 10. Admission CTA */}
        <AdmissionCTA />

        {/* Additional Contact & Campus Location Section */}
        <Contact />
      </main>

      {/* 11. Dark Teal Footer */}
      <Footer />

      {/* Interactive Apply / Admission Dialog */}
      <ApplyModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
