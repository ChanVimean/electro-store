// types.js
/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} title
 * @property {number} price
 * @property {number} stock
 * @property {number} sold
 * @property {'laptop' | 'computer' | 'accessories' | 'other'} category
 * @property {string} description
 * @property {string} image
 */

// TypeScript:
// export const products: Product = [];

export const products = [
  {
    id: "1",
    title: "Laptop Rog Strix G16",
    price: 1299.99,
    stock: 10,
    sold: 50,
    category: "laptop",
    description: "Gaming laptop with 16-inch display and RGB keyboard.",
    image: "https://placehold.co/400x400/eee/333?text=Rog+Strix+G16",
  },
  {
    id: "2",
    title: "MacBook Air M3",
    price: 1099.0,
    stock: 15,
    sold: 80,
    category: "laptop",
    description: "Lightweight laptop with Apple M3 chip and all-day battery.",
    image: "https://placehold.co/400x400/eee/333?text=MacBook+Air+M3",
  },
  {
    id: "3",
    title: "Custom Gaming PC RTX 4070",
    price: 1599.99,
    stock: 5,
    sold: 20,
    category: "computer",
    description: "Pre-built desktop with RTX 4070 and 32GB RAM.",
    image: "https://placehold.co/400x400/eee/333?text=Gaming+PC+RTX+4070",
  },
  {
    id: "4",
    title: "Dell OptiPlex Desktop",
    price: 699.99,
    stock: 12,
    sold: 34,
    category: "computer",
    description: "Compact office desktop for everyday work.",
    image: "https://placehold.co/400x400/eee/333?text=Dell+OptiPlex",
  },
  {
    id: "5",
    title: "Logitech MX Master 3S Mouse",
    price: 99.99,
    stock: 40,
    sold: 210,
    category: "accessories",
    description: "Wireless ergonomic mouse with silent clicks.",
    image: "https://placehold.co/400x400/eee/333?text=MX+Master+3S",
  },
  {
    id: "6",
    title: "Keychron K8 Mechanical Keyboard",
    price: 89.99,
    stock: 30,
    sold: 150,
    category: "accessories",
    description: "Wireless mechanical keyboard with hot-swappable switches.",
    image: "https://placehold.co/400x400/eee/333?text=Keychron+K8",
  },
  {
    id: "7",
    title: 'Samsung 27" 4K Monitor',
    price: 329.99,
    stock: 18,
    sold: 65,
    category: "accessories",
    description: "27-inch UHD monitor with HDR support.",
    image: "https://placehold.co/400x400/eee/333?text=Samsung+4K+Monitor",
  },
  {
    id: "8",
    title: "USB-C Hub 7-in-1",
    price: 39.99,
    stock: 60,
    sold: 300,
    category: "other",
    description: "Multiport adapter with HDMI, USB 3.0, and card reader.",
    image: "https://placehold.co/400x400/eee/333?text=USB-C+Hub",
  },
  {
    id: "9",
    title: "Anker 65W Charger",
    price: 45.99,
    stock: 50,
    sold: 180,
    category: "other",
    description: "Fast GaN charger for laptops and phones.",
    image: "https://placehold.co/400x400/eee/333?text=Anker+65W",
  },
];
