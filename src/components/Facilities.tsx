import React from 'react';
import { FlaskConical, Stethoscope, Dna, BookOpen, Library as LibraryIcon, Users } from 'lucide-react';
import labImg from '../assets/gallery/gallery-03.jpg';
import libraryImg from '../assets/gallery/gallery-04.jpeg';
import classroomImg from '../assets/gallery/gallery-06.jpeg';
import clinicalImg from '../assets/gallery/gallery-08.jpg';
import campusImg from '../assets/gallery/gallery-02.jpeg';

export const Facilities: React.FC = () => {
  const facilities = [
    {
      title: 'Nursing Labs',
      icon: FlaskConical,
    },
    {
      title: 'Clinical Training',
      icon: Stethoscope,
    },
    {
      title: 'Skills Laboratory',
      icon: Dna,
    },
    {
      title: 'Classrooms',
      icon: BookOpen,
    },
    {
      title: 'Library',
      icon: LibraryIcon,
    },
    {
      title: 'Student Facilities',
      icon: Users,
    },
  ];

  return (
    <section id="facilities" className="py-14 sm:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063B4A] tracking-tight">
            Our Facilities
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-500 mt-1 font-medium">
            Modern Facilities for Better Learning
          </p>
        </div>

        {/* 2-Column Split: 6 Cards Left, Photo Collage Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Grid: 6 Facility Cards (2 cols x 3 rows) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 content-center">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-[#16A34A]/50 hover:shadow-sm transition-all duration-200 flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#F0F9F5] border border-[#D5EBDD] flex items-center justify-center text-[#16A34A] shrink-0 group-hover:bg-[#16A34A] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[#063B4A] text-[14.5px] group-hover:text-[#16A34A] transition-colors leading-tight">
                    {fac.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Collage matching reference */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-3.5">
            {/* Primary Main Image (Simulation Lab) */}
            <div className="sm:col-span-7 rounded-xl overflow-hidden border border-slate-100 shadow-sm relative group min-h-[220px] sm:min-h-[260px]">
              <img
                src={labImg}
                alt="CIHS Skills Simulation Laboratory"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#063B4A]/90 via-[#063B4A]/30 to-transparent p-3.5 text-white">
                <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Clinical Skills Lab</p>
                <p className="text-xs text-slate-200">Simulation patient care &amp; procedural training</p>
              </div>
            </div>

            {/* 2x2 Sub-Grid of 4 Supporting Images */}
            <div className="sm:col-span-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-xs h-28 sm:h-32 group">
                <img
                  src={libraryImg}
                  alt="CIHS Library"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-xs h-28 sm:h-32 group">
                <img
                  src={classroomImg}
                  alt="CIHS Classrooms"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-xs h-28 sm:h-32 group">
                <img
                  src={clinicalImg}
                  alt="Clinical Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-xs h-28 sm:h-32 group">
                <img
                  src={campusImg}
                  alt="CIHS Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
