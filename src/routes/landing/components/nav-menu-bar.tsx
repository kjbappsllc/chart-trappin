import { Link } from 'react-router-dom'

export const NavMenuBar = () => {
  return (
    <nav id="header" className="w-full z-30 top-0 text-white sticky">
      <div className="w-full container mx-auto justify-between flex py-4">
        <div className="pl-4 flex items-center">
          <Link to="/" className="text-black no-underline hover:underline font-bold text-2xl lg:text-4xl">
            ChartTrappin
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex-grow lg:flex lg:items-center lg:w-auto hidden mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Testimonials</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:no-underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Courses
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-400 opacity-25 my-0 py-0" />
    </nav>
  )
}