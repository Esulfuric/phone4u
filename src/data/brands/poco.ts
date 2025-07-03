import { Phone } from "../types";

export const pocoPhones: Phone[] = [
  {
    id: 38,
    name: "POCO C71",
    brand: "POCO",
    price: 94900,
    image: "https://mobitez.in/wp-content/uploads/2025/04/POCO-C71-mobitez.in_.jpg",
    category: "smartphones",
    condition: "new",
    storage: "64GB",
    ram: "3GB",
    description: "Affordable POCO C71 with reliable performance and modern design.",
    specifications: {
      storage: "64GB",
      ram: "3GB",
      body: {
        dimensions: "168.4 x 76.3 x 8.22 mm",
        weight: "204 g",
        build: "Plastic front, plastic frame, plastic back",
        sim: "Dual SIM"
      },
      display: {
        type: "IPS LCD, 90Hz",
        size: "6.88 inches",
        resolution: "720 x 1640 pixels"
      },
      platform: {
        os: "Android 14 (MIUI 14)",
        chipset: "Mediatek Helio G36",
        cpu: "Octa-core (4x2.2 GHz Cortex-A53 & 4x1.6 GHz Cortex-A53)",
        gpu: "PowerVR GE8320"
      },
      camera: {
        main: "13 MP",
        selfie: "8 MP",
        video: "1080p@30fps"
      },
      battery: {
        type: "Li-Po 5160 mAh",
        charging: "18W wired"
      }
    },
    inStock: true
  },
  {
    id: 40,
    name: "POCO X7 Pro",
    brand: "POCO",
    price: 589000,
    image: "https://i.ebayimg.com/images/g/ZnsAAOSwxnlngOFb/s-l1200.jpg",
    category: "smartphones",
    condition: "new",
    storage: "512GB",
    ram: "12GB",
    description: "High-performance POCO X7 Pro with flagship specifications.",
    specifications: {
      storage: "512GB",
      ram: "12GB",
      body: {
        dimensions: "160.5 x 74.7 x 8.35 mm",
        weight: "194 g",
        build: "Glass front (Gorilla Glass 7i), plastic frame, plastic back",
        sim: "Dual SIM"
      },
      display: {
        type: "AMOLED, 120Hz, HDR10+",
        size: "6.67 inches",
        resolution: "1220 x 2712 pixels"
      },
      platform: {
        os: "Android 14 (HyperOS)",
        chipset: "Mediatek Dimensity 8400-Ultra",
        cpu: "Octa-core (1x3.25 GHz Cortex-X925 & 3x2.8 GHz Cortex-A720 & 4x2.1 GHz Cortex-A520)",
        gpu: "Mali-G720 MC12"
      },
      camera: {
        main: "50 MP + 8 MP",
        selfie: "20 MP",
        video: "4K@30fps, 1080p@60fps"
      },
      battery: {
        type: "Li-Po 6000 mAh",
        charging: "90W wired"
      }
    },
    inStock: true
  }
];
