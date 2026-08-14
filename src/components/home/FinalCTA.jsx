"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/maternity/CoupleMaternity.jpg"
          alt="A tender moment between expecting parents — Clickaboo Baby Studio, Coimbatore"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-deep/70 mix-blend-multiply" />
      </div>

      <div className="editorial-container relative z-10 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-serif text-white mb-6 max-w-3xl">
          They&apos;ll Never Be This Little Again.
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 font-light">
          Let&apos;s turn today&apos;s little moments into memories you&apos;ll treasure for years to come.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#contact">Book a Session</Link>
          </Button>
          <WhatsAppButton 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-brand-deep" 
          />
        </div>
      </div>
    </section>
  );
}
