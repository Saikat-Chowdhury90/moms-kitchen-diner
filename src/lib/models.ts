export type MenuCategory = "Main Course" | "Thali" | "Rice" | "Breads" | "Sides" | "Desserts" | "Beverages";

export type OrderStatus =
  | "PLACED"
  | "CONFIRMED"
  | "PREPARING"
  | "READY"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "PICKED_UP"
  | "CANCELLED";

export type OrderType = "DELIVERY" | "PICKUP";
export type PaymentMethod = "COD" | "ONLINE";
export type PaymentStatus = "PENDING" | "PAID" | "FAILED" | "REFUNDED";

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: "CUSTOMER" | "ADMIN";
}

export interface Address {
  id: string;
  label: string;
  house: string;
  street: string;
  landmark: string;
  city: string;
  pinCode: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  vegetarian: boolean;
  active: boolean;
  ingredients: string[];
}

export interface DailyMenuItem extends MenuItem {
  available: boolean;
  quantityLimit: number;
  sold: number;
}

export interface DailyMenu {
  date: string;
  cutoff: string;
  isOpen: boolean;
  published: boolean;
  items: DailyMenuItem[];
}

export interface CartItem {
  menuItem: DailyMenuItem;
  quantity: number;
}

export interface OrderItem {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customer: User;
  items: OrderItem[];
  orderType: OrderType;
  status: OrderStatus;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  address?: Address;
  customerNote?: string;
  createdAt: string;
}

export interface DashboardStats {
  orders: number;
  revenue: number;
  pending: number;
  completed: number;
  averageOrderValue: number;
}
