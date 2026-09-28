import React from 'react';
import { X, ExternalLink, CheckCircle, Phone, MessageCircle } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-[#16A34A] text-xs font-extrabold tracking-widest uppercase block mb-1">
          CIHS ADMISSIONS 2026
        </span>
        <h3 className="text-2xl font-bold text-[#063B4A] mb-3">
          Apply for Admission
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          Admissions are open for Generic BS Nursing (4 Years), Post RN BSN (2 Years), and professional Diploma programs. Complete your registration through the online portal or contact our admissions desk.
        </p>

        {/* Steps */}
        <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700 bg-[#F0F9F5] p-4 rounded-xl border border-[#E0F0EA]">
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
            <span><strong>Step 1:</strong> Register on the official CIHS Admission Portal.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
            <span><strong>Step 2:</strong> Upload academic transcripts (Matric / F.Sc. / PNC diploma).</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
            <span><strong>Step 3:</strong> Appear for entry assessment and interview at the campus.</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          <a
            href="https://cihs.sumserp.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all"
          >
            <span>Proceed to Official Admission Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="https://wa.me/923186299162"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#063B4A] py-2.5 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#16A34A]" />
              <span>WhatsApp Inquiries</span>
            </a>
            <a
              href="tel:+923186299162"
              className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#063B4A] py-2.5 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#16A34A]" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
