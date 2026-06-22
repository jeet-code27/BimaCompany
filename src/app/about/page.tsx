import { Header } from "@/components/ui/header";
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />
        
        {/* Animated Hero Section */}
        <EnhancedBackgroundPaths title="About Bima Company" />

        {/* About Content Section */}
        <section id="about-content" className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          
          <div className="space-y-16">
            {/* Introduction */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#673CDD] tracking-tight">
                Welcome to Bima Company!
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Founded in 2023, Bima company has grown to become a trusted source of information for all things insurance and quote insurance. Our passion is to educate, inform, and guide individuals through the often complex world of insurance, ensuring they make informed decisions that best suit their needs.
              </p>
            </div>

            {/* Image Placeholder replacing pexels reference */}
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80" 
                alt="Bima Company Team" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Mission & Values */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-[#673CDD]/5 p-8 md:p-12 rounded-3xl border border-[#673CDD]/10">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-4xl font-bold font-heading text-foreground">
                  Our Mission <span className="text-[#673CDD]">& Values</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Bima company, our mission is simple: to provide accurate, up-to-date, and comprehensive information about various insurance products. From travel insurance for international travel and wedding ceremony insurance to life and health insurance, we cover it all. Our team of dedicated writers and insurance professionals work tirelessly to bring you the latest trends, updates, and advice in the insurance industry.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#FBCE04]/20 rounded-full blur-3xl" />
                <h4 className="text-xl font-bold font-heading">Core Values</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#673CDD]" />
                    <span className="font-medium">Integrity & Transparency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#673CDD]" />
                    <span className="font-medium">Customer-First Approach</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#673CDD]" />
                    <span className="font-medium">Expert Knowledge</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#673CDD]" />
                    <span className="font-medium">Continuous Innovation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
                  Why choose Bima company?
                </h3>
                <p className="text-lg text-muted-foreground">The pillars that make us your trusted insurance partner.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-[#673CDD]/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-[#673CDD]">1</span>
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-4">Expertise</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team comprises industry professionals with years of experience in the insurance sector. They bring their in-depth knowledge to every article, ensuring you get expert advice every time.
                  </p>
                </div>
                
                {/* Feature 2 */}
                <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-[#FBCE04]/20 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-[#FBCE04]">2</span>
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-4">Diverse Coverage</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you’re a pet owner looking for the best pet insurance companies for your furry friend or a traveler seeking the ideal travel insurance, we’ve got you covered. Our wide range ensures there’s something for everyone.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-[#673CDD]/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-[#673CDD]">3</span>
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-4">Trust</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our readers trust us to provide unbiased, factual, and relevant information. We value this trust and are committed to maintaining the highest standards of integrity in our content.
                  </p>
                </div>
              </div>
            </div>

            {/* Join Community CTA */}
            <div className="text-center max-w-3xl mx-auto space-y-6 pt-12 border-t border-border">
              <h3 className="text-2xl md:text-4xl font-bold font-heading">
                Join Our Community
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We invite you to explore our blogs, share your thoughts in the comments, and become a part of our growing community. If you have any questions or need advice on a specific topic, don’t hesitate to reach out. We’re here to help!
              </p>
              <p className="text-lg font-medium text-[#673CDD]">
                Thank you for choosing Bima Company as your go-to source for insurance information. Together, we’ll navigate the world of insurance, ensuring you’re always informed and prepared.
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* Cinematic Footer matching the homepage */}
      <CinematicFooter />
    </div>
  );
}
