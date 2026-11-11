import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Home, 
  AlertCircle, 
  Clock, 
  RotateCcw,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { PropertyInquiry, InquiryFormData } from '../types';

export function CashOfferForm() {
  const [formData, setFormData] = useState<InquiryFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    propertyAddress: '',
    propertyType: 'Single-Family Home',
    propertyCondition: 'Good',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<PropertyInquiry | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Validate phone: at least 10 digits
    const cleanedPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate property address
    if (!formData.propertyAddress.trim()) {
      newErrors.propertyAddress = 'Property address is required';
    } else if (formData.propertyAddress.trim().length < 5) {
      newErrors.propertyAddress = 'Please enter street, city, and state';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission delay & persist to localStorage
    setTimeout(() => {
      const generatedId = `KLD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const newInquiry: PropertyInquiry = {
        id: generatedId,
        createdAt: new Date().toISOString(),
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        propertyAddress: formData.propertyAddress.trim(),
        propertyType: formData.propertyType as any,
        propertyCondition: formData.propertyCondition as any,
        additionalInfo: formData.additionalInfo.trim(),
        status: 'In Review',
      };

      try {
        const existing = JSON.parse(localStorage.getItem('kld_property_inquiries') || '[]');
        localStorage.setItem('kld_property_inquiries', JSON.stringify([newInquiry, ...existing]));
      } catch (err) {
        console.error('Storage error', err);
      }

      setSubmittedInquiry(newInquiry);
      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedInquiry(null);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      propertyAddress: '',
      propertyType: 'Single-Family Home',
      propertyCondition: 'Good',
      additionalInfo: '',
    });
    setErrors({});
  };

  return (
    <section id="get-offer" className="py-20 lg:py-24 bg-[#073449] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT SIDE: Value Prop, Reassurance & Photo (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-[#F2B600]" />
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#F2B600] uppercase font-heading">
                  Direct Homeowner Inquiry
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight text-balance">
                Ready to Explore Your Cash Offer?
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Tell us a little about your property. Our team will review your information and get in touch to discuss the next steps.
              </p>
            </div>

            {/* Three Reassurance Points */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F2B600]/20 text-[#F2B600] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">No obligation to accept an offer.</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Review our direct cash valuation without pressure or commitment to sell.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F2B600]/20 text-[#F2B600] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">No property repairs required.</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    We buy completely as-is. Leave behind unwanted furniture, clutter, or maintenance tasks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F2B600]/20 text-[#F2B600] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">A straightforward inquiry process.</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    A real human acquisitions specialist reviews local records and contacts you promptly.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Photograph */}
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/10 hidden sm:block">
              <img
                src="/src/assets/images/inquiry_consultation_1794357846173.jpg"
                alt="Acquisitions specialist consulting with homeowners"
                referrerPolicy="no-referrer"
                className="w-full h-56 lg:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073449]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-white">Friendly, Local Review</span>
                <span className="text-[#F2B600]">Direct Buyer</span>
              </div>
            </div>

            {/* Direct Phone Callout */}
            <div className="p-4 rounded-xl bg-[#17334A] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#F2B600]/20 text-[#F2B600] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-300">Prefer speaking right away?</p>
                  <a href="tel:3364227704" className="text-sm font-bold text-white hover:text-[#F2B600] transition-colors">
                    (336) 422-7704
                  </a>
                </div>
              </div>
              <span className="text-[11px] text-[#F2B600] font-semibold uppercase tracking-wider">
                Direct Line
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Compact, Professional Property Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8">
              
              {submittedInquiry ? (
                /* Clear Submission Feedback State (Honest: no fake auto-offer) */
                <div className="text-center py-6 px-2 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                    <UserCheck className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-heading">
                      Inquiry Received
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#073449] font-heading mt-1">
                      Thank You, {submittedInquiry.firstName}!
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                      Your property details have been delivered to our acquisitions desk. 
                      An acquisitions specialist is reviewing local property data for:
                    </p>
                  </div>

                  <div className="p-4 bg-[#F4F6F8] rounded-xl text-left border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">Reference Code:</span>
                      <span className="font-mono font-bold text-[#073449]">{submittedInquiry.id}</span>
                    </div>
                    <div className="flex justify-between items-start pt-1">
                      <span className="text-slate-500 font-medium">Property:</span>
                      <span className="font-semibold text-[#073449] text-right max-w-xs">{submittedInquiry.propertyAddress}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Contact:</span>
                      <span className="font-semibold text-slate-700">{submittedInquiry.phone}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Status:</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                        <Clock className="w-3.5 h-3.5" /> Specialist In Review
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 italic max-w-md mx-auto">
                    Note: To provide an accurate cash offer, our team personally verifies tax records and neighborhood comps rather than generating automated computer estimates. Expect a contact within 24 hours.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:3364227704"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#073449] hover:bg-[#17334A] text-white text-xs font-semibold font-heading transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F2B600]" />
                      Call Acquisitions Now: (336) 422-7704
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Submit Another Property
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#073449] font-heading tracking-tight">
                      Get Your Free Cash Offer.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out your property details below for our acquisitions team to review.
                    </p>
                  </div>

                  {/* 1 & 2: First Name / Last Name (2 columns on desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-semibold text-slate-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors({ ...errors, firstName: undefined });
                        }}
                        placeholder="John"
                        className={`w-full px-3.5 py-2 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white transition-all ${
                          errors.firstName ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-slate-50/50'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs font-semibold text-slate-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, lastName: e.target.value });
                          if (errors.lastName) setErrors({ ...errors, lastName: undefined });
                        }}
                        placeholder="Doe"
                        className={`w-full px-3.5 py-2 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white transition-all ${
                          errors.lastName ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-slate-50/50'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 3 & 4: Phone Number / Email Address (2 columns on desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="(336) 555-0192"
                        className={`w-full px-3.5 py-2 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-slate-50/50'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="john@example.com"
                        className={`w-full px-3.5 py-2 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-slate-50/50'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 5: Property Address (Full width) */}
                  <div>
                    <label htmlFor="propertyAddress" className="block text-xs font-semibold text-slate-700 mb-1">
                      Property Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={(e) => {
                        setFormData({ ...formData, propertyAddress: e.target.value });
                        if (errors.propertyAddress) setErrors({ ...errors, propertyAddress: undefined });
                      }}
                      placeholder="e.g. 123 Maple Street, High Point, NC 27260"
                      className={`w-full px-3.5 py-2 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white transition-all ${
                        errors.propertyAddress ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-slate-50/50'
                      }`}
                    />
                    {errors.propertyAddress && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.propertyAddress}
                      </p>
                    )}
                  </div>

                  {/* 6 & 7: Property Type & Property Condition (2 columns on desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="propertyType" className="block text-xs font-semibold text-slate-700 mb-1">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50/50 text-sm text-slate-900 focus:bg-white transition-all"
                      >
                        <option value="Single-Family Home">Single-Family Home</option>
                        <option value="Multi-Family Property">Multi-Family Property</option>
                        <option value="Condo">Condo</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="propertyCondition" className="block text-xs font-semibold text-slate-700 mb-1">
                        Property Condition
                      </label>
                      <select
                        id="propertyCondition"
                        value={formData.propertyCondition}
                        onChange={(e) => setFormData({ ...formData, propertyCondition: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50/50 text-sm text-slate-900 focus:bg-white transition-all"
                      >
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Needs Some Repairs">Needs Some Repairs</option>
                        <option value="Needs Major Repairs">Needs Major Repairs</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* 8: Additional Information (textarea) */}
                  <div>
                    <label htmlFor="additionalInfo" className="block text-xs font-semibold text-slate-700 mb-1">
                      Additional Information <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="additionalInfo"
                      rows={2}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      placeholder="Selling timeline, property notes, occupancy status..."
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-lg bg-[#F2B600] hover:bg-[#D9A300] active:scale-[0.99] text-[#073449] font-heading font-bold text-base tracking-tight transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#073449] border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Property Details...</span>
                        </>
                      ) : (
                        <>
                          <span>Request My Cash Offer</span>
                          <Send className="w-4 h-4 text-[#073449]" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust disclaimer */}
                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your privacy is protected. We will never share your details with spam marketers.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
