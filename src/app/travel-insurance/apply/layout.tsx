import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Global Travel Insurance",
  description: "Get a fast and free quote and apply for comprehensive travel insurance online with Bima Company. Secure your trips worldwide with our premium holiday plans.",
  keywords: ["apply travel insurance", "buy travel insurance online", "holiday insurance quote", "trip cancellation coverage", "bima company quote", "international travel cover"],
  alternates: {
    canonical: '/travel-insurance/apply',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
