import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Dog Health Insurance",
  description: "Specialized health coverage for dogs. Get reimbursed for unexpected vet bills, accidents, and illnesses with Bima Company's affordable dog insurance plans.",
  keywords: ["dog insurance india", "canine health insurance", "vet bill coverage", "pet dog insurance", "dog illness cover", "best dog insurance"],
  alternates: {
    canonical: '/dog-insurance',
  },
};
import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ButtonRotate } from "@/components/ui/button-rotate";
import { CheckCircle2, FileText, ShieldCheck, Stethoscope, PawPrint, HeartPulse, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DogInsurancePage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#673CDD]/10 via-white to-[#FBCE04]/10">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/dog_insurance_hero.png" 
              alt="Golden Retriever - Dog Insurance in India" 
              fill
              sizes="100vw"
              className="object-cover opacity-20 md:opacity-30 mix-blend-multiply"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto pt-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#673CDD]/10 text-[#673CDD] font-semibold text-sm mb-4">
                <PawPrint className="w-4 h-4" />
                Best Dog Insurance in India
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-foreground">
                Dog Insurance <span className="text-[#673CDD]">in India</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                At Bima Company, we understand your concerns about your dog’s health, especially when unexpected incidents occur. That’s why we offer comprehensive pet insurance for dogs to help you manage unforeseen veterinary expenses. 
              </p>
              <p className="text-lg text-muted-foreground">
                With the Bima Company’s Dog Insurance Policy, you can ensure your furry friend receives the best medical care, while our affordable dog insurance options protect your finances. Choose the best pup insurance with us and give your dog the protection they deserve!
              </p>
              
              <div className="pt-8">
                <Link href="/dog-insurance/apply">
                  <ButtonRotate text="GET STARTED NOW • " />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* You Can Buy This Policy Section */}
        <section className="py-20 md:py-32 container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/dog_happy_running.png" 
                alt="Happy Dog Running" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#673CDD]">
                You Can Buy This Policy for Your Dogs
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                An individual or entity named in the Policy Schedule referred to as the “Insured,” who owns a pet(s) can benefit from dog insurance to protect against various expenses that might arise from treating a pet in the event of an accident or illness. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This dog insurance in India covers multiple dog breeds under the ownership of a single individual/entity under one policy. Whether you’re looking for pet insurance for dogs, dog insurance, or the best pup insurance, you can find affordable dog insurance to suit your needs. Bima Company policies also include options for comprehensive dog health insurance.
              </p>
              <Link href="/dog-insurance/apply">
                <ButtonRotate text="GET STARTED NOW • " />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits & Coverage Options */}
        <section className="py-20 md:py-32 bg-slate-50 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Dog Insurance Plans & <span className="text-[#673CDD]">Coverage</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive protection options to keep your furry friend healthy and happy.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Additional Benefits */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-[#673CDD] text-white p-8 rounded-3xl shadow-xl h-full">
                  <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                    <HeartPulse className="w-8 h-8 text-[#FBCE04]" />
                    Additional Benefits
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-semibold text-xl text-[#FBCE04] mb-2">Pre-Policy Medical Check-ups</h4>
                      <p className="text-white/90 leading-relaxed">No mandatory pre-policy medical tests for your pet dog, even if your pet is at a higher age. There will be some waiting periods for certain diseases, though.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-[#FBCE04] mb-2">Vaccination Coverage</h4>
                      <p className="text-white/90 leading-relaxed">We’re sure your pet dog’s vaccinations are given as and when required. If yes, this insurance will also cover vaccination failure. (Note: Dog needs to be vaccinated throughout the policy period).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coverage Options Grid */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold font-heading mb-6 text-foreground">What Are The Coverage Options Available?</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Surgery Expenses Cover",
                    "Hospitalisation Cover",
                    "Mortality Benefit Cover",
                    "Terminal Diseases Cover",
                    "Long-Term Care Cover",
                    "OPD Cover",
                    "Third-Party Liability Cover",
                    "Theft/Lost/Straying Cover"
                  ].map((coverage, idx) => (
                    <div key={idx} className="bg-white border border-border p-6 rounded-2xl flex items-start gap-4 hover:border-[#673CDD] transition-colors shadow-sm">
                      <ShieldCheck className="w-6 h-6 text-[#FBCE04] shrink-0" />
                      <span className="font-semibold text-lg">{coverage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features & Vet Care Image */}
        <section className="py-20 md:py-32 container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
                Key Features
              </h2>
              <ul className="space-y-4">
                {[
                  "Annual/ Short Term/ Long Term Policy Period options.",
                  "30-day Survival Period in Case of Terminal Diseases Cover.",
                  "Option to use RFID tagging for your Dog.",
                  "Provides reward to the person who assisted in successfully tracing out of lost or stolen pet.",
                  "Covers Surgery expenses and Hospitalization costs for the treatment of the Dogs.",
                  "Covers Third Party Liability of the pet owner with Sum Insured options up to INR 15,00,000.",
                  "Covers failure of vaccinations as well. No mandatory Section, You can choose any cover.",
                  "Covers advertising cost in case of Theft/stealing of the insured Dog.",
                  "Cover Available on Individual and Group Basis."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#673CDD] shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/dog-insurance/apply">
                <ButtonRotate text="GET STARTED NOW • " />
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/dog_vet_care.png" 
                alt="Dog at the Vet" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-20 md:py-32 bg-[#673CDD]/5 border-y border-[#673CDD]/10">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">Eligibility Criteria</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Coverage can be provided for domesticated dogs that are at least 90 days old. Dog health insurance is essential for ensuring the well-being of your furry friends, with Bima company covering the best pup insurance plans tailored to your needs.
              </p>
              <div className="inline-flex items-center gap-2 mt-4 text-[#673CDD] font-semibold bg-white px-6 py-3 rounded-full shadow-sm">
                <Info className="w-5 h-5" />
                Breeds Covered: Indigenous Origin, Cross-breeds, and Exotic breeds
              </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-3xl shadow-xl border border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#673CDD] text-white">
                    <th className="p-6 font-heading text-lg rounded-tl-3xl">Type</th>
                    <th className="p-6 font-heading text-lg">Breed Type</th>
                    <th className="p-6 font-heading text-lg">Entry Age</th>
                    <th className="p-6 font-heading text-lg rounded-tr-3xl">Exit Age</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-semibold" rowSpan={4}>Dogs</td>
                    <td className="p-6">Small</td>
                    <td className="p-6">3 Months - 7 Years</td>
                    <td className="p-6 font-semibold text-[#673CDD]">10 Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-6">Medium</td>
                    <td className="p-6">3 Months - 7 Years</td>
                    <td className="p-6 font-semibold text-[#673CDD]">10 Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-6">Large</td>
                    <td className="p-6">3 Months - 4 Years</td>
                    <td className="p-6 font-semibold text-[#673CDD]">6 Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-6">Giant</td>
                    <td className="p-6">3 Months - 4 Years</td>
                    <td className="p-6 font-semibold text-[#673CDD]">6 Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-20 md:py-32 container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Policy Issuance Documents */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-[#FBCE04]/20 rounded-2xl flex items-center justify-center mb-8">
                <FileText className="w-8 h-8 text-[#FBCE04]" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-6">Documents Required: <br/><span className="text-[#673CDD]">Policy Issuance</span></h3>
              <ul className="space-y-4">
                {[
                  "Duly filled Proposal Form.",
                  "Video of the dog walking and Color Photos from all sides (With newspaper of the Proposal date) or Color Photo of the RFID tag.",
                  "Diagnostics Test Results (if PID cover opted).",
                  "Description/details uniquely identifying the pet.",
                  "Self-declaration on vaccinations & insurable interest.",
                  "Purchase Proof (if SI above max price matrix).",
                  "Pedigree Certificate (if pedigree lineage selected)."
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                    <span className="text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic border-t pt-4">Note: Based on the type of dog covered, the Company at its discretion may relax certain documentation requirements.</p>
            </div>

            {/* Claim Documents */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-[#673CDD]/10 rounded-2xl flex items-center justify-center mb-8">
                <Stethoscope className="w-8 h-8 text-[#673CDD]" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-6">Documents Required: <br/><span className="text-[#673CDD]">At Time of Claim</span></h3>
              <ul className="space-y-4">
                {[
                  "Duly completed claim form & Vaccination Certificates.",
                  "Death Certificate & colored photographs of deceased dog (Mortality Benefit).",
                  "Vet Medical Papers, Hospital Bills, and Diagnostics Reports.",
                  "Copy of General Diary Entry / FIR / Court Orders (Theft/Liability).",
                  "Copy of advertisement (Theft/Lost/Straying Cover)."
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                    <span className="text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-slate-50 rounded-xl space-y-3 border border-border">
                <p className="text-sm"><strong>Alteration of risk:</strong> No change or alteration of the risk in this policy shall be valid and this policy shall cease in case of any alteration.</p>
                <p className="text-sm"><strong>Territorial Limits:</strong> Restricted to Claims occurring in India, according to Indian Law, payable in Indian Rupees only.</p>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <Link href="/dog-insurance/apply">
              <ButtonRotate text="GET STARTED NOW • " />
            </Link>
          </div>
        </section>

      </main>

      {/* Cinematic Footer */}
      <CinematicFooter />
    </div>
  );
}
