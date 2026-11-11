export interface PropertyInquiry {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  propertyType: 'Single-Family Home' | 'Multi-Family Property' | 'Condo' | 'Townhouse' | 'Other';
  propertyCondition: 'Excellent' | 'Good' | 'Needs Some Repairs' | 'Needs Major Repairs' | 'Not Sure';
  additionalInfo?: string;
  status: 'In Review' | 'Contact Initiated' | 'Offer Prepared';
}

export interface InquiryFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  propertyType: string;
  propertyCondition: string;
  additionalInfo: string;
}

export type PropertyTypeOption = 
  | 'Single-Family Home'
  | 'Multi-Family Property'
  | 'Condo'
  | 'Townhouse'
  | 'Other';

export type PropertyConditionOption = 
  | 'Excellent'
  | 'Good'
  | 'Needs Some Repairs'
  | 'Needs Major Repairs'
  | 'Not Sure';
