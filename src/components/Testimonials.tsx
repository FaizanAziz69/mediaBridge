import  { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const testimonials = [
    {
      quote: "Media Bridge transformed our brand visibility with their innovative digital strategy. We saw immediate results and continue to benefit from their expertise.",
      author: "Rahman and Rahman",
      position: "Maarketing Director, Rahman and Rahman Medical",
      image: "https://rahmanandrahman.com/wp-content/uploads/2021/08/cropped-Logo-Medical.png"
    },
    {
      quote: "Their approach to our advertising campaign was refreshingly strategic and data-driven. They didn't just create beautiful ads, they created ads that actually performed.",
      author: "Amber Capacitors Ltd.",
      position: "Marketing Manager, Amber Capacitors Ltd.",
      image: "data:image/jpeg;base64,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"
    },
    {
      quote: "Working with Media Bridge has been a game-changer for our company. Their team's creativity and strategic thinking have helped us reach new audiences and grow our business.",
      author: "DG Cement Company Ltd.",
      position: "Brand Manager, DG Cement Company Ltd.",
      image: "data:image/jpeg;base64,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"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  const pauseAutoplay = () => {
    setAutoplay(false);
  };

  const resumeAutoplay = () => {
    setAutoplay(true);
  };

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, activeIndex]);

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Client Testimonials</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with Media Bridge.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden rounded-lg bg-black"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8 sm:p-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="mb-8 md:mb-0 md:mr-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Quote size={48} className="text-gray-600 mb-4" />
                      <p className="text-lg sm:text-xl mb-6 text-gray-200 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="text-xl font-bold">{testimonial.author}</h4>
                        <p className="text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;