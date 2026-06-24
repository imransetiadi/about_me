import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imransetiadi.github.io"),
  title: {
    default: "imboy | Cloud Engineer",
    template: "%s | imboy",
  },
  description: "Cloud Engineer focused on resilient infrastructure, OpenStack, Kubernetes, and automation. Explore my portfolio and projects.",
  keywords: [
    "imboy",
    "Imran Setiadi",
    "Cloud Engineer",
    "OpenStack",
    "Kubernetes",
    "Linux",
    "DevOps",
    "Jakarta",
  ],
  authors: [{ name: "Imran Setiadi" }],
  creator: "Imran Setiadi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "imboy | Cloud Engineer",
    description: "Portfolio of imboy, a Cloud Engineer focused on reliable, secure, and observable infrastructure.",
    url: "/",
    siteName: "imboy",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "imboy Portfolio",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "imboy | Cloud Engineer",
    description: "Cloud Engineer focused on resilient infrastructure, Linux systems, Kubernetes, and OpenStack.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Imran Setiadi",
    jobTitle: "Cloud Engineer",
    url: "https://imransetiadi.github.io/",
    image: "https://imransetiadi.github.io/og-image.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "Indonesia",
    },
    sameAs: [
      "https://github.com/imransetiadi",
      "https://www.linkedin.com/in/imransetiadi/",
      "https://www.instagram.com/imran_setiadi/",
      "https://www.credly.com/users/imran-setiadi",
    ],
    knowsAbout: ["OpenStack", "OpenShift", "Kubernetes", "Linux", "DevOps", "Observability", "Automation"],
  };

  return (
    <html lang="en" className={`${inter.className} antialiased`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
