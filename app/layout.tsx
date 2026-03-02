import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GenPlatform — The Operating System for Modern Institutions",
  description:
    "Generation Tech Enterprise. Parent infrastructure powering the next generation of security, education, and productivity across Africa.",
  keywords: [
    "GenPlatform",
    "GenSchool",
    "GenNote",
    "GenGuard AI",
    "institutional management",
    "AI transcription",
    "fraud detection",
    "Ghana",
    "Africa",
    "edtech",
  ],
  authors: [{ name: "Generation Tech Enterprise" }],
  openGraph: {
    title: "GenPlatform — The Operating System for Modern Institutions",
    description:
      "Parent infrastructure powering the next generation of security, education, and productivity.",
    url: "https://genplatform.io",
    siteName: "GenPlatform",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenPlatform — The Operating System for Modern Institutions",
    description:
      "Parent infrastructure powering security, education, and productivity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Generation Tech Enterprise",
    alternateName: "GenPlatform",
    url: "https://genplatform.io",
    email: "admin@genplatform.io",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kintampo",
      addressCountry: "GH",
    },
    sameAs: [],
    knowsAbout: [
      "Institutional Management Software",
      "AI Voice Transcription",
      "Fraud Detection",
      "Receipt Verification",
    ],
    offers: [
      {
        "@type": "Offer",
        name: "GenSchool",
        description: "Institutional management software for schools",
      },
      {
        "@type": "Offer",
        name: "GenNote",
        description: "AI voice notes and transcription",
        url: "https://gennote.app",
      },
      {
        "@type": "Offer",
        name: "GenGuard AI",
        description:
          "WhatsApp bot for fraud detection, KYC name verification, and receipt fraud scanning",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to content — Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-brand-school focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}