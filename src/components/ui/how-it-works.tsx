import React from "react";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Get an Instant Quote",
    description:
      "Start by telling us a little bit about what you need to protect. Whether it's your pet, your home, or your upcoming vacation, our smart system will generate a highly accurate quote in seconds—no tedious forms required.",
  },
  {
    id: "process-2",
    title: "Customize Your Coverage",
    description:
      "One size does not fit all. Once you have your baseline quote, you can easily adjust deductibles, coverage limits, and add-ons. We make the fine print completely transparent so you know exactly what you are paying for.",
  },
  {
    id: "process-3",
    title: "Fast Approval & Checkout",
    description:
      "Forget about waiting days for an underwriter to review your file. Our advanced AI-driven platform processes your application instantly. Pay securely online and get your policy documents delivered straight to your inbox.",
  },
  {
    id: "process-4",
    title: "Stay Protected 24/7",
    description:
      "You're fully covered! Access your digital insurance cards, file claims directly from your phone in under 3 minutes, and chat with our 24/7 support team whenever you need assistance. Real peace of mind, all the time.",
  },
];

export const HowItWorks = () => {
  return (
    <div className="w-full min-h-svh place-content-center bg-background px-6 text-foreground xl:px-12 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:gap-12 xl:gap-24">
        <div className="left-0 top-0 md:sticky md:h-svh md:py-24">
          <h5 className="text-sm uppercase tracking-widest text-primary font-bold">Simple Process</h5>
          <h2 className="mb-6 mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            How getting insured{" "}
            <span className="text-[#673CDD]">actually works</span>
          </h2>
          <p className="max-w-prose text-lg text-muted-foreground mt-6">
            We've stripped away the complexity of traditional insurance. 
            No endless paperwork, no confusing jargon, and no waiting weeks for approval. 
            Just four simple steps between you and total peace of mind.
          </p>
        </div>
        
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12 md:py-24">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 2}
              className="rounded-3xl border border-border/50 p-8 sm:p-10 shadow-xl bg-card text-card-foreground backdrop-blur-md"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/50 pb-6 mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {phase.title}
                </h3>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#673CDD]/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {phase.description}
              </p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  );
};
