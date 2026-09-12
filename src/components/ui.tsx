import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Sparkles } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { CartItem, DailyMenuItem, Order, OrderStatus } from "@/lib/models";
import { cn } from "@/lib/utils";

export function Button({ className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "danger" }) {
  return <button className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50", {
    "bg-terra text-cream shadow-soft-clay hover:bg-terra-deep": variant === "primary",
    "bg-cream text-ink shadow-soft-clay ring-1 ring-line hover:bg-cream-2": variant === "secondary",
    "bg-transparent px-3 text-ink-soft hover:bg-cream-2 hover:text-ink": variant === "ghost",
    "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "danger",
  }, className)} {...props} />;
}

export function LinkButton({ to, children, variant = "primary", className }: { to: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string }) {
  return <Link to={to} className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", {
    "bg-terra text-cream shadow-soft-clay hover:bg-terra-deep": variant === "primary",
    "bg-cream text-ink shadow-soft-clay ring-1 ring-line hover:bg-cream-2": variant === "secondary",
    "px-3 text-ink-soft hover:bg-cream-2 hover:text-ink": variant === "ghost",
  }, className)}>{children}</Link>;
}

export function BrandMark({ dark = false }: { dark?: boolean }) {
  return <Link to="/" className={cn("group flex items-center gap-3", dark ? "text-cream" : "text-ink")} aria-label="Mom's Kitchen home">
    <span className={cn("grid size-11 place-items-center rounded-2xl font-display text-xl shadow-soft-clay transition-transform group-hover:-rotate-3", dark ? "bg-terra text-cream" : "bg-terra text-cream")}>M</span>
    <span className="leading-tight"><span className="block font-display text-xl">Mom's Kitchen</span><span className={cn("block text-[10px] font-semibold uppercase tracking-[0.2em]", dark ? "text-cream/60" : "text-ink-soft")}>Neighborhood kitchen</span></span>
  </Link>;
}

export function StatusBadge({ status }: { status: OrderStatus }) {
  const labels: Record<OrderStatus, string> = { PLACED: "New", CONFIRMED: "Confirmed", PREPARING: "Preparing", READY: "Ready", OUT_FOR_DELIVERY: "Out for delivery", DELIVERED: "Delivered", PICKED_UP: "Picked up", CANCELLED: "Cancelled" };
  const tones: Record<OrderStatus, string> = { PLACED: "bg-terra-soft text-terra-deep", CONFIRMED: "bg-amber-soft text-amber", PREPARING: "bg-amber-soft text-amber", READY: "bg-sage-soft text-sage", OUT_FOR_DELIVERY: "bg-sage-soft text-sage", DELIVERED: "bg-sage-soft text-sage", PICKED_UP: "bg-sage-soft text-sage", CANCELLED: "bg-muted text-muted-foreground" };
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold", tones[status])}><span aria-hidden="true">{status === "CANCELLED" ? "×" : status === "DELIVERED" || status === "PICKED_UP" ? "✓" : "•"}</span>{labels[status]}</span>;
}

export function QuantitySelector({ quantity, onChange, compact = false }: { quantity: number; onChange: (quantity: number) => void; compact?: boolean }) {
  return <div className={cn("inline-flex items-center gap-2 rounded-full bg-cream-2 p-1", compact ? "text-xs" : "text-sm")}>
    <button type="button" aria-label="Decrease quantity" onClick={() => onChange(Math.max(0, quantity - 1))} className="grid size-8 place-items-center rounded-full text-ink-soft transition hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Minus size={14} /></button>
    <span className="min-w-5 text-center font-semibold" aria-live="polite">{quantity}</span>
    <button type="button" aria-label="Increase quantity" onClick={() => onChange(quantity + 1)} className="grid size-8 place-items-center rounded-full bg-terra text-cream transition hover:bg-terra-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Plus size={14} /></button>
  </div>;
}

export function FoodCard({ item, quantity, onAdd, onQuantityChange, onOpen }: { item: DailyMenuItem; quantity: number; onAdd: () => void; onQuantityChange: (quantity: number) => void; onOpen?: () => void }) {
  const soldOut = !item.available || item.sold >= item.quantityLimit;
  return <article className={cn("overflow-hidden rounded-3xl bg-cream shadow-soft-clay transition-transform hover:-translate-y-0.5", soldOut && "opacity-70")}>
    <button type="button" onClick={onOpen} className="block w-full text-left" aria-label={`View ${item.name}`}>
      <div className="aspect-[4/3] overflow-hidden bg-clay-soft"><img src={item.image} alt={item.name} width={800} height={600} loading="lazy" className="size-full object-cover transition-transform duration-500 hover:scale-[1.03]" /></div>
    </button>
    <div className="p-4"><div className="flex items-start justify-between gap-3"><h3 className="font-display text-xl leading-tight">{item.name}</h3><span className="font-display text-lg whitespace-nowrap text-terra">₹{item.price}</span></div>
      <p className="mt-1 min-h-10 text-sm leading-5 text-ink-soft">{item.description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2"><span className={cn("inline-flex items-center gap-1.5 text-xs font-semibold", soldOut ? "text-muted-foreground" : item.sold > item.quantityLimit * 0.6 ? "text-amber" : "text-sage")}><span className="size-1.5 rounded-full bg-current" />{soldOut ? "Sold out" : item.sold > item.quantityLimit * 0.6 ? "Limited today" : item.vegetarian ? "Vegetarian" : "Fresh today"}</span>
        {quantity > 0 ? <QuantitySelector quantity={quantity} onChange={onQuantityChange} compact /> : <Button type="button" disabled={soldOut} onClick={onAdd} className="min-h-9 px-4 py-2 text-xs">{soldOut ? "Sold out" : "Add"}</Button>}
      </div>
    </div>
  </article>;
}

export function OrderSummary({ cart, deliveryFee = 30, discount = 0 }: { cart: CartItem[]; deliveryFee?: number; discount?: number }) {
  const subtotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0) - discount;
  return <div className="space-y-3 rounded-3xl bg-cream p-5 shadow-soft-clay"><div className="flex items-center gap-2"><ShoppingBag size={18} className="text-terra" /><h2 className="font-display text-xl">Order summary</h2></div><div className="space-y-2 border-b border-line pb-4 text-sm">{cart.length === 0 ? <p className="text-ink-soft">No items added yet.</p> : cart.map((item) => <div key={item.menuItem.id} className="flex justify-between gap-3"><span className="text-ink-soft">{item.quantity} × {item.menuItem.name}</span><span>₹{item.menuItem.price * item.quantity}</span></div>)}</div><div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-ink-soft">Subtotal</span><span>₹{subtotal}</span></div><div className="flex justify-between"><span className="text-ink-soft">Delivery</span><span>{subtotal ? `₹${deliveryFee}` : "₹0"}</span></div>{discount > 0 && <div className="flex justify-between text-sage"><span>Family meal saving</span><span>−₹{discount}</span></div>}<div className="flex justify-between border-t border-line pt-3 font-semibold"><span>Total</span><span className="font-display text-2xl text-terra">₹{total}</span></div></div></div>;
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <div className="flex min-h-64 flex-col items-center justify-center rounded-3xl bg-cream px-6 text-center shadow-soft-clay"><span className="grid size-12 place-items-center rounded-2xl bg-terra-soft text-terra"><Sparkles size={22} /></span><h2 className="mt-4 font-display text-2xl">{title}</h2><p className="mt-2 max-w-sm text-sm leading-6 text-ink-soft">{description}</p>{action && <div className="mt-5">{action}</div>}</div>;
}

export function SectionHeading({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return <div className="flex flex-wrap items-end justify-between gap-4"><div>{eyebrow && <p className="text-xs font-bold uppercase tracking-[0.2em] text-terra">{eyebrow}</p>}<h1 className="mt-1 font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>{description && <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">{description}</p>}</div>{action}</div>;
}
