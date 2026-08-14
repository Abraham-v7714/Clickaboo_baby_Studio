"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const safetyCues = [
  "Newborn safety-trained photographer",
  "Studio maintained at 26–28°C for baby's comfort",
  "All props and surfaces sanitized before every session",
  "Spotter always present during all composite poses",
  "We work entirely at baby's pace — never rushed",
];

const milestones = [
  { age: "5–14 days", title: "Newborn", desc: "Sleepy, curled poses and dreamlike setups during the golden window." },
  { age: "3 months", title: "Three Month Smiles", desc: "Those first real, beaming smiles captured beautifully." },
  { age: "6 months", title: "Half Birthday", desc: "Sitting, babbling, and full of personality." },
  { age: "9 months", title: "Almost Standing", desc: "Crawling, exploring, and stealing hearts." },
  { age: "12 months", title: "First Birthday", desc: "Cake smash, celebrations, and milestone magic." },
];

export default function NewbornPhotographyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newborn/newborn-hero.jpg"
            alt="Newborn photography Coimbatore"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent" />
        </div>
        <div className="editorial-container relative z-10 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-widest text-white/60 mb-3"
          >
            Newborn Photography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 max-w-2xl"
          >
            Their First Chapter.
            <br />
            <em className="font-normal">Gently Told.</em>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg">
              <Link href="/contact">Book Newborn Session</Link>
            </Button>
            <WhatsAppButton
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-brand-deep"
              message="Hi Clickaboo! I'd like to book a newborn photography session. My due date is..."
            />
          </motion.div>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-20 lg:py-28">
        <div className="editorial-container max-w-3xl text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-deep mb-6">
            The Golden Window
          </h2>
          <p className="text-lg text-brand-deep/70 leading-relaxed mb-4">
            The first two weeks of your baby&apos;s life are fleeting, precious, and gone in a blink. Our newborn sessions are designed to capture every tiny detail — the curled fists, the sleeping sighs, the downy hair — during this magical golden window.
          </p>
          <p className="text-lg text-brand-deep/70 leading-relaxed">
            We recommend booking during your second trimester so we can hold a date that aligns with your due date. Sessions are scheduled within the first 5–14 days after birth.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 bg-brand-mist/30">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-brand-deep mb-4">
                Safety is Everything.
              </h2>
              <p className="text-brand-deep/70 mb-8 leading-relaxed">
                We take newborn safety extremely seriously. Every member of our team is trained in safe posing techniques, and your baby&apos;s comfort dictates the pace of the entire session.
              </p>
              <ul className="flex flex-col gap-3">
                {safetyCues.map((cue, i) => (
                  <motion.li
                    key={cue}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-3 text-brand-deep/80 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />
                    {cue}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image src="/images/newborn/newborn-safety.jpg" alt="Safe newborn posing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-24 lg:py-32">
        <div className="editorial-container">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-deep text-center mb-4">
            Capture Every Milestone
          </h2>
          <p className="text-center text-brand-deep/60 mb-16 max-w-xl mx-auto">
            Book individual sessions or a milestone package to capture your baby&apos;s entire first year.
          </p>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-brand-blue/20" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.age}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-serif font-bold text-lg relative z-10 shadow-md">
                    {i + 1}
                  </div>
                  <p className="text-xs text-brand-deep/50 uppercase tracking-wide">{m.age}</p>
                  <h3 className="text-base font-semibold text-brand-deep">{m.title}</h3>
                  <p className="text-sm text-brand-deep/70 leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-deep">
        <div className="editorial-container text-center">
          <h2 className="text-3xl font-serif text-brand-warm mb-4">
            Book Before Baby Arrives
          </h2>
          <p className="text-brand-warm/70 mb-8 max-w-lg mx-auto">
            Newborn slots fill up fast. We recommend booking during your 2nd trimester to secure your date.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Reserve Your Date</Link>
            </Button>
            <WhatsAppButton
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-brand-deep"
              message="Hi Clickaboo! I'd like to book a newborn session. My due date is..."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
