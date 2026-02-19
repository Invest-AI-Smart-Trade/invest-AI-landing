import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invest AI — Smart Trading Powered by Artificial Intelligence",
  description:
    "AI-powered investment platform with real-time market data, smart analysis, and personalized recommendations. Download free on the App Store.",
  keywords: [
    "invest ai",
    "smart trading",
    "ai trading",
    "stock analysis",
    "investment app",
    "portfolio management",
  ],
  openGraph: {
    title: "Invest AI — Smart Trading Powered by AI",
    description:
      "AI-powered investment platform with real-time market data, smart analysis, and personalized recommendations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest AI — Smart Trading Powered by AI",
    description:
      "AI-powered investment platform with real-time market data, smart analysis, and personalized recommendations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
