import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const serviceItems = [
    { path: '/services/component-rebuild', label: 'Component Rebuild' },
    { path: '/services/contract-project-management', label: 'Contract Project Management' },
    { path: '/services/mobilisation', label: 'Mobilisation, Demobilisation And Relocation Of Machinery' },
    { path: '/services/long-term-labour', label: 'Long Term Labour Hire' },
    { path: '/services/mechanical-repairs', label: 'Mechanical Repairs And Maintenance' },
    { path: '/services/machine-assembly', label: 'Machine Assembly' },
    { path: '/services/contract-supervision', label: 'Contract Supervision' },
    { path: '/services/shutdown', label: 'Shutdown And Major Maintenance Work' },
    { path: '/services/short-term-labour', label: 'Short Term Labour Hire' },
  ];

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' },
  ] as const;

  const NavLink: React.FC<NavLinkProps> = ({ to, children, className, onClick }) => (
    <Link
      to={to}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );

  return (
    <div className="bg-white my-4">
      <nav className="sticky top-0 z-50 bg-white border-y border-gray-200/75">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="block">
                <img
                  src="/assets/images/logo.png"
                  alt="GMR"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center">
              <div className="flex space-x-12">
                {/* Home Link */}
                <Link
                  to="/"
                  className={`relative group py-2 text-lg tracking-wide ${
                    location.pathname === '/'
                      ? 'text-[#ff813a] font-medium'
                      : 'text-gray-700 hover:text-[#ff813a]'
                  } transition-colors duration-300`}
                >
                  Home
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ${
                      location.pathname === '/' ? 'scale-x-100' : 'scale-x-0'
                    } group-hover:scale-x-100`} 
                  />
                </Link>

                {/* Services Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center">
                    <Link
                      to="/services"
                      className={`py-2 text-lg tracking-wide ${
                        location.pathname === '/services'
                          ? 'text-[#ff813a] font-medium'
                          : 'text-gray-700 hover:text-[#ff813a]'
                      } transition-colors duration-300`}
                    >
                      Services
                    </Link>
                    <button
                      className="ml-2 focus:outline-none"
                      aria-label="Toggle services menu"
                    >
                      <svg
                        className={`h-5 w-5 transform transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180' : ''
                        } ${
                          location.pathname === '/services'
                            ? 'text-[#ff813a]'
                            : 'text-gray-700 group-hover:text-[#ff813a]'
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-1 w-[800px] bg-white border border-gray-100 shadow-lg transition-all duration-200 py-6 ${
                      servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      <Link
                        to="/services/component-rebuild"
                        className="px-8 py-2 text-gray-900 hover:text-[#ff813a] transition-colors duration-200 text-[15px]"
                        onClick={() => setServicesOpen(false)}
                      >
                        — Component Rebuild
                      </Link>
                      <Link
                        to="/services/machine-assembly"
                        className="px-8 py-2 text-gray-900 hover:text-[#ff813a] transition-colors duration-200 text-[15px]"
                        onClick={() => setServicesOpen(false)}
                      >
                        — Machine Assembly
                      </Link>
                      <Link
                        to="/services/contract-project-management"
                        className="px-8 py-2 text-gray-900 hover:text-[#ff813a] transition-colors duration-200 text-[15px]"
                        onClick={() => setServicesOpen(false)}
                      >
                        — Contract Project Management
                      </Link>
                      <Link
                        to="/services/contract-supervision"
                        className="px-8 py-2 text-gray-900 hover:text-[#ff813a] transition-colors duration-200 text-[15px]"
                        onClick={() => setServicesOpen(false)}
                      >
                        — Contract Supervision
                      </Link>
                      <Link
                        to="/services/mobilisation"
                        className="px-8 py-2 text-gray-900 hover:text-[#ff813a] transition-colors duration-200 text-[15px]"
                        onClick={() => setServicesOpen(false)}
                      >
                        — Mobilisation, Demobilisation And Relocation Of Machinery
                      </Link>
                      <Link
                        to="/services/shutdown"
                        className="px-8 py-2 text-gray-900 hover:text-[#ff813a] transition-colors duration-200 text-[15px]"
                        onClick={() => setServicesOpen(false)}
                      >
                        — Shutdown And Major Maintenance Work
                      </Link>
                      <Link
                        to="/services/long-term-labour"
                        className="px-8 py-2 text-gray-900 hover:text-[#ff813a] transition-colors duration-200 text-[15px]"
                        onClick={() => setServicesOpen(false)}
                      >
                        — Long Term Labour Hire
                      </Link>
                      <Link
                        to="/services/short-term-labour"
                        className="px-8 py-2 text-gray-900 hover:text-[#ff813a] transition-colors duration-200 text-[15px]"
                        onClick={() => setServicesOpen(false)}
                      >
                        — Short Term Labour Hire
                      </Link>
                      <Link
                        to="/services/mechanical-repairs"
                        className="px-8 py-2 text-gray-900 hover:text-[#ff813a] transition-colors duration-200 text-[15px]"
                        onClick={() => setServicesOpen(false)}
                      >
                        — Mechanical Repairs And Maintenance
                      </Link>
                    </div>
                  </div>
                </div>

                {/* About and Contact Links */}
                <Link
                  to="/about"
                  className={`relative group py-2 text-lg tracking-wide ${
                    location.pathname === '/about'
                      ? 'text-[#ff813a] font-medium'
                      : 'text-gray-700 hover:text-[#ff813a]'
                  } transition-colors duration-300`}
                >
                  About
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ${
                      location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0'
                    } group-hover:scale-x-100`} 
                  />
                </Link>

                {/* Careers Link */}
                <Link
                  to="/careers"
                  className={`relative group py-2 text-lg tracking-wide ${
                    location.pathname === '/careers'
                      ? 'text-[#ff813a] font-medium'
                      : 'text-gray-700 hover:text-[#ff813a]'
                  } transition-colors duration-300`}
                >
                  Careers
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ${
                      location.pathname === '/careers' ? 'scale-x-100' : 'scale-x-0'
                    } group-hover:scale-x-100`} 
                  />
                </Link>

                <Link
                  to="/contact"
                  className={`relative group py-2 text-lg tracking-wide ${
                    location.pathname === '/contact'
                      ? 'text-[#ff813a] font-medium'
                      : 'text-gray-700 hover:text-[#ff813a]'
                  } transition-colors duration-300`}
                >
                  Contact Us
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ${
                      location.pathname === '/contact' ? 'scale-x-100' : 'scale-x-0'
                    } group-hover:scale-x-100`} 
                  />
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="hidden md:flex md:items-center space-x-12">
              <Link
                to="/contact"
                className="text-[#ff813a] hover:text-[#ff9a5f] font-medium text-lg tracking-wide transition-colors duration-300 border-b-2 border-transparent hover:border-[#ff813a] flex items-center gap-2"
              >
                Get A Quote
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </Link>
              <a 
                href="tel:0455365528" 
                className="text-[#ff813a] hover:text-[#ff9a5f] font-medium text-lg tracking-wide transition-colors duration-300"
              >
                0455 365 528
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-6">
              <Link
                to="/contact"
                className="text-[#ff813a] hover:text-[#ff9a5f] font-medium text-base border-b-2 border-transparent hover:border-[#ff813a] transition-colors duration-300 flex items-center gap-2"
              >
                Get A Quote
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </Link>
              <a 
                href="tel:0455365528" 
                className="text-[#ff813a] hover:text-[#ff9a5f] font-medium text-base"
              >
                0455 365 528
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#ff813a] focus:outline-none transition-colors duration-300"
              >
                <span className="sr-only">Open main menu</span>
                <div className="h-6 w-6 flex flex-col justify-around">
                  <span className={`h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-3 pb-4 space-y-2 bg-gray-50 border-t border-gray-100">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                location.pathname === '/'
                  ? 'bg-[#ff813a] text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-[#ff813a]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Menu */}
            <div className="space-y-1">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                  location.pathname.includes('/services')
                    ? 'bg-[#ff813a] text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#ff813a]'
                }`}
              >
                <span>Services</span>
                <svg
                  className={`h-5 w-5 transform transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Mobile Services Dropdown */}
              <div className={`pl-4 space-y-1 ${servicesOpen ? 'block' : 'hidden'}`}>
                {serviceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-[14px] text-gray-600 hover:text-[#ff813a] rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-[#ff813a] text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#ff813a]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-white border-2 border-[#ff813a] text-[#ff813a] hover:bg-[#ff813a] hover:text-white px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span>Get A Quote</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 