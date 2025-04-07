'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#8932ad] to-[#ed4064] shadow-md font-sans">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="ChromaCare Logo"
                  width={140}
                  height={100}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white rounded-full p-2 text-[#8932ad] transition duration-300 hover:scale-105"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 pb-4">
            <NavLinks mobile />
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks() {
  const linkClass = 'font-semibold px-3 py-2 rounded-md transition duration-300 text-white hover:bg-white hover:text-[#8932ad]';

  return (
    <>
      <Link href="/" legacyBehavior>
        <a className={linkClass}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={linkClass}>About</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className={linkClass}>Contact</a>
      </Link>
    </>
  );
}

