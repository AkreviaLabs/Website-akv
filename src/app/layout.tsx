import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akrevia.in"),
  title: {
    default: "Akrevia — Software built with precision.",
    template: "%s — Akrevia",
  },
  description:
    "Akrevia is a software engineering studio in Delhi led by two engineers, building reliable web, mobile, and backend systems — including offline-first tools for field teams working with unreliable connectivity.",
  keywords: [
    "Akrevia",
    "software engineering studio",
    "offline-first software",
    "custom software development India",
    "React Native development",
    "backend systems engineering",
  ],
  authors: [{ name: "Akrevia Labs LLP" }],
  openGraph: {
    title: "Akrevia — Software built with precision.",
    description:
      "Reliable web, mobile, and backend systems for businesses that need software to work in the real world.",
    url: "https://akrevia.in",
    siteName: "Akrevia",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akrevia — Software built with precision.",
    description:
      "Reliable web, mobile, and backend systems for businesses that need software to work in the real world.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
