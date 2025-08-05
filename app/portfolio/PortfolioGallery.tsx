
'use client';
import { useState, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  date: string;
}

export default function PortfolioGallery() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Brand Design', 'UI/UX Design', 'Web Development', 'Graphic Design'];

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      const defaultProjects: Project[] = [
        {
          id: '1',
          title: 'TechFlow Brand Identity',
          category: 'Brand Design',
          image: 'https://readdy.ai/api/search-image?query=modern%20tech%20company%20logo%20and%20brand%20identity%20design%2C%20clean%20minimal%20branding%20materials%2C%20business%20cards%2C%20letterhead%2C%20purple%20and%20blue%20color%20scheme%2C%20professional%20corporate%20identity%2C%20technology%20themed%20graphics&width=600&height=400&seq=default-1&orientation=landscape',
          description: 'Complete brand identity design for a technology startup including logo, business cards, and marketing materials.',
          date: '2024-01-15'
        },
        {
          id: '2',
          title: 'FoodHub Mobile App',
          category: 'UI/UX Design',
          image: 'https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%20design%2C%20modern%20UI%20screens%2C%20clean%20app%20design%2C%20food%20ordering%20interface%2C%20mobile%20application%20mockup%2C%20user-friendly%20design%2C%20colorful%20food%20app%20interface&width=600&height=400&seq=default-2&orientation=landscape',
          description: 'Mobile app design for a food delivery platform with intuitive user interface and seamless ordering experience.',
          date: '2024-02-20'
        },
        {
          id: '3',
          title: 'Creative Studio Website',
          category: 'Web Development',
          image: 'https://readdy.ai/api/search-image?query=creative%20agency%20website%20design%2C%20modern%20web%20interface%2C%20portfolio%20website%20layout%2C%20clean%20web%20design%2C%20responsive%20website%20mockup%2C%20creative%20industry%20website%2C%20professional%20web%20development&width=600&height=400&seq=default-3&orientation=landscape',
          description: 'Responsive website for a creative design studio featuring modern layout and interactive elements.',
          date: '2024-03-10'
        },
        {
          id: '4',
          title: 'EcoGreen Campaign',
          category: 'Graphic Design',
          image: 'https://readdy.ai/api/search-image?query=environmental%20campaign%20graphics%2C%20green%20eco-friendly%20poster%20design%2C%20sustainability%20marketing%20materials%2C%20nature-themed%20graphics%2C%20environmental%20awareness%20campaign%2C%20green%20color%20palette%20design&width=600&height=400&seq=default-4&orientation=landscape',
          description: 'Marketing campaign for environmental awareness including posters, brochures, and digital graphics.',
          date: '2024-04-05'
        }
      ];
      setProjects(defaultProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(defaultProjects));
    }
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
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
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <p className="text-xs text-gray-400">{new Date(project.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found in this category.</p>
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-90vh overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover object-top"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <div className="p-8">
              <div className="mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 text-lg mb-6">{selectedProject.description}</p>
              <p className="text-sm text-gray-400">Completed on {new Date(selectedProject.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
