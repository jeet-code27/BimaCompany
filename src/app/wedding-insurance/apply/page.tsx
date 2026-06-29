'use client';

import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { WeddingInsuranceForm } from "@/components/forms/wedding-insurance-form";
import { Heart, ShieldCheck, CameraOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ApplyWeddingInsurancePage() {
  const router = useRouter();

  return (
    <div className="relative w-full bg-background min-h-screen font-sans text-foreground overflow-x-hidden">
      <main className="relative z-10 w-full bg-rose-50/30 dark:bg-gray-950 border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        <section className="container px-4 md:px-6 mx-auto pt-16 pb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Value Proposition Sidebar */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 font-semibold text-sm mb-6">
                  <Heart className="w-4 h-4" />
                  Secure Your Big Day
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 text-gray-900 dark:text-white">
                  Event & Wedding Insurance Application
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Protect your financial investment from unexpected cancellations, vendor bankruptcies, and venue damage.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-rose-200 dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center text-rose-600 dark:text-rose-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 dark:text-white text-lg">Peace of Mind</h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Focus on celebrating while we protect you from financial loss.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <CameraOff className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 dark:text-white text-lg">Vendor Protection</h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Coverage if your photographer, caterer, or venue fails to deliver.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-7">
              <WeddingInsuranceForm onSuccess={() => router.push('/thank-you')} />
            </div>
            
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
