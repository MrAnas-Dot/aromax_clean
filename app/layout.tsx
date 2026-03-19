import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AROMAX — Luxury Perfumes | Define Your Presence",
  
  description:
    "Discover AROMAX's curated collection of luxury perfumes. Premium scents crafted for those who dare to be remembered. Now in Sharjah Expo Centre.",
  keywords: "luxury perfume, Arabic fragrance, oud, AROMAX, Sharjah, perfume UAE",
  openGraph: {
    title: "AROMAX — Luxury Perfumes",
    description: "Curated Pair Offer — Any 2 for AED 100",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Raleway:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
