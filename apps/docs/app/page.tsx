"use client";

import { useState, useEffect } from "react";
import { PaymentIcon, PaymentBrand, PaymentIconStyle } from "payment-icons";

const brands: PaymentBrand[] = [
  "visa",
  "mastercard",
  "amex",
  "unionpay",
  "paypal",
  "alipay",
  "diners",
  "discover",
  "elo",
  "hipercard",
  "jcb",
  "maestro",
  "maestro-old",
  "mastercard-old",
  "verve",
  "bkash",
  "nagad",
  "rocket",
  "upay",
  "dutch-bangla-rocket",
];

const styles: PaymentIconStyle[] = ["flat", "mono", "outline", "single"];

type Manager = "npm" | "yarn" | "pnpm" | "bun";

const installSnippets: Record<Manager, string> = {
  npm: "npm install payment-icons",
  yarn: "yarn add payment-icons",
  pnpm: "pnpm add payment-icons",
  bun: "bun add payment-icons",
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export default function HomePage() {
  const [manager, setManager] = useState<Manager>("npm");
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopy = async (text: string, key: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    }
  };

  return (
    <main className="page">
      <div className="page-shell">
        {/* Top bar */}
        <header className="page-header">
          <div className="brand">
            <div className="brand-mark">π</div>
            <div>
              <div className="brand-title">payment-icons</div>
              <div className="brand-subtitle">
                React SVG icons for payment methods
              </div>
            </div>
          </div>

          <div className="header-links">
            <div className="chip">
              <span className="chip-dot" />
              Stable · v0.1.x
            </div>
            <a
              href="https://www.npmjs.com/package/payment-icons"
              target="_blank"
              rel="noreferrer"
              className="ghost-link"
            >
              View on npm
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <div>
            <div className="kicker">
              <span className="kicker-badge">UI icon set</span>
              Drop‑in payment logos for React
            </div>

            <h1 className="hero-title">
              Clean, consistent{" "}
              <span className="hero-gradient">payment icons</span> for React.
            </h1>

            <p className="hero-subtitle">
              A comprehensive TypeScript library with SVG payment method logos in multiple styles (flat, mono, outline, single). Ship production‑ready checkout UIs using named icon exports or the flexible{" "}
              <span className="code-inline">&lt;PaymentIcon /&gt;</span>{" "}
              component with style variants.
            </p>

            <div className="hero-actions">
              <a href="#installation" className="btn btn-primary">
                Install &nbsp;·&nbsp; 3 seconds
              </a>
              <a href="#usage" className="btn btn-secondary">
                View usage examples
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <span className="hero-meta-dot" />
                Tree‑shakable & ESM
              </span>
              <span>
                <span className="hero-meta-dot" />
                TypeScript types included
              </span>
              <span>
                <span className="hero-meta-dot" />
                Works with Next.js, CRA, Vite & more
              </span>
            </div>
          </div>

          <aside className="hero-card" aria-label="Quick install example">
            <div className="hero-card-header">
              <div className="hero-card-title">Install snippet</div>
              <div className="hero-card-badges">
                <span className="status-pill">Ready for production</span>
                <span className="size-pill">&lt; 5 kB gzipped</span>
                <span className="performance-badge">⚡ Fast</span>
              </div>
            </div>

            <div className="hero-card-body">
              <div className="hero-card-badge-row">
                <div className="hero-card-badge">
                  <span className="hero-card-badge-dot" />
                  <span>payment-icons · React SVG</span>
                </div>
                <span className="code-faded">npm · yarn · pnpm · bun</span>
              </div>
              <pre className="hero-card-line">
                <span className="code-faded">$</span>{" "}
                <span className="hero-card-highlight">
                  {installSnippets[manager]}
                </span>
              </pre>
              <pre className="hero-card-line hero-card-line--muted">
                <span className="code-comment">
                  # Then import in your React components
                </span>
              </pre>
              <pre className="hero-card-line">
                <span className="code-keyword">import</span>{" "}
                <span className="code-accent">
                  {"{ Visa, Mastercard }"}
                </span>{" "}
                <span className="code-keyword">from</span>{" "}
                <span className="code-string">&quot;payment-icons&quot;</span>;
              </pre>
              <pre className="hero-card-line hero-card-line--muted">
                &lt;Visa size={'{32}'} /&gt;
                <span className="code-comment"> // simple JSX icon</span>
              </pre>
              <div className="hero-card-footer">
                <span className="hero-card-pill">No configuration required</span>
                <span className="hero-card-pill">Supports SSR</span>
              </div>
            </div>
          </aside>
        </section>

        {/* Quick start */}
        <section className="section" aria-labelledby="quickstart-heading">
          <div className="section-header">
            <div>
              <div className="section-kicker">Quick start</div>
              <h2 id="quickstart-heading" className="section-title">
                Get coding in 60 seconds
              </h2>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <h3 className="card-title">1. Install</h3>
              <pre className="code-block">
                <code>
                  <span className="code-faded">$</span>{" "}
                  <span className="code-accent">npm install payment-icons</span>
                </code>
              </pre>
            </div>
            <div>
              <h3 className="card-title">2. Import & use</h3>
              <pre className="code-block">
                <div className="code-block-header">
                  <span className="code-block-title">App.tsx</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(`import { Visa, Mastercard } from "payment-icons";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <Visa size={32} />
      <Mastercard size={32} />
    </div>
  );
}`, 'quickstart')}
                    aria-label="Copy quick start example"
                  >
                    {copiedStates.quickstart ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                <code>
                  <span className="code-keyword">import</span>{" "}
                  <span className="code-accent">
                    {"{ Visa, Mastercard }"}
                  </span>{" "}
                  <span className="code-keyword">from</span>{" "}
                  <span className="code-string">
                    &quot;payment-icons&quot;
                  </span>
                  ;
                  {"\n\n"}
                  <span className="code-keyword">export default</span>{" "}
                  <span className="code-keyword">function</span>{" "}
                  <span className="code-accent">App</span>() {"{"}
                  {"\n  "}
                  <span className="code-keyword">return</span> (
                  {"\n    "}
                  {"<div style={{ display: \"flex\", gap: \"8px\" }}>"}{"\n      "}
                  {"<Visa size={32} />"}
                  {"\n      "}
                  {"<Mastercard size={32} />"}
                  {"\n    </div>"}
                  {"\n  );"}
                  {"\n}"}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section" aria-labelledby="overview-heading">
          <div className="section-header">
            <div>
              <div className="section-kicker">Overview</div>
              <h2 id="overview-heading" className="section-title">
                What is <span className="code-inline">payment-icons</span>?
              </h2>
            </div>
            <div className="pill-row">
              <span className="pill">React + TypeScript</span>
              <span className="pill">SVG only</span>
              <span className="pill">Zero runtime dependencies</span>
            </div>
          </div>

          <p className="section-description">
            A focused icon set for payment and checkout UIs. Each icon is a
            typed React component, with a consistent API (
            <span className="code-inline">size</span>,{" "}
            <span className="code-inline">color</span>,{" "}
            <span className="code-inline">title</span>) and first‑class support
            for both named imports and a generic{" "}
            <span className="code-inline">&lt;PaymentIcon /&gt;</span> helper
            for dynamic brands.
          </p>
        </section>

        {/* Developer metrics */}
        <section className="section" aria-labelledby="metrics-heading">
          <div className="section-header">
            <div>
              <div className="section-kicker">Performance</div>
              <h2 id="metrics-heading" className="section-title">
                Built for production
              </h2>
            </div>
          </div>

          <div className="dev-metrics">
            <div className="dev-metric">
              <div className="dev-metric-value">&lt; 5 kB</div>
              <div className="dev-metric-label">gzipped size</div>
            </div>
            <div className="dev-metric">
              <div className="dev-metric-value">23</div>
              <div className="dev-metric-label">payment methods</div>
            </div>
            <div className="dev-metric">
              <div className="dev-metric-value">ESM</div>
              <div className="dev-metric-label">+ CommonJS</div>
            </div>
            <div className="dev-metric">
              <div className="dev-metric-value">0</div>
              <div className="dev-metric-label">dependencies</div>
            </div>
          </div>

          <div className="feature-highlight">
            <div className="feature-highlight-title">⚡ Tree-shakeable & optimized</div>
            <div className="feature-highlight-text">
              Only import the icons you need. Each icon is a separate export, so unused icons are automatically removed during bundling. Perfect for checkout flows where bundle size matters.
            </div>
          </div>
        </section>

        {/* Installation */}
        <section
          id="installation"
          className="section"
          aria-labelledby="install-heading"
        >
          <div className="section-header">
            <div>
              <div className="section-kicker">Installation</div>
              <h2 id="install-heading" className="section-title">
                Install with your favorite package manager
              </h2>
            </div>
            <p className="section-description">
              Requires Node.js 18+ and React 18+ (or compatible Next.js /
              framework).
            </p>
          </div>

          <div className="grid-2">
            <div>
              <div className="tabs" role="tablist" aria-label="Package manager">
                {(["npm", "yarn", "pnpm", "bun"] as Manager[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    role="tab"
                    aria-selected={manager === m}
                    className={`tab ${manager === m ? "tab--active" : ""}`}
                    onClick={() => setManager(m)}
                  >
                    <span>{m}</span>
                  </button>
                ))}
              </div>
              <pre className="code-block" aria-label="Install command">
                <div className="code-block-header">
                  <span className="code-block-title">Terminal</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(installSnippets[manager], 'install')}
                    aria-label="Copy install command"
                  >
                    {copiedStates.install ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                <code>
                  <span className="code-comment"># Install from npm</span>
                  {"\n"}
                  <span className="code-faded">$</span>{" "}
                  {installSnippets[manager]}
                  {"\n\n"}
                  <span className="code-comment">
                    # Optional: ensure React and ReactDOM are installed
                  </span>
                  {"\n"}
                  <span className="code-faded">$</span>{" "}
                  {manager === "yarn"
                    ? "yarn add react react-dom"
                    : manager === "pnpm"
                    ? "pnpm add react react-dom"
                    : manager === "bun"
                    ? "bun add react react-dom"
                    : "npm install react react-dom"}
                </code>
              </pre>
            </div>

            <div className="card">
              <h3 className="card-title">Environment checklist</h3>
              <div className="card-body">
                <p>
                  <strong>Node.js</strong>: 18 or newer is recommended. You can
                  download the latest LTS from{" "}
                  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                    nodejs.org
                  </a>
                  .
                </p>
                <ul className="list-muted">
                  <li>✅ Works with Next.js 13+/14 (App Router)</li>
                  <li>✅ Compatible with Vite, CRA, Remix and more</li>
                  <li>✅ ESM and CommonJS builds published to npm</li>
                </ul>
                <p style={{ marginTop: "0.5rem" }}>
                  Once installed, restart your dev server (
                  <span className="code-inline">npm run dev</span>,{" "}
                  <span className="code-inline">next dev</span>, etc.) so your
                  bundler picks up the new dependency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="section" aria-labelledby="usage-heading">
          <div className="section-header">
            <div>
              <div className="section-kicker">Usage</div>
              <h2 id="usage-heading" className="section-title">
                Use icons in your React / Next.js project
              </h2>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <h3 className="card-title">Named icon imports</h3>
              <p className="section-description" style={{ marginBottom: 8 }}>
                Import individual icons directly from the package when you know
                the payment methods at build time.
              </p>
              <pre className="code-block" aria-label="Named imports example">
                <div className="code-block-header">
                  <span className="code-block-title">React Component</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(`import { Visa, Mastercard, Paypal } from "payment-icons";

export default function CheckoutLogos() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Visa size={32} />
      <Mastercard size={32} />
      <Paypal size={32} />
    </div>
  );
}`, 'named-imports')}
                    aria-label="Copy named imports example"
                  >
                    {copiedStates['named-imports'] ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                <code>
                  <span className="code-keyword">import</span>{" "}
                  <span className="code-accent">
                    {"{ Visa, Mastercard, Paypal }"}
                  </span>{" "}
                  <span className="code-keyword">from</span>{" "}
                  <span className="code-string">
                    &quot;payment-icons&quot;
                  </span>
                  ;
                  {"\n\n"}
                  <span className="code-keyword">export default</span>{" "}
                  <span className="code-keyword">function</span>{" "}
                  <span className="code-accent">CheckoutLogos</span>() {"{"}
                  {"\n  "}
                  <span className="code-keyword">return</span> (
                  {"\n    "}
                  {"<div style={{ display: \"flex\", gap: 12 }}>"}{"\n      "}
                  {"<Visa size={32} />"}
                  {"\n      "}
                  {"<Mastercard size={32} />"}
                  {"\n      "}
                  {"<Paypal size={32} />"}
                  {"\n    </div>"}
                  {"\n  );"}
                  {"\n}"}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="card-title">
                Dynamic icons with &lt;PaymentIcon /&gt;
              </h3>
              <p className="section-description" style={{ marginBottom: 8 }}>
                Use the generic component to render icons from data (for
                example, a payment method string from your API).
              </p>
              <pre className="code-block" aria-label="PaymentIcon usage">
                <div className="code-block-header">
                  <span className="code-block-title">React Component</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(`import { PaymentIcon } from "payment-icons";

type PaymentMethod = "visa" | "mastercard" | "paypal";

const methods: PaymentMethod[] = ["visa", "mastercard", "paypal"];

export default function PaymentMethodsRow() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {methods.map(method => (
        <PaymentIcon
          key={method}
          brand={method}
          size={32}
        />
      ))}
    </div>
  );
}`, 'payment-icon')}
                    aria-label="Copy PaymentIcon example"
                  >
                    {copiedStates['payment-icon'] ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                <code>
                  <span className="code-keyword">import</span>{" "}
                  <span className="code-accent">{"{ PaymentIcon }"}</span>{" "}
                  <span className="code-keyword">from</span>{" "}
                  <span className="code-string">
                    &quot;payment-icons&quot;
                  </span>
                  ;
                  {"\n\n"}
                  <span className="code-keyword">type</span>{" "}
                  <span className="code-accent">PaymentMethod</span> ={" "}
                  <span className="code-string">
                    &quot;visa&quot; | &quot;mastercard&quot; | &quot;paypal&quot;
                  </span>
                  ;
                  {"\n\n"}
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-accent">methods</span>:{" "}
                  <span className="code-accent">PaymentMethod</span>[] = [
                  <span className="code-string">&quot;visa&quot;</span>,{" "}
                  <span className="code-string">&quot;mastercard&quot;</span>,{" "}
                  <span className="code-string">&quot;paypal&quot;</span>];
                  {"\n\n"}
                  <span className="code-keyword">export default function</span>{" "}
                  <span className="code-accent">PaymentMethodsRow</span>() {"{"}
                  {"\n  "}
                  <span className="code-keyword">return</span> (
                  {"\n    <div style={{ display: \"flex\", gap: 12 }}>"}{"\n      "}
                  {"{methods.map(method => ("}
                  {"\n        <PaymentIcon"}
                  {"\n          key={method}"}
                  {"\n          brand={method}"}
                  {"\n          size={32}"}
                  {"\n        />"}
                  {"\n      ))}"}
                  {"\n    </div>"}
                  {"\n  );"}
                  {"\n}"}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Icon gallery */}
        <section
          className="section"
          aria-labelledby="gallery-heading"
        >
          <div className="section-header">
            <div>
              <div className="section-kicker">Gallery</div>
              <h2 id="gallery-heading" className="section-title">
                Available payment brands
              </h2>
            </div>
            <p className="section-description">
              Browse all {brands.length} payment method icons in {styles.length} different styles (flat, mono, outline, single). Each icon displays as a beautifully styled placeholder with the brand name and style indicator. The actual SVG files are available in the library and can be loaded dynamically in production applications.
            </p>
          </div>

          <div className="icon-gallery-card">
            <div className="icon-gallery-header">
              <div>
                <div className="icon-gallery-title">
                  Preview icons from the library
                </div>
                <div className="icon-gallery-meta">
                  Uses the same components you install from{" "}
                  <span className="code-inline">payment-icons</span>.
                </div>
              </div>
              <span className="pill">
                {brands.length} brands · {styles.length} styles · extensible
              </span>
            </div>

            <div className="icon-grid">
              {/* Show all styles for each brand */}
              {styles.map((style) => (
                <div key={style} className="style-section">
                  <h3 className="style-title">{style.charAt(0).toUpperCase() + style.slice(1)} Style</h3>
                  <div className="style-grid">
                    {brands.map((brand) => (
                      <div className="icon-card" key={`${style}-${brand}`}>
                        <PaymentIcon brand={brand} iconStyle={style} size={32} />
                        <div className="icon-card-label">{brand}</div>
                        <div className="icon-card-code">
                          {`<PaymentIcon brand="${brand}" iconStyle="${style}" />`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="page-footer">
          <span>Built for modern checkout and billing UIs.</span>
          <span>
            Need another brand? Open an issue on your repo or extend the{" "}
            <span className="code-inline">PaymentBrand</span> type in your app.
          </span>
        </footer>
      </div>
    </main>
  );
}
