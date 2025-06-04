import  { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'digital', label: 'Digital Marketing' },
    { id: 'advertising', label: 'Advertising' },
    { id: 'web', label: 'Web Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'EcoVenture Rebrand',
      category: 'branding',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete brand refresh for an eco-friendly adventure company.',
      results: ['45% increase in brand recognition', '37% boost in customer engagement', 'Silver award at Brand Impact Awards']
    },
    {
      id: 2,
      title: 'TechNova Digital Campaign',
      category: 'digital',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Multi-channel digital marketing campaign for a tech startup launch.',
      results: ['12,000+ leads generated', '320% ROI on ad spend', '5M+ social media impressions']
    },
    {
      id: 3,
      title: 'Luxe Homes Billboard Series',
      category: 'advertising',
      image: 'https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Strategic outdoor advertising campaign for a luxury real estate developer.',
      results: ['28% increase in property inquiries', '15 properties sold directly from campaign', 'Featured in Advertising Weekly']
    },
    {
      id: 4,
      title: 'GlobalEats E-commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Custom e-commerce website for an international food delivery service.',
      results: ['67% improvement in conversion rate', '42% reduction in cart abandonment', '3.2M in first-year online sales']
    },
    {
      id: 5,
      title: 'FitLife Social Media Strategy',
      category: 'digital',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Comprehensive social media strategy for a fitness app.',
      results: ['250K+ new followers across platforms', '189% increase in app downloads', 'Viral campaign with 3.5M views']
    },
    {
      id: 6,
      title: 'Urban Coffee Brand Identity',
      category: 'branding',
      image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete brand identity design for an urban coffee chain.',
      results: ['4 new locations opened following rebrand', '23% increase in customer retention', 'Best New Brand award at Coffee Expo']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Work</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore our portfolio of successful projects that have helped our clients achieve their business goals 
            through strategic advertising and marketing solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href="#contact" 
                    className="px-4 py-2 bg-white text-black rounded-md flex items-center"
                  >
                    View Case Study <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div>
                  <h4 className="text-sm font-bold mb-2">Results:</h4>
                  <ul className="text-sm text-gray-700">
                    {project.results.map((result, index) => (
                      <li key={index} className="mb-1 flex items-start">
                        <span className="inline-block w-1 h-1 bg-black rounded-full mt-2 mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;