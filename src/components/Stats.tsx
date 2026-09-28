import React from 'react';
import { GraduationCap, BookOpen, Award, Users } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: GraduationCap,
      value: 'Excellence',
      label: 'In Healthcare Education',
      isHeroStat: true,
    },
    {
      icon: BookOpen,
      value: '2',
      label: 'Degree Programs',
      isNumber: true,
    },
    {
      icon: Award,
      value: '4',
      label: 'Diploma Programs',
      isNumber: true,
    },
    {
      icon: Users,
      value: 'Qualified',
      label: 'Faculty & Mentors',
      isHeroStat: true,
    },
  ];

  return (
    <section className="bg-[#F0F9F5] border-b border-[#E1F0EA] relative z-20 py-5 sm:py-6">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#D0E7DD]">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 sm:gap-4 justify-start sm:justify-center ${
                  idx > 0 ? 'pt-3 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#D5EADF] shadow-xs flex items-center justify-center shrink-0 text-[#16A34A]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`font-extrabold text-[#063B4A] tracking-tight leading-none ${
                      item.isNumber ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                    }`}
                  >
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
