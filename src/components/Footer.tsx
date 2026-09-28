import React from 'react';
import { CIHSLogo } from './CIHSLogo';
import { MapPin, Phone, Mail, MessageCircle, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Faculty & Staff', href: '#faculty' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#063B4A] text-white border-t border-[#094759] pt-14 pb-8 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer 4-Column Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Official Logo + Title + Motto (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="inline-block">
              <CIHSLogo variant="footer" theme="dark" size="lg" />
            </a>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Committed to providing high standard nursing education and clinical healthcare training in Karachi, developing skilled and compassionate professionals.
            </p>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#16A34A] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  St-15, Block-16, Nursing Building, Karachi Institute of Heart Diseases, Federal B. Area Karachi
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#16A34A] shrink-0" />
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <a href="tel:+923186299162" className="hover:text-[#16A34A] transition-colors">
                    +92 318 6299162
                  </a>
                  <span className="hidden sm:inline text-slate-500">|</span>
                  <a href="tel:02136321216" className="hover:text-[#16A34A] transition-colors">
                    021-36321216
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#16A34A] shrink-0" />
                <a href="mailto:info@cihs.edu.pk" className="hover:text-[#16A34A] transition-colors">
                  info@cihs.edu.pk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Us & WhatsApp (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-3">
              Follow Us
            </h4>

            {/* WhatsApp Contact Box matching reference */}
            <a
              href="https://wa.me/923186299162"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#042731] hover:bg-[#031d25] border border-white/10 hover:border-[#16A34A] p-3 rounded-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-slate-300 font-medium">Chat on WhatsApp</p>
                <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  +92 318 6299162
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 City Institute of Health Sciences. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <p>Designed &amp; Developed with ❤️ for CIHS</p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#16A34A] hover:bg-[#15803d] text-white flex items-center justify-center shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
