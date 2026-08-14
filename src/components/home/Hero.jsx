"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section id="home" className="relative h-[100svh] sm:h-[92vh] min-h-[540px] sm:min-h-[620px] max-h-[960px] w-full flex items-center overflow-hidden">

      {/* ── Background Image ─────────────────────────────── */}
      <div className="absolute inset-0 z-0 bg-[#E4D8CC]">
        <Image
          src="/images/hero/clickaboo-hero-family.png"
          alt="A loving Indian family with their baby photographed at Clickaboo Baby Studio in Coimbatore"
          fill
          priority
          sizes="100vw"
          /*
           * Desktop/tablet: anchor right so the family is always visible.
           * Mobile (<640 px): shift focal point slightly left to keep faces in frame.
           * We handle this via the responsive Tailwind class below.
           */
          className="object-cover object-right sm:object-right"
          style={{ objectPosition: 'right center' }}
        />

        {/*
         * Localized text-support scrim:
         * — A left-to-right gradient that only covers ~60% of the image.
         * — Keeps the right side (family) fully bright and warm.
         * — The via stop is at 55% so there's a natural feather edge.
         * — Much lighter than the previous full-image overlay.
         */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(25,52,59,0.52) 0%, rgba(25,52,59,0.28) 42%, rgba(25,52,59,0.06) 62%, transparent 75%)',
          }}
        />
        {/* Subtle bottom vignette so the trust bar doesn't feel abrupt */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(25,52,59,0.38) 0%, rgba(25,52,59,0.0) 18%)',
          }}
        />
      </div>

      {/* ── Content – Left-aligned, occupies ~55% of width ──── */}
      <div className="editorial-container relative z-10 w-full">
        <div
          className="hero-content flex flex-col items-start max-w-[90%] sm:max-w-[70%] md:max-w-[58%] lg:max-w-[52%] pt-20 sm:pt-16"
          style={{ animation: 'heroFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          {/* Eyebrow */}
          <span
            className="text-white/70 tracking-[0.22em] uppercase text-[10px] sm:text-xs font-semibold mb-5 sm:mb-6"
            style={{ animation: 'heroFadeUp 0.9s 0.05s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            Maternity &nbsp;•&nbsp; Baby &nbsp;•&nbsp; Family
          </span>

          {/* Headline */}
          <h1
            className="font-serif text-white leading-[1.06] mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
              letterSpacing: '-0.01em',
              animation: 'heroFadeUp 0.9s 0.12s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            {/* Primary line — full weight */}
            <span className="block">Little Moments.</span>
            {/* Secondary line — elegant, italic, slightly warmer */}
            <span
              className="block italic font-light mt-1"
              style={{ color: 'rgba(252,250,247,0.88)' }}
            >
              Beautifully Remembered.
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p
            className="text-white/80 font-light mb-9 sm:mb-10 leading-relaxed"
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
              maxWidth: '38ch',
              animation: 'heroFadeUp 0.9s 0.22s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            Creative maternity and baby photography in Coimbatore, crafted around
            your family&apos;s most precious moments.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            style={{ animation: 'heroFadeUp 0.9s 0.32s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-brand-blue text-white border-0 hover:bg-brand-blue/90 shadow-lg shadow-black/20"
            >
              <Link href="#contact">Book a Session</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-white border-white/40 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-brand-deep"
            >
              <Link href="#gallery">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  );
}
