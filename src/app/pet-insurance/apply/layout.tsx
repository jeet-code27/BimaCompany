import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Pet Health Insurance",
  description: "Get a fast and free quote and apply for comprehensive pet health insurance online with Bima Company. Secure your pet's future with our premium vet plans.",
  keywords: ["apply pet insurance", "buy pet insurance online", "pet health quote", "animal insurance application", "bima company quote", "pet vet coverage online"],
  alternates: {
    canonical: '/pet-insurance/apply',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
