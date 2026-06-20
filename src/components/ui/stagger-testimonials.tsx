"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "My favorite insurance provider in the market. I got my claim settled 5x faster with Bima Company.",
    by: "Rahul, Small Business Owner",
    imgSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 1,
    testimonial: "I'm confident my family's future is safe with Bima Company. I couldn't say that about other providers.",
    by: "Amit, Father of two",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 2,
    testimonial: "I know it's cliché, but we were lost with complex policies before we found Bima. Can't thank you guys enough!",
    by: "Priya, Freelance Designer",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "Bima Company's plans make planning for the unexpected seamless. Can't recommend them enough!",
    by: "Neha, Financial Advisor",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars for their 24/7 support, I'd give 12.",
    by: "Vikram, Software Engineer",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 5,
    testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! The paperless process saved me hours of headache.",
    by: "Siddharth, Startup Founder",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing to switch, but now that we're on Bima Company, we're never going back.",
    by: "Anjali, Marketing Director",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 7,
    testimonial: "I would be lost without Bima's transparent coverage details. Zero hidden fees is a game changer.",
    by: "Karan, Real Estate Agent",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 8,
    testimonial: "The best pet insurance out there. They covered my dog's surgery with absolutely zero fuss.",
    by: "Rohit, Pet Parent",
    imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 9,
    testimonial: "I switched 2 years ago for my auto insurance and never looked back. Incredible rates.",
    by: "Manish, Daily Commuter",
    imgSrc: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?w=150&h=150&fit=crop&crop=face"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out shadow-lg",
        isCenter 
          ? "z-10 bg-[#673CDD] text-white border-[#673CDD]" 
          : "z-0 bg-card text-card-foreground border-border hover:border-[#673CDD]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(103, 60, 221, 0.2)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-[#5a34c2]" : "bg-border"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-6 h-16 w-16 rounded-full border-2 border-background object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px rgba(0,0,0,0.1)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium tracking-tight",
        isCenter ? "text-white" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic font-medium",
        isCenter ? "text-white/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-20">
        <h5 className="text-sm uppercase tracking-widest text-[#673CDD] font-bold mb-3">Happy Customers</h5>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
           Don't just take <span className="text-[#673CDD]">our word for it</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           Join thousands of policyholders who sleep better at night knowing Bima Company has their back.
        </p>
      </div>

        <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
        
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-full shadow-md",
              "bg-background border border-border hover:bg-[#673CDD] hover:text-white text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-full shadow-md",
              "bg-background border border-border hover:bg-[#673CDD] hover:text-white text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
