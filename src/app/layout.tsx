import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invest AI | Intelligence For Every Trade",
  description:
    "Invest AI combines live market context, portfolio tracking, and AI decision support so you can move with conviction.",
  keywords: [
    "Invest AI",
    "AI trading app",
    "investment intelligence",
    "portfolio insights",
    "market analysis",
  ],
  openGraph: {
    title: "Invest AI | Intelligence For Every Trade",
    description:
      "A modern investing workspace with AI signals, risk framing, and real-time market awareness.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest AI | Intelligence For Every Trade",
    description:
      "Trade with a sharper edge using AI analysis and real-time portfolio intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
