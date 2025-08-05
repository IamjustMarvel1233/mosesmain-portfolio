
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              Portfolio
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
                About
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
                Portfolio
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
