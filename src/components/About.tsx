import React, { useState } from 'react';
import { ArrowRight, GraduationCap, UserCheck, MessageCircle, CheckCircle2, X } from 'lucide-react';
import campusImg from '../assets/about/campus.jpeg';
import { degreePrograms } from '../data/programData';

export const About: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT SIDE: About CIHS + Campus Image */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[#16A34A] text-xs font-extrabold tracking-widest uppercase block mb-2">
                ABOUT CIHS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#063B4A] tracking-tight leading-tight mb-4">
                City Institute of Health Sciences
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6 font-normal">
                CIHS is committed to providing quality education and professional training in the field of health sciences. Our mission is to develop skilled, compassionate and competent healthcare professionals who can serve the community and contribute to a healthier future.
              </p>

              <div className="mb-6">
                <button
                  onClick={() => setAboutModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-xs hover:shadow transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Campus Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 group mt-auto">
              <img
                src={campusImg}
                alt="City Institute of Health Sciences Campus"
                className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#063B4A]/90 via-[#063B4A]/40 to-transparent p-4 text-white">
                <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">CIHS Campus</p>
                <p className="text-sm font-medium">St-15, Block-16, Federal B. Area Karachi</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Light Mint Background Panel for Degree Programs */}
          <div
            id="degree-programs"
            className="lg:col-span-6 xl:col-span-6 bg-[#F0F9F5] border border-[#E0F0EA] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-[#16A34A] text-xs font-extrabold tracking-widest uppercase block mb-1.5">
                OUR PROGRAMS
              </span>
              <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#063B4A] tracking-tight mb-6">
                Degree Programs
              </h3>

              {/* Two Equal Cards */}
              <div className="space-y-4">
                {degreePrograms.map((prog, index) => (
                  <div
                    key={prog.id}
                    onClick={() => setSelectedProgram(selectedProgram === prog.id ? null : prog.id)}
                    className="bg-white rounded-xl p-5 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#16A34A] flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        {index === 0 ? (
                          <GraduationCap className="w-6 h-6" />
                        ) : (
                          <UserCheck className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#063B4A] text-base sm:text-lg group-hover:text-[#16A34A] transition-colors leading-snug">
                          {prog.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                          {prog.duration}
                        </p>
                      </div>
                    </div>

                    <button
                      aria-label={`View details for ${prog.title}`}
                      className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 group-hover:bg-[#15803d] shadow-xs group-hover:translate-x-0.5 transition-all"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Information Strip */}
            <a
              href="https://wa.me/923186299162"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-white border border-[#D5EBDD] rounded-xl p-4 flex items-center gap-3.5 hover:border-[#16A34A] hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-600 font-medium">
                  For more details, please contact us on WhatsApp
                </p>
                <p className="text-sm sm:text-base font-bold text-[#063B4A] group-hover:text-[#16A34A] transition-colors">
                  +92 318 6299162
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in">
          {(() => {
            const prog = degreePrograms.find((p) => p.id === selectedProgram);
            if (!prog) return null;
            return (
              <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#16A34A] text-white flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#16A34A] uppercase tracking-wider block">
                      {prog.type}
                    </span>
                    <h3 className="text-xl font-bold text-[#063B4A]">{prog.title}</h3>
                  </div>
                </div>

                <div className="space-y-3.5 my-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2 font-semibold text-[#063B4A] bg-[#F0F9F5] p-2.5 rounded-lg border border-[#E1F0EA]">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                    <span>Duration: {prog.duration}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-1">
                      Eligibility
                    </h4>
                    <p className="font-medium text-[#063B4A]">{prog.eligibility}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-1">
                      Overview
                    </h4>
                    <p className="leading-relaxed">{prog.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
                  >
                    Close
                  </button>
                  <a
                    href="https://cihs.sumserp.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white px-5 py-2 rounded-lg text-sm font-semibold"
                  >
                    <span>Apply for Admission</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* About CIHS Modal */}
      {aboutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setAboutModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#16A34A] text-xs font-extrabold tracking-widest uppercase block mb-1">
              ABOUT CITY INSTITUTE OF HEALTH SCIENCES
            </span>
            <h3 className="text-2xl font-bold text-[#063B4A] mb-4">
              Quality Education & Professional Training
            </h3>

            <div className="space-y-3.5 text-slate-600 text-sm leading-relaxed">
              <p>
                City Institute of Health Sciences (CIHS) is located in Federal B. Area Karachi at the Nursing Building of Karachi Institute of Heart Diseases.
              </p>
              <p>
                CIHS offers academic and clinical pathways designed to prepare nurses, healthcare specialists, and mid-level medical practitioners equipped to meet international healthcare standards.
              </p>
              <div className="bg-[#F0F9F5] p-4 rounded-xl border border-[#E0F0EA] space-y-2">
                <p className="font-bold text-[#063B4A] text-sm">Core Institute Tenets:</p>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span><strong>Education:</strong> Evidence-based academic curricula and theoretical foundations.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span><strong>Skills:</strong> Modern simulation laboratory practice and clinical patient care.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span><strong>Service:</strong> Dedicated ethical healthcare service for society and the nation.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setAboutModalOpen(false)}
                className="bg-[#063B4A] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#08495c] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
