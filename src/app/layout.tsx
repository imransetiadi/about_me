import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://imransetiadi.github.io"),
  title: {
    default: "Imran Setiadi | Cloud Engineer",
    template: "%s | Imran Setiadi",
  },
  description: "Cloud Engineer focused on resilient infrastructure, OpenStack, OpenShift, Kubernetes, Linux, automation, and observability.",
  keywords: [
    "Imran Setiadi",
    "Cloud Engineer",
    "OpenStack",
    "OpenShift",
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
    title: "Imran Setiadi | Cloud Engineer",
    description: "Portfolio of Imran Setiadi, a Cloud Engineer focused on reliable, secure, and observable infrastructure.",
    url: "/",
    siteName: "Imran Setiadi",
    images: [
      {
        url: "/profile.jpg",
        width: 520,
        height: 620,
        alt: "Imran Setiadi",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imran Setiadi | Cloud Engineer",
    description: "Cloud Engineer focused on resilient infrastructure, Linux, Kubernetes, OpenShift, and OpenStack.",
    images: ["/profile.jpg"],
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
      <body>{children}</body>
    </html>
  );
}
