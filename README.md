# payment-icons Monorepo

A modern monorepo containing a reusable React SVG icon library for payment methods and a Next.js documentation/demo site.

## ✨ Features

- 🎨 **Multiple Icon Styles**: Flat, Mono, Outline, and Single variants
- 📦 **23 Payment Methods**: Visa, Mastercard, Amex, PayPal, and more
- ⚡ **TypeScript Support**: Full type safety with PaymentBrand and PaymentIconStyle types
- 🎯 **Tree-shakable**: Optimized bundle sizes with ESM/CJS builds
- 🎪 **Demo Site**: Interactive documentation with all icons and styles

## 📦 Structure

```
payment-icons-monorepo/
├── packages/
│   └── payment-icons/          # React icon library (publishable to npm)
│       └── src/svg/            # Raw SVG files in 4 styles (flat/mono/outline/single)
└── apps/
    └── docs/                   # Next.js 14 demo/docs app
```

## 🚀 Getting Started

### Installation

Install all workspace dependencies:

```bash
npm install
```

### Development

Run the Next.js documentation site:

```bash
npm run dev
```

The docs app will be available at `http://localhost:3000`.

### Building

Build both the library and the docs app:

```bash
npm run build
```

This will:
1. Build the `payment-icons` library (creates `dist/` folder)
2. Build the Next.js docs app for production

## 📚 Library Usage

Once published, developers can install the library:

```bash
npm install payment-icons
```

**Named imports:**

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

**Generic component with styles:**

```tsx
import { PaymentIcon } from "payment-icons";

export function StyledIcons() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <PaymentIcon brand="visa" iconStyle="flat" size={40} />
      <PaymentIcon brand="paypal" iconStyle="mono" size={40} />
      <PaymentIcon brand="mastercard" iconStyle="outline" size={40} />
    </div>
  );
}
```

## 📖 Documentation

For detailed usage instructions and API documentation, see [packages/payment-icons/README.md](./packages/payment-icons/README.md).

## 🛠 Technology Stack

- **React** - UI library
- **TypeScript** - Type safety
- **tsup** - Library bundler
- **Next.js 14** - App Router for docs site
- **npm workspaces** - Monorepo management

## 📄 License

MIT
