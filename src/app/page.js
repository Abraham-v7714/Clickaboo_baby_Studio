import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { BrandIntro } from '@/components/home/BrandIntro';
import { Services } from '@/components/home/Services';
import { MaternityHighlight } from '@/components/home/MaternityHighlight';
import { BehindTheClick } from '@/components/home/BehindTheClick';
import { WhyClickaboo } from '@/components/home/WhyClickaboo';
import { InstagramSection } from '@/components/home/InstagramSection';
import { FinalCTA } from '@/components/home/FinalCTA';

import { MaternitySection } from '@/components/sections/MaternitySection';
import { BabyPhotographySection } from '@/components/sections/BabyPhotographySection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── ABOVE THE FOLD ─────────────────────────────────────────── */}
      <Hero />
      <TrustBar />

      {/* ── STORY ──────────────────────────────────────────────────── */}
      <BrandIntro />

      {/* ── SERVICES / EXPERTISE ───────────────────────────────────── */}
      <Services />

      {/* ── MATERNITY FEATURE ──────────────────────────────────────── */}
      <MaternityHighlight />

      {/* ── WHY CLICKABOO ──────────────────────────────────────────── */}
      <WhyClickaboo />

      {/* ── BEHIND THE CLICK ───────────────────────────────────────── */}
      <BehindTheClick />

      {/* ── FULL SECTION PAGES (single-page anchors) ───────────────── */}
      <AboutSection />
      <MaternitySection />
      <BabyPhotographySection />
      <GallerySection />
      <ExperienceSection />

      {/* ── INSTAGRAM ──────────────────────────────────────────────── */}
      <InstagramSection />

      {/* ── FINAL CTA ──────────────────────────────────────────────── */}
      <FinalCTA />

      {/* ── CONTACT ────────────────────────────────────────────────── */}
      <ContactSection />
    </div>
  );
}
