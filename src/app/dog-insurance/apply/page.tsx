'use client';

import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { DogProposalForm } from "@/components/forms/dog-proposal-form";
import { PawPrint, ShieldCheck, HeartPulse } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ApplyDogInsurancePage() {
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
                  <PawPrint className="w-4 h-4" />
                  Dog Health Cover Proposal
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 text-gray-900 dark:text-white">
                  Underwrite Your Dog's Health
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Complete this comprehensive proposal form to secure the best pup insurance in India for your furry friend.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-[#673CDD]/20 dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 border border-green-200">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 dark:text-white text-lg">Guaranteed OPD</h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Automatic 10,000 INR OPD cover with base plan.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 border border-orange-200">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 dark:text-white text-lg">No Mandatory Medicals</h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Submit your proposal today without upfront vet exams.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-8">
              <DogProposalForm onSuccess={() => router.push('/thank-you')} />
            </div>
            
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
