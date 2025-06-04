
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Mission', href: '#mission' },
    { name: 'Services', href: '#services' },
    // { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white/20 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-black">Media</span>
              <span className="text-black">Bridge</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="ml-8 text-sm font-medium transition-colors duration-200 hover:text-gray-600 text-black"
              >
                {item.name}
              </a>
            ))}
            {/* <a 
              href="#contact" 
              className="ml-8 px-4 py-2 text-sm font-medium rounded-md bg-black/80 backdrop-blur-sm text-white hover:bg-black transition-colors duration-200 shadow-lg"
            >
              Get Started
            </a> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none text-black bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-white/95 backdrop-blur-md shadow-lg absolute w-full`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className="block px-3 py-2 text-base font-medium text-black hover:bg-white/50 backdrop-blur-sm rounded-md transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={toggleMenu}
            className="block px-3 py-2 text-base font-medium text-white bg-black/80 backdrop-blur-sm hover:bg-black rounded-md transition-colors duration-200 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;