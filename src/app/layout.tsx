import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = new URL("https://opslin.in");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Opslin — Deploy and manage apps on your own VPS",
  description:
    "Turn your VPS into a managed deployment platform with Git deploys, SSL, logs, monitoring, databases, and rollback from one dashboard.",
  keywords: [
    "VPS deployment",
    "DevOps automation",
    "Git deploy",
    "SSL",
    "PaaS alternative",
    "server management",
    "self-hosted PaaS",
    "Linux server",
  ],
  authors: [{ name: "Opslin" }],
  creator: "Opslin",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opslin.in",
    siteName: "Opslin",
    title: "Opslin — Deploy and manage apps on your own VPS",
    description:
      "Turn your VPS into a managed deployment platform with Git deploys, SSL, logs, monitoring, databases, and rollback.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Opslin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opslin — Deploy and manage apps on your own VPS",
    description: "Turn your VPS into a managed deployment platform.",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
