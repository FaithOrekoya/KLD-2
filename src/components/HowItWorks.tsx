import React from 'react';
import { ClipboardList, FileSearch, CalendarCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onGetOfferClick: () => void;
}

export function HowItWorks({ onGetOfferClick }: HowItWorksProps) {
  const steps = [
    {
      step: '01',
      title: 'Tell Us About Your Property',
      description: 'Share some basic information about your home and your selling goals.',
      icon: ClipboardList,
    },
    {
      step: '02',
      title: 'Review Your Cash Offer',
      description: 'We review the property information and discuss a potential cash offer with you.',
      icon: FileSearch,
    },
    {
      step: '03',
      title: 'Choose Your Closing Timeline',
      description: 'If you decide to move forward, discuss a closing date that works for you.',
      icon: CalendarCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#F2B600]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#073449] uppercase font-heading">
              Our Straightforward Selling Process
            </span>
            <span className="w-5 h-0.5 bg-[#F2B600]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#073449] font-heading tracking-tight text-balance">
            Three Simple Steps to Selling Your Home.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            No endless parade of buyer showings, no repair negotiations, and no banking loan contingencies.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line on Desktop (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-[#F2B600]/40 to-transparent z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.step} 
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Step Badge / Number with Icon Node */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-[#073449] border-2 border-[#F2B600] flex flex-col items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="w-7 h-7 text-[#F2B600] mb-1" />
                      <span className="text-xs font-bold font-heading text-slate-300 uppercase tracking-widest">
                        STEP {item.step}
                      </span>
                    </div>

                    {/* Large Golden Number Accent Behind Node */}
                    <span 
                      aria-hidden="true"
                      className="absolute -top-6 -right-4 font-heading font-extrabold text-4xl text-[#F2B600]/30 select-none pointer-events-none tabular-nums"
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-[#073449] font-heading tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-sm">
                    {item.description}
                  </p>

                  {/* Mobile Connecting Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden my-6 text-[#F2B600]">
                      <ArrowRight className="w-6 h-6 rotate-90 mx-auto" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onGetOfferClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#F2B600] hover:bg-[#D9A300] text-[#073449] font-heading font-bold text-sm sm:text-base tracking-tight transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Start Step 1: Tell Us About Your Property</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
