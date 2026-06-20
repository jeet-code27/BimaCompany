"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Headphones, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Smartphone,
    title: "100% Digital & Paperless",
    description: "No more printing, signing, or mailing. Everything from getting a quote to filing a claim is handled entirely on your phone in just a few taps.",
    colSpan: "md:col-span-2",
    bgClass: "bg-[#673CDD]/5 border-[#673CDD]/20",
    iconClass: "text-[#673CDD] bg-[#673CDD]/10"
  },
  {
    icon: Clock,
    title: "Lightning Fast Claims",
    description: "We process most claims in under 2 hours, meaning you get paid when you need it most.",
    colSpan: "md:col-span-1",
    bgClass: "bg-accent/40 border-border/50",
    iconClass: "text-foreground bg-background border shadow-sm"
  },
  {
    icon: ShieldCheck,
    title: "Zero Hidden Fees",
    description: "What you see is exactly what you pay. We pride ourselves on absolute transparency in all our policies.",
    colSpan: "md:col-span-1",
    bgClass: "bg-accent/40 border-border/50",
    iconClass: "text-foreground bg-background border shadow-sm"
  },
  {
    icon: Headphones,
    title: "24/7 Human Support",
    description: "No endless robot menus or holding music. Connect with a real, empathetic human expert anytime, day or night.",
    colSpan: "md:col-span-2",
    bgClass: "bg-zinc-900 border-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-200", 
    iconClass: "text-zinc-900 bg-white dark:bg-zinc-900 dark:text-white"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#673CDD]/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-accent/50 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h5 className="text-sm uppercase tracking-widest text-[#673CDD] font-bold mb-3">Our Advantage</h5>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                   Why choose <span className="text-[#673CDD]">Bima Company?</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                   We built the insurance company we actually wanted to use. Fair, fast, transparent, and completely focused on you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                        className={cn(
                            "rounded-[2rem] p-8 sm:p-10 border flex flex-col justify-between items-start gap-12 transition-transform hover:scale-[1.02] duration-300",
                            feature.colSpan,
                            feature.bgClass
                        )}
                    >
                        <div className={cn("p-4 rounded-2xl", feature.iconClass)}>
                            <feature.icon className="w-8 h-8" strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className={cn(
                                "text-2xl sm:text-3xl font-bold mb-4",
                                feature.bgClass.includes('zinc-900') ? 'text-white dark:text-zinc-900' : 'text-foreground'
                            )}>{feature.title}</h3>
                            <p className={cn(
                                "text-lg leading-relaxed",
                                feature.bgClass.includes('zinc-900') ? 'text-zinc-400 dark:text-zinc-600' : 'text-muted-foreground'
                            )}>{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
