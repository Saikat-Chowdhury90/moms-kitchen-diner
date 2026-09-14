import { createFileRoute } from "@tanstack/react-router";
import { CustomerLayout } from "@/components/layout";
import { MenuPage } from "@/components/pages";

export const Route = createFileRoute("/menu")({
  head: () => ({ meta: [{ title: "Today's Menu — Mom's Kitchen" }, { name: "description", content: "Browse today's fresh homestyle dishes from Mom's Kitchen." }, { property: "og:title", content: "Today's Menu — Mom's Kitchen" }, { property: "og:description", content: "Browse today's fresh homestyle dishes from Mom's Kitchen." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CustomerLayout><MenuPage /></CustomerLayout>,
});