"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { businessInfo } from '@/data/business';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const links = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#maternity", label: "Maternity", id: "maternity" },
  { href: "#baby-kids", label: "Baby & Kids", id: "baby-kids" },
  { href: "#gallery", label: "Gallery", id: "gallery" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#about", label: "About", id: "about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const observers = [];
    const options = { root: null, rootMargin: '0px', threshold: 0.3 };
    
    links.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(link.id);
            }
          });
        }, options);
        observer.observe(el);
        observers.push(observer);
      }
    });
    
    // Also observe contact
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection('contact');
        });
      }, options);
      observer.observe(contactEl);
      observers.push(observer);
    }

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);


  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-brand-warm/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="editorial-container flex items-center justify-between">
          <Link
            href="#home"
            className={cn(
              "relative z-50 text-2xl font-serif tracking-tight font-medium transition-colors duration-300",
              scrolled ? "text-brand-deep" : "text-white drop-shadow-sm"
            )}
          >
            Clickaboo
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm transition-colors duration-300",
                  activeSection === link.id
                    ? "font-semibold text-brand-blue"
                    : scrolled
                      ? "text-brand-deep hover:text-brand-blue"
                      : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                activeSection === 'contact' 
                  ? "font-semibold text-brand-blue" 
                  : scrolled 
                    ? "text-brand-deep hover:text-brand-blue" 
                    : "text-white/90 hover:text-white"
              )}
            >
              Contact
            </Link>
            <WhatsAppButton size="sm" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden relative z-50 p-2 transition-colors duration-300",
              isOpen ? "text-brand-deep" : scrolled ? "text-brand-deep" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-brand-warm flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-2xl font-serif mt-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
            className={cn(
                "transition-colors",
                activeSection === link.id ? "text-brand-blue" : "text-brand-deep hover:text-brand-blue"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={cn(
              "transition-colors",
              activeSection === "contact" ? "text-brand-blue" : "text-brand-deep hover:text-brand-blue"
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="mt-auto pb-12 flex flex-col gap-6">
          <WhatsAppButton className="w-full justify-center" size="lg" />
          <div className="flex gap-4 justify-center items-center">
            <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-brand-deep">
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
            <span className="text-brand-deep/20">|</span>
            <a href={businessInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-deep">
              <InstagramIcon className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
