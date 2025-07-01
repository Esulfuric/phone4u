
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
    // Body
    dimensions?: string;
    weight?: string;
    build?: string; // e.g., "Glass front, plastic back"
    sim?: string;   // e.g., "Dual SIM"
    // Display
    displayType?: string; // e.g., "IPS LCD"
    displaySize?: string; // e.g., "6.5 inches"
    resolution?: string;  // e.g., "720 x 1600 pixels"
    // Platform
    os?: string;         // e.g., "Android 13"
    chipset?: string;    // e.g., "Mediatek Helio G85"
    cpu?: string;        // e.g., "Octa-core"
    gpu?: string;        // e.g., "Mali-G52"
    // Camera
    mainCamera?: string; // e.g., "50 MP, f/1.8 (wide)"
    selfieCamera?: string; // e.g., "8 MP, f/2.0"
    video?: string;      // e.g., "1080p@30fps"
    // Battery
    batteryType?: string; // e.g., "Li-Po 5000 mAh"
    charging?: string;    // e.g., "18W wired"
  };
}

export const phones: Phone[] = [
  // Infinix Phones
 {
  id: 1,
  name: "Infinix Note 50",
  brand: "Infinix",
  price: 319500,
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPgIa3AsDlr_nuzCRQ0GQGmGDGqvFZO4VTL9OUOtOho3CTzhltrWFASbkelrVKa_6S9TIcQR_r_ehmxOnXcuLQU5ypk3OzzrrrxjTT07-c",
  category: "smartphones",
  condition: "new",
  storage: "256GB",
  ram: "8GB",
  description: "Infinix Note 50 with large storage and smooth performance for everyday use.",
  specifications: {
  storage: "256GB",
  ram: "8GB",
  body: {
    dimensions: "164.3 x 74.5 x 7.9 mm",
    weight: "186 g",
    build: "Glass front, plastic back",
    sim: "Dual SIM"
  },
  display: {
    type: "IPS LCD, 90Hz",
    size: "6.78 inches",
    resolution: "1080 x 2460 pixels"
  },
  platform: {
    os: "Android 13",
    chipset: "Mediatek Helio G88",
    cpu: "Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)",
    gpu: "Mali-G52 MC2"
  },
  camera: {
    main: "50 MP, f/1.6 (wide)",
    selfie: "8 MP, f/2.0",
    video: "1440p@30fps"
  },
  battery: {
    type: "Li-Po 5000 mAh",
    charging: "18W wired"
  },
  inStock: true
}
  {
    id: 2,
    name: "Infinix Note 50 Pro",
    brand: "Infinix",
    price: 378400,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0PeyV-3HLQ1AJCKOWqoupkXNM80adaRxd3ar0rSofdrNQyovLmidptskkA1_bmxzX3V1yLprewnbcvBXwO22Jz2B7v1gIWxZgSzhqQTAq",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Enhanced Infinix Note 50 Pro with professional features and performance.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 3,
    name: "Infinix Note 50 Pro+ 5G",
    brand: "Infinix",
    price: 671300,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "12GB",
    connectivity: "5G",
    description: "Premium Infinix Note 50 Pro+ with 5G connectivity and high-end specs.",
    specifications: {
      storage: "256GB",
      ram: "12GB",
      connectivity: "5G",
    },
    inStock: true
  },
  {
    id: 4,
    name: "Infinix Smart 10 HD",
    brand: "Infinix",
    price: 95800,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "2GB",
    description: "Budget-friendly Infinix Smart 10 HD for basic smartphone needs.",
    specifications: {
      storage: "64GB",
      ram: "2GB",
    },
    inStock: true
  },
  {
    id: 5,
    name: "Infinix Smart 10",
    brand: "Infinix",
    price: 102000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Affordable Infinix Smart 10 with improved RAM for better performance.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 6,
    name: "Infinix Smart 10 Plus",
    brand: "Infinix",
    price: 126000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Enhanced Infinix Smart 10 Plus with more storage and RAM.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 7,
    name: "Infinix Smart 8",
    brand: "Infinix",
    price: 97700,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "2GB",
    description: "Reliable Infinix Smart 8 for everyday smartphone usage.",
    specifications: {
      storage: "64GB",
      ram: "2GB",
    },
    inStock: true
  },
  {
    id: 8,
    name: "Infinix Smart 9 HD (3GB)",
    brand: "Infinix",
    price: 104000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Infinix Smart 9 HD with 3GB RAM for smooth multitasking.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 9,
    name: "Infinix Smart 9 HD (4GB)",
    brand: "Infinix",
    price: 112100,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "4GB",
    description: "Infinix Smart 9 HD with 4GB RAM for enhanced performance.",
    specifications: {
      storage: "64GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 10,
    name: "Infinix Smart 9",
    brand: "Infinix",
    price: 120900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "3GB",
    description: "Infinix Smart 9 with increased storage capacity.",
    specifications: {
      storage: "128GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 11,
    name: "Infinix Hot 50i (128GB)",
    brand: "Infinix",
    price: 141400,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Infinix Hot 50i with balanced performance and storage.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 12,
    name: "Infinix Hot 50i (256GB)",
    brand: "Infinix",
    price: 170800,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "4GB",
    description: "Infinix Hot 50i with expanded storage for more apps and media.",
    specifications: {
      storage: "256GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 13,
    name: "Infinix Hot 50 (128GB)",
    brand: "Infinix",
    price: 210000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "8GB",
    description: "Infinix Hot 50 with powerful 8GB RAM for superior performance.",
    specifications: {
      storage: "128GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 14,
    name: "Infinix Hot 50 (256GB)",
    brand: "Infinix",
    price: 218700,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Infinix Hot 50 with ample storage and high-performance RAM.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 15,
    name: "Infinix Hot 50 Pro+ (128GB)",
    brand: "Infinix",
    price: 260400,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "8GB",
    description: "Premium Infinix Hot 50 Pro+ with professional features.",
    specifications: {
      storage: "128GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 16,
    name: "Infinix Hot 50 Pro+ (256GB)",
    brand: "Infinix",
    price: 291100,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Infinix Hot 50 Pro+ with expanded storage and pro features.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 17,
    name: "Infinix Note 40",
    brand: "Infinix",
    price: 310700,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Infinix Note 40 with premium specifications and design.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 18,
    name: "Infinix Note 40 Pro",
    brand: "Infinix",
    price: 375700,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Professional-grade Infinix Note 40 Pro with advanced features.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 19,
    name: "Infinix Note 40 Pro 5G",
    brand: "Infinix",
    price: 508000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "12GB",
    connectivity: "5G",
    description: "High-end Infinix Note 40 Pro with 5G connectivity and premium specs.",
    specifications: {
      storage: "256GB",
      ram: "12GB",
      connectivity: "5G",
    },
    inStock: true
  },
  {
    id: 20,
    name: "Infinix GT20 Pro",
    brand: "Infinix",
    price: 552100,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "12GB",
    description: "Gaming-focused Infinix GT20 Pro with high-performance specifications.",
    specifications: {
      storage: "256GB",
      ram: "12GB",
    },
    inStock: true
  },
  {
    id: 21,
    name: "Infinix Zero Flip",
    brand: "Infinix",
    price: 983900,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "512GB",
    ram: "8GB",
    description: "Premium foldable Infinix Zero Flip with innovative design.",
    specifications: {
      storage: "512GB",
      ram: "8GB",
    },
    inStock: true
  },
  // Infinix Tablets
  {
    id: 22,
    name: "Infinix XPAD (OLD) Wi-Fi",
    brand: "Infinix",
    price: 242900,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "256GB",
    ram: "4GB",
    connectivity: "Wi-Fi",
    description: "Infinix XPAD tablet with Wi-Fi connectivity for productivity and entertainment.",
    specifications: {
      storage: "256GB",
      ram: "4GB",
      connectivity: "Wi-Fi",
    },
    inStock: true
  },
  {
    id: 23,
    name: "Infinix XPAD (OLD) 4G (128GB)",
    brand: "Infinix",
    price: 234000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    connectivity: "4G",
    description: "Infinix XPAD with 4G connectivity for on-the-go productivity.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
      connectivity: "4G",
    },
    inStock: true
  },
  {
    id: 24,
    name: "Infinix XPAD (OLD) 4G (256GB)",
    brand: "Infinix",
    price: 270100,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    connectivity: "4G",
    description: "Infinix XPAD with enhanced storage and RAM for better performance.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
      connectivity: "4G",
    },
    inStock: true
  },
  {
    id: 25,
    name: "Infinix XPAD (NEW) 4G (128GB)",
    brand: "Infinix",
    price: 214400,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    connectivity: "4G",
    description: "Latest Infinix XPAD with updated features and 4G connectivity.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
      connectivity: "4G",
    },
    inStock: true
  },
  {
    id: 26,
    name: "Infinix XPAD (NEW) 4G (256GB)",
    brand: "Infinix",
    price: 250200,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    connectivity: "4G",
    description: "New Infinix XPAD with expanded storage and performance features.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
      connectivity: "4G",
    },
    inStock: true
  },
  // Itel Phones
  {
    id: 27,
    name: "Itel A18",
    brand: "Itel",
    price: 64800,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "32GB",
    ram: "1GB",
    description: "Ultra-affordable Itel A18 for basic smartphone needs.",
    specifications: {
      storage: "32GB",
      ram: "1GB",
    },
    inStock: true
  },
  {
    id: 28,
    name: "Itel A06",
    brand: "Itel",
    price: 75300,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    description: "Budget-friendly Itel A06 smartphone.",
    inStock: true
  },
  {
    id: 29,
    name: "Itel A50C",
    brand: "Itel",
    price: 83900,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "32GB",
    ram: "2GB",
    description: "Itel A50C with improved RAM for better performance.",
    specifications: {
      storage: "32GB",
      ram: "2GB",
    },
    inStock: true
  },
  {
    id: 30,
    name: "Itel A50 (2GB)",
    brand: "Itel",
    price: 91800,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "2GB",
    description: "Itel A50 with expanded storage and reliable performance.",
    specifications: {
      storage: "64GB",
      ram: "2GB",
    },
    inStock: true
  },
  {
    id: 31,
    name: "Itel A50 (3GB)",
    brand: "Itel",
    price: 100200,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Itel A50 with enhanced RAM for smoother multitasking.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 32,
    name: "Itel A80 (64GB)",
    brand: "Itel",
    price: 93200,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Itel A80 with balanced storage and performance specifications.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 33,
    name: "Itel A80 (128GB, 3GB)",
    brand: "Itel",
    price: 99900,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "3GB",
    description: "Itel A80 with expanded storage for more apps and media.",
    specifications: {
      storage: "128GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 34,
    name: "Itel A80 (128GB, 4GB)",
    brand: "Itel",
    price: 119300,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Itel A80 with premium storage and RAM configuration.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 35,
    name: "Itel A90 (64GB)",
    brand: "Itel",
    price: 84900,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Itel A90 with reliable performance and modern features.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 36,
    name: "Itel A90 (128GB)",
    brand: "Itel",
    price: 94900,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Itel A90 with enhanced storage and performance capabilities.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 37,
    name: "Itel S25 Ultra",
    brand: "Itel",
    price: 209900,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Premium Itel S25 Ultra with flagship specifications.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  // POCO Phones
  {
    id: 38,
    name: "POCO C71 (64GB)",
    brand: "POCO",
    price: 94900,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Affordable POCO C71 with reliable performance and modern design.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 39,
    name: "POCO C71 (128GB)",
    brand: "POCO",
    price: 106900,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "POCO C71 with expanded storage and enhanced RAM.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 40,
    name: "POCO X7 Pro",
    brand: "POCO",
    price: 589000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "512GB",
    ram: "12GB",
    description: "High-performance POCO X7 Pro with flagship specifications.",
    specifications: {
      storage: "512GB",
      ram: "12GB",
    },
    inStock: true
  },
  {
    id: 41,
    name: "POCO C61",
    brand: "POCO",
    price: 89900,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Budget-friendly POCO C61 with essential smartphone features.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 42,
    name: "POCO C75 (128GB)",
    brand: "POCO",
    price: 139900,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "6GB",
    description: "POCO C75 with balanced performance and modern features.",
    specifications: {
      storage: "128GB",
      ram: "6GB",
    },
    inStock: true
  },
  {
    id: 43,
    name: "POCO C75 (256GB)",
    brand: "POCO",
    price: 159900,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "POCO C75 with premium storage and RAM configuration.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 44,
    name: "POCO X6 Pro",
    brand: "POCO",
    price: 563800,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "512GB",
    ram: "12GB",
    description: "Powerful POCO X6 Pro with flagship-level performance.",
    specifications: {
      storage: "512GB",
      ram: "12GB",
    },
    inStock: true
  },
  // Redmi Phones
  {
    id: 45,
    name: "Redmi A3x (64GB)",
    brand: "Xiaomi",
    price: 89900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Entry-level Redmi A3x with reliable performance and quality build.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 46,
    name: "Redmi A3x (128GB)",
    brand: "Xiaomi",
    price: 99900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Redmi A3x with expanded storage and enhanced RAM.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 47,
    name: "Redmi A5 (64GB)",
    brand: "Xiaomi",
    price: 99700,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Redmi A5 with modern design and reliable performance.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
    },
    inStock: true
  },
  {
    id: 48,
    name: "Redmi A5 (128GB)",
    brand: "Xiaomi",
    price: 113200,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Redmi A5 with enhanced storage and performance capabilities.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 49,
    name: "Redmi A3 Pro",
    brand: "Xiaomi",
    price: 122900,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Redmi A3 Pro with professional features and improved performance.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 50,
    name: "Redmi 14C (128GB, 4GB)",
    brand: "Xiaomi",
    price: 129600,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Redmi 14C with balanced specifications and modern features.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 51,
    name: "Redmi 14C (128GB, 6GB)",
    brand: "Xiaomi",
    price: 146600,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "6GB",
    description: "Redmi 14C with enhanced RAM for better multitasking.",
    specifications: {
      storage: "128GB",
      ram: "6GB",
    },
    inStock: true
  },
  {
    id: 52,
    name: "Redmi 14C (256GB)",
    brand: "Xiaomi",
    price: 162600,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Redmi 14C with premium storage and RAM configuration.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 53,
    name: "Redmi 13 (128GB, 6GB)",
    brand: "Xiaomi",
    price: 168800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "6GB",
    description: "Redmi 13 with advanced features and solid performance.",
    specifications: {
      storage: "128GB",
      ram: "6GB",
    },
    inStock: true
  },
  {
    id: 54,
    name: "Redmi 13 (128GB, 8GB)",
    brand: "Xiaomi",
    price: 189800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "8GB",
    description: "Redmi 13 with enhanced RAM for superior performance.",
    specifications: {
      storage: "128GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 55,
    name: "Redmi 13 (256GB)",
    brand: "Xiaomi",
    price: 200800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Redmi 13 with ample storage and high-performance specifications.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 56,
    name: "Redmi Note 14 (128GB, 6GB)",
    brand: "Xiaomi",
    price: 245800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "6GB",
    description: "Redmi Note 14 with premium features and excellent camera.",
    specifications: {
      storage: "128GB",
      ram: "6GB",
    },
    inStock: true
  },
  {
    id: 57,
    name: "Redmi Note 14 (128GB, 8GB)",
    brand: "Xiaomi",
    price: 264800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    ram: "8GB",
    description: "Redmi Note 14 with enhanced performance and advanced features.",
    specifications: {
      storage: "128GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 58,
    name: "Redmi Note 14 (256GB)",
    brand: "Xiaomi",
    price: 283800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Redmi Note 14 with expanded storage and flagship-level performance.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 59,
    name: "Redmi Note 14 Pro (256GB)",
    brand: "Xiaomi",
    price: 395800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Professional-grade Redmi Note 14 Pro with advanced camera system.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 60,
    name: "Redmi Note 14 Pro (512GB)",
    brand: "Xiaomi",
    price: 472800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "512GB",
    ram: "12GB",
    description: "Premium Redmi Note 14 Pro with flagship storage and RAM.",
    specifications: {
      storage: "512GB",
      ram: "12GB",
    },
    inStock: true
  },
  {
    id: 61,
    name: "Redmi Note 14 Pro+ 5G (256GB)",
    brand: "Xiaomi",
    price: 619800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    connectivity: "5G",
    description: "Top-tier Redmi Note 14 Pro+ with 5G connectivity and premium features.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
      connectivity: "5G",
    },
    inStock: true
  },
  {
    id: 62,
    name: "Redmi Note 14 Pro+ 5G (512GB)",
    brand: "Xiaomi",
    price: 700800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "512GB",
    ram: "12GB",
    connectivity: "5G",
    description: "Ultimate Redmi Note 14 Pro+ with maximum storage and 5G connectivity.",
    specifications: {
      storage: "512GB",
      ram: "12GB",
      connectivity: "5G",
    },
    inStock: true
  },
  {
    id: 63,
    name: "Xiaomi 14T",
    brand: "Xiaomi",
    price: 720800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "512GB",
    ram: "12GB",
    description: "Flagship Xiaomi 14T with cutting-edge technology and premium design.",
    specifications: {
      storage: "512GB",
      ram: "12GB",
    },
    inStock: true
  },
  // Redmi Tablets
  {
    id: 64,
    name: "Redmi Pad SE (128GB)",
    brand: "Xiaomi",
    price: 208800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Affordable Redmi Pad SE for entertainment and productivity.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 65,
    name: "Redmi Pad SE (256GB)",
    brand: "Xiaomi",
    price: 250800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Redmi Pad SE with enhanced storage and performance.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 66,
    name: "Redmi Pad Pro (128GB)",
    brand: "Xiaomi",
    price: 362800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "128GB",
    ram: "6GB",
    description: "Professional Redmi Pad Pro with advanced features and performance.",
    specifications: {
      storage: "128GB",
      ram: "6GB",
    },
    inStock: true
  },
  {
    id: 67,
    name: "Redmi Pad Pro (256GB)",
    brand: "Xiaomi",
    price: 425800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    description: "Premium Redmi Pad Pro with expanded storage and high performance.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
    },
    inStock: true
  },
  {
    id: 68,
    name: "Redmi Pad Pro 5G (128GB)",
    brand: "Xiaomi",
    price: 443800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "128GB",
    ram: "6GB",
    connectivity: "5G",
    description: "Redmi Pad Pro with 5G connectivity for ultimate mobility.",
    specifications: {
      storage: "128GB",
      ram: "6GB",
      connectivity: "5G",
    },
    inStock: true
  },
  {
    id: 69,
    name: "Redmi Pad Pro 5G (256GB)",
    brand: "Xiaomi",
    price: 511800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    connectivity: "5G",
    description: "Top-tier Redmi Pad Pro with 5G, premium storage and performance.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
      connectivity: "5G",
    },
    inStock: true
  },
  {
    id: 70,
    name: "Redmi Pad SE 8.7 (64GB)",
    brand: "Xiaomi",
    price: 140800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "64GB",
    ram: "4GB",
    description: "Compact Redmi Pad SE 8.7 for portable entertainment and productivity.",
    specifications: {
      storage: "64GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 71,
    name: "Redmi Pad SE 8.7 (128GB, 4GB)",
    brand: "Xiaomi",
    price: 160800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    description: "Redmi Pad SE 8.7 with expanded storage for more content.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
    },
    inStock: true
  },
  {
    id: 72,
    name: "Redmi Pad SE 8.7 (128GB, 6GB)",
    brand: "Xiaomi",
    price: 182800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "128GB",
    ram: "6GB",
    description: "Redmi Pad SE 8.7 with enhanced RAM for better multitasking.",
    specifications: {
      storage: "128GB",
      ram: "6GB",
    },
    inStock: true
  },
  {
    id: 73,
    name: "Redmi Pad SE 8.7 4G (64GB)",
    brand: "Xiaomi",
    price: 159800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "64GB",
    ram: "4GB",
    connectivity: "4G",
    description: "Compact Redmi Pad SE 8.7 with 4G connectivity for mobile productivity.",
    specifications: {
      storage: "64GB",
      ram: "4GB",
      connectivity: "4G",
    },
    inStock: true
  },
  {
    id: 74,
    name: "Redmi Pad SE 8.7 4G (128GB, 4GB)",
    brand: "Xiaomi",
    price: 179800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "128GB",
    ram: "4GB",
    connectivity: "4G",
    description: "Redmi Pad SE 8.7 with 4G connectivity and expanded storage.",
    specifications: {
      storage: "128GB",
      ram: "4GB",
      connectivity: "4G",
    },
    inStock: true
  },
  {
    id: 75,
    name: "Redmi Pad SE 8.7 4G (128GB, 6GB)",
    brand: "Xiaomi",
    price: 201800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "128GB",
    ram: "6GB",
    connectivity: "4G",
    description: "Premium Redmi Pad SE 8.7 with 4G, enhanced storage and performance.",
    specifications: {
      storage: "128GB",
      ram: "6GB",
      connectivity: "4G",
    },
    inStock: true
  }
];

export const getPhonesByCategory = (category: string): Phone[] => {
  if (category === 'all') return phones;
  return phones.filter(phone => phone.category === category);
};

export const getPhoneById = (id: number): Phone | undefined => {
  return phones.find(phone => phone.id === id);
};

export const getRelatedPhones = (currentPhone: Phone): Phone[] => {
  const priceRange = 100000; // ₦100,000 range
  const minPrice = currentPhone.price - priceRange;
  const maxPrice = currentPhone.price + priceRange;
  
  return phones
    .filter(phone => 
      phone.id !== currentPhone.id && 
      (phone.brand === currentPhone.brand || 
       (phone.price >= minPrice && phone.price <= maxPrice))
    )
    .slice(0, 4);
};

export const searchPhones = (query: string): Phone[] => {
  const lowercaseQuery = query.toLowerCase();
  return phones.filter(phone =>
    phone.name.toLowerCase().includes(lowercaseQuery) ||
    phone.brand.toLowerCase().includes(lowercaseQuery) ||
    phone.category.toLowerCase().includes(lowercaseQuery)
  );
};
