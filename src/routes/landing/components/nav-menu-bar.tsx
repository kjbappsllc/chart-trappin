import React from 'react';
import { Link } from 'react-router-dom';
import { VertDotsIcon } from '../../../shared/ui/icons';
import { NavMenuListProps } from '../landing.view-model';
import LogoPng from '../../../assets/logo.png';

const HeaderLogo = () => (
  <div className="flex items-center h-12">
    <img alt="logo" className="h-8 inline fill-current" src={LogoPng} />
    <Link
      to="/"
      className="pl-3 text-black no-underline hover:no-underline font-bold text-2xl lg:text-2xl leading-none"
    >
      ChartTrappin
    </Link>
  </div>
);

const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(`${sectionId}`);
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const NavMenuList = ({ items }: NavMenuListProps) => {
  const listItems = items.map((item, index) => {
    const spacer =
      index !== items.length - 1 ? (
        <VertDotsIcon className="w-4 h-4 current-fill" fill="none" stroke="currentColor" />
      ) : null;
    return (
      <React.Fragment key={index}>
        <li>
          <button
            className="text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-4 hover:cursor-pointer scroll-smooth"
            onClick={() => scrollToSection(item.sectionId)}
          >
            {item.name}
          </button>
        </li>
        <li>{spacer}</li>
      </React.Fragment>
    );
  });
  return (
    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
      {listItems}
    </ul>
  );
};

const ActionButtons = () => {
  return (
    <>
      <button className="hidden lg:inline-block lg:mr-5 lg:ml-auto py-2 px-6 bg-gray-100 hover:bg-gray-200 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200 hover:cursor-pointer">
        Join Us
      </button>
      <button className="hidden lg:inline-block py-2 px-6 bg-primary-400 hover:bg-primary-500 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 hover:cursor-pointer">
        Contact
      </button>
    </>
  );
};

export const NavMenuBar = ({ items }: NavMenuListProps) => {
  return (
    <div className="w-full bg-white">
      <nav
        id="header"
        className="z-30 top-0 py-6 px-6 flex fixed w-full justify-between items-center bg-white shadow-sm"
      >
        <HeaderLogo />
        <NavMenuList items={items} />
        <ActionButtons />
      </nav>
    </div>
  );
};
