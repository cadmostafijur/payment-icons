"use client";

import {
  Visa,
  Mastercard,
  Paypal,
  PaymentIcon,
  PaymentBrand,
} from "payment-icons";

const brands: PaymentBrand[] = [
  "visa",
  "mastercard",
  "amex",
  "unionpay",
  "paypal",
  "stripe",
  "bkash",
  "nagad",
  "rocket",
  "apple-pay",
  "google-pay",
  "bitcoin",
];

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        payment-icons Demo
      </h1>
      <p style={{ marginBottom: "2rem", color: "#555" }}>
        React SVG icons for payment methods. Named exports and a generic
        &lt;PaymentIcon /&gt; component.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          Named Icons
        </h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Visa size={48} />
          <Mastercard size={48} />
          <Paypal size={48} />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          &lt;PaymentIcon brand=&quot;...&quot; /&gt;
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {brands.map((brand) => (
            <div key={brand} style={{ textAlign: "center" }}>
              <PaymentIcon brand={brand} size={40} />
              <div style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>
                {brand}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
