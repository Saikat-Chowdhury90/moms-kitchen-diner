import { Outlet, createFileRoute } from "@tanstack/react-router";
import { CustomerLayout } from "@/components/layout";
export const Route = createFileRoute("/orders")({ component: () => <CustomerLayout><Outlet /></CustomerLayout> });