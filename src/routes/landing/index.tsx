import * as React from 'react';
import { Footer } from './components/footer';
import { HeaderContent } from './components/header-content';
import { NavMenuBar } from './components/nav-menu-bar';
import { navListItems } from './landing.view-model'

export const LandingPage = () => {
  return (
    <div className="w-full flex h-screen flex-col">
      <NavMenuBar items={navListItems} />
      <HeaderContent />
      <Footer />
    </div>
  );
};
