"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gallery, getGalleryCategories } from "@/data/gallery";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = getGalleryCategories();

  const filtered =
    activeCategory === "all"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="flex flex-col scroll-m-20">
      {/* Hero */}
      <div className="py-16 lg:py-20 bg-brand-deep text-center">
        <div className="editorial-container">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-brand-warm/50 mb-3"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-warm leading-tight mb-4"
          >
            A Glimpse Into
            <br />
            <em className="font-normal">Our World</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-brand-warm/70 max-w-xl mx-auto"
          >
            Each image represents a family&apos;s love, trust, and the little moments that make up a life.
          </motion.p>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="py-12 lg:py-16">
        <div className="editorial-container">
          {/* Category Filter */}
          <div className="flex overflow-x-auto hide-scrollbar sm:flex-wrap gap-2 sm:justify-center mb-10 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "shrink-0 snap-start px-5 py-2.5 sm:px-4 sm:py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200",
                  activeCategory === cat.id
                    ? "bg-brand-deep text-white shadow-sm"
                    : "bg-brand-mist/60 text-brand-deep hover:bg-brand-mist"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className="relative overflow-hidden rounded-xl break-inside-avoid group"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/15 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA below gallery */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-serif text-brand-deep mb-3">
              Love What You See?
            </h2>
            <p className="text-brand-deep/70 mb-7 max-w-md mx-auto text-sm">
              Let&apos;s create your family&apos;s chapter in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#contact">Book Your Session</Link>
              </Button>
              <WhatsAppButton size="lg" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
