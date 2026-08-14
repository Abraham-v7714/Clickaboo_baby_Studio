"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';

export function MaternityHighlight() {
  return (
    <section className="py-20 lg:py-28">
      <div className="editorial-container">
        <SectionHeading 
          title="Beautifully Expecting"
          subtitle="Celebrate the beauty, anticipation and connection of becoming a parent."
          eyebrow="Maternity"
        />

        <div className="flex flex-col md:grid md:grid-cols-12 gap-5 lg:gap-6 mt-10 md:mt-14 md:h-[640px]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 relative rounded-2xl overflow-hidden group aspect-[4/5] md:aspect-auto"
          >
            <Image
              src="/images/maternity/SoloMaternity.jpg"
              alt="Solo maternity portrait — elegant studio photography at Clickaboo"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

          <div className="md:col-span-5 flex flex-col md:grid md:grid-rows-2 gap-5 lg:gap-6 md:h-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden group aspect-[4/3] md:aspect-auto md:h-full"
            >
              <Image
                src="/images/maternity/CoupleMaternity.jpg"
                alt="Couple maternity photography at Clickaboo Baby Studio"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-mist/40 rounded-2xl p-8 lg:p-10 flex flex-col justify-center items-start border border-brand-deep/5 md:h-full"
            >
              <h3 className="text-xl lg:text-2xl font-serif text-brand-deep mb-3">
                The start of your greatest adventure.
              </h3>
              <p className="text-brand-deep/70 mb-6 text-sm leading-relaxed">
                From elegant studio portraits to natural outdoor sessions, we create timeless memories of your journey to parenthood.
              </p>
              <Button asChild variant="outline">
                <Link href="#maternity">Explore Maternity Photography</Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
