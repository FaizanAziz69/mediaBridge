import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Media Bridge</h3>
            <p className="text-gray-400 mb-6">
              We craft strategic advertising solutions that connect, engage, and convert.
              Building bridges between brands and their audiences since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Brand Strategy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Creative Production</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Traditional Advertising</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Analytics & Reporting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#mission" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors duration-300">Our Team</a></li>
              {/* <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li> */}
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>12 G</p>
              <p>Makkan Society Near Butt Chowk College Road</p>
              <p>Lahore</p>
              <p className="mt-4">Phone: +92 3004302322</p>
              <p>Email:mediabridgeall@yahoo.com </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Media Bridge. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
          </div> */}
        </div>
      </div>
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;