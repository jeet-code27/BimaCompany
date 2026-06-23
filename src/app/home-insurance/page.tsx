import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ButtonRotate } from "@/components/ui/button-rotate";
import { 
  Home, 
  CloudLightning, 
  ShieldAlert, 
  Wallet, 
  Percent, 
  Building, 
  Sofa, 
  Hotel, 
  Headset,
  CheckCircle2,
  Lock,
  BadgeIndianRupee,
  ShieldCheck,
  Scale,
  TrendingUp,
  HeartHandshake
} from "lucide-react";
import Image from "next/image";

export default function HomeInsurancePage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans text-foreground overflow-x-hidden">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FBCE04]/20 via-white to-[#673CDD]/10">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/home_insurance_hero.png" 
              alt="Homeowners Insurance Protection" 
              fill
              sizes="100vw"
              className="object-cover opacity-30 mix-blend-multiply"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto pt-24 pb-12">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#673CDD]/10 text-[#673CDD] font-semibold text-sm mb-4 border border-[#673CDD]/20 shadow-sm backdrop-blur-md">
                <Home className="w-4 h-4" />
                Homeowners & Renters Coverage
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight leading-[1.1] text-slate-900">
                How Would You Cope If Your Home Was <span className="text-[#673CDD]">Destroyed Overnight?</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
                Zero hassle. Great prices. Trusted by your lender.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <ButtonRotate text="CHECK OUR PRICES • " />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                Homeowners and Renters Insurance in India
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
                In India, the concept of homeowners and home rental insurance is gradually gaining traction. With increasing awareness about the importance of financial protection against unforeseen events, more individuals are recognizing the benefits of insuring their homes and belongings. What are the significance of homeowners and renters insurance, their affordability, and the features that make these insurance policies attractive for all.
              </p>
            </div>
          </div>
        </section>

        {/* Importance */}
        <section className="py-20 md:py-32 bg-slate-50 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Importance of <span className="text-[#673CDD]">Home Insurance</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CloudLightning className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Protection Against Natural Disasters</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  India is prone to various natural disasters such as earthquakes, floods, cyclones, and landslides. These events can cause significant damage to properties, leading to substantial financial losses. Homeowners insurance provides coverage for such damages, ensuring that individuals can rebuild or repair their homes without bearing the entire financial burden.
                </p>
              </div>

              <div className="bg-[#673CDD] text-white p-8 md:p-10 rounded-3xl border border-[#673CDD] shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-white/20 text-[#FBCE04] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Liability Protection</h3>
                <p className="text-white/90 leading-relaxed text-justify">
                  Accidents can happen unexpectedly, and if someone is injured on your property, you could be held liable. Homeowners insurance includes liability coverage, which protects you from legal and medical expenses if someone is injured while on your property. Renters insurance also offers liability protection, making it an essential consideration for tenants.
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Coverage for Theft and Vandalism</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  The risk of theft and vandalism is an ever-present concern for both homeowners and renters. Insurance policies offer protection against losses resulting from burglary or deliberate damage to property. This coverage provides peace of mind, knowing that personal belongings and valuable assets are safeguarded.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Affordability */}
        <section className="py-20 md:py-32 bg-white relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl sticky top-24 hidden lg:block">
                <Image 
                  src="/images/home_insurance_interior.png" 
                  alt="Modern Indian Home Interior" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                    <span className="text-[#FBCE04]">Affordability</span> of Homeowners and Renters Insurance
                  </h2>
                </div>
                
                <div className="space-y-10">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#673CDD]/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <Wallet className="w-6 h-6 text-[#673CDD]" />
                      </div>
                      <h3 className="font-bold text-2xl">Cost-Effective Premiums</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      One of the most appealing aspects of homeowners and renters insurance in India is its affordability. Premiums for these insurance policies are generally reasonable, making them accessible to a wide range of individuals. The cost of insurance depends on various factors such as the location of the property, the sum insured, and the type of coverage selected. Despite these variables, the overall cost remains within reach for most homeowners and renters.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#673CDD]/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <BadgeIndianRupee className="w-6 h-6 text-[#673CDD]" />
                      </div>
                      <h3 className="font-bold text-2xl">Flexible Payment Options</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Insurance companies in India offer flexible payment options to make it easier for individuals to afford coverage. Policyholders can choose to pay premiums annually, semi-annually, quarterly, or monthly, depending on their financial convenience. This flexibility ensures that insurance remains affordable and manageable.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#673CDD]/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <Percent className="w-6 h-6 text-[#673CDD]" />
                      </div>
                      <h3 className="font-bold text-2xl">Discounts and Benefits</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Many insurance providers offer discounts and additional benefits to attract customers. These may include no-claim bonuses, discounts for installing security systems, and bundled offers for purchasing multiple insurance policies from the same provider. Such incentives further enhance the affordability of homeowners and renters insurance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salient Features */}
        <section className="py-20 md:py-32 bg-[#673CDD]/5 relative border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Salient <span className="text-[#673CDD]">Features</span> of Homeowners and Renters Insurance
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-start">
                <ShieldCheck className="w-10 h-10 text-[#673CDD] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Comprehensive Coverage</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Homeowners and renters insurance policies offer comprehensive coverage that includes protection for the structure of the home, personal belongings, and additional living expenses. This all-encompassing coverage ensures that policyholders are well-protected against a variety of risks.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-start">
                <Building className="w-10 h-10 text-[#673CDD] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Structure Coverage</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Homeowners insurance covers the physical structure of the home, including walls, roof, floors, and built-in fixtures. In the event of damage due to natural disasters, fire, or other covered perils, the policy provides funds for repair or reconstruction.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-start">
                <Sofa className="w-10 h-10 text-[#673CDD] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Personal Belongings Coverage</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Both homeowners and renters insurance cover personal belongings such as furniture, electronics, clothing, and other valuables. In case of theft, fire, or other covered incidents, the policy reimburses the cost of damaged or stolen items.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-start">
                <Hotel className="w-10 h-10 text-[#673CDD] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Additional Living Expenses</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  If a covered event makes the home uninhabitable, insurance policies provide coverage for additional living expenses. This includes costs for temporary accommodation, food, and other essentials until the home is repaired or a new residence is found.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-start">
                <CheckCircle2 className="w-10 h-10 text-[#673CDD] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Easy Claim Process</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  A straightforward and efficient claim process is a significant feature of modern homeowners and renters insurance policies. Insurance providers have streamlined their claim procedures, allowing policyholders to file claims easily and receive timely settlements. Many companies offer online claim filing, which adds to the convenience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-start">
                <Headset className="w-10 h-10 text-[#673CDD] mb-4" />
                <h3 className="text-2xl font-bold mb-4">24/7 Customer Support</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Insurance companies provide round-the-clock customer support to assist policyholders with their queries and concerns. This ensures that help is available whenever needed, enhancing the overall customer experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Purchase */}
        <section className="py-20 md:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                Why All Homeowners and Renters Should <span className="text-[#FBCE04]">Purchase Insurance</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <HeartHandshake className="w-10 h-10 text-[#FBCE04] mb-4" />
                <h3 className="font-bold text-2xl mb-4 text-[#FBCE04]">Financial Security</h3>
                <p className="text-white/80 leading-relaxed text-justify">
                  Purchasing homeowners or renters insurance provides financial security against unexpected events. It ensures that individuals do not have to bear the full financial impact of damages or losses, thereby protecting their savings and investments.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <Home className="w-10 h-10 text-[#FBCE04] mb-4" />
                <h3 className="font-bold text-2xl mb-4 text-[#FBCE04]">Peace of Mind</h3>
                <p className="text-white/80 leading-relaxed text-justify">
                  Knowing that your home and belongings are insured offers peace of mind. It alleviates worries about potential financial losses due to unforeseen events, allowing individuals to focus on other aspects of their lives.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <Scale className="w-10 h-10 text-[#FBCE04] mb-4" />
                <h3 className="font-bold text-2xl mb-4 text-[#FBCE04]">Legal and Contractual Requirements</h3>
                <p className="text-white/80 leading-relaxed text-justify">
                  In some cases, having homeowners or renters insurance may be a legal or contractual requirement. For instance, mortgage lenders often require homeowners to have insurance as a condition for approving a home loan. Similarly, landlords may require tenants to have renters insurance as part of the lease agreement.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <TrendingUp className="w-10 h-10 text-[#FBCE04] mb-4" />
                <h3 className="font-bold text-2xl mb-4 text-[#FBCE04]">Enhanced Property Value</h3>
                <p className="text-white/80 leading-relaxed text-justify">
                  Having homeowners insurance can enhance the value of a property. Prospective buyers or renters may view an insured property as a safer investment, which can make it more attractive in the real estate market.
                </p>
              </div>
            </div>

            {/* Essential Investment Conclusion */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 bg-black/40 p-8 md:p-12 rounded-[3rem] border border-white/10 mt-16 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldAlert className="w-64 h-64 text-white" />
              </div>
              <div className="lg:w-1/3 relative z-10">
                <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-xl border border-white/20">
                  <Image 
                    src="/images/home_insurance_family.png" 
                    alt="Happy Insured Family" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3 relative z-10 text-justify">
                <h3 className="text-3xl font-bold mb-6 text-white">Essential Investment</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  Homeowners and renters insurance in India is an essential investment that offers comprehensive protection, financial security, and peace of mind. Its affordability, combined with flexible payment options and attractive features, makes it accessible to a wide range of individuals. Whether you own a home or rent one, having insurance is a prudent step towards safeguarding your assets and ensuring a secure future.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>

      <CinematicFooter />
    </div>
  );
}
