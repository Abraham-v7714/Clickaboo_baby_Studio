"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function BrandIntro() {
  const prefersReducedMotion = useReducedMotion();

  const imageVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
    },
  };

  return (
    <section
      className="bg-[#FCFAF7] py-20 md:py-24 lg:py-28 overflow-hidden"
      aria-labelledby="brand-intro-heading"
    >
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-12 lg:gap-16 xl:gap-20">

          {/* ── LEFT: Image (55% on desktop, 50% on tablet) ──── */}
          <motion.div
            className="w-full md:w-[50%] lg:w-[55%] flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={imageVariants}
          >
            {/*
             * Use a min-height + fill image so the image column stretches
             * naturally to match the text column height, avoiding dead space.
             * On mobile we enforce a 4:3 aspect ratio with aspect-ratio.
             */}
            <div
              className="relative w-full overflow-hidden rounded-3xl shadow-xl shadow-brand-deep/10"
              style={{ minHeight: '320px', aspectRatio: '4 / 3' }}
            >
              <Image
                src="/images/Happy_Place.jpg"
                alt="Parents sharing a joyful moment with their child at Clickaboo Baby Studio"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 720px"
                className="object-cover object-center"
                priority={false}
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Text content (45–50% on tablet/desktop) ── */}
          <motion.div
            className="w-full md:w-[50%] lg:w-[45%] flex flex-col gap-6 md:gap-7 md:max-w-none lg:max-w-[460px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={textVariants}
          >
            {/* Eyebrow label */}
            <span className="text-brand-blue tracking-[0.2em] uppercase text-xs font-semibold">
              Our Studio
            </span>

            {/* Heading */}
            <h2
              id="brand-intro-heading"
              className="font-serif text-brand-deep leading-[1.1]"
              style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)' }}
            >
              A Happy Place for Little Ones
            </h2>

            {/* Divider accent */}
            <div className="w-12 h-[2px] bg-brand-blue/50 rounded-full" />

            {/* Description */}
            <p className="text-brand-deep/75 text-[1.05rem] leading-[1.8]">
              A cozy studio, a friendly team and a whole lot of imagination —
              creating beautiful memories for little ones and the people who love them.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group gap-2"
              >
                <Link href="#experience">
                  Discover the Clickaboo Experience
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
