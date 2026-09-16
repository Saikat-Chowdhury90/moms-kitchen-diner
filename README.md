# Mom's Kitchen Orders

Build a modern, responsive full-stack-ready restaurant web application frontend for a single restaurant called "Mom's Kitchen".

1. Product Overview

Mom's Kitchen is a single local restaurant where customers can view the restaurant's daily menu, place food orders for delivery or pickup, and track their orders.

The restaurant owner/admin needs a separate dashboard where they can:

Manage menu items

Create and publish the daily menu

View incoming orders

Update order statuses

View customers

View daily sales/order statistics

Manage restaurant availability

This frontend will eventually connect to a Spring Boot REST API backend with PostgreSQL.

For now, build the frontend using realistic mock data and a clean service/API abstraction so that the mock implementation can later be replaced by Spring Boot REST API calls without rewriting the UI.

2. Technology Requirements

Use:

React

TypeScript

Tailwind CSS

Modern component architecture

Responsive design

Reusable components

Clean folder structure

Client-side state management where appropriate

Form validation

Toast notifications

Loading states

Empty states

Error states

Confirmation dialogs for destructive actions

Use a professional, maintainable architecture.

Do NOT create a generic restaurant template. Make the application specifically feel like Mom's Kitchen.

3. Brand Identity

Restaurant name:

Mom's Kitchen

Brand personality:

Warm

Homely

Trustworthy

Fresh

Family-oriented

Simple

Modern but not overly corporate

The design should communicate:

"Homemade taste, made with love."

Use a warm food-oriented visual identity.

Prefer:

Warm cream/off-white backgrounds

Subtle earthy tones

Warm accent colors

Clean typography

Rounded cards

Soft shadows

High-quality food imagery

Generous spacing

Avoid:

Overly flashy gradients

Excessive animations

Neon colors

Corporate SaaS aesthetics

Overly complicated layouts

Create a simple text/logo treatment for:

Mom's Kitchen

with a subtle food/home-inspired visual element.

4. Application Structure

Create two main experiences:

Customer Application

Routes:

/
/menu
/cart
/checkout
/order-success
/orders
/orders/:id
/login
/register
/profile

Admin Application

Routes:

/admin
/admin/dashboard
/admin/orders
/admin/orders/:id
/admin/menu
/admin/menu/today
/admin/customers
/admin/reports
/admin/settings

The admin section should have a completely different navigation layout optimized for restaurant management.

5. CUSTOMER EXPERIENCE

Homepage

Create a beautiful restaurant landing page.

Header:

Mom's Kitchen logo

Home

Today's Menu

My Orders

Login/Profile

Cart icon with item count

Hero section:

Headline:

"Homemade taste, made with love."

Supporting text:

"Fresh, comforting meals prepared every day at Mom's Kitchen."

Primary CTA:

Order Today's Menu

Secondary CTA:

View Menu

Show an attractive food image.

Below hero:

Today's Menu

Display a selection of today's dishes.

Each food card should contain:

Food image

Name

Short description

Price

Veg/non-veg indicator where applicable

Availability

Quantity selector

Add to Cart button

Example dishes:

Chicken Biryani — ₹180

Paneer Thali — ₹150

Veg Biryani — ₹140

Dal Fry — ₹90

Roti — ₹15

Rice — ₹60

Gulab Jamun — ₹50

Use mock data, but structure it so it can later come from the backend.

6. DAILY MENU EXPERIENCE

The restaurant focuses heavily on daily ordering.

Create a dedicated:

/menu

page.

At the top show:

Today's Menu

and the current date.

Example:

Saturday, September 12

Add a clear ordering cutoff indicator:

Orders for today close at 10:30 AM

If ordering is open:

Show:

Ordering is Open

If ordering is closed:

Show:

Today's ordering is closed

Disable the checkout/order CTA when ordering is closed.

Organize food into categories:

Main Course

Thali

Rice

Breads

Sides

Desserts

Beverages

Food cards should have:

Image

Name

Description

Price

Availability

Quantity

Add button

7. FOOD DETAILS

When a customer clicks a food item, open a detail page or modal.

Display:

Large image

Food name

Description

Price

Ingredients

Vegetarian/non-vegetarian indicator

Availability

Quantity selector

Add to Cart

Example:

Chicken Biryani

"Fragrant basmati rice layered with tender chicken and aromatic spices."

₹180

[ − ] 1 [ + ]

[ Add to Cart ]

8. CART

Create:

/cart

The cart should clearly show:

Food image

Food name

Unit price

Quantity controls

Item total

Remove button

Order summary:

Subtotal
Delivery fee
Discount
Total

Example:

Subtotal: ₹360
Delivery: ₹30
Total: ₹390

Primary button:

Proceed to Checkout

Also show:

Continue Shopping

Handle:

Empty cart

Item unavailable

Quantity changes

Item removal

Empty cart message:

"Your cart is waiting for something delicious."

Button:

View Today's Menu

9. CHECKOUT

Create:

/checkout

Break checkout into clear sections.

Customer Information

Name

Phone number

Email

Order Type

Two options:

Delivery

Pickup

If Delivery:

Show address fields:

House/Flat

Street

Landmark

City

PIN Code

Allow selecting a saved address.

Payment

Options:

Cash on Delivery

Online Payment

For now, online payment can be represented as a mock payment flow.

Order Notes

Example:

"Less spicy"
"No onion"
"Call when you arrive"

Order Summary

Show:

Items
Subtotal
Delivery fee
Discount
Total

Primary CTA:

Place Order

Before placing the order, validate all required fields.

10. ORDER SUCCESS

After placing an order:

/order-success

Show a strong success state.

Example:

"Order placed successfully! 🎉"

Order number:

ORD-20260912-0012

Show:

Order total

Order type

Estimated preparation/delivery time

Current status

Primary CTA:

Track Order

Secondary CTA:

Back to Home

11. ORDER TRACKING

Create:

/orders/:id

Design a beautiful order tracking page.

Show:

Order #ORD-20260912-0012

Customer information

Order items

Payment status

Total amount

Delivery/pickup information

Order Timeline

Display:

✓ Order Placed
✓ Order Confirmed
● Preparing
○ Ready
○ Out for Delivery
○ Delivered

Use different visual states for:

Completed

Current

Pending

Cancelled

Current order status should be clearly visible.

Possible statuses:

PLACED
CONFIRMED
PREPARING
READY
OUT_FOR_DELIVERY
DELIVERED
PICKED_UP
CANCELLED

12. MY ORDERS

Create:

/orders

Show customer's previous orders.

Each order card:

Order number
Date
Items summary
Total
Status
View Order button

Add filters:

All

Active

Completed

Cancelled

Example:

ORD-20260912-0012
2 items
₹390
PREPARING

[View Order]

13. LOGIN

Create a clean login page.

Mom's Kitchen branding.

Fields:

Phone/Email
Password

Buttons:

Login

Continue as Guest if appropriate

Links:

Forgot Password
Create Account

Include validation and error messages.

14. REGISTER

Fields:

Full name

Phone

Email

Password

Confirm password

CTA:

Create Account

After registration, redirect to the customer homepage/menu.

15. CUSTOMER PROFILE

Create:

/profile

Sections:

Personal Information
Saved Addresses
Order History
Account Settings

Allow customers to:

Update name

Update phone/email

Add/edit/delete addresses

Logout

16. ADMIN APPLICATION

The admin experience is extremely important.

Create a professional restaurant management dashboard.

Use a desktop-first layout but make it responsive.

Admin sidebar:

Mom's Kitchen

Dashboard
Orders
Kitchen
Today's Menu
Menu Items
Customers
Reports
Settings

At bottom:

Admin profile
Logout

17. ADMIN DASHBOARD

Create:

/admin/dashboard

Show today's important metrics.

Cards:

Today's Orders
42

Today's Revenue
₹8,450

Pending Orders
7

Completed Orders
35

Add a simple revenue/order chart.

Show:

Recent Orders

Columns:

Order
Customer
Items
Amount
Payment
Status
Time
Action

Example:

#1024
Rahul Kumar
3 items
₹420
COD
PREPARING
11:42 AM

View button.

18. ADMIN ORDER MANAGEMENT

Create:

/admin/orders

This is one of the most important screens.

Show all incoming orders.

Filters:

All

New

Confirmed

Preparing

Ready

Out for Delivery

Delivered

Cancelled

Search:

Search by order number or customer name/phone.

Order table/card should show:

Order ID
Customer
Items
Total
Payment
Order Type
Status
Created time
Actions

Use clear status badges.

Example colors should be accessible and not rely only on color.

19. ADMIN ORDER DETAILS

Create:

/admin/orders/:id

Display:

Order number

Customer:

Rahul Kumar
Phone
Email

Order items:

Chicken Biryani × 2 — ₹360
Raita × 2 — ₹60

Subtotal
Delivery
Total

Payment:

COD
PENDING

Delivery address

Customer note

Status Control

Show current status.

Allow admin to move the order through the workflow:

PLACED
→ CONFIRMED
→ PREPARING
→ READY
→ OUT_FOR_DELIVERY
→ DELIVERED

For pickup:

READY
→ PICKED_UP

Include confirmation dialogs before major status changes if appropriate.

Include:

Cancel Order

with a confirmation dialog.

20. KITCHEN SCREEN

Create:

/admin/kitchen

This should be optimized for a restaurant kitchen tablet/monitor.

Use large cards.

Three columns:

NEW

Orders waiting to be started.

PREPARING

Orders currently being prepared.

READY

Orders ready for pickup/delivery.

Example:

ORDER #1024

Rahul Kumar

Chicken Biryani × 2
Raita × 2

Note:
Less spicy

[Accept Order]

or

[Start Preparing]

and then:

[Mark Ready]

The kitchen view should make it very easy for staff to process orders quickly.

21. ADMIN DAILY MENU MANAGEMENT

Create:

/admin/menu/today

This should allow the restaurant owner to manage today's menu.

Show:

Today's date

Ordering status:

OPEN / CLOSED

Cutoff time:

10:30 AM

Button:

Publish Menu

Menu sections:

Main Course
Thali
Rice
Breads
Sides
Desserts
Beverages

Each item:

Name
Price
Availability
Quantity limit
Available/Unavailable toggle
Edit
Remove

Allow:

Add item to today's menu

Remove item

Change today's price

Set available quantity

Mark sold out

Reorder items

Publish menu

22. ADMIN MENU ITEMS

Create:

/admin/menu

This is the master menu catalog.

Display all menu items.

Columns/cards:

Image
Name
Category
Price
Active
Actions

Actions:

Edit
Deactivate
Delete

Add new menu item form:

Name
Description
Price
Category
Image
Vegetarian/Non-vegetarian
Active

23. ADMIN CUSTOMERS

Create:

/admin/customers

Show:

Customer name
Phone
Email
Total orders
Total spent
Last order
Account status

Allow admin to view customer details and order history.

24. ADMIN REPORTS

Create:

/admin/reports

Show:

Today's sales
Weekly sales
Monthly sales

Metrics:

Total orders
Total revenue
Average order value
Cancelled orders
Most ordered food items

Add charts.

Keep the charts simple and readable.

Use mock data.

25. ADMIN SETTINGS

Create:

/admin/settings

Sections:

Restaurant

Restaurant name
Phone
Email
Address

Ordering

Opening time
Closing time
Daily order cutoff

Delivery

Delivery fee
Minimum order amount
Delivery radius

Payments

COD enabled
Online payment enabled

Notifications

Order notification settings

26. NAVIGATION BEHAVIOR

Customer navbar should remain simple.

Desktop:

Logo | Home | Today's Menu | Orders | Cart | Profile

Mobile:

Use a bottom navigation or mobile-friendly menu.

Admin:

Use sidebar navigation.

On mobile admin screens, convert sidebar to a drawer.

27. RESPONSIVE DESIGN

The entire application must work properly on:

Mobile phones

Tablets

Laptops

Desktop monitors

Customer ordering experience should be mobile-first because many customers will order from their phones.

Kitchen dashboard should work especially well on tablets.

Admin dashboard should work well on desktop.

Do not simply shrink desktop layouts for mobile.

Actually redesign the layout where necessary.

28. COMPONENT SYSTEM

Create reusable components such as:

Button
Input
Select
Modal
Dialog
Toast
Navbar
Sidebar
FoodCard
CategoryTabs
QuantitySelector
CartItem
OrderCard
OrderStatusBadge
OrderTimeline
OrderSummary
AddressForm
MenuItemForm
StatsCard
DataTable
EmptyState
LoadingState
ErrorState
ConfirmDialog

Avoid duplicating UI code.

29. MOCK DATA / API ABSTRACTION

The backend will eventually be Spring Boot.

Create a clean API/service layer.

For example:

authService
menuService
orderService
customerService
adminService

Use mock implementations initially.

Structure API functions conceptually like:

getTodayMenu()
getMenuItems()
getOrder(orderId)
getMyOrders()
createOrder()
cancelOrder()
getAdminOrders()
updateOrderStatus()
createMenuItem()
updateMenuItem()
publishDailyMenu()
getDashboardStats()

Do not tightly couple components directly to mock data.

Make it easy to replace mock services with:

http://localhost:8080/api/...

later.

30. DATA MODELS

Use TypeScript interfaces/types for:

User
Address
MenuItem
DailyMenu
DailyMenuItem
CartItem
Order
OrderItem
Payment
DashboardStats

Example Order:

{
id: string,
orderNumber: string,
customerId: string,
items: OrderItem[],
orderType: "DELIVERY" | "PICKUP",
status:
| "PLACED"
| "CONFIRMED"
| "PREPARING"
| "READY"
| "OUT_FOR_DELIVERY"
| "DELIVERED"
| "PICKED_UP"
| "CANCELLED",
subtotal: number,
deliveryFee: number,
discount: number,
total: number,
paymentMethod: "COD" | "ONLINE",
paymentStatus: "PENDING" | "PAID" | "FAILED" | "REFUNDED",
address?: Address,
customerNote?: string,
createdAt: string
}

31. ORDER STATE MACHINE

Respect the following order flow:

PLACED
↓
CONFIRMED
↓
PREPARING
↓
READY
↓
OUT_FOR_DELIVERY
↓
DELIVERED

For pickup:

PLACED
↓
CONFIRMED
↓
PREPARING
↓
READY
↓
PICKED_UP

Cancellation:

PLACED
↓
CANCELLED

Do not allow arbitrary invalid status transitions in the UI.

32. IMPORTANT BUSINESS RULES

Implement these concepts in the frontend architecture, but remember the Spring Boot backend will ultimately enforce them.

Customers can only order items that are currently available.

Customers cannot order after the daily cutoff time.

Customers cannot order an unavailable/sold-out item.

Prices shown in the final order should come from the backend in production.

Customers can only see their own orders.

Admin users can see all orders.

Only admins can modify the menu.

Only admins can change order status.

Order totals must eventually be calculated and verified by the backend.

Old orders must retain their historical item names and prices.

33. UX DETAILS

Add good loading states.

For example:

"Loading today's menu..."

When no food is available:

"Today's menu isn't available yet."

When restaurant is closed:

"We're currently closed. Check back tomorrow for a fresh menu."

When order is placed:

Show success confirmation.

When API operation fails:

Show a friendly toast/error message.

Never leave the user wondering whether an action succeeded.

34. Accessibility

Make the application accessible.

Use:

Semantic HTML

Proper labels

Keyboard navigation

Visible focus states

Accessible dialogs

Good contrast

Appropriate button sizes

Alt text for food images

Do not rely solely on color for order statuses

35. Visual Quality

The result should feel like a real production restaurant website, not a prototype.

Prioritize:

Beautiful food cards

Excellent typography

Consistent spacing

Strong visual hierarchy

Professional buttons

Smooth but subtle transitions

Clean mobile ordering experience

Polished admin dashboard

Use realistic food imagery.

Avoid excessive animation.

Animations should be subtle and purposeful.

36. Homepage Content

Use this initial copy.

Restaurant:

Mom's Kitchen

Tagline:

Homemade taste, made with love.

Description:

Fresh, comforting meals prepared with care and served just the way you like them.

CTA:

Order Today's Menu

Section:

What's cooking today?

Supporting text:

Freshly prepared meals, made for you and your family.

Another section:

Why Mom's Kitchen?

Cards:

Freshly Prepared
"Made fresh every day."

Homestyle Taste
"Comforting food that feels like home."

Made With Care
"Every meal is prepared with love."

37. DEMO CUSTOMER DATA

Use realistic demo customers:

Rahul Kumar
Amit Sharma
Priya Das
Sneha Patel

Demo orders should have realistic order numbers such as:

ORD-20260912-001
ORD-20260912-002
ORD-20260912-003

Use INR currency throughout.

Format prices as:

₹180
₹350
₹1,250

38. IMPORTANT: FRONTEND ONLY FOR NOW

Do not build a real backend.

Do not implement real payment processing.

Do not store sensitive credentials.

Use mock data/services.

However, architect the application so that the Spring Boot REST API can be plugged in later.

Assume the future backend base URL will be:

http://localhost:8080/api

Keep all API communication centralized.

39. Final Quality Requirements

Before considering the application complete:

Every route should work.

Navigation should work.

Buttons should have meaningful behavior.

Forms should validate.

Cart should work.

Mock order creation should work.

Order tracking should work.

Admin order status changes should work.

Daily menu management should work.

Responsive layouts should work.

Empty states should work.

Loading states should work.

Error states should work.

Use consistent mock data across customer and admin views.

Do not leave placeholder "Lorem ipsum" content.

Do not leave dead buttons.

Do not create unnecessary pages.

Keep the UI polished and production-like.

Build the application incrementally but deliver the complete customer flow and admin flow.

The primary goal is:

A customer should be able to open Mom's Kitchen → see today's food → add items → checkout → place an order → track the order.

At the same time:

The restaurant owner should be able to log in → see today's orders → manage the daily menu → process orders → update statuses → see today's business metrics.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1c1ce571-b96b-4645-8f18-277b90633f58).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
