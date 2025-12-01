import "../styles/globals.css";

export const metadata = {
  title: "payment-icons - React SVG Payment Icons",
  description: "React SVG icon library for payment methods",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
