import React from 'react';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import heroImg from '../assets/images/hero_residential_home_1794357844563.jpg';

interface HeroProps {
  onGetOfferClick: () => void;
  onHowItWorksClick: () => void;
}

export function Hero({ onGetOfferClick, onHowItWorksClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
      {/* Full-width Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Attractive residential home with front porch"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Navy Scrim Overlay ensuring high contrast on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#073449] via-[#073449]/90 to-[#073449]/40 sm:to-[#073449]/20" />
        <div className="absolute inset-0 bg-[#073449]/30" />
      </div>

      {/* Content Container on the LEFT side */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-2xl text-left">
          {/* Small introductory label - clean unboxed text */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#F2B600]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F2B600] uppercase font-heading">
              Sell Your House The Simple Way
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white font-heading tracking-tight leading-[1.15] text-balance">
            Sell Your House Fast for Cash.{' '}
            <span className="text-[#F2B600] block sm:inline">Without the Hassle.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
            Need to sell your home quickly? KLD Investments &amp; Consulting makes the process simple. 
            Get a cash offer without worrying about repairs, commissions or complicated showings.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={onGetOfferClick}
              className="px-7 py-3.5 rounded-lg bg-[#F2B600] hover:bg-[#D9A300] text-[#073449] font-heading font-bold text-base tracking-tight transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
            >
              <span>Get My Free Cash Offer</span>
              <ArrowRight className="w-5 h-5 text-[#073449]" />
            </button>
            <button
              onClick={onHowItWorksClick}
              className="px-6 py-3.5 rounded-lg bg-[#17334A]/80 hover:bg-[#17334A] text-white border border-white/20 hover:border-white/40 font-heading font-semibold text-sm transition-all flex items-center justify-center cursor-pointer whitespace-nowrap"
            >
              How It Works
            </button>
          </div>

          {/* Reassurance Line */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0" />
              <span>No Repairs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0" />
              <span>No Commissions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0" />
              <span>No Hassle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
