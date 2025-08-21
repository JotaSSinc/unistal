
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Logo: React.FC = () => (
    <Link to="/" className="flex items-center space-x-2 group">
        <div className="font-black text-3xl tracking-tighter text-unistal-dark group-hover:text-unistal-yellow transition-colors duration-300">
            UNISTAL
        </div>
        <div className="flex flex-col justify-center items-start -ml-1">
             <div className="h-0.5 w-16 bg-unistal-yellow"></div>
             <div className="h-0.5 w-16 bg-unistal-yellow my-0.5"></div>
             <div className="h-0.5 w-16 bg-unistal-yellow"></div>
        </div>
    </Link>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseLinkClasses = "px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 ease-in-out";
  const inactiveLinkClasses = "text-unistal-gray hover:text-unistal-yellow";
  const activeLinkClasses = "text-unistal-yellow";


  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-unistal-dark inline-flex items-center justify-center p-2 rounded-md text-unistal-yellow hover:bg-unistal-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-unistal-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                    `block text-base ${baseLinkClasses} ${isActive ? 'bg-unistal-yellow text-unistal-dark' : 'text-unistal-gray hover:bg-slate-100'}`
                  }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;