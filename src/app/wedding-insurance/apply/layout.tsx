import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Wedding Event Insurance",
  description: "Get a fast and free quote and apply for comprehensive wedding insurance online with Bima Company. Secure your big day with our premium cancellation plans.",
  keywords: ["apply wedding insurance", "buy event insurance online", "marriage insurance quote", "wedding cancellation cover", "bima company quote", "event protection online"],
  alternates: {
    canonical: '/wedding-insurance/apply',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
