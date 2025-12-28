import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout/header-footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Kasparro - AI-First SEO Intelligence",
  description:
    "AI-native SEO and brand intelligence platform that translates how AI reads your content into actionable insights.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
