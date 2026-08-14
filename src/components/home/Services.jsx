"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { services } from '@/data/services';

export function Services() {
  return (
    <section className="py-24 lg:py-32 bg-brand-mist/30">
      <div className="editorial-container">
        <SectionHeading 
          title="Moments Worth Capturing" 
          eyebrow="Our Expertise"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.link} className="group block relative h-full">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.alt || service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-deep/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif text-brand-deep mb-2">{service.title}</h3>
                    <p className="text-brand-deep/70 line-clamp-2">{service.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-brand-deep/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
