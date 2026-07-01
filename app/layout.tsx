import type { Metadata } from "next";
import "./globals.css";
import { serif, sans } from "@/lib/fonts";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightField from "@/components/LightField";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "ILMA LightHouse — Where Light Becomes Art",
  description:
    "Luxury chandeliers and decorative lighting. Bespoke design, expert installation, and curated collections that turn light into art.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <ScrollProgress />
          <LightField />
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
