import * as React from 'react';
import { ContactSection } from './components/contact';
import { Footer } from './components/footer';
import { HeaderContent } from './components/header-content';
import { NavMenuBar } from './components/nav-menu-bar';
import { TestimonialsSection } from './components/testimonials';
import { navListItems, SectionId } from './landing.view-model';

export const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full bg-white">
        <NavMenuBar items={navListItems} />
        <HeaderContent />
      </section>
      <TestimonialsSection sectionId={SectionId.Testimonials} />
      <ContactSection sectionId="contact" />
      <Footer />
    </div>
  );
};
