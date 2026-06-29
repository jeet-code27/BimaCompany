'use client';

import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { TravelInsuranceForm } from "@/components/forms/travel-insurance-form";
import { Plane, ShieldCheck, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ApplyTravelInsurancePage() {
  const router = useRouter();

  return (
    <div className="relative w-full bg-slate-50 min-h-screen font-sans text-foreground overflow-x-hidden">
      <main className="relative z-10 w-full border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        <section className="container px-4 md:px-6 mx-auto pt-16 pb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Value Proposition Sidebar */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 border border-blue-200">
                  <Plane className="w-4 h-4" />
                  Travel Insurance Application
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 text-gray-900">
                  Protect Your Journey
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out this quick application to instantly secure comprehensive coverage for your upcoming travels.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 border border-green-200">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 text-lg">Instant Coverage</h3>
                     <p className="text-gray-600 text-sm mt-1">Get your policy instantly in your inbox after submission.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border border-blue-200">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 text-lg">Fast Processing</h3>
                     <p className="text-gray-600 text-sm mt-1">Our streamlined process takes less than 2 minutes to complete.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-7">
              <TravelInsuranceForm onSuccess={() => router.push('/thank-you')} />
            </div>
            
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
