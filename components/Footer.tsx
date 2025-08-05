
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Moses Adebayo
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Creative graphics designer and web developer passionate about crafting beautiful digital experiences that make an impact.
            </p>
            <div className="flex space-x-4">
              <a href="https://dribbble.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <i className="ri-dribbble-line text-lg"></i>
              </a>
              <a href="https://behance.net" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <i className="ri-behance-line text-lg"></i>
              </a>
              <a href="https://github.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <i className="ri-github-line text-lg"></i>
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Portfolio</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Logo Design</li>
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Brand Identity</li>
              <li className="text-gray-400">UI/UX Design</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Moses Adebayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
