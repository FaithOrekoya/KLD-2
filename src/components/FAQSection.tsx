import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FAQItem[] = [
    {
      question: 'How does selling my house for cash work?',
      answer:
        'Selling for cash is a direct alternative to traditional listings. You submit your property details, our acquisitions team reviews local sales comps and property records, and we discuss a straightforward cash offer with you. If you choose to proceed, we work through a reputable local closing attorney or title company to complete the purchase on terms that fit your timeline.',
    },
    {
      question: 'Do I need to make repairs before selling?',
      answer:
        'No repairs are needed. We purchase residential properties in as-is condition. You do not need to repaint, replace roofing or mechanical systems, clean carpets, or handle contractor renovations before selling to us.',
    },
    {
      question: 'Are there commissions or hidden fees?',
      answer:
        'No. Because you sell directly to KLD Investments & Consulting, there are no real estate agent commissions or hidden transaction fees deducted from your proceeds.',
    },
    {
      question: 'How quickly can I sell my property?',
      answer:
        'Because cash sales do not depend on conventional bank loan approvals or mortgage underwriting, the closing timeline is flexible. We can accommodate quick closings once title verification is completed, or extend the timeline if you need extra weeks or months to relocate.',
    },
    {
      question: 'Am I obligated to accept a cash offer?',
      answer:
        'You are under zero obligation. Requesting an offer and discussing your property with our acquisitions team is 100% free. You can review the details, consult with trusted advisors or family, and decide what works best for your situation.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-[#F4F6F8] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#F2B600]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#073449] uppercase font-heading">
              Frequently Asked Questions
            </span>
            <span className="w-5 h-0.5 bg-[#F2B600]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#073449] font-heading tracking-tight text-balance">
            Clear Answers for Homeowners.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about our direct cash home buying process.
          </p>
        </div>

        {/* Clean Accordion List: EXACTLY 5 questions */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-slate-50 hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#073449] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#F2B600] text-[#073449] rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-[#073449] text-base">Have a question not listed here?</h4>
            <p className="text-xs sm:text-sm text-slate-600">Our local acquisitions specialists are available to answer any questions.</p>
          </div>
          <a
            href="tel:3364227704"
            className="px-5 py-2.5 rounded-lg bg-[#073449] hover:bg-[#17334A] text-white text-xs sm:text-sm font-semibold font-heading transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <PhoneCall className="w-4 h-4 text-[#F2B600]" />
            Call (336) 422-7704
          </a>
        </div>
      </div>
    </section>
  );
}
