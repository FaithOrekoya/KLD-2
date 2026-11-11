import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onGetOfferClick: () => void;
}

export function FinalCTA({ onGetOfferClick }: FinalCTAProps) {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden bg-[#073449]">
      {/* Full-width Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/final_cta_home_1794357846376.jpg"
          alt="Suburban family residence in North Carolina at dusk"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Navy Overlay */}
        <div className="absolute inset-0 bg-[#073449]/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073449] via-transparent to-[#073449]/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-5 h-0.5 bg-[#F2B600]" />
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F2B600] uppercase font-heading">
            Take The Next Step Today
          </span>
          <span className="w-5 h-0.5 bg-[#F2B600]" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight text-balance leading-tight">
          Your Home Sale Can Be Simpler.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Ready to explore your options? Tell us about your property and let KLD Investments &amp; Consulting help you understand the next steps.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGetOfferClick}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#F2B600] hover:bg-[#D9A300] active:scale-[0.98] text-[#073449] font-heading font-bold text-base tracking-tight transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Get My Free Cash Offer</span>
            <ArrowRight className="w-5 h-5 text-[#073449]" />
          </button>

          <a
            href="tel:3364227704"
            className="w-full sm:w-auto px-6 py-4 rounded-lg bg-[#17334A]/80 hover:bg-[#17334A] text-white border border-white/20 hover:border-white/40 font-heading font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#F2B600]" />
            <span>Call (336) 422-7704</span>
          </a>
        </div>

        {/* Quiet Reassurance */}
        <p className="mt-6 text-xs text-slate-300">
          No obligation · No property repairs · No commissions or hidden fees
        </p>
      </div>
    </section>
  );
}
