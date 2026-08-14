"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function BehindTheClick() {
  return (
    <section className="py-20 lg:py-28 bg-brand-deep text-brand-warm overflow-hidden">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square rounded-2xl overflow-hidden mt-10"
              >
                <Image
                  src="/images/gallery/BabyMilestonePhotoshoot.jpg"
                  alt="Baby milestone photography session at Clickaboo Baby Studio"
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <Image
                  src="/images/gallery/NewBornBabySleeping.jpg"
                  alt="Newborn photography — peaceful sleeping baby at Clickaboo"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-brand-warm/5 blur-3xl" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading 
              title="There's More Behind Every Smile" 
              eyebrow="Behind The Click"
              alignment="left"
              className="!text-brand-warm mb-6"
            />
            <p className="text-lg text-brand-warm/80 leading-relaxed max-w-lg">
              The final photograph may last forever, but the little moments behind it are part of the story too. From planning the perfect theme to getting that perfect giggle, we pour our hearts into creating a joyful experience.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
