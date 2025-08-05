
'use client';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Me</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              I'm Moses Adebayo, a passionate creative professional with over 6 years of experience in graphics design and web development. I believe in creating digital experiences that not only look stunning but also serve a purpose.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              My expertise spans from brand identity design and illustration to modern web development using the latest technologies. I love bringing ideas to life through pixel-perfect designs and clean, efficient code.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-palette-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Graphics Design</h3>
                <p className="text-gray-600">Creating visual identities, logos, and marketing materials</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-code-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
                <p className="text-gray-600">Building responsive and interactive web applications</p>
              </div>
            </div>
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all cursor-pointer whitespace-nowrap inline-block">
              Let's Work Together
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20creative%20designer%20working%20at%20desk%20with%20multiple%20monitors%2C%20graphics%20tablet%2C%20design%20sketches%2C%20modern%20workspace%2C%20natural%20lighting%2C%20focused%20and%20concentrated%2C%20artistic%20environment%20with%20design%20tools%20and%20color%20swatches&width=600&height=800&seq=about-image&orientation=portrait"
              alt="About Moses Adebayo"
              className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold text-purple-600">6+</p>
              <p className="text-gray-700 font-semibold">Years Experience</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold text-blue-600">150+</p>
              <p className="text-gray-700 font-semibold">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
