
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-palette-line',
      title: 'Logo Design',
      description: 'Creating memorable brand identities that capture your company\'s essence and values.',
      color: 'purple'
    },
    {
      icon: 'ri-layout-line',
      title: 'Web Design',
      description: 'Designing beautiful, user-friendly interfaces that engage and convert visitors.',
      color: 'blue'
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable websites using modern technologies.',
      color: 'green'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Design',
      description: 'Crafting intuitive mobile experiences that work seamlessly across all devices.',
      color: 'orange'
    },
    {
      icon: 'ri-brush-line',
      title: 'Brand Identity',
      description: 'Developing complete visual identity systems including guidelines and assets.',
      color: 'pink'
    },
    {
      icon: 'ri-image-line',
      title: 'Illustration',
      description: 'Creating custom illustrations and graphics to enhance your brand story.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'bg-purple-100 text-purple-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      pink: 'bg-pink-100 text-pink-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer a comprehensive range of design and development services to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-16 h-16 ${getColorClasses(service.color)} rounded-lg flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
