import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PMFBY Crop Insurance & Farm Cover",
  description: "Affordable agricultural and crop insurance for Indian farmers. Protect your harvest against weather anomalies and pests under the PMFBY scheme. Apply today.",
  keywords: ["crop insurance india", "pmfby", "agriculture insurance", "farm insurance", "farmers insurance", "pmfby scheme online"],
  alternates: {
    canonical: '/crop-insurance',
  },
};
import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ButtonRotate } from "@/components/ui/button-rotate";
import { 
  Sprout, 
  ShieldCheck, 
  TrendingUp, 
  BadgeIndianRupee, 
  CloudRain, 
  Ban,
  Tractor,
  Leaf,
  Landmark,
  Timer,
  LineChart,
  Lightbulb,
  HeartHandshake
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CropInsurancePage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600/10 via-white to-[#FBCE04]/10">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/crop_insurance_hero.png" 
              alt="Crop Insurance Hero - Indian Farm Field" 
              fill
              sizes="100vw"
              className="object-cover opacity-20 md:opacity-25 mix-blend-multiply"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto pt-24 pb-12">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-700 font-semibold text-sm mb-4 border border-green-500/20 shadow-sm">
                <Leaf className="w-4 h-4" />
                Award-Winning Service
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-foreground leading-[1.1]">
                What Would You Do If a Storm <br/> <span className="text-green-600">Ruined Your Entire Harvest?</span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-medium">
                Sign up in seconds. Get paid in minutes. 
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Link href="/get-a-quote">
                  <ButtonRotate text="CHECK OUR PRICES • " />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Crop Insurance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Tractor className="w-8 h-8" />
               </div>
               <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                 What is <span className="text-green-600">Crop Insurance?</span>
               </h2>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 Agriculture is the backbone of India’s economy, providing livelihood to a significant portion of the population. However, farming is inherently risky due to its dependency on unpredictable factors like weather, pests, and market fluctuations. Crop insurance or agriculture insurance emerges as a crucial tool to mitigate these risks. This blog explores why every farmer should have crop insurance for each harvest, how the government subsidizes it, the benefits, coverages, and exclusions.
               </p>
            </div>
          </div>
        </section>

        {/* Importance of Crop Insurance */}
        <section className="py-20 md:py-32 bg-green-50/50 relative border-t border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                  Importance of <span className="text-[#FBCE04]">Crop Insurance</span>
                </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white border border-border p-8 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">Financial Security</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Crop insurance provides financial security to farmers by compensating for the losses incurred due to unforeseen events like droughts, floods, pests, and diseases. It ensures that farmers do not suffer complete financial ruin in the event of a poor harvest.
                </p>
              </div>

              <div className="bg-white border border-border p-8 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#FBCE04]/20 text-yellow-700 rounded-full flex items-center justify-center mb-6">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">Stability in Income</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  By mitigating the risks associated with farming, crop insurance helps stabilize the income of farmers. This stability allows them to plan better, invest in better farming practices, and improve their overall livelihood.
                </p>
              </div>

              <div className="bg-white border border-border p-8 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">Encouragement for Investment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When farmers know that they are protected against major losses, they are more likely to invest in high-quality seeds, fertilizers, and modern farming techniques. This can lead to increased productivity and better yields.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Key <span className="text-green-600">Features</span>
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Wide Coverage", desc: "Policies can be customized to include coverage for various risks, ensuring comprehensive protection.", icon: Sprout },
                { title: "Sum Insured", desc: "The sum insured is determined based on the cost of cultivation and the expected yield.", icon: BadgeIndianRupee },
                { title: "Premium Subsidies", desc: "The government provides subsidies on premiums, making crop insurance affordable for farmers.", icon: Landmark },
                { title: "Claim Process", desc: "Insurers offer a straightforward claim process, ensuring quick and hassle-free settlements.", icon: Timer },
                { title: "Tech Integration", desc: "Use of technology such as satellite imagery, drones, and weather stations for accurate data collection and assessment.", icon: CloudRain }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="bg-slate-50 border border-border p-6 rounded-3xl text-center hover:bg-green-50 transition-colors">
                    <div className="w-12 h-12 mx-auto bg-white shadow-sm border text-foreground rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Government Subsidies & Benefits */}
        <section className="py-20 md:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
               
               {/* PMFBY */}
               <div className="space-y-8">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#FBCE04] font-semibold text-sm mb-4 border border-white/20">
                    <Landmark className="w-4 h-4" />
                    Government Subsidies
                 </div>
                 <h2 className="text-4xl font-bold font-heading mb-6">Pradhan Mantri Fasal Bima Yojana (PMFBY)</h2>
                 <p className="text-white/80 leading-relaxed mb-6">
                   The Indian government introduced the Pradhan Mantri Fasal Bima Yojana (PMFBY) in 2016 to provide affordable crop insurance to farmers. Under this scheme, the government subsidizes a significant portion of the premium, making it affordable for farmers.
                 </p>
                 
                 <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                   <h3 className="text-2xl font-bold mb-4 text-[#FBCE04]">Premium Rates</h3>
                   <ul className="space-y-4">
                     <li className="flex justify-between items-center border-b border-white/10 pb-3">
                       <span className="font-semibold text-white/90">Kharif Crops</span>
                       <span className="text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-lg">2% of sum insured</span>
                     </li>
                     <li className="flex justify-between items-center border-b border-white/10 pb-3">
                       <span className="font-semibold text-white/90">Rabi Crops</span>
                       <span className="text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-lg">1.5% of sum insured</span>
                     </li>
                     <li className="flex justify-between items-center pb-1">
                       <span className="font-semibold text-white/90">Commercial & Horticultural</span>
                       <span className="text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-lg">5% of sum insured</span>
                     </li>
                   </ul>
                   <p className="mt-4 text-sm text-white/60">
                     The remaining premium is borne by the central and state governments, ensuring that the financial burden on farmers is minimal.
                   </p>
                 </div>
               </div>

               {/* Benefits */}
               <div className="space-y-8">
                 <h2 className="text-3xl font-bold font-heading mb-6">Additional Benefits</h2>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <ShieldCheck className="w-8 h-8 text-green-400 shrink-0" />
                       <div>
                          <h4 className="font-bold text-xl mb-1">Comprehensive Coverage</h4>
                          <p className="text-white/70 text-sm leading-relaxed">Farm crop insurance provides comprehensive coverage against a wide range of risks, including natural calamities, pests, and diseases. This ensures that farmers are protected against the majority of threats to their crops.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <Timer className="w-8 h-8 text-green-400 shrink-0" />
                       <div>
                          <h4 className="font-bold text-xl mb-1">Timely Compensation</h4>
                          <p className="text-white/70 text-sm leading-relaxed">One of the key benefits of crop insurance is the timely compensation provided to farmers. This helps them recover quickly from losses and resume their farming activities without significant delays.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <Lightbulb className="w-8 h-8 text-green-400 shrink-0" />
                       <div>
                          <h4 className="font-bold text-xl mb-1">Encourages Risk Management</h4>
                          <p className="text-white/70 text-sm leading-relaxed">Crop insurance encourages farmers to adopt better risk management practices. Knowing that they have a safety net, farmers are more likely to experiment with new crops and techniques, which can lead to increased agricultural innovation and productivity.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <HeartHandshake className="w-8 h-8 text-green-400 shrink-0" />
                       <div>
                          <h4 className="font-bold text-xl mb-1">Reduction in Farmers’ Suicides</h4>
                          <p className="text-white/70 text-sm leading-relaxed">The financial stability provided by crop insurance can play a crucial role in reducing the incidence of farmers’ suicides, which are often driven by economic distress caused by crop failures.</p>
                       </div>
                    </div>
                 </div>
               </div>

            </div>
          </div>
        </section>

        {/* Coverages & Exclusions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Coverages & <span className="text-red-500">Exclusions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               
               {/* Coverages */}
               <div className="bg-green-50 border border-green-100 p-8 rounded-[2.5rem]">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2"><ShieldCheck className="w-6 h-6"/> Coverages</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-green-900">Yield Losses</h4>
                      <p className="text-sm text-green-800/80 mt-1">Compensation for losses due to adverse weather conditions like drought, floods, hailstorms, and cyclones.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-900">Post-Harvest Losses</h4>
                      <p className="text-sm text-green-800/80 mt-1">Coverage for losses occurring after harvest but before the crops are sold, due to unseasonal rains or other adverse conditions.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-900">Premium Subsidies</h4>
                      <p className="text-sm text-green-800/80 mt-1">The government provides subsidies on premiums, making crop insurance affordable for farmers.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-900">Prevented Sowing</h4>
                      <p className="text-sm text-green-800/80 mt-1">Compensation if farmers are unable to sow crops due to adverse weather conditions.</p>
                    </div>
                  </div>
               </div>

               {/* Exclusions */}
               <div className="bg-red-50 border border-red-100 p-8 rounded-[2.5rem]">
                  <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2"><Ban className="w-6 h-6"/> Exclusions</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-red-900">Willful Negligence</h4>
                      <p className="text-sm text-red-800/80 mt-1">Losses due to the farmer’s willful negligence or avoidable actions are not covered.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900">Non-Agricultural Activities</h4>
                      <p className="text-sm text-red-800/80 mt-1">Losses arising from activities not related to agriculture are excluded.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900">War and Nuclear Risks</h4>
                      <p className="text-sm text-red-800/80 mt-1">Damages caused by war, nuclear risks, or similar events are not covered.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900">Prior Damage</h4>
                      <p className="text-sm text-red-800/80 mt-1">Pre-existing damages before the inception of the policy are excluded from coverage.</p>
                    </div>
                  </div>
               </div>

            </div>
          </div>
        </section>

        {/* Conclusion / Lifeline */}
        <section className="py-20 bg-gradient-to-b from-transparent to-green-50/50">
           <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto bg-white p-10 rounded-[3rem] shadow-xl border border-border text-center space-y-6">
                 <div className="w-16 h-16 bg-[#FBCE04]/20 text-[#FBCE04] rounded-full flex items-center justify-center mx-auto mb-2">
                   <Sprout className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold font-heading">A Lifeline for <span className="text-green-600">Farmers</span></h2>
                 <p className="text-muted-foreground leading-relaxed text-lg">
                   Crop insurance is a lifeline for farmers in India, offering financial stability and protection against various risks. The government’s subsidy through schemes like PMFBY makes it affordable for farmers to insure their crops. By understanding the coverage and exclusions, farmers can make informed decisions and ensure that their livelihood is protected against the unpredictability of agriculture. Crop insurance not only safeguards individual farmers but also contributes to the overall resilience and productivity of the agricultural sector.
                 </p>
              </div>
           </div>
        </section>

      </main>

      <CinematicFooter />
    </div>
  );
}
