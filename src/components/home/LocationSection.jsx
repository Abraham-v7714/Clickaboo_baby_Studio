import React from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { businessInfo } from '@/data/business';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { MapPin, Phone } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-mist/20">
      <div className="editorial-container">
        <SectionHeading 
          title="Come Create Memories With Us" 
          eyebrow="Visit Our Studio"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16 bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-deep/5">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-brand-deep mb-2">{businessInfo.name}</h3>
            <p className="text-brand-deep/70 mb-8 max-w-sm">
              Our cozy studio is designed with your baby&apos;s comfort and safety as our top priority.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-brand-mist flex items-center justify-center shrink-0 text-brand-blue">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-deep mb-1">Address</h4>
                  <p className="text-brand-deep/80 text-sm leading-relaxed">{businessInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-brand-mist flex items-center justify-center shrink-0 text-brand-blue">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-deep mb-1">Phone</h4>
                  <a href={`tel:${businessInfo.phone.replace(/\s/g, '')}`} className="text-brand-deep/80 text-sm hover:text-brand-blue transition-colors">{businessInfo.phone}</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <a href={businessInfo.mapUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
              </Button>
              <WhatsAppButton variant="outline" />
            </div>
          </div>

          <a
            href={businessInfo.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[400px] lg:h-auto w-full bg-brand-mist/50 flex flex-col items-center justify-center gap-3 text-brand-deep/50 hover:text-brand-blue transition-colors group"
            aria-label="View Clickaboo Baby Studio on Google Maps"
          >
            <MapPin className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm text-center px-4">
              {businessInfo.address}
            </span>
            <span className="text-xs tracking-widest uppercase text-brand-blue font-semibold mt-1">View on Google Maps →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
