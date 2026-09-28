import React from 'react';
import { Phone, Mail, ExternalLink, MessageCircle } from 'lucide-react';

export const TopContactBar: React.FC = () => {
  return (
    <div className="bg-[#063B4A] text-white text-[12px] sm:text-[13px] border-b border-[#08495c] tracking-wide relative z-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1 text-slate-200">
          <a
            href="tel:+923186299162"
            className="flex items-center gap-1.5 hover:text-[#16A34A] transition-colors"
            title="Call Mobile"
          >
            <Phone className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
            <span className="font-medium">+92 318 6299162</span>
          </a>

          <a
            href="tel:02136321216"
            className="flex items-center gap-1.5 hover:text-[#16A34A] transition-colors"
            title="Call Landline"
          >
            <Phone className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
            <span className="font-medium">021-36321216</span>
          </a>

          <a
            href="mailto:info@cihs.edu.pk"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#16A34A] transition-colors"
            title="Send Email"
          >
            <Mail className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
            <span>info@cihs.edu.pk</span>
          </a>
        </div>

        {/* Right: Quick Portals */}
        <div className="flex items-center gap-3 sm:gap-5 ml-auto sm:ml-0 text-slate-200">
          <a
            href="https://cihs.sumserp.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#16A34A] transition-colors font-medium"
          >
            <span>Admission Portal</span>
            <ExternalLink className="w-3 h-3 text-[#16A34A]" />
          </a>

          <a
            href="https://wa.me/923186299162"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#16A34A]/20 hover:bg-[#16A34A] text-emerald-300 hover:text-white px-2.5 py-0.5 rounded-full transition-all text-xs font-semibold"
          >
            <MessageCircle className="w-3 h-3 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
