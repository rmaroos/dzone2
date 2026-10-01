export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
}

export interface SiteConfig {
  businessName: string;
  websiteUrl: string;
  turoHostUrl: string;
  contact: ContactInfo;
  serviceArea: string;
}
