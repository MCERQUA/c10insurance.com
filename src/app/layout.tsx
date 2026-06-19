import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://c10insurance.com"),
  title: {
    default: "C10 Insurance | California Electrical Contractor Insurance",
    template: "%s | C10 Insurance",
  },
  description:
    "Specialized insurance for California C10 licensed electrical contractors. General liability, workers comp, commercial auto, tools & equipment, and contractor bonds. Get a quote in 15 minutes.",
  keywords: [
    "C10 insurance",
    "C10 electrical contractor insurance",
    "electrical contractor insurance California",
    "C10 license insurance requirements",
    "electrician insurance California",
    "electrical contractor liability insurance",
    "C10 contractor general liability",
    "electrical contractor workers comp California",
    "electrician business insurance California",
    "C10 license bond insurance",
    "electrical contractor bond California",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://c10insurance.com",
    siteName: "C10 Insurance",
    title: "C10 Insurance | California Electrical Contractor Insurance",
    description:
      "Specialized insurance for California C10 licensed electrical contractors. Get covered in 15 minutes. 20+ years protecting electrical contractors.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1280,
        height: 720,
        alt: "C10 Insurance - California Electrical Contractor Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C10 Insurance | California Electrical Contractor Insurance",
    description:
      "Specialized insurance for California C10 licensed electrical contractors. Get covered in 15 minutes.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://c10insurance.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "C10 Insurance — Contractors Choice Agency",
  description:
    "Specialized insurance for California C10 licensed electrical contractors. General liability, workers comp, commercial auto, and contractor bonds.",
  url: "https://c10insurance.com",
  telephone: "844-967-5247",
  email: "josh@contractorschoiceagency.com",
  foundingDate: "2005",
  areaServed: {
    "@type": "State",
    name: "California",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Rd",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "844-967-5247",
    contactType: "customer service",
    availableLanguage: "English",
    hoursAvailable: "Mo-Fr 08:00-18:00",
  },
  sameAs: [
    "https://contractorschoiceagency.com",
    "https://linkedin.com/in/joshcotner",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
