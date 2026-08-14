"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';

// Curated gallery of real Clickaboo images shown as Instagram-style grid
const instagramPosts = [
  { id: 1, image: "/images/gallery/MaternityStudioPortrait.jpg", alt: "Maternity studio portrait by Clickaboo Baby Studio" },
  { id: 2, image: "/images/gallery/NewBornBabySleeping.jpg", alt: "Newborn baby sleeping peacefully — Clickaboo" },
  { id: 3, image: "/images/gallery/HappyBabySmiling.jpg", alt: "Happy baby smiling — Clickaboo milestone session" },
  { id: 4, image: "/images/gallery/FirstBirthdayCakeSmash.jpg", alt: "First birthday cake smash — Clickaboo" },
  { id: 5, image: "/images/gallery/FamilyPhotoshoot.jpg", alt: "Family photoshoot — Clickaboo Baby Studio" },
  { id: 6, image: "/images/gallery/BabyMilestonePhotoshoot.jpg", alt: "Baby milestone session — Clickaboo" },
];

export function InstagramSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="editorial-container">
        <SectionHeading 
          title="More Little Moments" 
          eyebrow="On Instagram"
          subtitle="@clickaboo_baby_studio"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-10">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/clickaboo_baby_studio"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative aspect-square rounded-xl overflow-hidden group block"
              aria-label={`View ${post.alt} on Instagram`}
            >
              <Image 
                src={post.image} 
                alt={post.alt}
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/25 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <a href="https://instagram.com/clickaboo_baby_studio" target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
