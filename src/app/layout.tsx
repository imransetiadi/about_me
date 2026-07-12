import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://imransetiadi.github.io"),
  title: {
    default: "Imran Setiadi | Cloud Engineer",
    template: "%s | Imran Setiadi",
  },
  description: "Cloud Engineer focused on resilient infrastructure, OpenStack, OpenShift, Kubernetes, Linux systems, automation, and observability.",
  keywords: [
    "Imran Setiadi",
    "Cloud Engineer",
    "OpenStack",
    "OpenShift",
    "Kubernetes",
    "Linux",
    "DevOps",
    "Jakarta",
    "IDITA",
    "Solatify",
    "E-commerce",
    "PWA",
    "Clean Architecture",
    "TypeScript",
    "Flutter",
  ],
  authors: [{ name: "Imran Setiadi" }],
  creator: "Imran Setiadi",
  verification: {
    google: "google-site-verification-placeholder",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Imran Setiadi | Cloud Engineer",
    description: "Portfolio of Imran Setiadi, a Cloud Engineer focused on reliable, secure, and observable infrastructure.",
    url: "/",
    siteName: "Imran Setiadi",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Imran Setiadi | Cloud Engineer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imran Setiadi | Cloud Engineer",
    description: "Cloud Engineer focused on resilient infrastructure, Linux systems, Kubernetes, OpenShift, and OpenStack.",
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
    image: "https://imransetiadi.github.io/profile.jpg",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.variable}>{children}<Analytics /></body>
    </html>
  );
}
