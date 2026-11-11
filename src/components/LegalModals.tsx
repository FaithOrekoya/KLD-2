import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Phone, Mail, MapPin } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function BaseModal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#073449]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-slate-200 p-6 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <h3 id="modal-title" className="text-xl font-bold text-[#073449] font-heading flex items-center gap-2">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="text-sm leading-relaxed text-slate-600 space-y-4">
          {children}
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-[#073449] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function PrivacyPolicyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="space-y-4 text-slate-700 text-sm">
        <p className="text-xs text-slate-400">Effective Date: January 1, 2026 · KLD Investments & Consulting</p>
        
        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">1. Information We Collect</h4>
          <p>
            When you request a cash offer through Get Your Fast Cash Offer, we collect details necessary to evaluate your residential property. This includes your name, phone number, email address, property physical address, property specifications, property condition, and any additional details you voluntarily submit.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">2. How We Use Your Information</h4>
          <p>
            We use your property and contact information exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-slate-600">
            <li>Analyze real estate market comparable sales and property records.</li>
            <li>Contact you via phone call, SMS text, or email to discuss a direct cash purchase offer.</li>
            <li>Coordinate property visits or document reviews if you choose to move forward.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">3. Non-Sale of Personal Data</h4>
          <p>
            We respect your privacy. KLD Investments & Consulting does not sell, trade, or rent your personal information to third-party telemarketers or unrelated advertisers. Information is only shared with licensed title companies, closing attorneys, or transactional escrow partners as necessary to facilitate an agreed-upon purchase.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">4. Telephone Consumer Protection Act (TCPA) Consent</h4>
          <p>
            By submitting your inquiry with a phone number, you authorize KLD Investments & Consulting to contact you regarding your property at the phone number provided. Consent is not a condition of purchase; you may opt out of text messages at any time by replying STOP.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">5. Contact Information</h4>
          <p>
            If you have questions about this policy or your personal data, contact us at:
          </p>
          <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1 mt-2 text-slate-600">
            <p className="font-semibold text-[#073449]">KLD Investments & Consulting</p>
            <p>101 W Main St. #333, Thomasville, NC 27261-0333</p>
            <p>Phone: (336) 422-7704 · Email: info@GetYourFastCashOffer.com</p>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}

export function TermsOfServiceModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <div className="space-y-4 text-slate-700 text-sm">
        <p className="text-xs text-slate-400">Effective Date: January 1, 2026 · KLD Investments & Consulting</p>

        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">1. Nature of Our Service</h4>
          <p>
            KLD Investments & Consulting ("Get Your Fast Cash Offer") is a private real estate investment firm that purchases residential properties directly from homeowners for cash. We are direct property buyers and consultants; this website is not an MLS listing service, a real estate brokerage, or an automated algorithmic appraisal tool.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">2. No Obligation & Valuation Review</h4>
          <p>
            Submitting a property inquiry creates no legal obligation for either party. Any cash offer discussed following review of your property information is tentative until formal inspection and execution of a mutually acceptable, written Purchase & Sale Agreement with clear title confirmation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">3. Accuracy of Submissions</h4>
          <p>
            You affirm that you are the lawful legal owner or an authorized representative of the property submitted, and that the information provided is accurate to the best of your knowledge.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">4. As-Is Purchases</h4>
          <p>
            When KLD Investments & Consulting completes a purchase, properties are purchased in as-is condition without requiring homeowner renovations, staging, or seller commissions, subject to the specific terms set forth in the binding purchase contract.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#073449] text-base mb-1">5. Governing Law</h4>
          <p>
            These terms are governed by the laws of the State of North Carolina. For questions regarding these terms, reach our office at 101 W Main St. #333, Thomasville, NC 27261-0333, or call (336) 422-7704.
          </p>
        </div>
      </div>
    </BaseModal>
  );
}
