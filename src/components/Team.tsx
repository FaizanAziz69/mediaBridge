import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Azhar Aziz',
      position: 'Founder & CEO',
      image: '/src/assets/azhar1.jpg',
      bio: 'With over 30 years of experience in advertising and brand strategy, Azhar  our team with a passion for innovative solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mediabridgeall@yahoo.com'
      }
    },
    {
      name: 'Uzair Azhar',
      position: 'Digital Marketing Manager',
    image: '/src/assets/uzair.jpg',
      bio: 'Uzair a unique artistic vision to every project, combining traditional design principles with cutting-edge techniques.',
      social: {
        linkedin: '#',
        twitter: '#',
        // email: 'jamie@mediabridge.com'
      }
    },
    {
      name: 'Hafsa Azhar',
      position: 'Quality Assurance Specialist',
      image: 'https://i.pinimg.com/564x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg',
      bio: 'Hafsa  specializes in quality  Assurance strategies  to ensure products or services consistently meet customer expectations and regulatory standards, reducing errors and increasing trust.',
      social: {
        linkedin: '#',
        twitter: '#',
        // email: 'taylor@mediabridge.com'
      }
    },
    {
      name: 'Faizan Aziz',
      position: 'Senior Web Developer',
      image: 'https://ca.slack-edge.com/T03KUF1A4BZ-U075JJ55S66-7488576d971f-512',
      bio: 'Faizan is a seasoned web developer with a knack for creating user-friendly, responsive websites that drive engagement and conversions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jordan@mediabridge.com'
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Team</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Meet the talented professionals behind Media Bridge. Our diverse team brings together 
            expertise from across the advertising and marketing landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            Work With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;