import React, { useState } from 'react';
import { ArrowRight, X, Mail, GraduationCap, Building2 } from 'lucide-react';
import { facultyMembers, FacultyMember } from '../data/facultyData';
import { FacultyCard } from './FacultyCard';

export const Faculty: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);
  const [viewAllModal, setViewAllModal] = useState(false);

  return (
    <section id="faculty" className="py-14 sm:py-18 bg-[#F0F9F5] border-y border-[#E1F0EA]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout matching reference image: Title block on left + 5 cards in row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-5 items-start">
          {/* LEFT SIDE: Header Block */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-between self-center sm:self-auto mb-2 lg:mb-0">
            <div>
              <span className="text-[#16A34A] text-xs font-extrabold tracking-widest uppercase block mb-1">
                OUR TEAM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063B4A] tracking-tight leading-tight">
                Faculty &amp; Staff
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 font-medium">
                Meet Our Dedicated Team
              </p>
            </div>

            <div className="mt-5">
              <button
                onClick={() => setViewAllModal(true)}
                className="inline-flex items-center gap-1.5 border border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200"
              >
                <span>View All Staff</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: 5 Faculty Cards */}
          <div className="lg:col-span-9 xl:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {facultyMembers.map((member) => (
              <FacultyCard
                key={member.id}
                member={member}
                onCardClick={(m) => setSelectedMember(m)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Selected Faculty Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-36 rounded-xl overflow-hidden mb-4 shadow-sm border border-slate-100">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <span className="text-xs font-bold text-[#16A34A] uppercase tracking-wider mb-1">
                {selectedMember.department} Department
              </span>
              <h3 className="text-xl font-bold text-[#063B4A]">{selectedMember.name}</h3>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">{selectedMember.designation}</p>

              <div className="mt-5 pt-4 border-t border-slate-100 w-full text-left space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>City Institute of Health Sciences (CIHS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Faculty of Nursing &amp; Health Sciences</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>info@cihs.edu.pk</span>
                </div>
              </div>

              <div className="mt-6 w-full flex justify-end">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="bg-[#063B4A] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#08495c] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View All Staff Modal */}
      {viewAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setViewAllModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#16A34A] text-xs font-extrabold tracking-widest uppercase block mb-1">
              CITY INSTITUTE OF HEALTH SCIENCES
            </span>
            <h3 className="text-2xl font-bold text-[#063B4A] mb-4">
              Academic Faculty &amp; Administration
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Our faculty members possess clinical teaching credentials, mentoring students across theoretical nursing sciences and practical bedside procedures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {facultyMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-[#F0F9F5]/50 hover:bg-[#F0F9F5] transition-colors"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-14 rounded-lg object-cover object-top shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-[#063B4A] text-sm">{member.name}</h4>
                    <p className="text-xs font-medium text-slate-600">{member.designation}</p>
                    <p className="text-[11px] text-[#16A34A] font-semibold">{member.department}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setViewAllModal(false)}
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
