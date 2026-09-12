import { dailyMenu, demoOrders, demoUsers, menuItems } from "./mock-data";
import type { DailyMenu, MenuItem, Order, OrderStatus } from "./models";

const wait = async <T,>(value: T) => value;

export const menuService = {
  getTodayMenu: (): Promise<DailyMenu> => wait(dailyMenu),
  getMenuItems: (): Promise<MenuItem[]> => wait(menuItems),
  getMenuItem: (id: string): Promise<MenuItem | undefined> => wait(menuItems.find((item) => item.id === id)),
};

export const orderService = {
  getMyOrders: (): Promise<Order[]> => wait(demoOrders.filter((order) => order.customerId === "customer-rahul")),
  getOrders: (): Promise<Order[]> => wait(demoOrders),
  getOrder: (id: string): Promise<Order | undefined> => wait(demoOrders.find((order) => order.id === id || order.orderNumber === id)),
  createOrder: (order: Order): Promise<Order> => wait(order),
  updateOrderStatus: (id: string, status: OrderStatus): Promise<Order | undefined> => wait(demoOrders.find((order) => order.id === id)),
};

export const customerService = {
  getCustomers: () => wait(demoUsers),
};

export const adminService = {
  getDashboardStats: () => wait({ orders: 42, revenue: 8450, pending: 7, completed: 35, averageOrderValue: 201 }),
};
