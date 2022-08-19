import * as React from 'react';
import { HeaderContent } from './components/header-content';
import { NavMenuBar } from './components/nav-menu-bar';


export const LandingPage = () => {
  return (
    <div className="w-full">
      <NavMenuBar />
      <HeaderContent />
    </div>
  );
};
