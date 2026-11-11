import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { CashOfferForm } from './components/CashOfferForm';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal, TermsOfServiceModal } from './components/LegalModals';
import { InquiryHistoryModal } from './components/InquiryHistoryModal';
import { PropertyInquiry } from './types';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [inquiries, setInquiries] = useState<PropertyInquiry[]>([]);

  // Sync inquiries from localStorage
  useEffect(() => {
    const loadInquiries = () => {
      try {
        const stored = localStorage.getItem('kld_property_inquiries');
        if (stored) {
          setInquiries(JSON.parse(stored));
        }
      } catch (err) {
        console.error('Failed to load inquiries', err);
      }
    };

    loadInquiries();
    window.addEventListener('storage', loadInquiries);
    // Periodically re-check in case a form submission in the child component updated localStorage
    const interval = setInterval(loadInquiries, 2000);
    return () => {
      window.removeEventListener('storage', loadInquiries);
      clearInterval(interval);
    };
  }, []);

  const handleScrollToOffer = () => {
    const el = document.getElementById('get-offer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus first name input after smooth scroll
      setTimeout(() => {
        const input = document.getElementById('firstName');
        if (input) input.focus();
      }, 500);
    }
  };

  const handleScrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearInquiries = () => {
    localStorage.removeItem('kld_property_inquiries');
    setInquiries([]);
    setHistoryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8] text-[#17334A] selection:bg-[#F2B600] selection:text-[#073449]">
      {/* SECTION 1: HEADER */}
      <Navbar onGetOfferClick={handleScrollToOffer} />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-grow">
        {/* SECTION 2: HERO */}
        <Hero 
          onGetOfferClick={handleScrollToOffer} 
          onHowItWorksClick={handleScrollToHowItWorks} 
        />

        {/* SECTION 3: WHY SELL TO KLD? */}
        <WhyChooseUs />

        {/* SECTION 4: HOW IT WORKS */}
        <HowItWorks onGetOfferClick={handleScrollToOffer} />

        {/* SECTION 5: GET YOUR CASH OFFER */}
        <CashOfferForm />

        {/* SECTION 6: FAQ */}
        <FAQSection />

        {/* SECTION 7: FINAL CTA */}
        <FinalCTA onGetOfferClick={handleScrollToOffer} />
      </main>

      {/* SECTION 8: FOOTER */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenHistory={() => setHistoryOpen(true)}
        inquiryCount={inquiries.length}
      />

      {/* MODALS */}
      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      <TermsOfServiceModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />

      <InquiryHistoryModal
        isOpen={historyOpen}
        onClose={() => setHistoryOpen(false)}
        inquiries={inquiries}
        onClear={handleClearInquiries}
      />
    </div>
  );
}
