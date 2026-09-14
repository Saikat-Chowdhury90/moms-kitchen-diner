import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout";
export const Route = createFileRoute("/admin/orders")({ component: () => <AdminLayout><Outlet /></AdminLayout> });