import type { Metadata } from "next";
import {
  Instrument_Serif,
  Newsreader,
  DM_Serif_Display,
  Geist,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { TweaksProvider } from "@/components/tweaks/TweaksProvider";
import { TweaksPanel } from "@/components/tweaks/TweaksPanel";
import { CustomCursor } from "@/components/site/CustomCursor";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const BASE = "https://mettle.co";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Mettle · Operational design studio",
    template: "%s · Mettle",
  },
  description:
    "We diagnose operating problems and build the systems that fix them. System design, custom software, automation — deployed in the right sequence.",
  openGraph: {
    type: "website",
    siteName: "Mettle",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Mettle · Operational design studio" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mettlestudio",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: BASE },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-mettle-theme="light"
      data-mettle-type="newsreader"
      className={`${instrumentSerif.variable} ${newsreader.variable} ${dmSerifDisplay.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-m-bg text-m-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Mettle",
                  url: BASE,
                  logo: `${BASE}/icon`,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Gurugram",
                    addressCountry: "IN",
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Mettle",
                  url: BASE,
                  potentialAction: {
                    "@type": "SearchAction",
                    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/work?q={search_term_string}` },
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
        <TweaksProvider>
          {children}
          <TweaksPanel />
          <CustomCursor />
        </TweaksProvider>
      </body>
    </html>
  );
}
