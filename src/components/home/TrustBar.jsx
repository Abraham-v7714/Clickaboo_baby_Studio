import React from 'react';
import { Star } from 'lucide-react';
import { businessInfo } from '@/data/business';

export function TrustBar() {
  return (
    <section className="bg-brand-deep text-brand-warm py-8">
      <div className="editorial-container flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-peach text-brand-peach" />
            ))}
          </div>
          <span className="font-serif text-xl ml-2">{businessInfo.rating} Google Rating</span>
        </div>
        
        <div className="hidden md:block w-px h-6 bg-brand-warm/20" />
        
        <div className="font-medium tracking-wide">
          {businessInfo.reviewCount}+ Google Reviews
        </div>
        
        <div className="hidden md:block w-px h-6 bg-brand-warm/20" />
        
        <div className="font-medium tracking-wide">
          Coimbatore
        </div>
      </div>
    </section>
  );
}
