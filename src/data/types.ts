export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: "smartphones" | "tablets";
  condition: "new" | "refurbished" | "used";
  storage?: string;
  ram?: string;
  connectivity?: "4G" | "5G" | "Wi-Fi";
  description: string;
  inStock: boolean;
  specifications: {
    // Keep flat storage and ram for backward compatibility
    storage?: string;
    ram?: string;
    connectivity?: "4G" | "5G" | "Wi-Fi";
    // Nested specifications
    body?: {
      dimensions?: string;
      weight?: string;
      build?: string;
      sim?: string;
    };
    display?: {
      type?: string;
      size?: string;
      resolution?: string;
    };
    platform?: {
      os?: string;
      chipset?: string;
      cpu?: string;
      gpu?: string;
    };
    camera?: {
      main?: string;
      selfie?: string;
      video?: string;
    };
    battery?: {
      type?: string;
      charging?: string;
    };
  };
}
