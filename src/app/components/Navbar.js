"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#8932ad] to-[#ed4064] shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with rounded white background */}
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <Image
                src="/logo.png"
                alt="ChromaCare Logo"
                width={140}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Technology", "Market", "Impact"].map((link) => (
              <a key={link} href="#" className="text-white font-semibold hover:underline">
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white rounded-full p-2 text-[#8932ad] transition duration-300 hover:scale-105"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4 text-center bg-white text-[#8932ad] shadow-lg">
            {["Home", "About", "Technology", "Market", "Impact"].map((link) => (
              <a key={link} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
