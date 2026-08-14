"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';

/* ─────────────────────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

/* ─────────────────────────────────────────────────────────────
   CategoryLabel — preserves existing design language
───────────────────────────────────────────────────────────── */
function CategoryLabel({ children }) {
  return (
    <span className="
      absolute bottom-5 left-5
      bg-white/85 backdrop-blur-sm
      text-brand-deep text-xs font-semibold tracking-[0.15em] uppercase
      px-3.5 py-1.5 rounded-full
      shadow-sm
      pointer-events-none select-none
      z-10
    ">
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   PhotoCard — individual editorial image tile
───────────────────────────────────────────────────────────── */
function PhotoCard({ src, alt, label, objectPosition = 'center', delay = 0, className = '' }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className={`relative overflow-hidden rounded-[22px] group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
        quality={90}
        className="
          object-cover
          transition-transform duration-[520ms] ease-out
          group-hover:scale-[1.03]
        "
        style={{ objectPosition }}
      />
      {/* Subtle vignette at the bottom for label legibility only */}
      <div className="
        absolute inset-x-0 bottom-0 h-28
        bg-gradient-to-t from-black/25 to-transparent
        rounded-b-[22px]
        pointer-events-none
      " />
      <CategoryLabel>{label}</CategoryLabel>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   BabyHighlight — Editorial gallery section
───────────────────────────────────────────────────────────── */
export function BabyHighlight() {
  return (
    <section
      className="py-24 lg:py-32 bg-brand-peach/20"
      aria-label="Baby and Kids Photography Gallery"
    >
      <div className="editorial-container">

        {/* ── Section heading (centered, unchanged alignment) ── */}
        <SectionHeading
          title="Every Smile. Every Little Moment."
          eyebrow="Baby & Kids"
          subtitle="From tiny first smiles to big little personalities, we turn every stage of childhood into something worth remembering."
        />

        {/* ── Editorial Gallery Grid ── */}
        {/*
          Desktop composition (12-col grid):
          ┌──────────────────────┬──────────────────────────────┐
          │  NEWBORN             │  AIRPLANE (dominant)         │
          │  col 1–5, tall       │  col 6–12, spans both rows  │
          │  aspect-[3/4]        │  aspect-[4/3] on left col    │
          ├──────────────────────┤                              │
          │  CAKE SMASH          │                              │
          │  col 1–5             │                              │
          │  aspect-[4/3]        │                              │
          └──────────────────────┴──────────────────────────────┘

          Row-2 right column:
          ├──────────────────────┬──────────────────────────────┤
          │  (empty / offset)    │  FAMILY                      │
          │                      │  col 8–12                    │
          └──────────────────────┴──────────────────────────────┘

          Actual implementation uses CSS grid with explicit row heights
          via `grid-rows` and `row-span` to achieve the asymmetric rhythm.
        */}

        {/* DESKTOP grid — hidden on mobile */}
        {/*
          Row heights: 280px at md, 320px at lg — gives airplane 560/640px tall (dominant).
          Newborn and Cake Smash each fill one row at 280–320px.
        */}
        <div
          className="hidden md:grid md:grid-cols-12 gap-5 lg:gap-6"
          style={{ gridTemplateRows: 'clamp(260px, 25vw, 340px) clamp(260px, 25vw, 340px)' }}
        >
          {/* 1 — Newborn: left-top, portrait treatment */}
          <PhotoCard
            src="/images/newborn/newborn-highlight-1.jpg"
            alt="Newborn baby smiling in a red swaddle with flowers at Clickaboo Baby Studio"
            label="Newborn"
            objectPosition="center 25%"
            delay={0.05}
            className="md:col-span-5 md:row-span-1"
          />

          {/* 2 — Airplane (DOMINANT): right column, spans both rows — 2× the height */}
          <PhotoCard
            src="/images/baby/baby-highlight-1.jpg"
            alt="Baby enjoying a creative airplane-themed photoshoot at Clickaboo Baby Studio"
            label="Milestones"
            objectPosition="center 30%"
            delay={0}
            className="md:col-span-7 md:row-span-2"
          />

          {/* 3 — Cake Smash: left-bottom */}
          <PhotoCard
            src="/images/birthday/birthday-highlight-1.jpg"
            alt="Baby enjoying a playful cake-smash photoshoot at Clickaboo Baby Studio"
            label="Cake Smash"
            objectPosition="center 15%"
            delay={0.1}
            className="md:col-span-5 md:row-span-1"
          />
        </div>

        {/* Family photo — sits below the 2-row grid on desktop, right-aligned */}
        <div className="hidden md:grid md:grid-cols-12 gap-5 lg:gap-6 mt-5 lg:mt-6">
          {/* Spacer */}
          <div className="md:col-span-3" />
          {/* Family: medium landscape, offset right for editorial rhythm */}
          <PhotoCard
            src="/images/family/family-highlight-1.jpg"
            alt="Parents sharing a joyful moment with their baby at Clickaboo Baby Studio"
            label="Family"
            objectPosition="center 20%"
            delay={0.15}
            className="md:col-span-9 aspect-[21/9]"
          />
        </div>

        {/* ── MOBILE layout — single column, full-width ── */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* 1 — Newborn */}
          <PhotoCard
            src="/images/newborn/newborn-highlight-1.jpg"
            alt="Newborn baby smiling in a red swaddle with flowers at Clickaboo Baby Studio"
            label="Newborn"
            objectPosition="center 25%"
            delay={0}
            className="aspect-[4/5]"
          />
          {/* 2 — Airplane (dominant) */}
          <PhotoCard
            src="/images/baby/baby-highlight-1.jpg"
            alt="Baby enjoying a creative airplane-themed photoshoot at Clickaboo Baby Studio"
            label="Milestones"
            objectPosition="center 30%"
            delay={0.05}
            className="aspect-[16/10]"
          />
          {/* 3 & 4 — Cake Smash + Family side by side */}
          <div className="grid grid-cols-2 gap-4">
            <PhotoCard
              src="/images/birthday/birthday-highlight-1.jpg"
              alt="Baby enjoying a playful cake-smash photoshoot at Clickaboo Baby Studio"
              label="Cake Smash"
              objectPosition="center 15%"
              delay={0.1}
              className="aspect-[3/4]"
            />
            <PhotoCard
              src="/images/family/family-highlight-1.jpg"
              alt="Parents sharing a joyful moment with their baby at Clickaboo Baby Studio"
              label="Family"
              objectPosition="center 20%"
              delay={0.12}
              className="aspect-[3/4]"
            />
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-16 lg:mt-20 text-center"
        >
          <Button asChild size="lg" className="group/cta">
            <Link href="/baby-photography">
              Explore Baby Photography
              <span
                aria-hidden="true"
                className="ml-2 inline-block transition-transform duration-300 group-hover/cta:translate-x-1"
              >
                →
              </span>
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
