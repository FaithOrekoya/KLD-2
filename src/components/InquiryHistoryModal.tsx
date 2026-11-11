import React from 'react';
import { BaseModal } from './LegalModals';
import { PropertyInquiry } from '../types';
import { Clock, Home, Trash2, Phone, Mail, MapPin } from 'lucide-react';

interface InquiryHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: PropertyInquiry[];
  onClear: () => void;
}

export function InquiryHistoryModal({ isOpen, onClose, inquiries, onClear }: InquiryHistoryModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Your Property Inquiries">
      <div className="space-y-4">
        <p className="text-xs text-slate-500">
          Inquiries submitted from your browser session are recorded below for your reference.
        </p>

        {inquiries.length === 0 ? (
          <div className="text-center py-8 text-slate-400">
            <Home className="w-10 h-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No property inquiries submitted yet.</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
            {inquiries.map((inquiry) => (
              <div 
                key={inquiry.id} 
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm space-y-2"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#073449]">{inquiry.id}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{new Date(inquiry.createdAt).toLocaleDateString()}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-xs">
                    <Clock className="w-3 h-3" /> {inquiry.status}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 text-xs">Address:</span>
                  <p className="font-semibold text-slate-800">{inquiry.propertyAddress}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1 text-slate-600">
                  <div>
                    <span className="text-slate-400">Owner:</span> {inquiry.firstName} {inquiry.lastName}
                  </div>
                  <div>
                    <span className="text-slate-400">Type:</span> {inquiry.propertyType}
                  </div>
                  <div>
                    <span className="text-slate-400">Phone:</span> {inquiry.phone}
                  </div>
                  <div>
                    <span className="text-slate-400">Condition:</span> {inquiry.propertyCondition}
                  </div>
                </div>

                {inquiry.additionalInfo && (
                  <div className="pt-1 text-xs text-slate-500 italic bg-white p-2 rounded border border-slate-100">
                    "{inquiry.additionalInfo}"
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {inquiries.length > 0 && (
          <div className="pt-2 flex justify-between items-center">
            <button
              onClick={onClear}
              className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear Local Inquiries
            </button>
          </div>
        )}
      </div>
    </BaseModal>
  );
}
