"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Home, SmilePlus, Sparkles, Camera } from 'lucide-react';

const pillars = [
  {
    icon: <Home className="w-8 h-8" />,
    number: "01",
    title: "Cozy Studio",
    description: "A comfortable, baby-safe environment designed to make you and your little one feel completely at home."
  },
  {
    icon: <SmilePlus className="w-8 h-8" />,
    number: "02",
    title: "Friendly Team",
    description: "Experienced, patient, and absolutely wonderful with children. We know how to bring out those natural smiles."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    number: "03",
    title: "Creative Concepts",
    description: "From traditional to whimsical, we design elaborate, imaginative sets tailored to your preferences."
  },
  {
    icon: <Camera className="w-8 h-8" />,
    number: "04",
    title: "Beautifully Captured",
    description: "High-end equipment and professional editing ensure your memories are preserved in the best possible quality."
  }
];

export function WhyClickaboo() {
  return (
    <section className="py-16 lg:py-20">
      <div className="editorial-container">
        <SectionHeading 
          title="Why Families Choose Clickaboo" 
          eyebrow="The Clickaboo Difference"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-mist flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <span className="text-sm font-serif text-brand-deep/30 mb-2">{pillar.number}</span>
              <h3 className="text-xl font-serif text-brand-deep mb-3">{pillar.title}</h3>
              <p className="text-brand-deep/70 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
