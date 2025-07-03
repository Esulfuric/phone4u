import { Phone } from "./types";
import { infinixPhones, infinixTablets } from "./brands/infinix";
import { xiaomiPhones, xiaomiTablets } from "./brands/xiaomi";
import { pocoPhones } from "./brands/poco";
import { itelPhones } from "./brands/itel";

// Combine all phones from different brands
export const phones: Phone[] = [
  ...infinixPhones,
  ...infinixTablets,
  ...xiaomiPhones,
  ...xiaomiTablets,
  ...pocoPhones,
  ...itelPhones,
];

// Export types
export type { Phone } from "./types";

// Utility functions
export const getPhoneById = (id: number): Phone | undefined => {
  return phones.find(phone => phone.id === id);
};

export const getPhonesByBrand = (brand: string): Phone[] => {
  return phones.filter(phone => phone.brand.toLowerCase() === brand.toLowerCase());
};

export const getPhonesByCategory = (category: "smartphones" | "tablets"): Phone[] => {
  return phones.filter(phone => phone.category === category);
};

export const getRelatedPhones = (currentPhone: Phone, limit: number = 4): Phone[] => {
  return phones
    .filter(phone => 
      phone.id !== currentPhone.id && 
      phone.brand === currentPhone.brand
    )
    .slice(0, limit);
};

export const searchPhones = (query: string): Phone[] => {
  const lowercaseQuery = query.toLowerCase();
  return phones.filter(phone =>
    phone.name.toLowerCase().includes(lowercaseQuery) ||
    phone.brand.toLowerCase().includes(lowercaseQuery) ||
    phone.description.toLowerCase().includes(lowercaseQuery)
  );
};