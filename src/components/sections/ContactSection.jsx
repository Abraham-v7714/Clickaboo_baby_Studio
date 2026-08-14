"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { businessInfo } from "@/data/business";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const sessionTypes = ["Maternity", "Newborn", "Baby", "Creative Theme", "Family", "First Birthday"];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", sessionType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="flex flex-col scroll-m-20">
      {/* Hero */}
      <div className="py-16 lg:py-20 bg-gradient-to-br from-brand-mist via-white to-white">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm uppercase tracking-widest text-brand-deep/50 mb-4"
              >
                Let&apos;s Connect
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif text-brand-deep leading-tight mb-6"
              >
                Let&apos;s Create Something
                <br />
                <em className="font-normal">Beautiful Together.</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-brand-deep/70 leading-relaxed mb-10"
              >
                We&apos;d love to hear from you! Whether you&apos;re ready to book or just exploring your options, reach out and we&apos;ll get back to you as soon as possible.
              </motion.p>

              <div className="flex flex-col gap-6">
                {[
                  { icon: MapPin, label: "Studio Address", value: businessInfo.address },
                  { icon: Phone, label: "Phone / WhatsApp", value: businessInfo.phone },
                  { icon: Mail, label: "Email", value: businessInfo.email },
                  { icon: Clock, label: "Hours", value: businessInfo.hours },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-mist flex items-center justify-center shrink-0 text-brand-blue mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-brand-deep/50 mb-0.5">{label}</p>
                      <p className="text-brand-deep font-medium text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <WhatsAppButton size="lg" message="Hi Clickaboo! I'd like to enquire about a photography session." />
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl border border-brand-deep/8 shadow-sm p-8 md:p-10"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-brand-mist flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-brand-deep">Thank You!</h3>
                  <p className="text-brand-deep/70 max-w-xs">
                    We&apos;ve received your enquiry and will get back to you within 24 hours. We can&apos;t wait to meet your little one!
                  </p>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href="#home">Back to Home</Link>
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif text-brand-deep mb-6">Send an Enquiry</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wide text-brand-deep/50 mb-1.5">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-brand-deep/15 bg-brand-mist/20 text-brand-deep text-sm focus:outline-none focus:border-brand-blue transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wide text-brand-deep/50 mb-1.5">Phone / WhatsApp</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-brand-deep/15 bg-brand-mist/20 text-brand-deep text-sm focus:outline-none focus:border-brand-blue transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="sessionType" className="block text-xs uppercase tracking-wide text-brand-deep/50 mb-1.5">Session Type</label>
                      <select
                        id="sessionType"
                        name="sessionType"
                        required
                        value={form.sessionType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-brand-deep/15 bg-brand-mist/20 text-brand-deep text-sm focus:outline-none focus:border-brand-blue transition"
                      >
                        <option value="">Select a session type...</option>
                        {sessionTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-wide text-brand-deep/50 mb-1.5">Message (optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any details about your session, due date, baby's age..."
                        className="w-full px-4 py-3 rounded-xl border border-brand-deep/15 bg-brand-mist/20 text-brand-deep text-sm focus:outline-none focus:border-brand-blue transition resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full mt-2">
                      Send Enquiry
                    </Button>
                    <p className="text-xs text-brand-deep/40 text-center">
                      We typically reply within 24 hours. For faster response, WhatsApp us!
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="h-72 bg-brand-mist/40 flex items-center justify-center border-t border-brand-deep/5">
        <div className="text-center text-brand-deep/40">
          <MapPin className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">
            <a
              href={businessInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-blue transition-colors"
            >
              View on Google Maps
            </a>
          </p>
          <p className="text-xs mt-1">{businessInfo.address}</p>
        </div>
      </div>
    </section>
  );
}
