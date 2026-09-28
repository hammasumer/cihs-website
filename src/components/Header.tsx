import React, { useState, useEffect } from 'react';
import { CIHSLogo } from './CIHSLogo';
import { ArrowRight, Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    {
      label: 'Programs',
      href: '#programs',
      hasDropdown: true,
      items: [
        { label: 'Degree Programs (BSN & Post RN)', href: '#degree-programs' },
        { label: 'Diploma Programs (CMW, LHV, CNA, NA)', href: '#diploma-programs' },
      ],
    },
    { label: 'Faculty & Staff', href: '#faculty' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
        isScrolled ? 'shadow-md py-2.5' : 'py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <CIHSLogo size="md" variant="full" />
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14.5px] font-medium text-[#063B4A]">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setProgramsDropdownOpen(true)}
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                >
                  <button
                    onClick={(e) => handleNavClick(e as any, link.href)}
                    className="flex items-center gap-1 hover:text-[#16A34A] transition-colors py-2 font-medium"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-[#16A34A]" />
                  </button>

                  {/* Dropdown Menu */}
                  {programsDropdownOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-0 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {link.items?.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block px-4 py-2.5 text-xs text-[#063B4A] hover:bg-[#F0F9F5] hover:text-[#16A34A] transition-colors font-medium"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#16A34A] transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#16A34A] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Apply Now CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://cihs.sumserp.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://cihs.sumserp.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16A34A] text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"
          >
            <span>Apply</span>
            <ArrowRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#063B4A] hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2 text-[15px] font-medium text-[#063B4A] hover:bg-[#F0F9F5] hover:text-[#16A34A] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
                {link.hasDropdown && (
                  <div className="pl-6 space-y-1 mt-1 border-l-2 border-[#16A34A]/30 ml-3">
                    {link.items?.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#16A34A]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://cihs.sumserp.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#16A34A] text-white py-2.5 rounded-full font-semibold text-sm shadow-sm"
            >
              <span>Admission Portal - Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href="https://wa.me/923186299162"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#F0F9F5] text-[#16A34A] py-2 rounded-lg text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+923186299162"
                className="flex items-center justify-center gap-1.5 bg-slate-100 text-[#063B4A] py-2 rounded-lg text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call CIHS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
