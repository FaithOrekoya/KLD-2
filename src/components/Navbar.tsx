import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, Building2 } from 'lucide-react';

interface NavbarProps {
  onGetOfferClick: () => void;
}

export function Navbar({ onGetOfferClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#073449] border-b border-[#17334A] shadow-md transition-all">
      {/* Top subtle emergency/contact micro-bar on desktop */}
      <div className="hidden lg:block bg-[#17334A]/80 border-b border-white/5 py-1 px-4 sm:px-6 lg:px-8 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Homeowner Direct Purchase Program</span>
            <span className="text-slate-500">·</span>
            <span>No listing fees, open houses, or required repairs</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Speak with an Acquisitions Specialist:</span>
            <a 
              href="tel:3364227704" 
              className="text-[#F2B600] font-semibold hover:underline flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (336) 422-7704
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Wordmark & Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#17334A] border border-[#F2B600]/30 flex items-center justify-center text-[#F2B600] shadow-inner group-hover:border-[#F2B600] transition-colors">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                KLD <span className="font-semibold text-slate-200">Investments &amp; Consulting</span>
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#F2B600] uppercase mt-1">
                Get Your Fast Cash Offer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200">
            <button
              onClick={() => handleNavClick('hero')}
              className="hover:text-[#F2B600] transition-colors whitespace-nowrap cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="hover:text-[#F2B600] transition-colors whitespace-nowrap cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('why-choose-us')}
              className="hover:text-[#F2B600] transition-colors whitespace-nowrap cursor-pointer"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-[#F2B600] transition-colors whitespace-nowrap cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#F2B600] transition-colors whitespace-nowrap cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onGetOfferClick}
              className="px-5 py-2.5 rounded-lg bg-[#F2B600] hover:bg-[#D9A300] text-[#073449] font-heading font-bold text-sm tracking-tight transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Get My Cash Offer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onGetOfferClick}
              className="sm:hidden px-3 py-1.5 rounded-md bg-[#F2B600] text-[#073449] font-heading font-bold text-xs"
            >
              Cash Offer
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-[#17334A] rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#073449] border-t border-[#17334A] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left py-2 px-3 rounded-md text-slate-200 hover:bg-[#17334A] hover:text-[#F2B600] text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-left py-2 px-3 rounded-md text-slate-200 hover:bg-[#17334A] hover:text-[#F2B600] text-sm font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('why-choose-us')}
              className="text-left py-2 px-3 rounded-md text-slate-200 hover:bg-[#17334A] hover:text-[#F2B600] text-sm font-medium"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 px-3 rounded-md text-slate-200 hover:bg-[#17334A] hover:text-[#F2B600] text-sm font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 px-3 rounded-md text-slate-200 hover:bg-[#17334A] hover:text-[#F2B600] text-sm font-medium"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-[#17334A] flex flex-col gap-3">
            <a
              href="tel:3364227704"
              className="flex items-center justify-center gap-2 py-2 text-sm text-[#F2B600] font-semibold bg-[#17334A] rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Call Direct: (336) 422-7704
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetOfferClick();
              }}
              className="w-full py-3 rounded-lg bg-[#F2B600] hover:bg-[#D9A300] text-[#073449] font-heading font-bold text-sm shadow text-center cursor-pointer"
            >
              Get My Cash Offer
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
