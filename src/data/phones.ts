
export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  condition: 'new' | 'used' | 'refurbished';
  storage?: string;
  color?: string;
  description?: string;
  specifications?: {
    display?: string;
    processor?: string;
    camera?: string;
    battery?: string;
    os?: string;
    ram?: string;
    connectivity?: string;
    dimensions?: string;
    weight?: string;
  };
  features?: string[];
  inStock: boolean;
}

export const phones: Phone[] = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    price: 850000,
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    color: "Deep Purple",
    description: "The most advanced iPhone with Dynamic Island, Always-On display, and the most powerful camera system ever on iPhone.",
    specifications: {
      display: "6.7-inch Super Retina XDR with ProMotion",
      processor: "A16 Bionic chip",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      battery: "Up to 29 hours video playback",
      os: "iOS 16",
      ram: "6GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      dimensions: "160.7 x 77.6 x 7.85 mm",
      weight: "240g"
    },
    features: ["Dynamic Island", "Always-On Display", "Pro Camera System", "Action Mode", "Crash Detection"],
    inStock: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    price: 750000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    color: "Phantom Black",
    description: "The ultimate Galaxy S experience with S Pen, 200MP camera, and powerful performance.",
    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP Main, 12MP Ultra Wide, 10MP Telephoto",
      battery: "5000mAh with 45W fast charging",
      os: "Android 13 with One UI 5.1",
      ram: "12GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      dimensions: "163.4 x 78.1 x 8.9 mm",
      weight: "234g"
    },
    features: ["S Pen", "200MP Camera", "Night Mode", "8K Video", "DeX Mode"],
    inStock: true
  },
  {
    id: 3,
    name: "Google Pixel 7 Pro",
    brand: "Google",
    price: 520000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    color: "Obsidian",
    description: "Google's most advanced Pixel with Tensor G2 chip and incredible computational photography.",
    specifications: {
      display: "6.7-inch LTPO OLED with 120Hz",
      processor: "Google Tensor G2",
      camera: "50MP Main, 12MP Ultra Wide, 48MP Telephoto",
      battery: "5000mAh with 30W fast charging",
      os: "Android 13",
      ram: "12GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.2",
      dimensions: "162.9 x 76.6 x 8.9 mm",
      weight: "210g"
    },
    features: ["Magic Eraser", "Real Tone", "Live Translate", "Car Crash Detection", "Hold for Me"],
    inStock: true
  },
  {
    id: 4,
    name: "iPhone 13",
    brand: "Apple",
    price: 650000,
    image: "https://images.unsplash.com/photo-1632633173522-790e26620cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    color: "Pink",
    description: "The iPhone 13 features a beautiful design, advanced camera system, and A15 Bionic chip.",
    specifications: {
      display: "6.1-inch Super Retina XDR",
      processor: "A15 Bionic chip",
      camera: "12MP Dual-camera system",
      battery: "Up to 19 hours video playback",
      os: "iOS 15",
      ram: "4GB",
      connectivity: "5G, Wi-Fi 6, Bluetooth 5.0",
      dimensions: "146.7 x 71.5 x 7.65 mm",
      weight: "174g"
    },
    features: ["Cinematic Mode", "Photographic Styles", "Night Mode", "MagSafe", "Face ID"],
    inStock: true
  },
  {
    id: 5,
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    price: 280000,
    image: "https://images.unsplash.com/photo-1677593945917-26eaf9de52d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    color: "Awesome Violet",
    description: "Premium Galaxy experience with amazing camera, smooth display, and long-lasting battery.",
    specifications: {
      display: "6.4-inch Super AMOLED with 120Hz",
      processor: "Exynos 1380",
      camera: "50MP Main, 12MP Ultra Wide, 5MP Macro",
      battery: "5000mAh with 25W fast charging",
      os: "Android 13 with One UI 5.1",
      ram: "8GB",
      connectivity: "5G, Wi-Fi 6, Bluetooth 5.3",
      dimensions: "158.2 x 76.7 x 8.2 mm",
      weight: "202g"
    },
    features: ["Knox Security", "Nightography", "Portrait Mode", "IP67 Water Resistance", "Dolby Atmos"],
    inStock: true
  },
  {
    id: 6,
    name: "Tecno Spark 10 Pro",
    brand: "Tecno",
    price: 95000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    color: "Starry Black",
    description: "Affordable smartphone with great features, large display, and reliable performance.",
    specifications: {
      display: "6.8-inch IPS LCD with 90Hz",
      processor: "MediaTek Helio G88",
      camera: "48MP Main, 2MP Depth, 2MP Macro",
      battery: "5000mAh with 18W fast charging",
      os: "Android 13 with HiOS 13",
      ram: "8GB (4GB + 4GB Extended)",
      connectivity: "4G, Wi-Fi, Bluetooth 5.0",
      dimensions: "168.6 x 76.6 x 8.4 mm",
      weight: "208g"
    },
    features: ["Memory Fusion", "AI Camera", "Fingerprint Scanner", "Face Unlock", "DTS Audio"],
    inStock: true
  },
  {
    id: 7,
    name: "Infinix Hot 30",
    brand: "Infinix",
    price: 85000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    color: "Knight Black",
    description: "Budget-friendly smartphone with impressive features and reliable performance for everyday use.",
    specifications: {
      display: "6.78-inch IPS LCD with 90Hz",
      processor: "MediaTek Helio G88",
      camera: "50MP Main, 2MP Depth",
      battery: "5000mAh with 18W fast charging",
      os: "Android 13 with XOS 13",
      ram: "8GB (4GB + 4GB Extended)",
      connectivity: "4G, Wi-Fi, Bluetooth 5.0",
      dimensions: "168.5 x 76.5 x 8.3 mm",
      weight: "196g"
    },
    features: ["Memory Fusion", "AI Triple Camera", "Side Fingerprint", "Face Unlock", "DTS Audio"],
    inStock: true
  },
  {
    id: 8,
    name: "Redmi Note 12",
    brand: "Xiaomi",
    price: 150000,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "128GB",
    color: "Ice Blue",
    description: "Feature-packed smartphone with AMOLED display, fast charging, and excellent camera performance.",
    specifications: {
      display: "6.67-inch AMOLED with 120Hz",
      processor: "Snapdragon 4 Gen 1",
      camera: "48MP Main, 8MP Ultra Wide, 2MP Macro",
      battery: "5000mAh with 33W fast charging",
      os: "Android 12 with MIUI 14",
      ram: "6GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 5.0",
      dimensions: "165.9 x 76.2 x 7.85 mm",
      weight: "188g"
    },
    features: ["AMOLED Display", "33W Fast Charging", "Side Fingerprint", "IR Blaster", "Dual Speakers"],
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
