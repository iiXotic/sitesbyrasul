import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_DOMAIN } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: "Sites By Rasul | Website Design for Mississippi Small Businesses",
  description: "Clean, mobile-friendly websites and redesigns for local businesses in Mississippi.",
  openGraph: {
    title: "Sites By Rasul | Website Design for Mississippi Small Businesses",
    description: "Clean, mobile-friendly websites and redesigns for local businesses in Mississippi.",
    url: SITE_DOMAIN,
    siteName: "Sites By Rasul",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
