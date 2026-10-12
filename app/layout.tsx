import type { Metadata } from "next";
import "./globals.css";

export const viewport={width:'device-width',initialScale:1,viewportFit:'cover' as const,themeColor:'#101F54'};

export const metadata: Metadata = {
  metadataBase: new URL('https://vector-discovery.adil-likebz.chatgpt.site'),
  title: "Vector Discovery — Token intelligence",
  description: "Less noise. More discovery. Research tokens, liquidity, risk signals and wallet activity across Ethereum, BNB Chain and Solana. Continue in Vector.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {capable: true, statusBarStyle: "black-translucent", title: "Vector Discovery"},
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="antialiased">{children}</body>
    </html>
  );
}
