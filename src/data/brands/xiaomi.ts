import { Phone } from "../types";

export const xiaomiPhones: Phone[] = [
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
      body: {
        dimensions: "164.9 x 76.3 x 9.1 mm",
        weight: "193 g",
        build: "Plastic front, plastic back",
        sim: "Dual SIM"
      },
      display: {
        type: "IPS LCD",
        size: "6.71 inches",
        resolution: "720 x 1650 pixels"
      },
      platform: {
        os: "Android 12 (MIUI 14)",
        chipset: "Mediatek Helio G36",
        cpu: "Octa-core (4x2.2 GHz Cortex-A53 & 4x1.6 GHz Cortex-A53)",
        gpu: "PowerVR GE8320"
      },
      camera: {
        main: "8 MP",
        selfie: "5 MP",
        video: "1080p@30fps"
      },
      battery: {
        type: "Li-Po 5000 mAh",
        charging: "10W wired"
      }
    },
    inStock: true
  },
  {
    id: 58,
    name: "Xiaomi 14T",
    brand: "Xiaomi",
    price: 720800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "512GB",
    ram: "12GB",
    connectivity: "5G",
    description: "Flagship Xiaomi 14T with cutting-edge technology and premium design.",
    specifications: {
      storage: "512GB",
      ram: "12GB",
      connectivity: "5G",
      body: {
        dimensions: "160.5 x 75.1 x 7.8 mm",
        weight: "195 g",
        build: "Glass front (Gorilla Glass Victus 2), aluminum frame, glass back",
        sim: "Dual SIM"
      },
      display: {
        type: "AMOLED, 144Hz, HDR10+, Dolby Vision",
        size: "6.67 inches",
        resolution: "1220 x 2712 pixels"
      },
      platform: {
        os: "Android 14 (HyperOS)",
        chipset: "Mediatek Dimensity 8300-Ultra",
        cpu: "Octa-core (1x3.35 GHz Cortex-X4 & 3x3.2 GHz Cortex-A720 & 4x2.2 GHz Cortex-A520)",
        gpu: "Mali-G615 MC6"
      },
      camera: {
        main: "50 MP + 50 MP + 12 MP",
        selfie: "32 MP",
        video: "8K@24fps, 4K@30/60fps"
      },
      battery: {
        type: "Li-Po 5000 mAh",
        charging: "67W wired, 50W wireless"
      }
    },
    inStock: true
  },
  {
    id: 59,
    name: "Redmi Note 14 Pro+ 5G (256GB)",
    brand: "Xiaomi",
    price: 619800,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "smartphones",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    connectivity: "5G",
    description: "Advanced Redmi Note 14 Pro+ with flagship features and 5G connectivity.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
      connectivity: "5G",
      body: {
        dimensions: "162.5 x 74.2 x 8.24 mm",
        weight: "210 g",
        build: "Glass front, plastic frame, plastic back",
        sim: "Dual SIM"
      },
      display: {
        type: "AMOLED, 120Hz, 1000 nits",
        size: "6.67 inches",
        resolution: "1080 x 2400 pixels"
      },
      platform: {
        os: "Android 14 (MIUI 14)",
        chipset: "Qualcomm Snapdragon 7s Gen 2",
        cpu: "Octa-core (4x2.4 GHz Cortex-A78 & 4x1.95 GHz Cortex-A55)",
        gpu: "Adreno 710"
      },
      camera: {
        main: "200 MP + 8 MP + 2 MP",
        selfie: "20 MP",
        video: "4K@30fps"
      },
      battery: {
        type: "Li-Po 5110 mAh",
        charging: "120W wired"
      }
    },
    inStock: true
  }
];

export const xiaomiTablets: Phone[] = [
  {
    id: 61,
    name: "Redmi Pad Pro 5G (256GB)",
    brand: "Xiaomi",
    price: 511800,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "tablets",
    condition: "new",
    storage: "256GB",
    ram: "8GB",
    connectivity: "5G",
    description: "Professional Redmi Pad Pro with 5G connectivity and premium performance.",
    specifications: {
      storage: "256GB",
      ram: "8GB",
      connectivity: "5G",
      body: {
        dimensions: "280 x 181.9 x 7.52 mm",
        weight: "571 g",
        build: "Aluminum alloy body",
        sim: "Nano-SIM"
      },
      display: {
        type: "IPS LCD, 120Hz",
        size: "12.1 inches",
        resolution: "2560 x 1600 pixels"
      },
      platform: {
        os: "Android 14 (MIUI Pad 15)",
        chipset: "Qualcomm Snapdragon 7s Gen 2",
        cpu: "Octa-core (4x2.4 GHz Cortex-A78 & 4x1.95 GHz Cortex-A55)",
        gpu: "Adreno 710"
      },
      camera: {
        main: "8 MP",
        selfie: "8 MP",
        video: "1080p@30fps"
      },
      battery: {
        type: "Li-Po 10000 mAh",
        charging: "33W wired"
      }
    },
    inStock: true
  }
];