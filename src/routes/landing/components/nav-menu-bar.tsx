import React from 'react';
import { Link } from 'react-router-dom';
import { VertDotsIcon } from '../../../shared/ui/icons';

export interface NavMenuListItem {
  name: string;
  sectionId: string;
}

export interface NavMenuListProps {
  items: NavMenuListItem[];
}

const HeaderLogo = () => (
  <div className="flex items-center h-12">
    <img className="h-8 inline fill-current" src="assets/logo.png" />
    <Link
      to="/"
      className="pl-3 text-black no-underline hover:no-underline font-bold text-2xl lg:text-2xl leading-none"
    >
      ChartTrappin
    </Link>
  </div>
);

const NavMenuList = ({ items }: NavMenuListProps) => {
  const listItems = items.map((item, index) => {
    const spacer =
      index !== items.length - 1 ? (
        <VertDotsIcon className="w-4 h-4 current-fill" fill='none' stroke='currentColor'/>
      ) : null;
    return (
      <React.Fragment key={index}>
        <li>
          <a className="text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-4 hover:cursor-pointer">{item.name}</a>
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
      <a className="hidden lg:inline-block lg:mr-5 lg:ml-auto py-2 px-6 bg-gray-100 hover:bg-gray-200 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200 hover:cursor-pointer">
        Join Us
      </a>
      <a className="hidden lg:inline-block py-2 px-6 bg-pink-500 hover:bg-pink-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 hover:cursor-pointer">
        Contact
      </a>
    </>
  );
};

export const NavMenuBar = ({ items }: NavMenuListProps) => {
  return (
    <nav id="header" className="z-30 py-6 px-6 flex justify-between items-center bg-white sticky top-0">
      <HeaderLogo />
      <NavMenuList items={items} />
      <ActionButtons />
    </nav>
  );
};
