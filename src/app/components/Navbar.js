'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#8932ad] to-[#ed4064] px-6 py-4 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo with pill-shaped white background */}
        <div className="flex items-center">
          <div className="bg-white p-2 px-4 rounded-full shadow-md">
            <Image
              src="/logo.png" // Replace with your logo
              alt="Logo"
              width={140}
              height={120}
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-white/90 text-lg transition">Home</a>
          <a href="#" className="text-white hover:text-white/90 text-lg transition">Features</a>
          <a href="#" className="text-white hover:text-white/90 text-lg transition">Pricing</a>
          <a href="#" className="text-white hover:text-white/90 text-lg transition">About</a>
        </div>

        {/* Animated Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 focus:outline-none"
          >
            <span className={clsx(
              "block absolute h-0.5 w-8 bg-white transform transition duration-300",
              menuOpen ? "rotate-45 top-3.5" : "top-2"
            )}></span>
            <span className={clsx(
              "block absolute h-0.5 w-8 bg-white transform transition duration-300",
              menuOpen ? "opacity-0" : "top-4"
            )}></span>
            <span className={clsx(
              "block absolute h-0.5 w-8 bg-white transform transition duration-300",
              menuOpen ? "-rotate-45 top-3.5" : "top-6"
            )}></span>
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={clsx(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          menuOpen ? "max-h-60 opacity-100 mt-4 px-4 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <a href="#" className="block text-white hover:text-white/90 text-base py-1">Home</a>
        <a href="#" className="block text-white hover:text-white/90 text-base py-1">Features</a>
        <a href="#" className="block text-white hover:text-white/90 text-base py-1">Pricing</a>
        <a href="#" className="block text-white hover:text-white/90 text-base py-1">About</a>
      </div>
    </nav>
  );
}
