"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const steps = [
  {
    number: "01",
    title: "Enquire & Consult",
    description:
      "Reach out via WhatsApp or our contact form. We have a friendly pre-session call to understand your vision, answer questions, and plan your perfect session.",
  },
  {
    number: "02",
    title: "Book & Prepare",
    description:
      "Once you're happy, we confirm your date and share a detailed guide on what to wear, how to prepare your baby, and what to expect on the day.",
  },
  {
    number: "03",
    title: "Your Session Day",
    description:
      "Arrive at our cozy studio and let us take care of everything. We go at your baby's pace — feeds, cuddles, and giggles included.",
  },
  {
    number: "04",
    title: "Receive Your Gallery",
    description:
      "Within 7–10 working days, your private online gallery is ready. Download your beautifully edited images and order prints or albums directly.",
  },
];

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-deep/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-brand-deep pr-8">{item.question}</span>
        <ChevronDown
          className={`w-4 h-4 text-brand-deep/40 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-brand-deep/70 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col scroll-m-20">
      {/* Hero */}
      <div className="bg-brand-mist/30 py-16 lg:py-20">
        <div className="editorial-container text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-brand-deep/50 mb-3"
          >
            The Clickaboo Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-deep leading-tight mb-4"
          >
            More Than a Photoshoot.
            <br />
            <em className="font-normal">It&apos;s an Experience.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-brand-deep/70 leading-relaxed"
          >
            We&apos;ve designed every step of your Clickaboo journey to feel joyful, relaxed, and
            completely personal — from your first enquiry to the moment you hold your photos.
          </motion.p>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 lg:py-20">
        <div className="editorial-container">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-deep text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-3"
              >
                <div className="text-4xl font-serif text-brand-blue/25 font-bold leading-none">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-brand-deep">{step.title}</h3>
                <p className="text-brand-deep/70 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 lg:py-20 bg-brand-deep">
        <div className="editorial-container">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-warm text-center mb-3">
            Stories From Our Families
          </h2>
          <p className="text-brand-warm/60 text-center mb-10 max-w-xl mx-auto text-sm">
            Real words from the families who trusted us with their most precious moments.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-brand-warm/85 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-brand-warm font-medium text-sm">{t.name}</p>
                  <p className="text-brand-warm/45 text-xs">{t.session}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 lg:py-20">
        <div className="editorial-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-deep text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-2xl border border-brand-deep/8 shadow-sm px-6 md:px-8 py-2">
            {faqItems.map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-14 bg-brand-mist/30">
        <div className="editorial-container text-center">
          <h2 className="text-2xl font-serif text-brand-deep mb-3">
            Ready to Start Your Journey?
          </h2>
          <p className="text-brand-deep/70 mb-7 max-w-lg mx-auto text-sm">
            Let&apos;s create memories your family will cherish for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#contact">Book a Session</Link>
            </Button>
            <WhatsAppButton size="lg" variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
}
