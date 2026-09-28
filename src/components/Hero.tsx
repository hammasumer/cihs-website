import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero/hero.jpeg';

interface HeroProps {
  onApplyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section id="home" className="relative w-full min-h-[500px] lg:h-[560px] flex items-center overflow-hidden">
      {/* Background Image with Object Cover */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="CIHS Nursing Students"
          className="w-full h-full object-cover object-right sm:object-center"
        />
        {/* Dark Teal Gradient Scrim matching reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#063B4A] via-[#063B4A]/90 to-[#063B4A]/35" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0">
        <div className="max-w-2xl text-left">
          {/* Subtitle / Motto */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#16A34A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              EDUCATION &bull; SKILLS &bull; SERVICE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            City Institute of <br className="hidden sm:inline" />
            <span className="text-white">Health Sciences</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-xl">
            Empowering the Next Generation of Healthcare Professionals
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://cihs.sumserp.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#063B4A]/60 hover:bg-[#063B4A] text-white border border-white/70 hover:border-white px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
            >
              <span>Apply Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
