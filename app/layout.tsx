import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Provider } from "@/components/theme/provider";
import { Toaster } from "sonner";
import { Indicator } from "@/components/theme/indicator";
import { fontSans } from "@/lib/fonts";
import { Header } from "@/components/header/header";
import { site } from "@/config/site";


export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-visual',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider attribute="class" defaultTheme="system" enableSystem={true}>
          <main className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Toaster />
            <Indicator />
          </main>
        </Provider>
      </body>
    </html>
  );
}
