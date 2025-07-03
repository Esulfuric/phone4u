import { Phone } from "../types";

export const itelPhones: Phone[] = [
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
      body: {
        dimensions: "164.6 x 75.4 x 9.1 mm",
        weight: "180 g",
        build: "Plastic front, plastic frame, plastic back",
        sim: "Dual SIM"
      },
      display: {
        type: "IPS LCD",
        size: "6.1 inches",
        resolution: "600 x 1280 pixels"
      },
      platform: {
        os: "Android 11 (Go edition)",
        chipset: "UNISOC SC9832E",
        cpu: "Quad-core 1.4 GHz Cortex-A53",
        gpu: "Mali-T820 MP1"
      },
      camera: {
        main: "5 MP",
        selfie: "5 MP",
        video: "720p@30fps"
      },
      battery: {
        type: "Li-Ion 3000 mAh",
        charging: "5W wired"
      }
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
      body: {
        dimensions: "163.2 x 75.4 x 8.1 mm",
        weight: "190 g",
        build: "Glass front, plastic frame, plastic back",
        sim: "Dual SIM"
      },
      display: {
        type: "AMOLED, 120Hz",
        size: "6.6 inches",
        resolution: "1080 x 2408 pixels"
      },
      platform: {
        os: "Android 14",
        chipset: "UNISOC Tiger T606",
        cpu: "Octa-core (2x1.6 GHz Cortex-A75 & 6x1.6 GHz Cortex-A55)",
        gpu: "Mali-G57 MP1"
      },
      camera: {
        main: "48 MP + 2 MP",
        selfie: "32 MP",
        video: "1080p@30fps"
      },
      battery: {
        type: "Li-Po 4000 mAh",
        charging: "45W wired"
      }
    },
    inStock: true
  }
];