import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bimacompany.com"),
  title: {
    template: "%s | Bima Company",
    default: "Bima Company | Comprehensive Insurance in India",
  },
  description: "Secure your future with Bima Company. We offer top-tier auto, home, crop, pet, and commercial insurance plans tailored to your needs.",
  keywords: ["insurance India", "bima company", "best insurance", "online insurance quote", "general insurance"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bima Company | Comprehensive Insurance in India",
    description: "Secure your future with Bima Company. We offer top-tier auto, home, crop, pet, and commercial insurance plans tailored to your needs.",
    url: "https://bimacompany.com",
    siteName: "Bima Company",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bima Company | Comprehensive Insurance in India",
    description: "Secure your future with Bima Company. We offer top-tier auto, home, crop, pet, and commercial insurance plans tailored to your needs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
