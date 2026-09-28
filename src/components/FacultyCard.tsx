import React from 'react';
import { FacultyMember } from '../data/facultyData';

interface FacultyCardProps {
  member: FacultyMember;
  onCardClick?: (member: FacultyMember) => void;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ member, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick && onCardClick(member)}
      className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#16A34A]/40 transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* 4:5 Aspect Ratio Portrait Image Container */}
      <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#063B4A]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Card Body */}
      <div className="p-3.5 text-center flex-1 flex flex-col justify-center">
        <h3 className="font-bold text-[#063B4A] text-[14px] sm:text-[15px] group-hover:text-[#16A34A] transition-colors leading-tight truncate">
          {member.name}
        </h3>
        <p className="text-xs font-semibold text-slate-600 mt-1">
          {member.designation}
        </p>
        <p className="text-[11px] text-slate-400 font-medium">
          {member.department}
        </p>
      </div>
    </div>
  );
};
