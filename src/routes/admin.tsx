import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout";

export const Route = createFileRoute("/admin")({ component: () => <AdminLayout><Outlet /></AdminLayout> });
