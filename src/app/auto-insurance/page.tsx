import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ButtonRotate } from "@/components/ui/button-rotate";
import { 
  CarFront, 
  ShieldCheck, 
  AlertTriangle, 
  Landmark, 
  BadgeIndianRupee, 
  CheckCircle2, 
  Bike, 
  Leaf, 
  FileText,
  BadgeAlert,
  HeartPulse,
  Banknote
} from "lucide-react";
import Image from "next/image";

export default function AutoInsurancePage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#673CDD]/10 via-white to-[#FBCE04]/10">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/auto_insurance_hero.png" 
              alt="Auto Insurance Hero - Scenic Highway" 
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
                Eco-Friendly & Comprehensive
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-foreground leading-[1.1]">
                Protect Your Car, <br/> <span className="text-[#673CDD]">Help The Planet.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Automotive insurance is a crucial aspect of vehicle ownership in India. Whether you own a two-wheeler or a four-wheeler, having the right insurance coverage is not only a legal requirement but a financial safeguard.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <ButtonRotate text="CHECK OUR PRICES • " />
              </div>
            </div>
          </div>
        </section>

        {/* Types of Auto Insurance Policies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Types of <span className="text-[#FBCE04]">Auto Insurance</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Auto insurance in India is broadly categorized into two essential types:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 border border-border p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <AlertTriangle className="w-32 h-32 text-red-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-red-500/10 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <BadgeAlert className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4">Third-Party Insurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This is the minimum legal requirement in India. It covers damages caused to a third party (person or property) by the insured vehicle in the event of an accident.
                  </p>
                </div>
              </div>

              <div className="bg-[#673CDD] text-white border border-[#673CDD] p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 text-[#FBCE04] rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-white">Comprehensive Insurance</h3>
                  <p className="text-white/80 leading-relaxed">
                    Provides extensive coverage, including third-party liability, as well as damages to the insured vehicle due to accidents, theft, natural disasters, fire, and other perils.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Breakdowns */}
        <section className="py-20 md:py-32 bg-[#673CDD]/5 relative">
          <div className="container mx-auto px-4 md:px-6 space-y-32">
            
            {/* Two Wheelers */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                    Coverage for <span className="text-[#673CDD]">Two-Wheelers</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    When insuring a two-wheeler, it’s essential to consider the following factors to determine the appropriate coverage:
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "Third-Party Liability", desc: "Mandatory as per Motor Vehicles Act, 1988." },
                    { title: "Own Damage (OD) Cover", desc: "Optional but highly recommended for accidents, theft, fire, or vandalism." },
                    { title: "Personal Accident Cover", desc: "Covers the owner-driver for injuries, medical expenses, or permanent disability." },
                    { title: "Add-Ons", desc: "Zero depreciation cover, roadside assistance, and engine protection." },
                    { title: "Ideal Coverage", desc: "A combination of third-party, OD, and PA cover based on the vehicle's Insured Declared Value (IDV)." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1 bg-white border shadow-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/auto_two_wheeler.png" 
                  alt="Two Wheeler Insurance in India" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority={true}
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-4">
                  <div className="bg-[#FBCE04] p-3 rounded-full"><Bike className="w-6 h-6 text-black"/></div>
                  <div>
                    <p className="font-bold text-sm">Two-Wheeler Insurance</p>
                    <p className="text-xs text-muted-foreground">Stay safe on the streets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Four Wheelers */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/auto_four_wheeler.png" 
                  alt="Four Wheeler Car Insurance in India" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-4">
                  <div className="bg-[#673CDD] p-3 rounded-full"><CarFront className="w-6 h-6 text-white"/></div>
                  <div>
                    <p className="font-bold text-sm">Four-Wheeler Insurance</p>
                    <p className="text-xs text-muted-foreground">Comprehensive family protection</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                    Coverage for <span className="text-[#673CDD]">Four-Wheelers</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Considerations are similar to those for two-wheelers, but with a few additional factors:
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "Third-Party Liability", desc: "Mandatory as per the law. Covers damages to third parties." },
                    { title: "Own Damage (OD) Cover", desc: "Essential for covering damages to your vehicle due to accidents, theft, fire, etc." },
                    { title: "Personal Accident Cover", desc: "Mandatory for owner-driver. Ensures sufficient coverage for medical, disability, or death." },
                    { title: "Add-Ons", desc: "Zero depreciation, engine protection, return to invoice, roadside assistance, consumables cover." },
                    { title: "Ideal Coverage", desc: "A package policy based on IDV. Additional add-ons provide extra security and peace of mind." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1 bg-white border shadow-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Government Norms & Penalties */}
        <section className="py-20 md:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Rules */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#FBCE04] font-semibold text-sm mb-4 border border-white/20">
                  <Landmark className="w-4 h-4" />
                  Government Norms
                </div>
                <h2 className="text-4xl font-bold font-heading mb-6">Automobile Insurance <br/>Legal Requirements</h2>
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-[#FBCE04] mb-2 flex items-center gap-2"><FileText className="w-5 h-5"/> Motor Vehicles Act, 1988</h3>
                    <p className="text-white/70 text-sm">It is mandatory for all motor vehicles to have at least third-party insurance to ensure damages or injuries caused to third parties are covered.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-[#FBCE04] mb-2 flex items-center gap-2"><HeartPulse className="w-5 h-5"/> IRDAI Mandate</h3>
                    <p className="text-white/70 text-sm">All motor insurance policies must include personal accident cover for the owner-driver. The minimum coverage amount is ₹15 lakhs.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-[#FBCE04] mb-2 flex items-center gap-2"><CalendarDays className="w-5 h-5"/> Periodic Renewals</h3>
                    <p className="text-white/70 text-sm">Renewal can be annual or multi-year (up to 3 years) for two-wheelers and annual for four-wheelers to avoid lapses and penalties.</p>
                  </div>
                </div>
              </div>

              {/* Penalties */}
              <div className="space-y-8 lg:mt-12">
                <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-[2.5rem]">
                  <h3 className="text-3xl font-bold font-heading mb-6 text-white flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-red-500"/> Penalties for Non-Compliance
                  </h3>
                  <p className="text-white/80 mb-8">Driving without valid insurance is a punishable offense in India. The fines and legal consequences are stringent.</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-semibold">First Offense</span>
                      <span className="text-red-400 font-bold">₹2,000 / 3 Months Jail</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-semibold">Subsequent Offenses</span>
                      <span className="text-red-400 font-bold">₹4,000 / 3 Months Jail</span>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                      <span className="font-semibold">Vehicle Impounding</span>
                      <span className="text-red-400 font-bold">Authorized by Law</span>
                    </div>
                  </div>

                  <div className="bg-black/20 p-4 rounded-xl">
                    <h4 className="font-bold text-red-400 mb-2">Claims and Compensation Issues</h4>
                    <p className="text-sm text-white/70">Without valid insurance, you cannot claim any compensation for damages or injuries. This can result in significant financial burdens.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits of Comprehensive */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Benefits of <span className="text-[#673CDD]">Comprehensive Coverage</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Financial Protection", desc: "Against accidents, theft, natural disasters, and third-party liabilities.", icon: BadgeIndianRupee },
                { title: "Peace of Mind", desc: "Drive with confidence knowing you are protected against unforeseen events.", icon: ShieldCheck },
                { title: "Enhanced Resale Value", desc: "Insured vehicles are seen as well-maintained and less risky investments.", icon: Banknote },
                { title: "Access to Add-Ons", desc: "Zero depreciation, engine protection, and roadside assistance available.", icon: CarFront }
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="bg-slate-50 border border-border p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 mx-auto bg-[#673CDD]/10 text-[#673CDD] rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

      </main>

      <CinematicFooter />
    </div>
  );
}

function CalendarDays(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
