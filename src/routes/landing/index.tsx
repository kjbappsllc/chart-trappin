import * as React from 'react';
import { ContactSection } from './components/contact';
import { Footer } from './components/footer';
import { HeaderContent } from './components/header-content';
import { NavMenuBar } from './components/nav-menu-bar';
import { TestimonialsSection } from './components/testimonials';
import { navListItems } from './landing.view-model';

export const LandingPage = () => {
  return (
    <div className="w-full flex flex-col scroll-smooth">
      <section className='w-full lg:h-screen bg-white skewed-bottom-right'>
        <NavMenuBar items={navListItems} />
        <HeaderContent />
      </section>
      <TestimonialsSection sectionId='testimonials' />
      <ContactSection sectionId='contact' />
      <Footer />
    </div>
  );
};
