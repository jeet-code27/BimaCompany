import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctors Medical Indemnity Insurance",
  description: "Professional liability and medical malpractice insurance tailored specifically for medical practitioners and doctors in India. Ensure your career is protected.",
  keywords: ["doctors indemnity insurance", "medical malpractice insurance", "professional liability for doctors", "medical indemnity cover", "doctors liability insurance", "practitioner insurance"],
  alternates: {
    canonical: '/doctors-indemnity',
  },
};
import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ButtonRotate } from "@/components/ui/button-rotate";
import { 
  Stethoscope, 
  ShieldCheck, 
  AlertTriangle, 
  Scale, 
  HeartPulse, 
  CheckCircle2, 
  Ban, 
  ClipboardList, 
  FileText,
  BadgeAlert,
  Banknote
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorsIndemnityPage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#673CDD]/10 via-white to-[#FBCE04]/10">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/doctor_indemnity_hero.png" 
              alt="Professional Indemnity Insurance for Doctors" 
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
                <Stethoscope className="w-4 h-4" />
                Comprehensive Medical Coverage
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-foreground leading-[1.1]">
                Professional Indemnity <br/> <span className="text-[#673CDD]">For Doctors.</span>
              </h1>
              <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto space-y-4">
                <p>
                  A Professional Indemnity for Doctors and Medical Practitioners insurance plan offers comprehensive coverage. It protects you from various risks that you may encounter in your work. It includes financial support for legal expenses, and compensation for damages arising out of bodily Injury and/or death of any patient.
                </p>
                <p>
                  Doctors Professionals Indemnity is becoming a significant insurance policy, with the rise of court disputes brought by patients on the grounds of poor medical services that usually stem from negligence and errors. Though doctors and their associates don’t intend to cause any inconvenience to their patients, there can be some situations that are not even in their control.
                </p>
                <p>
                  To protect them from such severe consequences, like financial losses and loss of reputation as professionals, different insurance companies have taken the initiative to design professional indemnity insurance for doctors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Link href="/doctors-indemnity/apply">
                  <ButtonRotate text="GET A FREE QUOTE • " />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Professional Indemnity Insurance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                What is <span className="text-[#FBCE04]">Professional Indemnity?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 border border-border p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck className="w-32 h-32 text-[#673CDD]" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#673CDD]/10 text-[#673CDD] rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4">Professional Indemnity Insurance</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Professional Indemnity Insurance provides financial coverage to professionals offering services or consultations to their customers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Doctors, Architects, Designers, Chartered Accountants, etc. are some of the professionals who should purchase this insurance policy.
                  </p>
                </div>
              </div>

              <div className="bg-[#673CDD] text-white border border-[#673CDD] p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Stethoscope className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 text-[#FBCE04] rounded-2xl flex items-center justify-center mb-6">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-white">Individual Doctor’s PI</h3>
                  <p className="text-white/80 leading-relaxed">
                    Individual Doctor’s Professional Liability Insurance Protects physicians and professionals from liability associated with wrongful practices resulting in bodily injury and / or death of any patient caused by or alleged to have been caused by error, omission or negligence in professional service rendered or which should have been rendered by the insured doctors.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mt-12 bg-green-50 p-8 rounded-3xl border border-green-100">
                <h3 className="text-2xl font-bold font-heading mb-4 text-green-800">Benefits of Professional Indemnity Insurance</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="text-green-900">This insurance covers legal liabilities arising out of errors, omissions and negligence while providing any service that causes injury to the third party or damages their property.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="text-green-900">This insurance covers expenses incurred during legal proceedings including lawyer’s fees etc. However, this coverage is limited within the Indian Territory.</span>
                  </li>
                </ul>
            </div>
          </div>
        </section>

        {/* Importance */}
        <section className="py-20 md:py-32 bg-[#673CDD]/5 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                  Why is it <span className="text-[#673CDD]">Important?</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Individual Doctor’s Professional Indemnity is vital for several reasons:
                </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Protection Against Legal Claims", desc: "Doctors face risks of lawsuits from patients alleging negligence, misdiagnosis, or malpractice. PI insurance covers legal costs, settlements, and damages, safeguarding the doctor’s personal finances.", icon: Scale },
                { title: "Professional Reputation", desc: "Legal battles can damage a doctor’s reputation. PI insurance provides resources to defend against claims, helping maintain their professional standing.", icon: ShieldCheck },
                { title: "Compliance with Regulations", desc: "Many medical boards and institutions require doctors to have PI insurance as a condition of practice, ensuring they can handle potential legal claims.", icon: ClipboardList },
                { title: "Coverage for a Wide Range of Risks", desc: "PI insurance covers various risks, including administrative errors, breach of confidentiality, and other professional liabilities, making it a comprehensive safeguard.", icon: HeartPulse }
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="bg-white border border-border p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
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

        {/* What does it cover? */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                What does this <span className="text-[#FBCE04]">Policy Cover?</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-[#FBCE04]/20 text-[#FBCE04] rounded-xl flex items-center justify-center mb-6">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Losses arising due to unintentional omissions and errors</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    This Insurance safeguards you against the potential fallout from unintentional mistakes or oversights that may occur in your medical practice. Whether it’s a misdiagnosis, a procedural error, or an overlooked detail in patient care, the repercussions can be severe for both you and the patient. This is where Medical Professional Indemnity Insurance becomes essential. It provides crucial financial protection and legal support. By choosing the Best Doctor’s Professional Indemnity Insurance, you ensure that your career and reputation are defended with the highest level of care.
                  </p>
               </div>

               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-[#FBCE04]/20 text-[#FBCE04] rounded-xl flex items-center justify-center mb-6">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Cost of defending in court</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    A key benefit of Medical Professional Indemnity Insurance is its coverage of the costs involved in defending yourself in court. Whether you’re dealing with allegations of medical negligence or any other legal issue related to your professional responsibilities, having Professional Indemnity Insurance for Doctors ensures you’re not facing it alone. This insurance provides the financial support needed to secure top-notch legal representation and build a strong defense.
                  </p>
               </div>

               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-[#FBCE04]/20 text-[#FBCE04] rounded-xl flex items-center justify-center mb-6">
                    <Banknote className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Compensation for claims arising due to bodily injury or death</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Doctor’s Professional Indemnity Insurance provides vital protection against claims arising from bodily injury or death due to medical errors. Whether it’s a surgical mistake or a medication error, the consequences can be severe for everyone involved. Medical Professional Indemnity Insurance ensures that compensation awarded by the court is covered, alleviating significant stress. You are safeguarded from potentially devastating legal and financial repercussions.
                  </p>
               </div>
            </div>
            
            <div className="max-w-4xl mx-auto mt-12 bg-[#673CDD] p-8 rounded-3xl text-center border border-[#673CDD]/50 shadow-xl">
               <h3 className="text-2xl font-bold mb-4 text-[#FBCE04]">Quick Summary of Cover:</h3>
               <ul className="text-left max-w-2xl mx-auto space-y-3 mt-6">
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 mt-1 shrink-0" /> <span>Legal liability including defence costs (costs, fees, expenses) incurred while investigation.</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 mt-1 shrink-0" /> <span>Cost of representation.</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 mt-1 shrink-0" /> <span>Compensation for Claims arising out of bodily injury or death caused by error.</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 mt-1 shrink-0" /> <span>Omission</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 mt-1 shrink-0" /> <span>Negligence while rendering the professional services.</span></li>
               </ul>
            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                  What is <span className="text-red-500">Not Covered?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  The policy has certain exclusions. It will not pay for claims arising out of contractual liability, intentional non‐compliance of any statutory provision, loss of goodwill, slander, fines, penalties, libel, false arrest, defamation, mental injury etc.
                </p>
                <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                  <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2"><Ban className="w-6 h-6"/> General Exclusions:</h3>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                    {[
                      "Criminal acts",
                      "Acts committed under Influence of intoxicants / narcotics",
                      "Weight reduction",
                      "Cosmetic Plastic surgery",
                      "Third Party Public Liability",
                      "Clinical Research / Clinical Trials",
                      "In-vitro fertilization and wrongful life claims",
                      "Claims arising out of genetic injuries caused by X-Ray treatment/diagnosis or treatment with radioactive substances",
                      "HIV / Aids / Weight Loss",
                      "Non compliance with statutory provisions",
                      "Punitive and exemplary damages",
                      "Radioactivity",
                      "Blood Banks",
                      "Pure Financial Losses",
                      "Liability arising out of Pure Cosmesis procedures"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <Ban className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                        <span className="text-red-900 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Claims Rejection */}
              <div className="space-y-8">
                 <div className="bg-slate-50 border border-border p-8 rounded-[2.5rem]">
                  <h3 className="text-3xl font-bold font-heading mb-6 text-foreground flex items-center gap-3">
                    <BadgeAlert className="w-8 h-8 text-orange-500"/> When can a claim get rejected?
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Violation of any laws, rules and regulations",
                      "Performing services under influence of alcohol or toxic substances",
                      "Claims reported in current policy but arising out of procedures or treatments performed before retroactive date",
                      "Non-disclosure of any material facts like claims history",
                      "Proven intentional negligence"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                         <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                         <span className="font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purchase & Claims Process */}
        <section className="py-20 md:py-32 bg-[#673CDD]/5 relative">
          <div className="container mx-auto px-4 md:px-6 space-y-20">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                  Simple <span className="text-[#673CDD]">Processes</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                   <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">How to buy?</h3>
                   <p className="text-muted-foreground mb-6">Buying indemnity insurance for doctors is easy. You can purchase the policy online in a few easy steps.</p>
                   <ol className="space-y-4 relative border-l-2 border-[#673CDD]/20 ml-3">
                     <li className="pl-6 relative">
                       <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#673CDD]"></span>
                       <p className="font-semibold text-foreground">Step 1</p>
                       <p className="text-sm text-muted-foreground">Fill out the form on the web page, including your name, mobile number, and pincode. Click on ‘Proceed to Buy’</p>
                     </li>
                     <li className="pl-6 relative">
                       <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#673CDD]"></span>
                       <p className="font-semibold text-foreground">Step 2</p>
                       <p className="text-sm text-muted-foreground">Follow the subsequent steps as directed, make the payment, and you’re done</p>
                     </li>
                   </ol>
                   <p className="mt-6 text-sm font-medium text-green-700 bg-green-50 p-3 rounded-lg border border-green-100">
                     Buying the policy online is as easy as it gets. You can do so at your convenience 24X7.
                   </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                   <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">Claims Process</h3>
                   <div className="space-y-4">
                     <div className="flex flex-col gap-2 relative">
                        <div className="bg-slate-50 p-3 rounded-xl border border-border">
                           <span className="text-xs font-bold text-[#673CDD] uppercase tracking-wider">Claim Information</span>
                           <p className="text-sm font-medium">On mail</p>
                        </div>
                        <div className="w-0.5 h-4 bg-border mx-auto"></div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-border">
                           <span className="text-xs font-bold text-[#673CDD] uppercase tracking-wider">LOR Request</span>
                           <p className="text-sm font-medium">List of requirements to be share by the sales team</p>
                        </div>
                        <div className="w-0.5 h-4 bg-border mx-auto"></div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-border">
                           <span className="text-xs font-bold text-[#673CDD] uppercase tracking-wider">Submission of internal reports</span>
                           <p className="text-sm font-medium">To be submitted by insured</p>
                        </div>
                        <div className="w-0.5 h-4 bg-border mx-auto"></div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-border">
                           <span className="text-xs font-bold text-[#673CDD] uppercase tracking-wider">Investigation Reports</span>
                           <p className="text-sm font-medium">Final claim amount to be shared with final investigation report</p>
                        </div>
                        <div className="w-0.5 h-4 bg-border mx-auto"></div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-border">
                           <span className="text-xs font-bold text-[#673CDD] uppercase tracking-wider">Seeking Documents & Remittance</span>
                           <p className="text-sm font-medium">DV to be signed by insured & Payment of claim amount</p>
                        </div>
                     </div>
                   </div>
                </div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
           <div className="container mx-auto px-4 md:px-6">
             <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-4xl font-bold font-heading text-foreground">
                  Frequently Asked <span className="text-[#FBCE04]">Questions</span>
                </h2>
             </div>

             <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    q: "Is it a Legal Requirement to Have Professional Indemnity Insurance?",
                    a: "Although it’s not legally mandated, securing Doctor’s Professional Indemnity Insurance is highly advisable. As one of the Best Doctor’s Professional Indemnity Insurance options available, it’s an indispensable tool for managing risks and ensuring peace of mind. It provides you with a safety net in case of legal liabilities arising in your practice."
                  },
                  {
                    q: "What is the difference between public liability and professional indemnity insurance?",
                    a: "Both these Policies are totally different, Public liability policy are Premises Specific risk and cover third party bodily injury / Property damage claims arising out of accidents and/or incidents emanating from the insured premises, from their business Operations. However Professional Indemnity is not specific to risk location and will cover claim arising due to Error, omission or negligence in treatment given by medical practitioner which results in bodily injury or death of the patient. Public liability Policy will exclude claims pertaining to Professional negligence."
                  },
                  {
                    q: "What is professional negligence?",
                    a: "Error, omission or an un-intentional negligence by a medical practitioner during diagnosis or treatment of the patient, which results in bodily injury, illness, sickness, adversities or death of the patient."
                  },
                  {
                    q: "What is PI for doctor’s indemnity insurance?",
                    a: "Professional Indemnity for Medical Practitioner is an insurance policy which covers Doctors for legal fees incurred and damages paid (If awarded by the court) for claims or demands raised by third parties (patients or their kin) alleging professional negligence. This Policy will also cover Legal Liability arising against them because of their staff."
                  },
                  {
                    q: "How to opt for sum assured value?",
                    a: "Sum assured is referred to the limit of Indemnity. This limit is fixed per accident and per policy period which is called Any One Accident (AOA) limit and Any One Year (AOY) limit respectively and will be offered and recommended as Ratio 1:1 only. Sum insured is mostly dependent on factors related Doctor Specialisation and city /type of customer’s doctor is offering services to. Limit of Liability can be from INR 500,000 to INR 50,000,000. Insured need to select and finalise the sum insured he is willing to opt for."
                  },
                  {
                    q: "Who should take doctor professional indemnity policy?",
                    a: "Any qualified medical practitioner (such as Physician, Surgeon, Radiologist, Dentist, Anaesthetists, Gynaecologist, Paediatrician, etc.) who is rendering services to patients can consider to buy this policy."
                  },
                  {
                    q: "What is the premium for a doctor’s professional indemnity insurance?",
                    a: "The premium for a doctor’s professional indemnity insurance depends on various factors, including the sum insured, your specialty, the size of the clinical establishment, etc. Compare different policies and choose the one that best fits your needs."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-border hover:shadow-md transition-shadow">
                     <h4 className="font-bold text-lg mb-2 text-foreground flex gap-2">
                       <span className="text-[#673CDD]">Q.</span> {faq.q}
                     </h4>
                     <p className="text-muted-foreground leading-relaxed pl-6">
                       {faq.a}
                     </p>
                  </div>
                ))}
             </div>
           </div>
        </section>

      </main>

      <CinematicFooter />
    </div>
  );
}
