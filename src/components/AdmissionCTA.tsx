import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const AdmissionCTA: React.FC = () => {
  return (
    <section className="bg-[#063B4A] border-t border-[#0a485a] relative overflow-hidden py-10 sm:py-14">
      {/* Subtle background glow/medical aesthetic */}
      <div className="absolute inset-0 bg-radial from-[#0d5063]/30 via-[#063B4A] to-[#042731] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Text Block */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Start Your Journey in Healthcare
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-300 mt-2 leading-relaxed">
              Join CIHS and be part of a community that values education, service and excellence.
            </p>
          </div>

          {/* Right Buttons & Portal URL */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="https://cihs.sumserp.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://cihs.sumserp.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#063B4A] hover:bg-[#08485a] text-white border border-white/40 hover:border-white/80 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all"
            >
              <ExternalLink className="w-4 h-4 text-emerald-400" />
              <span>Admission Portal</span>
            </a>

            <span className="hidden xl:inline text-xs text-slate-400 underline font-mono tracking-tight ml-2">
              https://cihs.sumserp.com/register
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
