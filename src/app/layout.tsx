import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libre = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PremierLet | Nottinghamshire Lettings & Property Management",
  description:
    "A modern website concept for PremierLet inspired by the cleaner structure and presentation of premium UK lettings brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
