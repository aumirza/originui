import PlausibleProvider from 'next-plausible'
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/demo/header";
import { ThemeProvider } from "@/demo/theme-provider";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://originui.com"),
  title: "Origin UI - Beautiful UI components built with Tailwind CSS and Next.js",
  description:
    "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PlausibleProvider domain="originui.com">
            <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
              <Header />
              {children}
            </div>
          </PlausibleProvider>
        </ThemeProvider>
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}
