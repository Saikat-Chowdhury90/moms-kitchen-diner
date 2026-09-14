import { createFileRoute } from "@tanstack/react-router";
import { CustomerLayout } from "@/components/layout";
import { HomePage } from "@/components/pages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mom's Kitchen — Homemade meals, made with love" },
      { name: "description", content: "Order fresh, comforting homestyle meals from Mom's Kitchen for delivery or pickup." },
      { property: "og:title", content: "Mom's Kitchen — Homemade meals, made with love" },
      { property: "og:description", content: "Fresh, comforting homestyle meals prepared with care and ready for your table." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CustomerLayout><HomePage /></CustomerLayout>,
});
