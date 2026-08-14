import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function MaternitySection() {
  return (
    <section id="maternity" className="flex flex-col scroll-m-20">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[440px] w-full flex items-center justify-center overflow-hidden bg-brand-deep">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/maternity/CoupleMaternity.jpg"
            alt="Maternity Photography at Clickaboo Baby Studio, Coimbatore"
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-brand-deep/40 mix-blend-multiply" />
        </div>
        <div className="editorial-container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4">Celebrate the Beauty of Becoming</h2>
          <p className="text-base text-white/85 max-w-2xl mx-auto mb-7 font-light">
            Timeless, elegant, and deeply emotional maternity portraits crafted to honor your journey into motherhood.
          </p>
          <Button asChild size="lg"><Link href="#contact">Plan Your Maternity Session</Link></Button>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="py-16 lg:py-20">
        <div className="editorial-container">
          <SectionHeading title="A Story of Love and Anticipation" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/images/maternity/SoloMaternity.jpg" alt="Solo maternity photography — Clickaboo Baby Studio" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden lg:-translate-y-10">
              <Image src="/images/maternity/CoupleMaternity.jpg" alt="Couple maternity photography — Clickaboo Baby Studio" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/images/maternity/OutdoorMaternity.jpg" alt="Outdoor maternity photography — Clickaboo Baby Studio" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Booking CTA */}
      <div className="py-14 bg-brand-mist/30">
        <div className="editorial-container text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif text-brand-deep mb-4">Ready to Capture Your Glow?</h2>
          <p className="text-brand-deep/75 mb-7 text-sm leading-relaxed">
            Whether you prefer a cozy studio setup or a beautiful outdoor location, we will work with you to create the perfect maternity session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link href="#contact">Book Your Session</Link></Button>
            <WhatsAppButton size="lg" variant="outline" message="Hi Clickaboo! I'm interested in a maternity photoshoot. Could you please share your packages and available dates?" />
          </div>
        </div>
      </div>
    </section>
  );
}
