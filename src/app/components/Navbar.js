"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure this component only shows client-rendered content after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid rendering until client mounts

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#8932ad] to-[#ed4064] shadow-md font-sans">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with rounded white background */}
          <div className="flex items-center">
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
          <div className="hidden md:flex space-x-8">
          <Link href="/" passHref>
            <span className="text-white font-semibold px-3 py-2 rounded-md transition duration-300 hover:bg-white hover:text-[#8932ad]">
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-white font-semibold px-3 py-2 rounded-md transition duration-300 hover:bg-white hover:text-[#8932ad]">
              About
            </span>
          </Link>
          <Link href="/technology" passHref>
            <span className="text-white font-semibold px-3 py-2 rounded-md transition duration-300 hover:bg-white hover:text-[#8932ad]">
              Technology
            </span>
          </Link>
          <Link href="/market" passHref>
            <span className="text-white font-semibold px-3 py-2 rounded-md transition duration-300 hover:bg-white hover:text-[#8932ad]">
              Market
            </span>
          </Link>
          <Link href="/impact" passHref>
            <span className="text-white font-semibold px-3 py-2 rounded-md transition duration-300 hover:bg-white hover:text-[#8932ad]">
              Impact
            </span>
          </Link>
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
      </nav>
    </header>
  );
}
