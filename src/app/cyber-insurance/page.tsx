import { Header } from "@/components/ui/header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ButtonRotate } from "@/components/ui/button-rotate";
import { 
  ShieldAlert, 
  LockKeyhole, 
  Database, 
  ServerCrash, 
  Briefcase, 
  Scale, 
  TrendingUp, 
  FileSearch,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Hospital,
  Activity,
  Users
} from "lucide-react";
import Image from "next/image";

export default function CyberInsurancePage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans text-foreground overflow-x-hidden">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/cyber_insurance_hero.png" 
              alt="Cyber Insurance Security Shield" 
              fill
              sizes="100vw"
              className="object-cover opacity-30 mix-blend-screen"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto pt-24 pb-12">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-4 border border-blue-500/30 shadow-sm backdrop-blur-md">
                <LockKeyhole className="w-4 h-4" />
                Enterprise Cyber Protection
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight leading-[1.1]">
                What Would Happen If Your Business Faced a <span className="text-blue-500">Cyber Attack?</span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <ButtonRotate text="CHECK OUR PRICES • " />
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Cyber Security Insurance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                What is Cyber Insurance?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
                In today’s digital age, the importance of securing sensitive information and safeguarding against cyber threats has become paramount. Cyber security insurance is a crucial aspect of this security strategy. Cyber security insurance is a specialized policy designed to protect businesses from internet-based risks and threats. It provides coverage against losses arising from cyber-attacks, data breaches, and other cyber incidents.
              </p>
            </div>
          </div>
        </section>

        {/* The Growing Cyber Threat Landscape */}
        <section className="py-20 md:py-32 bg-slate-50 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                  The Growing Cyber <span className="text-blue-600">Threat Landscape</span> in India
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Increasing Cyber Attacks</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      India has seen a significant rise in cyber-attacks in recent years. From ransomware to phishing attacks, cyber threats have become more sophisticated and prevalent. The rapid digitization of businesses and the increasing reliance on online platforms have made companies more vulnerable to cyber risks.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Statistics Highlighting the Severity</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex gap-4">
                        <Database className="w-8 h-8 text-blue-600 shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">Data Breaches</h4>
                          <p className="text-muted-foreground text-sm text-justify">According to the Indian Computer Emergency Response Team (CERT-In), India reported over 1.16 million cyber security incidents in 2020 alone.</p>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex gap-4">
                        <TrendingUp className="w-8 h-8 text-blue-600 shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">Financial Losses</h4>
                          <p className="text-muted-foreground text-sm text-justify">A study by KPMG revealed that Indian companies lost an average of ₹12.8 crores due to cyber incidents in 2020.</p>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex gap-4">
                        <Building2 className="w-8 h-8 text-blue-600 shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">Industry Impact</h4>
                          <p className="text-muted-foreground text-sm text-justify">Sectors such as banking, finance, and healthcare are particularly targeted due to the sensitive nature of the data they handle.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[800px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl sticky top-24 hidden lg:block">
                <Image 
                  src="/images/cyber_threat_india.png" 
                  alt="Cyber Threats in India" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Coverage Areas */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Key <span className="text-blue-600">Coverage Areas</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-border hover:border-blue-500/50 hover:shadow-xl transition-all">
                <ShieldAlert className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Data Breach Response</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">Costs related to notifying affected parties, legal fees, and public relations efforts.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-border hover:border-blue-500/50 hover:shadow-xl transition-all">
                <AlertTriangle className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Cyber Extortion</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">Coverage for ransom payments and costs associated with dealing with extortion threats.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-border hover:border-blue-500/50 hover:shadow-xl transition-all">
                <ServerCrash className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Business Interruption</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">Compensation for loss of income due to a cyber incident disrupting business operations.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-border hover:border-blue-500/50 hover:shadow-xl transition-all">
                <Scale className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Legal and Regulatory Fees</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">Coverage for legal expenses and fines associated with data protection and privacy violations.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-border hover:border-blue-500/50 hover:shadow-xl transition-all">
                <Briefcase className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Crisis Management</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">Assistance with managing the aftermath of a cyber incident, including customer communication and reputation management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cyber Insurance is Essential */}
        <section className="py-20 md:py-32 bg-[#0a0f1c] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              <div className="space-y-10">
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                  Why Cyber Insurance is <span className="text-blue-500">Essential</span> for Indian Companies
                </h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                      <TrendingUp className="w-6 h-6" /> Financial Protection
                    </h3>
                    <p className="text-white/80 leading-relaxed text-justify">
                      The financial impact of a cyber-attack can be devastating, especially for small and medium-sized enterprises (SMEs). Cyber insurance provides a safety net, ensuring that businesses can recover from incidents without facing crippling financial losses.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                      <Scale className="w-6 h-6" /> Legal Compliance
                    </h3>
                    <p className="text-white/80 leading-relaxed text-justify">
                      With the introduction of stringent data protection regulations like the Personal Data Protection Bill in India, companies are now more accountable for the data they handle. Cyber insurance helps businesses comply with these regulations by covering legal expenses and penalties.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                      <Users className="w-6 h-6" /> Reputation Management
                    </h3>
                    <p className="text-white/80 leading-relaxed text-justify">
                      A cyber incident can severely damage a company’s reputation. Cyber insurance policies often include crisis management services to help businesses mitigate the reputational damage and maintain customer trust.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Process */}
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-2xl">
                <h2 className="text-3xl font-bold font-heading mb-10 text-white">The Process of Obtaining Cyber Insurance</h2>
                <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] text-blue-400 font-bold">1</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-white/10 bg-black/40">
                      <h4 className="font-bold text-xl mb-3 flex items-center gap-2 text-white"><FileSearch className="w-5 h-5 text-blue-400"/> Risk Assessment</h4>
                      <p className="text-white/70 text-justify">The first step in obtaining cyber insurance is conducting a thorough risk assessment. This involves evaluating the company’s current cyber security measures, identifying vulnerabilities, and estimating potential risks.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] text-blue-400 font-bold">2</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-white/10 bg-black/40">
                      <h4 className="font-bold text-xl mb-3 text-white">Choosing the Right Policy</h4>
                      <p className="text-white/70 text-justify">Not all cyber liability coverage are the same. Businesses need to choose a policy that aligns with their specific needs. Factors to consider include the nature of the business, the type of data handled, and the level of cyber risk exposure.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] text-blue-400 font-bold">3</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-white/10 bg-black/40">
                      <h4 className="font-bold text-xl mb-3 text-white">Implementation and Continuous Review</h4>
                      <p className="text-white/70 text-justify">Once a policy is chosen, it should be implemented alongside robust cyber security measures. Continuous review and updates to both the policy and security measures are essential to stay protected against evolving cyber threats.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 md:py-32 bg-slate-50 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Case Studies: <span className="text-blue-600">Impact of Cyber Insurance</span> in India
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
              <div className="bg-white border border-border p-8 md:p-10 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600"><Building2 className="w-8 h-8"/></div>
                  <h3 className="text-2xl font-bold">Case Study 1: Financial Institution</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-justify text-lg">
                  A leading financial institution in India faced a ransomware attack that encrypted critical data and demanded a hefty ransom. The cyber insurance policy covered the ransom payment, legal fees, and the cost of restoring the affected systems, allowing the institution to resume operations with minimal financial loss.
                </p>
              </div>

              <div className="bg-white border border-border p-8 md:p-10 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600"><Hospital className="w-8 h-8"/></div>
                  <h3 className="text-2xl font-bold">Case Study 2: Healthcare Provider</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-justify text-lg">
                  A healthcare provider experienced a data breach that exposed sensitive patient information. The cyber insurance policy provided coverage for the costs of notifying affected patients, legal defense, and crisis management services to address public concerns and maintain trust.
                </p>
              </div>
            </div>

            <div className="relative h-[600px] w-full max-w-6xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/cyber_case_study.png" 
                alt="Cyber Security SOC in India" 
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end p-8 md:p-16">
                <div className="grid md:grid-cols-3 gap-8 text-white w-full">
                  <div className="col-span-1">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Importance of Cyber Insurance: Increasing Adoption</h3>
                    <p className="text-white/80 leading-relaxed text-justify">
                      As awareness about cyber risks grows, more Indian companies are expected to invest in cyber insurance. This trend is particularly strong among sectors that handle sensitive data, such as finance, healthcare, and e-commerce.
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Evolving Policies</h3>
                    <p className="text-white/80 leading-relaxed text-justify">
                      Insurance providers are continually updating their policies to address emerging cyber threats. This includes coverage for new types of attacks and incorporating advanced risk management services.
                    </p>
                  </div>
                  <div className="col-span-1 border-l border-white/20 pl-8">
                    <h3 className="text-2xl font-bold mb-4 text-white">Parting Thoughts</h3>
                    <p className="text-white/90 leading-relaxed text-justify">
                      In an era of omnipresent cyber threats, cyber insurance has become essential for a company’s risk management strategy. For businesses in India, it is a necessary investment for financial stability, legal compliance, and reputation management amid growing cyber risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <CinematicFooter />
    </div>
  );
}
