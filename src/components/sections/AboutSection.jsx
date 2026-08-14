"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Camera, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { businessInfo } from "@/data/business";

const values = [
  {
    icon: Heart,
    title: "Led by Love",
    description:
      "Every decision we make — from the props we choose to the music we play — is driven by a deep love for families and for the art of photography.",
  },
  {
    icon: Camera,
    title: "Artistry First",
    description:
      "We bring a documentary-editorial eye to our work. Every frame is thoughtfully composed, beautifully lit, and true to the emotion of the moment.",
  },
  {
    icon: Shield,
    title: "Safe & Gentle",
    description:
      "Trained in newborn safety posing. Our studio is a warm, clean, and calm space designed entirely around your baby's comfort and wellbeing.",
  },
  {
    icon: Sparkles,
    title: "One Happy Place",
    description:
      "We've been told our studio is the most relaxed, fun, and joyful place families have visited. We work hard to keep it that way.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col scroll-m-20">
      {/* Hero */}
      <div className="relative bg-brand-mist/30 py-16 lg:py-20 overflow-hidden">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm uppercase tracking-widest text-brand-deep/50 mb-4"
              >
                Our Story
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-deep leading-tight mb-6"
              >
                A Happy Place for
                <br />
                <em className="font-normal">Little Ones.</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-brand-deep/70 leading-relaxed mb-8"
              >
                Clickaboo Baby Studio was born out of a simple belief: that the earliest years of a
                child&apos;s life deserve to be captured with the same care, artistry, and emotion that
                parents pour into raising them. Based in the heart of Coimbatore, we&apos;ve become the
                go-to studio for families who want more than just a photo — they want a feeling.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-brand-deep/70 leading-relaxed"
              >
                With over {businessInfo.reviewCount}+ five-star families served, we take pride in
                being Coimbatore&apos;s most trusted maternity and baby photography studio — known for our
                warmth, our creativity, and our super friendly team.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/studio-team.jpg"
                  alt="The Clickaboo Baby Studio team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 z-10">
                <div className="text-3xl font-serif text-brand-blue font-bold">5.0</div>
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-brand-deep/60 mt-0.5">{businessInfo.reviewCount}+ Happy Families</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 lg:py-20">
        <div className="editorial-container">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-deep text-center mb-16">
            What Drives Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-brand-mist/30 hover:bg-brand-mist/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <v.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-brand-deep">{v.title}</h3>
                <p className="text-sm text-brand-deep/70 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-14 bg-brand-deep">
        <div className="editorial-container text-center">
          <h2 className="text-3xl font-serif text-brand-warm mb-4">
            Come Visit Our Little World
          </h2>
          <p className="text-brand-warm/70 mb-8 max-w-lg mx-auto">
            We&apos;d love to welcome your family into Clickaboo. Get in touch and let&apos;s start planning your session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#contact">Contact Us</Link>
            </Button>
            <WhatsAppButton size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-brand-deep" />
          </div>
        </div>
      </div>
    </section>
  );
}
