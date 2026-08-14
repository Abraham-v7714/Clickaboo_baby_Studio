import React from 'react';
import Link from 'next/link';
import { businessInfo } from '@/data/business';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-brand-warm pt-20 pb-8 mt-auto">
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl tracking-tight">Clickaboo</h3>
            <p className="text-brand-warm/70 leading-relaxed text-sm max-w-xs">
              Maternity and Baby Photography Studio based in Coimbatore, creating beautiful memories for little ones.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-brand-warm/50">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#maternity" className="text-brand-warm/80 hover:text-white transition-colors">Maternity</Link>
              <Link href="#baby-kids" className="text-brand-warm/80 hover:text-white transition-colors">Baby & Kids</Link>
              <Link href="#gallery" className="text-brand-warm/80 hover:text-white transition-colors">Gallery</Link>
              <Link href="#experience" className="text-brand-warm/80 hover:text-white transition-colors">Experience</Link>
              <Link href="#about" className="text-brand-warm/80 hover:text-white transition-colors">About</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-brand-warm/50">Visit Us</h4>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <a href={businessInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-brand-blue shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-brand-warm/80 group-hover:text-white transition-colors text-sm leading-relaxed">
                    {businessInfo.address}
                  </span>
                </a>
              </div>
              
              <div className="flex flex-col gap-4">
                <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-brand-blue shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-brand-warm/80 group-hover:text-white transition-colors text-sm">
                    {businessInfo.phone}
                  </span>
                </a>
                <a href={businessInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <InstagramIcon className="w-5 h-5 text-brand-blue shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-brand-warm/80 group-hover:text-white transition-colors text-sm">
                    {businessInfo.instagram}
                  </span>
                </a>
                <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-brand-blue shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-brand-warm/80 group-hover:text-white transition-colors text-sm">
                    {businessInfo.email}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-warm/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-warm/50">
          <p>© {currentYear} {businessInfo.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            <a href={businessInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
