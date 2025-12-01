# payment-icons

A React SVG icon library for payment methods. Lightweight, customizable, and accessible.

## 🚀 Installation

```bash
npm install payment-icons
```

## 📦 Features

- ✅ **12 payment method icons** (Visa, Mastercard, PayPal, Stripe, and more)
- ✅ **Two usage patterns**: Named imports or generic component
- ✅ **TypeScript support** with full type definitions
- ✅ **Accessible** with ARIA labels
- ✅ **Customizable** size and SVG props
- ✅ **Tree-shakeable** - only bundle icons you use
- ✅ **Zero dependencies** (React peer dependency only)

## 🎯 Usage

### Named Icon Imports

Import specific icons for better tree-shaking:

```tsx
import { Visa, Mastercard, Paypal } from "payment-icons";

export function CheckoutIcons() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Visa size={40} />
      <Mastercard size={40} />
      <Paypal size={40} />
    </div>
  );
}
```

### Generic Component

Use the `PaymentIcon` component for dynamic rendering:

```tsx
import { PaymentIcon } from "payment-icons";

const brands = ["visa", "mastercard", "bkash", "nagad", "paypal"] as const;

export function DynamicIcons() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {brands.map((brand) => (
        <PaymentIcon key={brand} brand={brand} size={40} />
      ))}
    </div>
  );
}
```

## 🎨 Customization

All icons accept standard SVG props:

```tsx
<Visa
  size={48}
  title="Visa Card"
  style={{ cursor: "pointer" }}
  onClick={() => console.log("Visa clicked")}
  className="payment-icon"
/>
```

### Props

#### Individual Icon Props (`PaymentIconProps`)

- `size?: number` - Width of the icon (default: 40)
- `title?: string` - Accessible label (default: icon name)
- All standard `SVGProps<SVGSVGElement>` (className, style, onClick, etc.)

#### Generic Component Props (`PaymentIconGenericProps`)

- `brand: PaymentBrand` - The payment brand to display (required)
- `size?: number` - Width of the icon (default: 40)
- `title?: string` - Accessible label (default: brand name)
- All standard `SVGProps<SVGSVGElement>`

## 📋 Supported Payment Methods

| Brand | Import Name | Brand Value |
|-------|-------------|-------------|
| Visa | `Visa` | `"visa"` |
| Mastercard | `Mastercard` | `"mastercard"` |
| American Express | `Amex` | `"amex"` |
| UnionPay | `UnionPay` | `"unionpay"` |
| PayPal | `Paypal` | `"paypal"` |
| Stripe | `Stripe` | `"stripe"` |
| bKash | `Bkash` | `"bkash"` |
| Nagad | `Nagad` | `"nagad"` |
| Rocket | `Rocket` | `"rocket"` |
| Apple Pay | `ApplePay` | `"apple-pay"` |
| Google Pay | `GooglePay` | `"google-pay"` |
| Bitcoin | `Bitcoin` | `"bitcoin"` |

## 🔧 TypeScript

Full TypeScript support with exported types:

```tsx
import type { PaymentIconProps, PaymentBrand, PaymentIconGenericProps } from "payment-icons";

// Type-safe brand values
const brand: PaymentBrand = "visa"; // ✅
const invalid: PaymentBrand = "unknown"; // ❌ Type error
```

## ♿ Accessibility

All icons include proper ARIA labels for screen readers:

```tsx
<Visa title="Pay with Visa" />
// Renders: <svg role="img" aria-label="Pay with Visa">...</svg>
```

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
