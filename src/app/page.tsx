import { Header } from "@/components/ui/header";
import { InsuranceHero, InsuranceService } from "@/components/ui/insurance-hero";
import { HowItWorks } from "@/components/ui/how-it-works";
import { WhyChooseUs } from "@/components/ui/why-choose-us";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { CinematicFooter } from "@/components/ui/motion-footer";

// TODO: swap href "#" for the real Bima Company URLs once the site is wired up
const services: InsuranceService[] = [
  { name: "Pet Insurance", href: "/pet-insurance", imageSrc: "/images/pet-insurance.png" },
  { name: "Wedding / Event Insurance", href: "#", imageSrc: "/images/wedding-insurance.png" },
  { name: "Cyber Insurance", href: "/cyber-insurance", imageSrc: "/images/cyber-insurance.png" },
  { name: "Personal Liability Doctor", href: "/doctors-indemnity", imageSrc: "/images/personal-liablity.png" },
  { name: "Home / Renters Insurance", href: "/home-insurance", imageSrc: "/images/home-insurance.png" },
  { name: "Corporate Liability", href: "#", imageSrc: "/images/corporate-liablity.png" },
  { name: "Auto Insurance", href: "/auto-insurance", imageSrc: "/images/auto-insurance.png" },
  { name: "Travel Insurance", href: "/travel-insurance", imageSrc: "/images/travel-insurance.png" },
];

export default function Home() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Header />
        <InsuranceHero 
          services={services}
          imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <HowItWorks />
        <WhyChooseUs />
        <StaggerTestimonials />
      </main>

      <CinematicFooter />
      
    </div>
  );
}
