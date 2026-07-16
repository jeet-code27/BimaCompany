import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domestic & Global Travel Insurance",
  description: "Travel with peace of mind. Bima Company offers coverage for trip cancellations, lost baggage, and medical emergencies abroad. Protect your next trip today.",
  keywords: ["travel insurance india", "international travel insurance", "trip cancellation insurance", "overseas travel insurance", "domestic travel insurance", "holiday insurance"],
  alternates: {
    canonical: '/travel-insurance',
  },
};
import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ButtonRotate } from "@/components/ui/button-rotate";
import { 
  Plane, 
  ShieldCheck, 
  HeartPulse, 
  Briefcase, 
  Clock, 
  Globe2,
  Umbrella,
  GraduationCap,
  Users,
  Mountain,
  AlertTriangle,
  Stethoscope,
  PlaneTakeoff,
  Luggage
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TravelInsurancePage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600/10 via-white to-[#FBCE04]/10">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/travel_insurance_hero.png" 
              alt="Travel Insurance Hero - Indian Couple Traveling" 
              fill
              sizes="100vw"
              className="object-cover opacity-20 md:opacity-25 mix-blend-multiply"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto pt-24 pb-12">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-700 font-semibold text-sm mb-4 border border-blue-500/20 shadow-sm">
                <Plane className="w-4 h-4" />
                Global Coverage
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-foreground leading-[1.1]">
                Travel Insurance with <br/> <span className="text-blue-600">Super Fast Everything.</span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-medium space-y-2">
                <p>Sign up in seconds. Get paid in minutes. Award-winning service.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Link href="/travel-insurance/apply">
                  <ButtonRotate text="CHECK OUR PRICES • " />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Travel Insurance? */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
               <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Globe2 className="w-8 h-8" />
               </div>
               <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                 What is <span className="text-blue-600">Travel Insurance?</span>
               </h2>
               <p className="text-lg text-muted-foreground leading-relaxed text-left md:text-center">
                 Traveling is one of life’s greatest pleasures, offering the chance to explore new places, experience different cultures, and create lasting memories. However, along with the excitement, travel comes with its own set of risks and uncertainties. This is where travel insurance plays a crucial role. Travel insurance or travel insurance for international travel is designed to protect you from various unexpected events that could disrupt your trip. Explore why travel insurance is essential before embarking on any vacation, the benefits it offers, the importance of understanding exclusions, and the different types of travel insurance available.
               </p>
            </div>
          </div>
        </section>

        {/* Benefits of Travel Insurance */}
        <section className="py-20 md:py-32 bg-blue-50/50 relative border-t border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                  Benefits of <span className="text-blue-600">Travel Insurance</span>
                </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white border border-border p-8 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">Financial Protection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Travel insurance provides comprehensive financial protection against a wide range of risks, ensuring that unexpected events do not lead to substantial financial losses. This protection extends to various aspects of your trip, including cancellations, medical emergencies, and lost baggage.
                </p>
              </div>

              <div className="bg-white border border-border p-8 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#FBCE04]/20 text-yellow-700 rounded-full flex items-center justify-center mb-6">
                  <Umbrella className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">Peace of Mind</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Knowing that you are covered by travel insurance allows you to enjoy your vacation without constant worry about potential problems. This peace of mind can enhance your travel experience, allowing you to fully immerse yourself in your journey.
                </p>
              </div>

              <div className="bg-white border border-border p-8 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                  <Mountain className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">Coverage for Adventure Activities</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If your travel plans include adventure activities such as skiing, scuba diving, or trekking, specialized travel insurance can provide coverage for injuries or accidents related to these activities. This ensures that you are protected while enjoying high-risk pursuits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Travel Insurance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Types of <span className="text-[#FBCE04]">Travel Insurance</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Single-Trip Insurance", desc: "Provides coverage for one specific trip, from the start date until you return home. Ideal for occasional travelers, offering comprehensive coverage including medical, cancellations, and baggage.", icon: PlaneTakeoff },
                { title: "Multi-Trip Insurance", desc: "Covers multiple trips within a specified period, usually one year. A cost-effective option for frequent travelers, offering the convenience of continuous coverage.", icon: Briefcase },
                { title: "Family Travel Insurance", desc: "Provides coverage for the entire family under a single policy. Beneficial for families traveling together, offering comprehensive coverage for all members.", icon: Users },
                { title: "Student Travel Insurance", desc: "Designed for students traveling abroad for education. Provides coverage for medical emergencies, cancellations, loss of study materials, and other risks.", icon: GraduationCap },
                { title: "Senior Travel Insurance", desc: "Tailored for travelers typically 60 or 65+ years. Offers coverage for medical emergencies, including age-related health issues, ensuring adequate protection.", icon: ShieldCheck },
                { title: "Adventure Travel Insurance", desc: "Provides coverage for high-risk activities such as skiing, scuba diving, and trekking. Essential for adventure sports, ensuring protection against related injuries.", icon: Mountain }
              ].map((type, idx) => {
                const Icon = type.icon;
                return (
                  <div key={idx} className="bg-slate-50 border border-border p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white shadow-sm border rounded-xl flex items-center justify-center mb-6 text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{type.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why it is Essential */}
        <section className="py-20 md:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
               
               <div className="space-y-8">
                 <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                   Why Travel Insurance is <span className="text-[#FBCE04]">Essential</span>
                 </h2>
                 <p className="text-white/80 leading-relaxed text-lg mb-8">
                   Don't leave things to chance when you are far from home.
                 </p>
                 
                 <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h4 className="font-bold text-xl mb-2 text-[#FBCE04] flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Protection Against Trip Cancellations</h4>
                      <p className="text-white/70 text-sm leading-relaxed">One of the primary reasons to have travel insurance is to protect against trip cancellations. Life is unpredictable, and unforeseen circumstances such as illness, family emergencies, or work obligations can force you to cancel your trip. Travel insurance can reimburse you for non-refundable expenses such as flights, hotels, and tours, saving you from significant financial loss.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h4 className="font-bold text-xl mb-2 text-[#FBCE04] flex items-center gap-2"><Luggage className="w-5 h-5"/> Lost or Delayed Luggage</h4>
                      <p className="text-white/70 text-sm leading-relaxed">Losing your luggage or experiencing delays can severely impact your travel plans. Travel insurance provides compensation for lost, stolen, or delayed baggage, allowing you to replace essential items and continue your trip with minimal disruption.</p>
                    </div>
                 </div>
               </div>

               <div className="space-y-6 lg:mt-12">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <h4 className="font-bold text-xl mb-2 text-[#FBCE04] flex items-center gap-2"><Stethoscope className="w-5 h-5"/> Medical Emergencies Abroad</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Medical emergencies can happen anywhere, and the costs of treatment in a foreign country can be exorbitant. Travel insurance typically includes medical coverage, ensuring that you receive the necessary treatment without the burden of high medical bills. This coverage can include hospital stays, surgeries, doctor visits, and even medical evacuation if required.</p>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <h4 className="font-bold text-xl mb-2 text-[#FBCE04] flex items-center gap-2"><Clock className="w-5 h-5"/> Travel Delays and Interruptions</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Delays and interruptions due to weather conditions, strikes, or other unforeseen events can disrupt your itinerary. Travel insurance can cover additional expenses such as accommodation and meals incurred due to such delays, ensuring that you are not left stranded without support.</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <h4 className="font-bold text-xl mb-2 text-[#FBCE04] flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> Personal Liability</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Travel insurance often includes personal liability coverage, protecting you if you are held responsible for injury to others or damage to property during your trip. This coverage can be invaluable in avoiding legal and financial complications abroad.</p>
                  </div>
               </div>

            </div>
          </div>
        </section>

        {/* Medical Treatment specifically */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Medical Treatment in <span className="text-blue-600">Travel Insurance</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2.5rem]">
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-xl text-blue-900 flex gap-2 items-center"><HeartPulse className="w-5 h-5 text-blue-600"/> Emergency Medical Coverage</h4>
                      <p className="text-sm text-blue-800/80 mt-2 leading-relaxed">Emergency medical coverage is a key component of travel insurance, covering the costs of medical treatment in case of illness or injury during the trip. This includes hospital stays, surgeries, doctor visits, and prescribed medications.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-blue-900 flex gap-2 items-center"><Plane className="w-5 h-5 text-blue-600"/> Medical Evacuation & Repatriation</h4>
                      <p className="text-sm text-blue-800/80 mt-2 leading-relaxed">Travel insurance often includes coverage for medical evacuation and repatriation. In case of severe medical emergencies, this coverage ensures that you are transported to the nearest suitable medical facility or back to your home country for further treatment.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2.5rem]">
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-xl text-blue-900 flex gap-2 items-center"><Briefcase className="w-5 h-5 text-blue-600"/> Hospital Daily Allowance</h4>
                      <p className="text-sm text-blue-800/80 mt-2 leading-relaxed">Some travel insurance policies provide a daily allowance for hospitalization, covering additional expenses such as meals and accommodation for accompanying family members. This allowance helps manage the costs associated with extended hospital stays abroad.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-blue-900 flex gap-2 items-center"><ShieldCheck className="w-5 h-5 text-blue-600"/> Dental Coverage</h4>
                      <p className="text-sm text-blue-800/80 mt-2 leading-relaxed">Emergency dental treatment is often included in travel insurance policies, covering the costs of dental emergencies such as toothaches, infections, or accidental damage to teeth. This ensures that dental issues do not disrupt your trip.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-20 bg-gradient-to-b from-transparent to-blue-50/50">
           <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto bg-white p-10 rounded-[3rem] shadow-xl border border-border text-center space-y-6">
                 <h2 className="text-3xl md:text-4xl font-bold font-heading">Don’t Pack your Bags Until you have <span className="text-blue-600">Travel Insurance</span></h2>
                 <p className="text-muted-foreground leading-relaxed text-lg">
                   Travel insurance is an essential product for anyone planning a vacation. It provides comprehensive protection against a wide range of risks, including trip cancellations, medical emergencies, lost baggage, and travel delays. Understanding the exclusions in your policy is crucial to ensure that you have realistic expectations and adequate coverage for your needs. With various types of travel insurance available, you can choose the one that best suits your travel plans and enjoy your vacation with peace of mind. Investing in travel insurance ensures that you are prepared for the unexpected, allowing you to fully immerse yourself in the joy and excitement of your travels.
                 </p>
                 <div className="pt-6">
                    <Link href="/travel-insurance/apply">
                      <ButtonRotate text="GET COVERED NOW • " />
                    </Link>
                 </div>
              </div>
           </div>
        </section>

      </main>

      <CinematicFooter />
    </div>
  );
}
