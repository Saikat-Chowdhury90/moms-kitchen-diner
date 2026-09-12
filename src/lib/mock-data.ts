import type { Address, DailyMenu, MenuItem, Order, User } from "./models";
import heroImage from "@/assets/moms-kitchen-hero.jpg";
import biryaniImage from "@/assets/chicken-biryani.jpg";
import thaliImage from "@/assets/paneer-thali.jpg";
import dessertImage from "@/assets/gulab-jamun.jpg";

export const demoUsers: User[] = [
  { id: "customer-rahul", name: "Rahul Kumar", phone: "+91 98765 43210", email: "rahul.kumar@example.com", role: "CUSTOMER" },
  { id: "customer-amit", name: "Amit Sharma", phone: "+91 98111 23456", email: "amit.sharma@example.com", role: "CUSTOMER" },
  { id: "customer-priya", name: "Priya Das", phone: "+91 98989 12345", email: "priya.das@example.com", role: "CUSTOMER" },
  { id: "customer-sneha", name: "Sneha Patel", phone: "+91 98220 45678", email: "sneha.patel@example.com", role: "CUSTOMER" },
];

export const demoAddresses: Address[] = [
  { id: "home", label: "Home", house: "24B", street: "Lake View Road", landmark: "Opposite City Park", city: "Kolkata", pinCode: "700029" },
  { id: "office", label: "Office", house: "3rd Floor, 18", street: "Camac Street", landmark: "Near Metro Gate 2", city: "Kolkata", pinCode: "700017" },
];

export const menuItems: MenuItem[] = [
  { id: "chicken-biryani", name: "Chicken Biryani", description: "Fragrant basmati rice layered with tender chicken and aromatic spices.", price: 180, category: "Rice", image: biryaniImage, vegetarian: false, active: true, ingredients: ["Basmati rice", "Chicken", "Saffron", "Fried onion", "Whole spices"] },
  { id: "paneer-thali", name: "Paneer Thali", description: "A homestyle platter with paneer curry, dal, rice, roti and a little pickle.", price: 150, category: "Thali", image: thaliImage, vegetarian: true, active: true, ingredients: ["Paneer", "Seasonal vegetables", "Dal", "Basmati rice", "Roti"] },
  { id: "veg-biryani", name: "Veg Biryani", description: "Long-grain rice, garden vegetables and gentle house spices.", price: 140, category: "Rice", image: thaliImage, vegetarian: true, active: true, ingredients: ["Basmati rice", "Seasonal vegetables", "Mint", "Saffron"] },
  { id: "dal-fry", name: "Dal Fry", description: "Comforting yellow lentils finished with cumin, garlic and coriander.", price: 90, category: "Main Course", image: thaliImage, vegetarian: true, active: true, ingredients: ["Yellow lentils", "Garlic", "Cumin", "Coriander"] },
  { id: "roti", name: "Tandoori Roti", description: "Hand-rolled whole wheat bread, fresh from the tandoor.", price: 15, category: "Breads", image: heroImage, vegetarian: true, active: true, ingredients: ["Whole wheat flour", "Water", "Salt"] },
  { id: "rice", name: "Steamed Rice", description: "Fluffy, fragrant rice to make every curry feel like home.", price: 60, category: "Rice", image: heroImage, vegetarian: true, active: true, ingredients: ["Basmati rice", "Water"] },
  { id: "gulab-jamun", name: "Gulab Jamun", description: "Soft milk dumplings soaked in cardamom and saffron syrup.", price: 50, category: "Desserts", image: dessertImage, vegetarian: true, active: true, ingredients: ["Milk solids", "Cardamom", "Saffron", "Sugar syrup"] },
  { id: "masala-chai", name: "Masala Chai", description: "Slow-brewed tea with cardamom, ginger and our house spice blend.", price: 40, category: "Beverages", image: heroImage, vegetarian: true, active: true, ingredients: ["Tea", "Milk", "Ginger", "Cardamom"] },
];

export const dailyMenu: DailyMenu = {
  date: "Saturday, September 12",
  cutoff: "10:30 AM",
  isOpen: true,
  published: true,
  items: menuItems.map((item, index) => ({ ...item, available: index !== 6, quantityLimit: index === 0 ? 20 : 40, sold: index === 0 ? 8 : index === 6 ? 12 : 0 })),
};

const orderItems = (items: Array<[string, number]>): Order["items"] => items.map(([menuItemId, quantity]) => {
  const item = menuItems.find((entry) => entry.id === menuItemId) ?? menuItems[0];
  return { menuItemId, name: item.name, price: item.price, quantity, image: item.image };
});

export const demoOrders: Order[] = [
  {
    id: "order-001", orderNumber: "ORD-20260912-001", customerId: "customer-rahul", customer: demoUsers[0],
    items: orderItems([["chicken-biryani", 2], ["gulab-jamun", 2]]), orderType: "DELIVERY", status: "PREPARING", subtotal: 460, deliveryFee: 30, discount: 0, total: 490, paymentMethod: "COD", paymentStatus: "PENDING", address: demoAddresses[0], customerNote: "Less spicy, please", createdAt: "2026-09-12T11:42:00+05:30",
  },
  {
    id: "order-002", orderNumber: "ORD-20260912-002", customerId: "customer-amit", customer: demoUsers[1],
    items: orderItems([["paneer-thali", 1], ["roti", 4]]), orderType: "PICKUP", status: "READY", subtotal: 210, deliveryFee: 0, discount: 0, total: 210, paymentMethod: "ONLINE", paymentStatus: "PAID", createdAt: "2026-09-12T11:18:00+05:30",
  },
  {
    id: "order-003", orderNumber: "ORD-20260912-003", customerId: "customer-priya", customer: demoUsers[2],
    items: orderItems([["veg-biryani", 2], ["masala-chai", 2]]), orderType: "DELIVERY", status: "CONFIRMED", subtotal: 360, deliveryFee: 30, discount: 20, total: 370, paymentMethod: "COD", paymentStatus: "PENDING", address: demoAddresses[1], customerNote: "Call when you arrive", createdAt: "2026-09-12T10:58:00+05:30",
  },
  {
    id: "order-004", orderNumber: "ORD-20260912-004", customerId: "customer-sneha", customer: demoUsers[3],
    items: orderItems([["dal-fry", 1], ["rice", 1], ["roti", 2]]), orderType: "DELIVERY", status: "DELIVERED", subtotal: 180, deliveryFee: 30, discount: 0, total: 210, paymentMethod: "ONLINE", paymentStatus: "PAID", address: demoAddresses[0], createdAt: "2026-09-12T09:30:00+05:30",
  },
];
