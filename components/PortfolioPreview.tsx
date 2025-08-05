
'use client';
import Link from 'next/link';

export default function PortfolioPreview() {
  const projects = [
    {
      title: 'TechFlow Brand Identity',
      category: 'Brand Design',
      image: 'https://readdy.ai/api/search-image?query=modern%20tech%20company%20logo%20and%20brand%20identity%20design%2C%20clean%20minimal%20branding%20materials%2C%20business%20cards%2C%20letterhead%2C%20purple%20and%20blue%20color%20scheme%2C%20professional%20corporate%20identity%2C%20technology%20themed%20graphics&width=600&height=400&seq=project-1&orientation=landscape',
      description: 'Complete brand identity design for a technology startup'
    },
    {
      title: 'FoodHub Mobile App',
      category: 'UI/UX Design',
      image: 'https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%20design%2C%20modern%20UI%20screens%2C%20clean%20app%20design%2C%20food%20ordering%20interface%2C%20mobile%20application%20mockup%2C%20user-friendly%20design%2C%20colorful%20food%20app%20interface&width=600&height=400&seq=project-2&orientation=landscape',
      description: 'Mobile app design for a food delivery platform'
    },
    {
      title: 'Creative Studio Website',
      category: 'Web Development',
      image: 'https://readdy.ai/api/search-image?query=creative%20agency%20website%20design%2C%20modern%20web%20interface%2C%20portfolio%20website%20layout%2C%20clean%20web%20design%2C%20responsive%20website%20mockup%2C%20creative%20industry%20website%2C%20professional%20web%20development&width=600&height=400&seq=project-3&orientation=landscape',
      description: 'Responsive website for a creative design studio'
    },
    {
      title: 'EcoGreen Campaign',
      category: 'Graphic Design',
      image: 'https://readdy.ai/api/search-image?query=environmental%20campaign%20graphics%2C%20green%20eco-friendly%20poster%20design%2C%20sustainability%20marketing%20materials%2C%20nature-themed%20graphics%2C%20environmental%20awareness%20campaign%2C%20green%20color%20palette%20design&width=600&height=400&seq=project-4&orientation=landscape',
      description: 'Marketing campaign for environmental awareness'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills in both design and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all cursor-pointer whitespace-nowrap inline-block">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
