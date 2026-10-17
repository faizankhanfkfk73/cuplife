import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cupheal — 3-Day Offline Hijama Training Program",
  description:
    "3 Din Ki Intensive Offline Hijama Training: fundamentals, anatomy, practical techniques, client handling aur self-employment guidance. Limited seats.",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#4a5640" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi-Latn">
      <head>
        <link rel="preload" href="/assets/fonts/jizBRFtNs2ka5fXjeivQ4LroWlx-6zUTjg.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/o-0bIpQmx24alC5A4PNB6Ryti20_6n1iPHjc5a7duw.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
