import React from 'react';
import { DollarSign, Wrench, Percent, Calendar, ShieldCheck } from 'lucide-react';

export function WhyChooseUs() {
  const benefits = [
    {
      num: '01',
      title: 'Fast Cash Offers',
      description: 'Explore a direct cash offer for your property without the traditional listing process.',
      icon: DollarSign,
    },
    {
      num: '02',
      title: 'Sell As-Is',
      description: 'Skip the need to renovate, repair or prepare your property for traditional showings.',
      icon: Wrench,
    },
    {
      num: '03',
      title: 'No Commissions',
      description: 'Avoid traditional agent commissions when selling directly to us.',
      icon: Percent,
    },
    {
      num: '04',
      title: 'Flexible Closing',
      description: 'Discuss a closing timeline that works with your circumstances.',
      icon: Calendar,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-24 bg-[#F4F6F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#F2B600]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#073449] uppercase font-heading">
              Why Sell To KLD Investments &amp; Consulting
            </span>
            <span className="w-5 h-0.5 bg-[#F2B600]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#073449] font-heading tracking-tight text-balance">
            A Simpler Way to Sell Your Home.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We understand that selling a property can be stressful. Our goal is to make the process straightforward, 
            transparent and convenient.
          </p>
        </div>

        {/* Editorial Layout: Large Photograph on One Side, 4 Benefits Vertically Arranged on the Other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Side A: Large Residential Property Photograph (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group">
              <img
                src="/src/assets/images/why_sell_property_1794357845609.jpg"
                alt="Beautiful suburban home purchased as-is"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073449]/80 via-transparent to-transparent" />
              
              {/* Editorial Caption Card */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F2B600] uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Direct Buyer Guarantee</span>
                </div>
                <p className="text-sm text-slate-200 font-medium">
                  We purchase homes directly from owners in any condition, without middleman commissions or lengthy bank contingencies.
                </p>
              </div>
            </div>
          </div>

          {/* Side B: Four Benefits Arranged Vertically (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.num}
                  className={`p-6 rounded-xl transition-all ${
                    index !== benefits.length - 1 ? 'border-b border-slate-200' : ''
                  } hover:bg-white/80`}
                >
                  <div className="flex items-start gap-5">
                    {/* Golden Yellow Number */}
                    <div className="flex flex-col items-center">
                      <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F2B600] tabular-nums leading-none">
                        {benefit.num}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-7 h-7 rounded-md bg-[#073449]/10 text-[#073449] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#073449] font-heading tracking-tight">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-9">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
