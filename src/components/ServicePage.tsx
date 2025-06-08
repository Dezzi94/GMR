import React from 'react';
import { Link } from 'react-router-dom';

interface ServicePageProps {
  title: string;
  description: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  backgroundImage: string;
  relatedServices: {
    title: string;
    path: string;
  }[];
  logo?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  benefits,
  backgroundImage,
  relatedServices,
  logo
}) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}

              {benefits.length > 0 && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mt-12">
                    Key Benefits of Our {title} Service:
                  </h2>
                  <ul className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 mt-3 rounded-full bg-[#ff813a]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-xl">{benefit.title}:</h3>
                          <p className="text-gray-600 text-lg">{benefit.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Browse services
                </h2>
                <div className="space-y-2">
                  {relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block text-gray-700 bg-gray-50 hover:bg-[#ff813a] hover:text-white px-4 py-2 rounded transition-all duration-200 text-lg"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Have Additional Questions?
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 italic text-lg">47 Macquarie Street, Gracemere, Queensland 4702</p>
                  <p className="text-[#ff813a] text-lg">+61 455 365 528</p>
                  <p className="text-[#ff813a] text-lg">ggranger@gmr1.com.au</p>
                  <Link
                    to="/contact"
                    className="inline-block bg-[#ff813a] text-white px-6 py-3 rounded-lg hover:bg-[#ff9a5f] transition-colors duration-200 text-lg"
                  >
                    Contact Us
                  </Link>
                  {logo && (
                    <img 
                      src={logo} 
                      alt="Service Logo" 
                      className="w-24 h-24 mx-auto mt-6 object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage; 