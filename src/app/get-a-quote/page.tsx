import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Online Insurance Quote",
  description: "Apply for a personalized online insurance quote from Bima Company. Our process is fast, completely free, and hassle-free. Compare our best insurance plans now.",
  keywords: ["insurance quote", "free insurance estimate", "compare insurance", "online insurance quote", "instant insurance quote", "best insurance rates india"],
  alternates: {
    canonical: '/get-a-quote',
  },
};
import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import Link from "next/link";
import { 
  PawPrint, 
  Lock, 
  Stethoscope, 
  Home, 
  Heart, 
  Sprout, 
  Car, 
  Plane,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export default function GetAQuotePage() {
  const products = [
    {
      title: "Pet Insurance",
      desc: "Complete health cover for your furry friends.",
      icon: PawPrint,
      href: "/pet-insurance",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "hover:border-rose-500/50"
    },
    {
      title: "Dog Insurance",
      desc: "Specialized health and liability cover for dogs.",
      icon: ShieldCheck,
      href: "/dog-insurance",
      color: "text-purple-600",
      bg: "bg-purple-600/10",
      border: "hover:border-purple-600/50"
    },
    {
      title: "Cyber Insurance",
      desc: "Protect yourself against digital fraud and data loss.",
      icon: Lock,
      href: "/cyber-insurance",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Doctor Indemnity",
      desc: "Professional malpractice cover for practitioners.",
      icon: Stethoscope,
      href: "/doctors-indemnity",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/50"
    },
    {
      title: "Travel Insurance",
      desc: "Stay covered globally against trip cancellations.",
      icon: Plane,
      href: "/travel-insurance",
      color: "text-sky-500",
      bg: "bg-sky-500/10",
      border: "hover:border-sky-500/50"
    },
    {
      title: "Wedding Insurance",
      desc: "Safeguard your big day from unexpected events.",
      icon: Heart,
      href: "/wedding-insurance",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "hover:border-pink-500/50"
    },
    {
      title: "Home Insurance",
      desc: "Protect where you live and what you own.",
      icon: Home,
      href: "/home-insurance",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "hover:border-orange-500/50"
    },
    {
      title: "Crop Insurance",
      desc: "Coverage for farmers against yield loss.",
      icon: Sprout,
      href: "/crop-insurance",
      color: "text-green-600",
      bg: "bg-green-600/10",
      border: "hover:border-green-600/50"
    },
    {
      title: "Auto Insurance",
      desc: "Comprehensive cover for your vehicle.",
      icon: Car,
      href: "/auto-insurance",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      border: "hover:border-indigo-500/50"
    },
  ];

  return (
    <div className="relative w-full bg-slate-50 min-h-screen font-sans">
      <main className="relative z-10 w-full border-b border-border shadow-xl rounded-b-[3rem] pb-12 bg-white">
        <Header />

        <section className="container px-4 md:px-6 mx-auto pt-16 pb-24">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight text-gray-900">
              What do you want to <span className="text-[#673CDD]">protect today?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Select an insurance product below to learn more and get an instant, personalized quote in seconds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <Link 
                  key={idx} 
                  href={product.href}
                  className={`group relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${product.border}`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${product.bg} ${product.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading group-hover:text-[#673CDD] transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  <div className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-[#673CDD] transition-colors">
                    Get a Quote <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
