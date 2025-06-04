import  { useState } from 'react';
import { Layout, BarChart3, Tv, Megaphone, Globe, TrendingUp, Target } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Layout size={40} />,
      title: 'Brand Strategy',
      description: 'We develop comprehensive brand strategies that define your unique position in the market and create a foundation for all your marketing efforts.',
      features: [
        'Brand Identity Development',
        'Market Positioning',
        'Competitive Analysis',
        'Brand Voice & Messaging',
        'Brand Architecture'
      ]
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Digital Marketing',
      description: 'Our data-driven digital marketing services help you reach your audience where they spend their time online and drive measurable results.',
      features: [
        'Search Engine Optimization',
        'Pay-Per-Click Advertising',
        'Social Media Marketing',
        'Email Marketing Campaigns',
        'Content Marketing Strategy'
      ]
    },
    {
      icon: <Tv size={40} />,
      title: 'Web & App Development',
      description: 'From concept to execution, we create user-friendly websites and applications that enhance your online presence and engage your audience.',
      features: [
        'Custom Website Development',
        'Mobile App Development',
        'E-commerce Solutions',
        'User Experience Design',
        'Website Maintenance & Support'
      ]
    },
    {
      icon: <Megaphone size={40} />,
      title: 'OUR CREATIVE MANNERS',
      description: 'The main focus  of MEDIA BRIDGE  Advertising is to come with Creative Ideas and deliver them. This can not be possible without having an attitude that generates and maintain a Creative environment. Keeping pace with market trends, surveying the local and global market, and coming up with new innovative ideas,  MEDIA BRIDGE Advertising aspires to become a market leader in Creative Industry',
      features: [
        'TV & Radio Advertising',
        'Print Media Placements',
        'Outdoor & Billboard Advertising',
        'Direct Mail Campaigns',
        'Event Marketing'
      ]
    },
    {
      icon: <Globe size={40} />,
      title: 'PRINT MEDIA ADVERTISING',
      description: 'Print media advertising is a form of advertising that uses physically printed media, such as magazines and newspapers, to reach consumers, business customers and prospects. Advertisers also use digital media, such as banner ads, mobile advertising, and advertising in social media, to reach the same target audiences. The proliferation of digital media has led to a decline in advertising expenditure in traditional print media, but print isnt dead. Print media advertising is physically printed media including newspapers, magazines, posters and billboards etc.',
      features: [
        'Magazine & Newspaper Ads',
        'Brochures & Flyers',
        'Posters & Banners',
        'Catalogs & Directories',
        'Business Cards & Stationery'
      ]
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'MULTIMEDIA PROJECTION',
      description: "MEDIA BRIDGE has the diversified experience of dynamic multimedia projection field. Having carried out many such activities, we have the privilege to serve our clients who have benefited a lot from our developed multimedia projections. It has helped them in stand and maintain a reputable position in the market.  MEDIA BRIDGE has satisfied client's list that has availed it services for Web-designing, and TV Animations and  Commercials.",
      features: [
        '3D Animation & Motion Graphics',
        'Video Production & Editing',
        'Virtual Reality Experiences',
        'Augmented Reality Campaigns',
        'Interactive Presentations'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Services</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We offer a comprehensive suite of advertising and marketing services 
            to help your brand connect with your audience and achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`p-8 rounded-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                activeService === index 
                  ? 'bg-black text-white shadow-xl' 
                  : 'bg-white text-gray-800 shadow-md hover:shadow-lg'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="mb-6">
                <div className={`${
                  activeService === index ? 'text-white' : 'text-black'
                }`}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className={`${
                activeService === index ? 'text-gray-200' : 'text-gray-600'
              } mb-4`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <div className="mr-6 text-black">
              {services[activeService].icon}
            </div>
            <h3 className="text-2xl font-bold">{services[activeService].title} Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-6">{services[activeService].description}</p>
              <ul className="space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Target size={16} className="mr-2 text-black" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4">Why Choose Our {services[activeService].title}?</h4>
              <p className="text-gray-700 mb-4">
                Our team of experts brings years of industry experience and a passion for innovation 
                to every project. We focus on creating tailored solutions that align with your 
                brand values and business objectives.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;