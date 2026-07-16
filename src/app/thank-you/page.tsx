import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { CheckCircle, Home, FileSearch } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center relative py-20 bg-gradient-to-br from-[#673CDD]/5 via-white to-[#FBCE04]/5">
        
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-[#673CDD]/10 rounded-full blur-[100px] -z-10" />

        <div className="container px-4 md:px-6 mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600 mb-8 shadow-sm">
            <CheckCircle className="w-12 h-12" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black font-heading text-foreground tracking-tight mb-6">
            Thank You!
          </h1>
          
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 border border-gray-100 dark:border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your form has been successfully submitted.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Our insurance advisors are reviewing your application. You will receive a callback shortly on your registered mobile number to discuss the best coverage options for your specific needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#673CDD] hover:bg-[#5a33c2] text-white font-bold rounded-xl shadow-lg shadow-[#673CDD]/20 transition-all hover:scale-105 active:scale-95"
              >
                <Home className="w-5 h-5" /> Return to Home
              </Link>
              <Link 
                href="/#insurance-products"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 dark:border-gray-700 font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                <FileSearch className="w-5 h-5" /> Explore More
              </Link>
            </div>
          </div>
        </div>
      </main>

      <CinematicFooter />
    </div>
  );
}
