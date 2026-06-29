'use client';

import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { DoctorLiabilityForm } from "@/components/forms/doctor-liability-form";
import { Stethoscope, ShieldCheck, ClipboardList } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ApplyDoctorLiabilityPage() {
  const router = useRouter();

  return (
    <div className="relative w-full bg-background min-h-screen font-sans text-foreground overflow-x-hidden">
      <main className="relative z-10 w-full bg-[#673CDD]/5 dark:bg-gray-950 border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        <section className="container px-4 md:px-6 mx-auto pt-16 pb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Value Proposition Sidebar */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#673CDD]/10 text-[#673CDD] font-semibold text-sm mb-6 border border-[#673CDD]/20">
                  <Stethoscope className="w-4 h-4" />
                  Medical Professional Protection
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 text-gray-900 dark:text-white">
                  Professional Liability Underwriting
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Secure your practice with our comprehensive liability coverage. Complete this 3-step application to finalize your policy.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-[#673CDD]/20 dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 border border-green-200">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 dark:text-white text-lg">Legal Defense Cost</h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Full coverage for court and representation fees.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 border border-orange-200">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 dark:text-white text-lg">Comprehensive AOA</h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">1:1 Ratio for Any One Accident and Aggregate limits.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-8">
              <DoctorLiabilityForm onSuccess={() => router.push('/thank-you')} />
            </div>
            
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
