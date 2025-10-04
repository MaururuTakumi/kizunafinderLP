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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` :
    "http://localhost:3000"
  ),
  title: {
    default: "KizunaFinder | AIによるインフルエンサーキャスティング",
    template: "%s | KizunaFinder",
  },
  description:
    "KizunaFinderは、AIエージェントがブランドに最適なインフルエンサーを発見・分析・提案する革新的なキャスティングプラットフォームです。",
  openGraph: {
    title: "KizunaFinder | AIによるインフルエンサーキャスティング",
    description:
      "自然文で入力するだけで、最適なインフルエンサー候補とWhy?を提示するβ版プラットフォーム。",
    images: [{ url: "/images/og.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    siteName: "KizunaFinder",
  },
  twitter: {
    card: "summary_large_image",
    title: "KizunaFinder | AIによるインフルエンサーキャスティング",
    description:
      "自然文入力から最適なインフルエンサー候補を提案するβ版プラットフォーム。",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#050038]`}
      >
        {children}
      </body>
    </html>
  );
}
