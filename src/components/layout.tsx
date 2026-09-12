import { Link, useRouterState } from "@tanstack/react-router";
import { ClipboardList, House, Menu, Settings, ShoppingBag, UserRound, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { BrandMark, Button } from "@/components/ui";
import { useApp } from "@/components/app-context";
import { cn } from "@/lib/utils";

const customerLinks = [
  { to: "/", label: "Home", icon: House },
  { to: "/menu", label: "Today's Menu", icon: ClipboardList },
  { to: "/orders", label: "My Orders", icon: ClipboardList },
  { to: "/profile", label: "Profile", icon: UserRound },
] as const;

const adminLinks = [
  { to: "/admin/dashboard", label: "Dashboard" },
  { to: "/admin/orders", label: "Orders" },
  { to: "/admin/kitchen", label: "Kitchen" },
  { to: "/admin/menu/today", label: "Today's Menu" },
  { to: "/admin/menu", label: "Menu Items" },
  { to: "/admin/customers", label: "Customers" },
  { to: "/admin/reports", label: "Reports" },
  { to: "/admin/settings", label: "Settings" },
] as const;

export function CustomerLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { cart } = useApp();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-30 border-b border-line/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8"><BrandMark />
        <nav className="hidden items-center gap-1 md:flex">{customerLinks.map(({ to, label }) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "bg-cream-2 text-ink" }} className="rounded-full px-4 py-2 text-sm font-semibold text-ink-soft transition hover:bg-cream-2 hover:text-ink">{label}</Link>)}</nav>
        <div className="flex items-center gap-2"><Link to="/cart" aria-label={`Cart${count ? `, ${count} items` : ""}`} className="relative grid size-11 place-items-center rounded-full bg-cream text-ink shadow-soft-clay transition hover:bg-cream-2"><ShoppingBag size={19} />{count > 0 && <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-terra text-[10px] font-bold text-cream">{count}</span>}</Link><button type="button" aria-label="Open navigation" onClick={() => setOpen(true)} className="grid size-11 place-items-center rounded-full bg-cream text-ink md:hidden"><Menu size={20} /></button></div>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-50 bg-ink/20 md:hidden" onClick={() => setOpen(false)}><aside className="ml-auto flex h-full w-[min(86vw,360px)] flex-col bg-cream p-5 shadow-xl" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between"><BrandMark /><button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="grid size-11 place-items-center rounded-full bg-cream-2"><X size={19} /></button></div><nav className="mt-8 space-y-2">{customerLinks.map(({ to, label, icon: Icon }) => <Link key={to} to={to} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold text-ink-soft hover:bg-cream-2 hover:text-ink"><Icon size={18} />{label}</Link>)}<Link to="/cart" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold text-ink-soft hover:bg-cream-2 hover:text-ink"><ShoppingBag size={18} />Cart {count > 0 && `· ${count}`}</Link></nav></aside></div>}
    <main>{children}</main>
    <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-line bg-background/95 px-2 py-2 backdrop-blur-md md:hidden">{customerLinks.map(({ to, label, icon: Icon }) => <Link key={to} to={to} activeProps={{ className: "text-terra" }} className="flex flex-col items-center gap-1 py-1 text-[10px] font-bold text-ink-soft"><Icon size={18} />{label === "Today's Menu" ? "Menu" : label.replace("My ", "")}</Link>)}</nav>
  </div>;
}

export function AdminLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <div className="min-h-screen bg-admin-background text-admin-foreground"><aside className={cn("fixed inset-y-0 left-0 z-40 w-64 border-r border-admin-line bg-admin-sidebar p-5 transition-transform lg:translate-x-0", open ? "translate-x-0" : "-translate-x-full")}><div className="flex items-center justify-between"><BrandMark dark /><button type="button" aria-label="Close admin navigation" onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-full bg-admin-surface text-admin-foreground lg:hidden"><X size={18} /></button></div><div className="mt-10"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-admin-muted">Kitchen console</p><nav className="space-y-1">{adminLinks.map(({ to, label }) => <Link key={to} to={to} onClick={() => setOpen(false)} className={cn("block rounded-xl px-3 py-3 text-sm font-semibold text-admin-muted transition hover:bg-admin-surface hover:text-admin-foreground", pathname === to && "bg-terra text-cream shadow-soft-clay")}>{label}</Link>)}</nav></div><div className="absolute inset-x-5 bottom-5 border-t border-admin-line pt-5"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-terra text-sm font-bold text-cream">MK</span><div><p className="text-sm font-semibold">Ananya Mehta</p><p className="text-xs text-admin-muted">Restaurant owner</p></div></div><Link to="/" className="mt-4 block text-xs font-semibold text-admin-muted hover:text-admin-foreground">← View customer site</Link></div></aside><div className="lg:pl-64"><header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-admin-line bg-admin-background/95 px-5 backdrop-blur-md lg:px-8"><button type="button" aria-label="Open admin navigation" onClick={() => setOpen(true)} className="grid size-11 place-items-center rounded-full bg-admin-surface lg:hidden"><Menu size={20} /></button><div className="hidden lg:block"><p className="text-xs font-bold uppercase tracking-[0.2em] text-terra">Saturday, September 12</p><p className="mt-1 font-display text-xl">Good morning, Ananya</p></div><div className="ml-auto flex items-center gap-3"><span className="hidden items-center gap-2 rounded-full bg-sage-soft px-3 py-2 text-xs font-bold text-sage sm:flex"><span className="size-2 rounded-full bg-sage" />Ordering open</span><Button variant="secondary" className="min-h-10 px-4 text-xs"><Settings size={15} />Settings</Button></div></header><main className="p-5 pb-24 lg:p-8">{children}</main></div></div>;
}
