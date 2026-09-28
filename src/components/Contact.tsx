import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'BS Nursing (GBSN)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', program: 'BS Nursing (GBSN)', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#16A34A] text-xs font-extrabold tracking-widest uppercase block mb-1.5">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063B4A] tracking-tight">
            Contact CIHS Karachi
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Have questions regarding admissions, degree programs, or diploma eligibility? Our admissions office is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Campus Address Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#F0F9F5] border border-[#D5EADF] text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#063B4A] text-sm sm:text-base">Campus Address</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  St-15, Block-16, Nursing Building, Karachi Institute of Heart Diseases, Federal B. Area Karachi
                </p>
                <a
                  href="https://maps.app.goo.gl/fg3JeS6oQHCtVDy49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#16A34A] hover:underline mt-2"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone & Landline */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#F0F9F5] border border-[#D5EADF] text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#063B4A] text-sm sm:text-base">Telephone &amp; Mobile</h3>
                <div className="flex flex-col text-xs sm:text-sm text-slate-600">
                  <a href="tel:+923186299162" className="hover:text-[#16A34A] font-medium transition-colors">
                    Mobile: +92 318 6299162
                  </a>
                  <a href="tel:02136321216" className="hover:text-[#16A34A] font-medium transition-colors">
                    Landline: 021-36321216
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/923186299162"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs hover:border-[#16A34A] transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-[#063B4A] text-xs">WhatsApp</h4>
                  <p className="text-[11px] text-slate-500 font-medium">+92 318 6299162</p>
                </div>
              </a>

              <a
                href="mailto:info@cihs.edu.pk"
                className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs hover:border-[#16A34A] transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#063B4A] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#063B4A] text-xs">Official Email</h4>
                  <p className="text-[11px] text-slate-500 font-medium truncate">info@cihs.edu.pk</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-[#063B4A] text-lg mb-1">
              Send Admission Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-5">
              Submit your inquiry to receive academic counseling and admission requirements.
            </p>

            {formSubmitted ? (
              <div className="bg-[#F0F9F5] border border-[#D5EADF] rounded-xl p-6 text-center animate-in fade-in">
                <CheckCircle className="w-10 h-10 text-[#16A34A] mx-auto mb-2" />
                <h4 className="font-bold text-[#063B4A] text-base">Inquiry Received</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Thank you for reaching out to City Institute of Health Sciences. Our admissions coordinator will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fatima Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. student@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Interested Program
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] bg-white"
                    >
                      <option>BS Nursing (GBSN) - 4 Years</option>
                      <option>Post RN BSN - 2 Years</option>
                      <option>Community Midwife (CMW)</option>
                      <option>Lady Health Visitor (LHV)</option>
                      <option>Certified Nursing Assistant (CNA)</option>
                      <option>Nursing Assistant (NA)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Your Message / Question
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask regarding eligibility, fee schedule, or admission deadlines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400">
                    CIHS Admissions Department &bull; Karachi
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-xs transition-all"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
