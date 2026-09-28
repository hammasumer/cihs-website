import React from 'react';
import { Baby, UserCheck, Award, HeartPulse, MessageCircle, ArrowRight } from 'lucide-react';
import { diplomaPrograms } from '../data/programData';

export const DiplomaPrograms: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'baby':
        return <Baby className="w-7 h-7 text-[#16A34A]" />;
      case 'user-check':
        return <UserCheck className="w-7 h-7 text-[#16A34A]" />;
      case 'award':
        return <Award className="w-7 h-7 text-[#16A34A]" />;
      case 'heart-pulse':
        return <HeartPulse className="w-7 h-7 text-[#16A34A]" />;
      default:
        return <Award className="w-7 h-7 text-[#16A34A]" />;
    }
  };

  return (
    <section id="diploma-programs" className="py-12 sm:py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063B4A] tracking-tight">
            Diploma Programs
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-500 mt-1 font-medium">
            Practical Training for a Brighter Tomorrow
          </p>
        </div>

        {/* Responsive Grid: 4 Cards + 1 WhatsApp Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {diplomaPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-xl border border-slate-200/80 p-6 flex flex-col items-center justify-between text-center hover:border-[#16A34A]/50 hover:shadow-md transition-all duration-200 group"
            >
              {/* Green Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-[#F0F9F5] border border-[#D5EADF] flex items-center justify-center mb-4 group-hover:bg-[#16A34A]/10 group-hover:scale-105 transition-all">
                {getIcon(prog.iconName)}
              </div>

              {/* Title & Abbr */}
              <div className="mb-5 flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-[#063B4A] text-[15px] sm:text-base leading-snug">
                  {prog.title}
                </h3>
                <span className="text-xs font-semibold text-slate-500 mt-0.5">
                  ({prog.abbr})
                </span>
                <span className="text-[11px] text-[#16A34A] font-medium mt-1">
                  {prog.duration}
                </span>
              </div>

              {/* Dark Teal Small Button */}
              <a
                href={prog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#063B4A] hover:bg-[#08495c] text-white py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-xs group-hover:bg-[#063B4A]"
              >
                <span>{prog.buttonText}</span>
              </a>
            </div>
          ))}

          {/* 5th Card: WhatsApp Info Card */}
          <div className="bg-[#F0F9F5] border border-[#D5EADF] rounded-xl p-6 flex flex-col items-center justify-center text-center sm:col-span-2 lg:col-span-1 shadow-xs hover:border-[#16A34A] transition-all">
            <div className="w-14 h-14 rounded-full bg-[#16A34A] text-white flex items-center justify-center mb-3 shadow-xs">
              <MessageCircle className="w-7 h-7 fill-current" />
            </div>
            <p className="text-xs text-slate-600 font-medium leading-tight mb-2">
              For more details, please contact us on WhatsApp
            </p>
            <a
              href="https://wa.me/923186299162"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#063B4A] hover:text-[#16A34A] transition-colors leading-tight"
            >
              +92 318 6299162
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
