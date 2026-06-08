import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imran Setiadi | Cloud Engineer",
  description: "Responsive portfolio for Imran Setiadi, a cloud engineer focused on OpenStack, OpenShift, Kubernetes, and Linux infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
