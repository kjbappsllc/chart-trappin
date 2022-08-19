import { Link } from 'react-router-dom';

interface NavMenuListItem {
  name: string;
  sectionId: string;
}
interface NavMenuListProps {
  items: NavMenuListItem[];
}

const HeaderLogo = () => (
  <div className="flex items-center h-12">
    <img className="h-8 inline fill-current" src="assets/logo.png" />
    <Link to="/" className="pl-3 text-black no-underline hover:no-underline font-bold text-2xl lg:text-2xl leading-none">
      ChartTrappin
    </Link>
  </div>
);

const NavMenuList = ({ items }: NavMenuListProps) => {
  const listItems = items.map((item, index) => {
    const spacer = index !== items.length - 1 ?
      <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" data-path="0.0.2.3.0.0" />
      </svg> : null
    return (
      <>
        <li>
          <a className="text-gray-500 hover:text-gray-900 hover:underline">{item.name}</a>
        </li>
        <li>
          {spacer}
        </li>
      </>
    )
  })
  return (
    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
      {listItems}
    </ul>
  );
};

const ActionButtons = () => {
  return (
    <>
      <a className="hidden lg:inline-block lg:mr-5 lg:ml-auto py-2 px-6 bg-gray-100 hover:bg-gray-200 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200">
        Join Us
      </a>
      <a className="hidden lg:inline-block py-2 px-6 bg-pink-500 hover:bg-pink-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200">
        Contact
      </a>
    </>
  );
};

export const NavMenuBar = () => {
  const listItems: NavMenuListItem[] = [
    {
      name: 'About Us',
      sectionId: '#About',
    },
    {
      name: 'Testimonials',
      sectionId: '#Testimonials',
    },
    {
      name: 'Teachings',
      sectionId: '#Teachings',
    },
    {
      name: 'Courses',
      sectionId: '#Courses',
    },
  ];
  return (
    <nav id="header" className="z-30 py-6 relative px-6 flex justify-between items-center bg-white">
      <HeaderLogo />
      <NavMenuList items={listItems} />
      <ActionButtons />
    </nav>
  );
};
