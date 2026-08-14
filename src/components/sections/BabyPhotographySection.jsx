"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const milestones = [
  { month: "3 Months", title: "First Smiles", image: "/images/baby/firstsmile.jpg", desc: "The real smiles are starting! We capture those magical toothless grins." },
  { month: "6 Months", title: "Sitting Up", image: "/images/baby/sittingup.jpg", desc: "Full of personality and learning to sit. The perfect time for expressive portraits." },
  { month: "9 Months", title: "On the Move", image: "/images/baby/onthemove.jpg", desc: "Crawling, pulling up, and exploring everything. Dynamic, joyful, and full of life." },
  { month: "12 Months", title: "First Birthday", image: "/images/baby/firstbirthday.jpg", desc: "The big one! Cake smash, milestones, and the full first year story." },
];

export function BabyPhotographySection() {
  return (
    <section id="baby-kids" className="flex flex-col scroll-m-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/baby/baby-hero.jpg"
            alt="Baby Photography Coimbatore — Clickaboo Baby Studio"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/10 to-transparent" />
        </div>
        <div className="editorial-container relative z-10 pb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-white/60 mb-3"
          >
            Baby &amp; Kids Photography
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-5 max-w-2xl"
          >
            Every Little
            <br />
            <em className="font-normal">Milestone Matters.</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg">
              <Link href="#contact">Book a Milestone Session</Link>
            </Button>
            <WhatsAppButton
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-brand-deep"
              message="Hi Clickaboo! I'm interested in a baby milestone photoshoot."
            />
          </motion.div>
        </div>
      </div>

      {/* Intro text */}
      <div className="py-14 lg:py-18">
        <div className="editorial-container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-deep mb-4">
            Blink and You&apos;ll Miss It.
          </h2>
          <p className="text-brand-deep/70 leading-relaxed text-sm md:text-base mb-3">
            Babies change so fast it&apos;s almost unfair. One month they&apos;re sleeping in your arms, the next they&apos;re pulling themselves up and giggling at everything. Each milestone is a tiny universe of its own.
          </p>
          <p className="text-brand-deep/70 leading-relaxed text-sm md:text-base">
            We offer individual milestone sessions or a full First Year package — letting you document the entire incredible journey from newborn to toddler in one cohesive story.
          </p>
        </div>
      </div>

      {/* Milestone Cards */}
      <div className="pb-16 lg:pb-20">
        <div className="editorial-container">
          <h2 className="text-2xl font-serif text-brand-deep text-center mb-10">
            Baby&apos;s First Year, Beautifully Captured
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((m, i) => (
              <motion.div
                key={m.month}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-brand-deep/8 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={m.image}
                    alt={`${m.title} — baby milestone photography at Clickaboo`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-widest text-brand-blue mb-1">{m.month}</p>
                  <h3 className="text-base font-semibold text-brand-deep mb-1.5">{m.title}</h3>
                  <p className="text-xs text-brand-deep/70 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-14 bg-brand-deep">
        <div className="editorial-container text-center">
          <h2 className="text-2xl font-serif text-brand-warm mb-3">
            They&apos;re Only This Little Once.
          </h2>
          <p className="text-brand-warm/70 mb-7 max-w-lg mx-auto text-sm">
            Book your baby&apos;s milestone session today before the moment passes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#contact">Book Now</Link>
            </Button>
            <WhatsAppButton
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-brand-deep"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
