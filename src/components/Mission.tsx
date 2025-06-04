import  { useEffect, useRef, useState } from 'react';

const Mission = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);
  
  // Statistics to be animated
  const stats = [
    { value: 95, label: 'Client Satisfaction' },
    { value: 250, label: 'Projects Completed' },
    { value: 10, label: 'Industry Awards' },
    { value: 10, label: 'Team Members' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  return (
    <section id="mission" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Media Bridge, we're dedicated to creating authentic connections between brands and audiences. 
            We believe that effective advertising is about more than visibility—it's about meaningful engagement 
            that builds lasting relationships and drives real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Values That Drive Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                <span><strong className="text-black">Innovation:</strong> We constantly push boundaries to find fresh, creative solutions.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                <span><strong className="text-black">Integrity:</strong> We build trust through honest, transparent relationships.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                <span><strong className="text-black">Impact:</strong> We measure success by the meaningful results we deliver.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                <span><strong className="text-black">Inclusion:</strong> We embrace diverse perspectives to create universal connections.</span>
              </li>
            </ul>
          </div>

          <div className="bg-black text-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Approach</h3>
            <p className="mb-4">
              We blend data-driven insights with creative excellence to craft advertising strategies that resonate 
              with your target audience and deliver measurable results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-16 h-1 bg-white mr-4"></div>
                <span>Research & Discovery</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-1 bg-white mr-4"></div>
                <span>Strategic Planning</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-1 bg-white mr-4"></div>
                <span>Creative Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-1 bg-white mr-4"></div>
                <span>Implementation & Optimization</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-1 bg-white mr-4"></div>
                <span>Analysis & Reporting</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl sm:text-5xl font-bold mb-2">
                {animated ? (
                  <>
                    <span className="inline-block">{stat.value}</span>
                    <span>{stat.label.includes('Satisfaction') ? '%' : '+'}</span>
                  </>
                ) : (
                  <>0</>
                )}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;