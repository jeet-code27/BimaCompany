import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Doctors Indemnity Cover",
  description: "Get a fast and free quote and apply for comprehensive doctors indemnity insurance online with Bima Company. Secure your medical career with premium plans.",
  keywords: ["apply doctors indemnity", "buy medical malpractice insurance", "professional liability quote", "doctors insurance application", "bima company quote", "indemnity cover online"],
  alternates: {
    canonical: '/doctors-indemnity/apply',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
