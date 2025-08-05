
'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=modern%20creative%20workspace%20with%20computer%2C%20graphics%20tablet%2C%20design%20tools%2C%20clean%20minimalist%20studio%20environment%2C%20professional%20lighting%2C%20purple%20and%20blue%20gradient%20accents%2C%20contemporary%20office%20setup%20with%20design%20materials%2C%20artistic%20atmosphere&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Creative
          <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Designer
          </span>
          & Developer
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          I craft beautiful digital experiences through innovative graphics design and cutting-edge web development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/portfolio" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all cursor-pointer whitespace-nowrap">
            View My Work
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all cursor-pointer whitespace-nowrap">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
