import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Paolo Sotelo — Product, web, and automation", template: "%s | Paolo Sotelo" },
  description: "Paolo Sotelo builds practical digital products, polished web experiences, AI workflows, and thoughtful automation.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071018" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
