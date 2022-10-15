import * as React from 'react';
import { ContactSection } from './components/contact';
import { CoursesSection } from './components/courses';
import { Footer } from './components/footer';
import { HeaderContentSection } from './components/header-content';
import { NavMenuBar } from './components/nav-menu-bar';
import { TestimonialsSection } from './components/testimonials';
import { navListItems, SectionId } from './landing.view-model';

export const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <NavMenuBar items={navListItems} />
      <HeaderContentSection />
      <CoursesSection sectionId={SectionId.Courses} />
      <TestimonialsSection sectionId={SectionId.Testimonials} />
      <ContactSection sectionId="contact" />
      <Footer />
    </div>
  );
};
