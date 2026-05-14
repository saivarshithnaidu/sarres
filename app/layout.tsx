import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#5D101D",
};

export const metadata: Metadata = {
  title: "Sri Blooms Collection | Premium Handcrafted Sarees",
  description: "Experience the elegance of handcrafted sarees designed for the modern woman. Discover our exclusive collections of Kalamkari, Hand-painted, and Festive sarees.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sri Blooms",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">{children}</body>
    </html>
  );
}
