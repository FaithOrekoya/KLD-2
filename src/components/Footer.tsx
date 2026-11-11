import React from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  Facebook,
  Linkedin,
  FileCheck2
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenHistory: () => void;
  inquiryCount: number;
}

export function Footer({ onOpenPrivacy, onOpenTerms, onOpenHistory, inquiryCount }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#073449] text-white border-t border-[#17334A]">
      {/* Upper Main Footer Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Company Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#17334A] border border-[#F2B600]/40 flex items-center justify-center text-[#F2B600] shadow-inner">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg tracking-tight text-white block leading-none">
                  KLD Investments &amp; Consulting
                </span>
                <span className="text-[11px] font-medium tracking-wider text-[#F2B600] uppercase mt-1 block">
                  Get Your Fast Cash Offer
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              KLD Investments &amp; Consulting works directly with residential homeowners seeking a simple, reliable alternative to traditional listing delays, agent commissions, and repair hassles.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#17334A] hover:bg-[#F2B600] hover:text-[#073449] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#17334A] hover:bg-[#F2B600] hover:text-[#073449] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {inquiryCount > 0 && (
                <button
                  onClick={onOpenHistory}
                  className="px-3 py-1.5 rounded-lg bg-[#17334A] hover:bg-white/10 text-xs font-semibold text-[#F2B600] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>My Inquiries ({inquiryCount})</span>
                </button>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#F2B600] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-[#F2B600] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="hover:text-[#F2B600] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-choose-us')}
                  className="hover:text-[#F2B600] transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-[#F2B600] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('get-offer')}
                  className="hover:text-[#F2B600] transition-colors cursor-pointer"
                >
                  Get My Cash Offer
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#F2B600] uppercase tracking-wider">
              Contact Us Directly
            </h4>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Phone</span>
                  <a 
                    href="tel:3364227704" 
                    className="font-medium text-white hover:text-[#F2B600] transition-colors"
                  >
                    (336) 422-7704
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Email</span>
                  <a 
                    href="mailto:info@GetYourFastCashOffer.com" 
                    className="font-medium text-white hover:text-[#F2B600] transition-colors"
                  >
                    info@GetYourFastCashOffer.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Office Address</span>
                  <p className="text-slate-200">
                    101 W Main St. #333<br />
                    Thomasville, NC 27261-0333
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Legal & Copyright Strip */}
      <div className="bg-[#17334A] py-6 px-4 sm:px-6 lg:px-8 border-t border-white/5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 KLD Investments &amp; Consulting. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#F2B600] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
