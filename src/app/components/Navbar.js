    // components/Navbar.js
    "use client";
    import Link from 'next/link';
    import { useState } from 'react';
    
    export default function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      return (
        <nav className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="font-bold text-lg">Logo</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                  <Link href="/services" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                  <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button onClick={toggleMenu} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
                  <span className="sr-only">Open main menu</span>
                  <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w वोवw3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
    
          <div className={`${isMenuOpen ? 'block' : 'none'} md:hidden`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link href="/about" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link href="/services" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
              <Link href="/contact" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            </div>
          </div>
        </nav>
      );
    }