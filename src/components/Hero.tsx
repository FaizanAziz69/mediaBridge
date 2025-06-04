import  { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/news.webp')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 opacity-0 transition-opacity duration-1000 delay-300 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-lg"
          >
            Bridging Your Brand to The World
          </h1>
          <p 
            ref={subheadingRef}
            className="text-xl sm:text-2xl text-black mb-8 opacity-0 transition-opacity duration-1000 delay-500 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-lg"
          >
            We craft strategic advertising solutions that connect, engage, and convert.
          </p>
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 transition-opacity duration-1000 delay-700"
          >
            <a 
              href="#services" 
              className="px-8 py-3 bg-white/90 backdrop-blur-sm text-black font-medium rounded-md hover:bg-white transition-colors duration-300 flex items-center justify-center shadow-lg"
            >
              Our Services <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-black border border-black/30 font-medium rounded-md hover:bg-white/30 transition-colors duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-black text-sm mb-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-black bg-white/60 backdrop-blur-sm rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;