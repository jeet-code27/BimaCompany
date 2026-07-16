import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Cyber Insurance Online",
  description: "Get a fast and free quote and apply for comprehensive cyber liability insurance online with Bima Company. Secure your business future with our premium plans.",
  keywords: ["apply cyber insurance", "buy cyber insurance online", "cyber liability quote", "business digital protection", "bima company quote", "insurance application"],
  alternates: {
    canonical: '/cyber-insurance/apply',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
