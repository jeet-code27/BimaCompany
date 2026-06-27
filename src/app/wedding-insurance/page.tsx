import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ButtonRotate } from "@/components/ui/button-rotate";
import { 
  Heart,
  ShieldCheck, 
  Ban,
  AlertTriangle,
  Landmark,
  PartyPopper,
  CameraOff,
  CloudLightning,
  Flame,
  Banknote,
  Users,
  ShieldAlert,
  HeartHandshake
} from "lucide-react";
import Image from "next/image";

export default function WeddingInsurancePage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-600/10 via-white to-[#FBCE04]/10">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/wedding_insurance_hero.png" 
              alt="Big Fat Indian Wedding" 
              fill
              sizes="100vw"
              className="object-cover opacity-20 md:opacity-25 mix-blend-multiply"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto pt-24 pb-12">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-700 font-semibold text-sm mb-4 border border-rose-500/20 shadow-sm">
                <Heart className="w-4 h-4" />
                Comprehensive Event Protection
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-foreground leading-[1.1]">
                What Would You Do If Your <br/> <span className="text-rose-600">Wedding Day Faced a Disaster?</span>
              </h1>
              <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto space-y-4 font-medium">
                <p>
                  Events, especially weddings, are milestones that entail significant investment, both emotionally and financially. In the face of uncertainties, there’s a need to safeguard the interests of the organizers. This is where wedding insurance or event insurance comes into play.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <ButtonRotate text="CHECK OUR PRICES • " />
              </div>
            </div>
          </div>
        </section>

        {/* The Importance & Concept */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-16">
               
               <div className="space-y-6">
                 <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <PartyPopper className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                   The Importance of Wedding Insurance <span className="text-rose-600">in India</span>
                 </h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   Weddings in India are grand affairs, often referred to as “big fat Indian weddings” due to their opulence and scale. These events involve significant financial investments and meticulous planning. Given the complexity and costs associated with such celebrations, the concept of wedding ceremony or event insurance is gaining popularity in India.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="bg-rose-50 border border-rose-100 p-8 rounded-3xl hover:shadow-md transition-shadow">
                     <h3 className="text-2xl font-bold text-rose-900 mb-4 flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-rose-600"/> Understanding Wedding Insurance</h3>
                     <p className="text-rose-800/80 leading-relaxed">
                       Wedding ceremony insurance, also known as event insurance, is a specialized policy designed to protect against unforeseen events that can disrupt or cause financial loss during a wedding. These policies provide coverage for various aspects of the wedding, ensuring that the financial investment is safeguarded.
                     </p>
                  </div>
                  <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl hover:shadow-md transition-shadow">
                     <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2"><TrendingUp className="w-6 h-6 text-orange-600"/> Growing Popularity</h3>
                     <p className="text-orange-800/80 leading-relaxed">
                       With the escalating costs of weddings and the increasing awareness of potential risks, more families in India are opting for wedding insurance. This trend is particularly strong in urban areas, where weddings are often extravagant, involving substantial expenses on venues, catering, decorations, and entertainment.
                     </p>
                  </div>
               </div>

            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-20 md:py-32 bg-slate-900 text-white relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-heading">
                  Coverage Provided by <span className="text-[#FBCE04]">Wedding Insurance</span>
                </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Box 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
                <h3 className="text-2xl font-bold mb-6 text-[#FBCE04] flex items-center gap-3"><AlertTriangle className="w-6 h-6"/> Event Cancellation or Postponement</h3>
                <p className="text-white/70 mb-6 text-sm">One of the primary coverages of wedding insurance is protection against event cancellation or postponement. This includes:</p>
                <ul className="space-y-4">
                   <li>
                     <strong className="text-white">Extreme Weather Conditions</strong>
                     <p className="text-white/60 text-sm">Natural calamities like floods, cyclones, or earthquakes that make it impossible to hold the event.</p>
                   </li>
                   <li>
                     <strong className="text-white">Illness or Injury</strong>
                     <p className="text-white/60 text-sm">If the bride, groom, or immediate family members fall seriously ill or get injured, leading to postponement or cancellation.</p>
                   </li>
                   <li>
                     <strong className="text-white">Accidental Damage to Venue</strong>
                     <p className="text-white/60 text-sm">Unexpected damage to the wedding venue that renders it unusable.</p>
                   </li>
                </ul>
              </div>

              {/* Box 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
                <h3 className="text-2xl font-bold mb-6 text-[#FBCE04] flex items-center gap-3"><CameraOff className="w-6 h-6"/> Vendor Issues</h3>
                <p className="text-white/70 mb-6 text-sm">Weddings involve multiple vendors, such as caterers, photographers, florists, and decorators. Wedding insurance covers financial losses due to:</p>
                <ul className="space-y-4">
                   <li>
                     <strong className="text-white">Vendor No-Show</strong>
                     <p className="text-white/60 text-sm">If a vendor fails to show up or deliver services as promised.</p>
                   </li>
                   <li>
                     <strong className="text-white">Bankruptcy</strong>
                     <p className="text-white/60 text-sm">If a vendor goes bankrupt before the wedding, causing a loss of advance payments.</p>
                   </li>
                </ul>
              </div>

              {/* Box 3 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
                <h3 className="text-2xl font-bold mb-6 text-[#FBCE04] flex items-center gap-3"><ShieldAlert className="w-6 h-6"/> Property Damage and Theft</h3>
                <p className="text-white/70 mb-6 text-sm">Weddings often involve valuable items, including jewelry, gifts, and decorations. Insurance coverage extends to:</p>
                <ul className="space-y-4">
                   <li>
                     <strong className="text-white">Damage to Property</strong>
                     <p className="text-white/60 text-sm">Protection against accidental damage to the venue or rented equipment.</p>
                   </li>
                   <li>
                     <strong className="text-white">Theft</strong>
                     <p className="text-white/60 text-sm">Coverage for stolen valuables, including jewelry and gifts.</p>
                   </li>
                </ul>
              </div>

              {/* Box 4 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
                <h3 className="text-2xl font-bold mb-6 text-[#FBCE04] flex items-center gap-3"><Users className="w-6 h-6"/> Personal Liability</h3>
                <p className="text-white/70 mb-6 text-sm">Wedding insurance includes personal liability coverage, which protects against:</p>
                <ul className="space-y-4">
                   <li>
                     <strong className="text-white">Injuries to Guests</strong>
                     <p className="text-white/60 text-sm">If a guest is injured during the event, the policy covers medical expenses and legal costs.</p>
                   </li>
                   <li>
                     <strong className="text-white">Damage to Third-Party Property</strong>
                     <p className="text-white/60 text-sm">If the wedding causes damage to third-party property, the insurance covers the repair or replacement costs.</p>
                   </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-4xl font-bold font-heading text-foreground">
                Exclusions: <span className="text-red-500">What's Not Covered?</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
               <div className="bg-red-50 border border-red-100 p-6 rounded-3xl text-center">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 text-red-500 shadow-sm">
                    <Ban className="w-5 h-5"/>
                  </div>
                  <h4 className="font-bold text-red-900 mb-2">Pre-Existing Conditions</h4>
                  <p className="text-sm text-red-800/80">Policies do not cover cancellations due to pre-existing conditions known before purchasing the policy (e.g. chronic illness).</p>
               </div>
               <div className="bg-red-50 border border-red-100 p-6 rounded-3xl text-center">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 text-red-500 shadow-sm">
                    <Heart className="w-5 h-5"/>
                  </div>
                  <h4 className="font-bold text-red-900 mb-2">Change of Heart</h4>
                  <p className="text-sm text-red-800/80">Does not cover cancellations or postponements if the bride or groom decides not to proceed with the marriage.</p>
               </div>
               <div className="bg-red-50 border border-red-100 p-6 rounded-3xl text-center">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 text-red-500 shadow-sm">
                    <AlertTriangle className="w-5 h-5"/>
                  </div>
                  <h4 className="font-bold text-red-900 mb-2">Voluntary Changes</h4>
                  <p className="text-sm text-red-800/80">Any voluntary changes in plans, such as changing the date or venue for personal preferences, are not covered.</p>
               </div>
               <div className="bg-red-50 border border-red-100 p-6 rounded-3xl text-center">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 text-red-500 shadow-sm">
                    <Flame className="w-5 h-5"/>
                  </div>
                  <h4 className="font-bold text-red-900 mb-2">War and Terrorism</h4>
                  <p className="text-sm text-red-800/80">Most wedding insurance policies exclude coverage for cancellations or disruptions caused by acts of war or terrorism.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Financial Relief */}
        <section className="py-20 bg-rose-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-rose-100">
               <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-rose-900">
                 Financial Relief for the <span className="text-rose-600">Bride’s Father</span>
               </h2>

               <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                     <Banknote className="w-8 h-8 text-rose-500 shrink-0 mt-1"/>
                     <div>
                        <h4 className="font-bold text-xl mb-2">Reducing Financial Burden</h4>
                        <p className="text-muted-foreground leading-relaxed">In traditional Indian weddings, the bride’s family, particularly the father, often bears a significant portion of the wedding expenses. This can be a substantial financial burden. Wedding insurance helps mitigate this burden by ensuring that unexpected events do not lead to a complete financial loss.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <HeartHandshake className="w-8 h-8 text-rose-500 shrink-0 mt-1"/>
                     <div>
                        <h4 className="font-bold text-xl mb-2">Peace of Mind</h4>
                        <p className="text-muted-foreground leading-relaxed">Knowing that there is a safety net in place provides peace of mind to the bride’s father. It allows the family to enjoy the celebration without constantly worrying about potential mishaps and the financial implications.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <Landmark className="w-8 h-8 text-rose-500 shrink-0 mt-1"/>
                     <div>
                        <h4 className="font-bold text-xl mb-2">Coverage of Non-Refundable Costs</h4>
                        <p className="text-muted-foreground leading-relaxed">Weddings involve numerous non-refundable costs, such as advance payments to vendors, venue booking fees, and deposits. In case of cancellation or postponement due to covered events, wedding insurance reimburses these non-refundable expenses, preventing significant financial loss.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <ShieldCheck className="w-8 h-8 text-rose-500 shrink-0 mt-1"/>
                     <div>
                        <h4 className="font-bold text-xl mb-2">Protection of Assets</h4>
                        <p className="text-muted-foreground leading-relaxed">With coverage for theft and damage, wedding insurance protects valuable assets like jewelry and gifts. This is particularly important in Indian weddings, where displaying and gifting expensive jewelry is a common tradition.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Real-Life Scenarios */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl font-bold font-heading text-foreground">
                Real-Life Scenarios: <span className="text-[#FBCE04]">How It Helps</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-border">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Flame className="w-6 h-6"/>
                  </div>
                  <h3 className="font-bold text-xl mb-4">Scenario 1: Venue Damage</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Imagine a scenario where the wedding venue is damaged due to a fire just days before the wedding. Without insurance, the family would face the dual burden of finding a new venue at short notice and losing the deposit paid for the original venue. Wedding insurance would cover the costs of booking a new venue and reimburse the lost deposit.</p>
               </div>
               
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-border">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <CameraOff className="w-6 h-6"/>
                  </div>
                  <h3 className="font-bold text-xl mb-4">Scenario 2: Vendor Bankruptcy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Imagine a scenario where the catering or photography vendor goes bankrupt days before the wedding and cannot return your advance payment. Wedding insurance can cover this financial loss so you can book a replacement vendor without paying entirely out of pocket a second time.</p>
               </div>

               <div className="bg-slate-50 p-8 rounded-[2rem] border border-border">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                    <HeartPulse className="w-6 h-6"/>
                  </div>
                  <h3 className="font-bold text-xl mb-4">Scenario 3: Illness of a Close Relative</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">If a close relative, such as a parent, falls seriously ill just before the wedding, leading to its postponement, wedding insurance would cover the costs associated with rescheduling the event, including non-refundable expenses.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-20 bg-gradient-to-b from-transparent to-rose-50/50">
           <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                 <h2 className="text-3xl font-bold font-heading">Protect Your Big Fat Indian Wedding</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   Wedding or event insurance in India is an essential investment for families planning grand celebrations. It offers comprehensive coverage against a wide range of risks, ensuring that the financial investment in the wedding is protected. By reducing the financial burden on the bride’s father and providing peace of mind, wedding insurance allows families to focus on the joy of the celebration rather than the potential pitfalls.
                 </p>
                 <p className="text-muted-foreground leading-relaxed">
                   In the context of big fat Indian weddings, where the stakes are high and the expenses substantial, having wedding insurance is a prudent decision. It ensures that the dream wedding remains a cherished memory, even if unforeseen events try to disrupt the festivities.
                 </p>
                 <div className="pt-6">
                    <ButtonRotate text="GET A FREE QUOTE • " />
                 </div>
              </div>
           </div>
        </section>

      </main>

      <CinematicFooter />
    </div>
  );
}

// Ensure the icons match the imports properly
function TrendingUp(props: any) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
function HeartPulse(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  )
}
