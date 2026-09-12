import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { dailyMenu, demoAddresses, demoOrders } from "@/lib/mock-data";
import type { Address, CartItem, DailyMenu, Order, OrderStatus } from "@/lib/models";

interface AppContextValue {
  cart: CartItem[];
  orders: Order[];
  dailyMenu: DailyMenu;
  addresses: Address[];
  addToCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  createMockOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  toggleMenuItem: (itemId: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(demoOrders);
  const [menu, setMenu] = useState<DailyMenu>(dailyMenu);
  const addToCart = (itemId: string) => setCart((current) => { const item = menu.items.find((entry) => entry.id === itemId); if (!item || !item.available || item.sold >= item.quantityLimit) return current; const existing = current.find((entry) => entry.menuItem.id === itemId); return existing ? current.map((entry) => entry.menuItem.id === itemId ? { ...entry, quantity: entry.quantity + 1 } : entry) : [...current, { menuItem: item, quantity: 1 }]; });
  const updateCartQuantity = (itemId: string, quantity: number) => setCart((current) => quantity <= 0 ? current.filter((entry) => entry.menuItem.id !== itemId) : current.map((entry) => entry.menuItem.id === itemId ? { ...entry, quantity } : entry));
  const removeFromCart = (itemId: string) => setCart((current) => current.filter((entry) => entry.menuItem.id !== itemId));
  const createMockOrder = (order: Order) => setOrders((current) => [order, ...current]);
  const updateOrderStatus = (orderId: string, status: OrderStatus) => setOrders((current) => current.map((order) => order.id === orderId ? { ...order, status } : order));
  const toggleMenuItem = (itemId: string) => setMenu((current) => ({ ...current, items: current.items.map((item) => item.id === itemId ? { ...item, available: !item.available } : item) }));
  const value = useMemo(() => ({ cart, orders, dailyMenu: menu, addresses: demoAddresses, addToCart, updateCartQuantity, removeFromCart, clearCart: () => setCart([]), createMockOrder, updateOrderStatus, toggleMenuItem }), [cart, orders, menu]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used inside AppProvider");
  return value;
}
