'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import SearchSection from '@/components/search-section';
import FeaturedProperties from '@/components/featured-properties';
import ExpertiseSection from '@/components/expertise-section';
import TeamSection from '@/components/team-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import ContactModal from '@/components/contact-modal';

export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onContactClick={() => setModalOpen(true)} />
      <main className="min-h-screen">
        <Hero />
        <SearchSection />
        <FeaturedProperties />
        <ExpertiseSection />
        <TeamSection />
        <ContactSection onContactClick={() => setModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onOpenChange={setModalOpen} />
    </>
  );
}