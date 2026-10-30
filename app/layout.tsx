import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "FlyRank | Growth workspace",
    template: "%s | FlyRank",
  },
  description: "A clear, focused workspace for your FlyRank team.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background font-sans text-text-primary">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-page py-8 sm:px-6 sm:py-12 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
