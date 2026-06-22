import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ButtonRotate } from "@/components/ui/button-rotate";
import { CheckCircle2, HeartPulse, ShieldCheck, Stethoscope, ArrowRight, IndianRupee, Globe2, Activity, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PetInsurancePage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#673CDD]/10 via-white to-[#FBCE04]/10">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/pet_insurance_hero.png" 
              alt="Indian Family with Pet - Pet Insurance in India" 
              fill
              sizes="100vw"
              className="object-cover opacity-20 md:opacity-25 mix-blend-multiply"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto pt-24 pb-12">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#673CDD]/10 text-[#673CDD] font-semibold text-sm mb-4 border border-[#673CDD]/20 shadow-sm">
                <HeartPulse className="w-4 h-4" />
                Comprehensive Pet Insurance in India
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-foreground leading-[1.1]">
                What Would You Do If Your Pet Needed <span className="text-[#673CDD]">Emergency Surgery?</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Pet insurance is akin to health insurance for humans, but it’s tailored for our beloved furry companions. With the rising costs of veterinary care, pet insurance ensures you never face financial strains.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <ButtonRotate text="CHECK OUR PRICES • " />
                <div className="text-sm text-muted-foreground text-left">
                  <p className="font-semibold text-foreground flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Sign up in seconds.</p>
                  <p className="font-semibold text-foreground flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Get paid in minutes.</p>
                  <p className="font-semibold text-foreground flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Award-winning service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pet Healthcare in India (Stats) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Pet Healthcare <span className="text-[#673CDD]">in India</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Understanding the Need: Many might question the necessity of pet insurance. However, consider the rising costs of pet parenting in India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Routine Dog Care", cost: "₹6k - ₹10k", desc: "For vaccinations, deworming, and minor illnesses in the first year." },
                { title: "First Year Raising", cost: "₹54,700+", desc: "Initial costs including healthcare, food, and essentials. Recurring up to ₹80k annually." },
                { title: "Cat Healthcare", cost: "₹5,000/yr", desc: "For vet fees, medicines, and vaccines. Plus ₹5,000/month for food and grooming." },
                { title: "Surgical Procedures", cost: "Up to ₹1 Lac", desc: "Average vet visit is ₹2,700. Surgeries range from ₹5k to ₹30k, complex ones up to ₹1 Lac." }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-50 border border-border p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                  <div className="w-14 h-14 mx-auto bg-[#FBCE04]/20 text-[#FBCE04] rounded-2xl flex items-center justify-center mb-6">
                    <IndianRupee className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2">{stat.title}</h3>
                  <p className="text-3xl font-black text-[#673CDD] mb-4">{stat.cost}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Pet Insurance & Benefits */}
        <section className="py-20 md:py-32 bg-[#673CDD]/5 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/happy_pets_india.png" 
                  alt="Happy Pets India" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="space-y-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                    Benefits of Pet Insurance
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With escalating veterinary expenses, pet insurance ensures you don’t have to compromise on your pet’s health due to financial constraints.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Financial Stability", desc: "Protection during sickness, dental treatments, and insect-borne diseases.", icon: IndianRupee },
                    { title: "Quality Healthcare", desc: "Opt for the best treatments without worrying about costs.", icon: Stethoscope },
                    { title: "Misc Losses", desc: "Coverage if your pet is stolen, lost, or causes third-party damages.", icon: ShieldCheck },
                    { title: "Expensive Treatments", desc: "Afford the best critical illness treatments for your pet’s recovery.", icon: Activity },
                    { title: "Accident Preparedness", desc: "Acts as a safety net during unpredictable accidents.", icon: HeartPulse },
                    { title: "Overseas Protection", desc: "Coverage during travels, ensuring protection even abroad.", icon: Globe2 }
                  ].map((benefit, idx) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                        <Icon className="w-8 h-8 text-[#673CDD] mb-4" />
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage & Indian Context */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-16">
              
              {/* Context */}
              <div className="lg:col-span-1 space-y-8">
                <div className="sticky top-24">
                  <h2 className="text-4xl font-bold font-heading text-foreground mb-6">A Deeper Dive: <span className="text-[#673CDD]">The Indian Context</span></h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    India, with its rich cultural tapestry, has always had a special place for animals. From the streets bustling with stray dogs and cats to households that treat pets as family members, the bond is profound.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    The pet insurance market in India is nascent compared to Western countries, but with rising adoption and veterinary costs, specialized plans are now essential.
                  </p>
                  <ButtonRotate text="GET STARTED NOW • " />
                </div>
              </div>

              {/* Coverage List */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#673CDD] text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                  <h3 className="text-3xl font-bold font-heading mb-8">Coverage Offered in India</h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {[
                      { title: "Accidental Injuries", desc: "From fractures to wounds sustained in accidents." },
                      { title: "Illnesses", desc: "Including hereditary, congenital, and chronic conditions." },
                      { title: "Hospitalization", desc: "Costs incurred if a pet needs to be hospitalized." },
                      { title: "Surgery & Critical Care", desc: "Major surgeries and intensive treatments." },
                      { title: "Vaccinations", desc: "Some premium policies cover routine check-ups and vaccinations." },
                      { title: "Third-party Liability", desc: "In case the pet causes harm or damage to third parties." }
                    ].map((cov, idx) => (
                      <div key={idx} className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 text-[#FBCE04] shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">{cov.title}</h4>
                          <p className="text-white/80 text-sm leading-relaxed">{cov.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20">
                    <p className="text-sm font-medium italic">
                      <span className="text-[#FBCE04] font-bold">Exclusions:</span> It’s essential to note that pet insurance policies might not cover pre-existing conditions, specific breeds prone to hereditary diseases, or treatments like behavioral therapy.
                    </p>
                  </div>
                </div>

                {/* Premium Factors */}
                <div className="grid sm:grid-cols-4 gap-4">
                  <div className="sm:col-span-4 mb-2"><h3 className="text-2xl font-bold">Premium Factors:</h3></div>
                  {["Type of Pet", "Breed", "Age", "Health History"].map((factor, idx) => (
                    <div key={idx} className="bg-slate-50 border border-border p-4 rounded-xl text-center font-semibold text-[#673CDD]">
                      {factor}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tips for a Healthy Pet & Specific Pages Link */}
        <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/pet_vet_india.png" alt="Vet India Background" fill className="object-cover" />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                Explore Our Specific <span className="text-[#FBCE04]">Pet Coverages</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
              <Link href="/dog-insurance" className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center hover:bg-[#673CDD] transition-colors group">
                <PawPrint className="w-12 h-12 text-[#FBCE04] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Dog Insurance</h3>
                <p className="text-white/70 text-sm flex items-center justify-center gap-2 group-hover:text-white">Learn More <ArrowRight className="w-4 h-4"/></p>
              </Link>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center opacity-70">
                <HeartPulse className="w-12 h-12 text-white/50 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Cattle Insurance</h3>
                <p className="text-white/50 text-sm">Coming Soon</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center opacity-70">
                <ShieldCheck className="w-12 h-12 text-white/50 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Cat Insurance</h3>
                <p className="text-white/50 text-sm">Coming Soon</p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto bg-white text-foreground rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl font-bold font-heading mb-8 text-center">Tips for a Healthy Pet</h3>
              <div className="grid sm:grid-cols-5 gap-6 text-center">
                {[
                  { title: "Vaccination", desc: "Against potential diseases" },
                  { title: "Vet Visits", desc: "Annual check-ups" },
                  { title: "Spaying/Neutering", desc: "Consider for health" },
                  { title: "Parasite Prevention", desc: "Ticks & Fleas" },
                  { title: "Ideal Weight", desc: "Monitor regularly" }
                ].map((tip, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#673CDD]/10 text-[#673CDD] flex items-center justify-center mx-auto text-xl font-black">
                      {idx + 1}
                    </div>
                    <h4 className="font-bold text-sm leading-tight">{tip.title}</h4>
                    <p className="text-xs text-muted-foreground">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs / Claims Section */}
        <section className="py-20 md:py-32 container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Claims, Inclusions & <span className="text-[#673CDD]">FAQs</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about claiming your pet insurance policy.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-slate-50 border border-border rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#673CDD]">How Will I Get Paid For A Claim?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Our aim is to provide fast and efficient claims service to ensure payment to you for any valid claim as quickly as possible. Approved claims will be paid directly to your account. In the event of a claim, inform the company, provide relevant medical records, and a detailed veterinarian report.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-slate-50 border border-border rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#673CDD]">Are The Claims Available Outside India?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                The cover provided under this policy is restricted to claims occurring in India. The obligation of the company is to make payments in Indian Rupees only.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-slate-50 border border-border rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#673CDD]">Can I Go To Any Vet?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Yes, you can go to any vet you like in India. We won’t interfere with your veterinary visits as long as they’re licensed to provide veterinary care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-slate-50 border border-border rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#673CDD]">What Are Pre-Existing Conditions & Are They Covered?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Anything your pet has shown signs of before you opt for the policy is considered a pre-existing condition. We don’t cover pre-existing conditions currently, but we’ve got your back for future illnesses or accidents. Cosmetic procedures are also excluded.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-slate-50 border border-border rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#673CDD]">Is There Any Entry Age Limits For Insurance?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base space-y-2">
                <p><strong>Small, Medium, And Large Breeds:</strong><br/>Entry Age: 6 Months onwards up to age of 7 Years<br/>Exit Age: 10 Years</p>
                <p><strong>Giant Breeds:</strong><br/>Entry Age: 6 Months onwards up to age of 4 Years<br/>Exit Age: 6 Years</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-slate-50 border border-border rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#673CDD]">What Happens After You Enroll?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Once you have purchased the policy, you will receive the Policy schedule, Premiums Receipt, Policy coverage, and Terms & Conditions directly to your registered email.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </section>

      </main>

      {/* Cinematic Footer */}
      <CinematicFooter />
    </div>
  );
}
