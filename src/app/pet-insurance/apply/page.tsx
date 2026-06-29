"use client";

import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { PetInsuranceForm } from "@/components/forms/pet-insurance-form";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function ApplyPetInsurancePage() {
  const router = useRouter();

  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        <section className="relative w-full min-h-[90vh] py-16 bg-gradient-to-br from-[#673CDD]/5 via-white to-[#FBCE04]/5">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="mb-8">
              <Link 
                href="/pet-insurance" 
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Pet Insurance
              </Link>
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#673CDD]/10 text-[#673CDD] mb-6 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading text-foreground tracking-tight mb-4">
                Secure Your <span className="text-[#673CDD]">Furry Friend's</span> Future
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the application below to get comprehensive coverage for your pet. It only takes a few minutes!
              </p>
            </div>

            <PetInsuranceForm onSuccess={() => router.push('/thank-you')} />
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
