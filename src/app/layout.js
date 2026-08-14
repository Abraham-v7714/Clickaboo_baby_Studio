import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { businessInfo } from "@/data/business";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.clickaboobabystudio.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clickaboo Baby Studio | Maternity & Baby Photography in Coimbatore",
    template: "%s | Clickaboo Baby Studio",
  },
  description:
    "Clickaboo Baby Studio in Coimbatore captures beautiful maternity, newborn, baby, milestone and family moments with creative photography and a warm studio experience.",
  keywords: [
    "baby photography Coimbatore",
    "maternity photography Coimbatore",
    "newborn photography Coimbatore",
    "baby photography studio Coimbatore",
    "family photography Coimbatore",
    "cake smash photography Coimbatore",
    "Clickaboo Baby Studio",
  ],
  authors: [{ name: "Clickaboo Baby Studio" }],
  creator: "Clickaboo Baby Studio",
  publisher: "Clickaboo Baby Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Clickaboo Baby Studio | Maternity & Baby Photography in Coimbatore",
    description:
      "Clickaboo Baby Studio in Coimbatore captures beautiful maternity, newborn, baby, milestone and family moments with creative photography and a warm studio experience.",
    url: siteUrl,
    siteName: "Clickaboo Baby Studio",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Clickaboo Baby Studio — Maternity & Baby Photography, Coimbatore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clickaboo Baby Studio | Maternity & Baby Photography in Coimbatore",
    description:
      "Clickaboo Baby Studio in Coimbatore captures beautiful maternity, newborn, baby, milestone and family moments.",
    images: ["/images/hero/hero-main.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add Google Search Console verification ID here when available
    // google: "YOUR_VERIFICATION_ID",
  },
};

// Schema.org LocalBusiness / PhotographyBusiness structured data
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "PhotographyBusiness",
  name: businessInfo.name,
  description:
    "Premium maternity, newborn, baby milestone, and family photography studio in Coimbatore, Tamil Nadu. Warm, creative, and family-friendly.",
  url: siteUrl,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "4, RKV Nagar Road, Thirupathiyar Nagar, Ramanathapuram",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641045",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    // Update with exact coordinates if available
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: [businessInfo.instagramUrl],
  image: `${siteUrl}/images/hero/hero-main.jpg`,
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: businessInfo.rating,
    reviewCount: businessInfo.reviewCount,
    bestRating: "5",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${dmSans.variable} font-sans bg-brand-warm text-brand-deep antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
