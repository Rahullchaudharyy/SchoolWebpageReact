import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const mainMenuItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/About' },
    { name: 'Contact us', to: '/Contact' },
  ];

  const exploreMenuItems = [
    { name: 'Faculty', to: '/Faculty' },
    { name: 'Gallery', to: '/Gallery' },
    { name: 'Academics', to: '/Academics' },
    { name: 'Admissions', to: '/Admission' },
    { name: 'Students', to: '/Students' },
  ];

  return (
    <div className="relative w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-[3vmin]"><span className='text-orange-400'>Springdale</span> Public School</span>
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            {mainMenuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 ${isActive ? 'text-red-400' : 'text-gray-400'}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Explore
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <nav className="grid gap-y-2 p-2">
                    {exploreMenuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          `inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 ${isActive ? 'text-red-400' : 'text-gray-400'}`
                        }                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="flex grow justify-end">
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="ml-2 mt-2 hidden lg:block">
          <span className="relative inline-block">
            <img
              className="h-10 w-10 rounded-full"
              src="https://www.springdalespusa.com/images/logo.png"
              alt="Profile"
            />
          </span>
        </div>
        <div className="ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold text-lg">Springdale</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4 z-50">
                    {mainMenuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </NavLink>
                    ))}
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">Explore</span>
                        <ChevronDown className={`ml-3 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                          <nav className="grid gap-y-2 p-2">
                            {exploreMenuItems.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.to}
                                className="block rounded-md p-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                              >
                                {item.name}
                              </NavLink>
                            ))}
                          </nav>
                        </div>
                      )}
                    </div>
                  </nav>
                </div>
                <div className="ml-3 mt-4 flex items-center space-x-2">
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://www.springdalespusa.com/images/logo.png"
                    alt="Profile"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Springdale</span>
                    <span className="text-sm font-medium text-gray-500">@School</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
