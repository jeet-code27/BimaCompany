import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Dog Health Insurance",
  description: "Get a fast and free quote and apply for comprehensive dog health insurance online with Bima Company. Secure your dog's future with our premium vet plans.",
  keywords: ["apply dog insurance", "buy dog insurance online", "canine health quote", "pet insurance application", "bima company quote", "dog vet coverage online"],
  alternates: {
    canonical: '/dog-insurance/apply',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
