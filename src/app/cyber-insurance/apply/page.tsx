'use client';

import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { CyberInsuranceForm } from "@/components/forms/cyber-insurance-form";
import { LockKeyhole, ShieldCheck, ServerCrash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ApplyCyberInsurancePage() {
  const router = useRouter();

  return (
    <div className="relative w-full bg-background min-h-screen font-sans text-foreground overflow-x-hidden">
      <main className="relative z-10 w-full bg-slate-50 dark:bg-gray-950 border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        <section className="container px-4 md:px-6 mx-auto pt-16 pb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Value Proposition Sidebar */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6">
                  <LockKeyhole className="w-4 h-4" />
                  Secure Your Business
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 text-gray-900 dark:text-white">
                  Get Comprehensive Cyber Coverage
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Protect your business against data breaches, ransomware, and digital fraud in minutes.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Instant Protection</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Get immediate liability coverage for your digital assets.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <ServerCrash className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Business Interruption</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">We cover lost income if your systems go down due to an attack.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-7">
              <CyberInsuranceForm onSuccess={() => router.push('/thank-you')} />
            </div>
            
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
