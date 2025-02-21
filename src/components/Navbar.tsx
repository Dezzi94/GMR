import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowServicesDropdown(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      {/* Desktop Navbar */}
      <div className="hidden md:block border-b">
        <div className="max-w-[2000px] mx-auto px-2">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0 pl-4">
              <Link to="/" className="block">
                <img src="/assets/images/logo.png" alt="GMR Logo" className="h-14 w-auto" />
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="flex items-center space-x-10">
              <Link 
                to="/" 
                className={`relative py-2 text-lg font-medium group ${isActive('/') ? 'text-[#ff813a]' : 'text-gray-800 hover:text-[#ff813a]'} transition-colors duration-200`}
              >
                <span className="relative">
                  Home
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ease-out ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </span>
              </Link>
              <div 
                className="relative group"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <Link 
                  to="/services" 
                  className={`flex items-center space-x-1 py-2 text-lg font-medium ${isActive('/services') ? 'text-[#ff813a]' : 'text-gray-800 hover:text-[#ff813a]'} transition-colors duration-200`}
                >
                  <span className="relative">
                    Services
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ease-out ${isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </span>
                  <svg 
                    className={`w-4 h-4 transform transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {/* Services Dropdown */}
                <AnimatePresence>
                  {showServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-[700px] bg-white rounded-lg shadow-lg py-6 z-50"
                    >
                      <div className="px-8 py-2">
                        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                          <Link 
                            to="/services/component-rebuild" 
                            className="block text-[17px] text-gray-700 hover:text-[#ff813a] transition-colors duration-200"
                          >
                            — Component Rebuild
                          </Link>
                          <Link 
                            to="/services/machine-assembly" 
                            className="block text-[17px] text-gray-700 hover:text-[#ff813a] transition-colors duration-200"
                          >
                            — Machine Assembly
                          </Link>
                          <Link 
                            to="/services/contract-project-management" 
                            className="block text-[17px] text-gray-700 hover:text-[#ff813a] transition-colors duration-200"
                          >
                            — Contract Project Management
                          </Link>
                          <Link 
                            to="/services/contract-supervision" 
                            className="block text-[17px] text-gray-700 hover:text-[#ff813a] transition-colors duration-200"
                          >
                            — Contract Supervision
                          </Link>
                          <Link 
                            to="/services/mobilisation" 
                            className="block text-[17px] text-gray-700 hover:text-[#ff813a] transition-colors duration-200"
                          >
                            — Mobilisation, Demobilisation And Relocation Of Machinery
                          </Link>
                          <Link 
                            to="/services/shutdown" 
                            className="block text-[17px] text-gray-700 hover:text-[#ff813a] transition-colors duration-200"
                          >
                            — Shutdown And Major Maintenance Work
                          </Link>
                          <Link 
                            to="/services/long-term-labour" 
                            className="block text-[17px] text-gray-700 hover:text-[#ff813a] transition-colors duration-200"
                          >
                            — Long Term Labour Hire
                          </Link>
                          <Link 
                            to="/services/short-term-labour" 
                            className="block text-[17px] text-gray-700 hover:text-[#ff813a] transition-colors duration-200"
                          >
                            — Short Term Labour Hire
                          </Link>
                          <Link 
                            to="/services/mechanical-repairs" 
                            className="block text-[17px] text-gray-700 hover:text-[#ff813a] transition-colors duration-200 col-span-2"
                          >
                            — Mechanical Repairs And Maintenance
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link 
                to="/about" 
                className={`relative py-2 text-lg font-medium group ${isActive('/about') ? 'text-[#ff813a]' : 'text-gray-800 hover:text-[#ff813a]'} transition-colors duration-200`}
              >
                <span className="relative">
                  About
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ease-out ${isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </span>
              </Link>
              <Link 
                to="/careers" 
                className={`relative py-2 text-lg font-medium group ${isActive('/careers') ? 'text-[#ff813a]' : 'text-gray-800 hover:text-[#ff813a]'} transition-colors duration-200`}
              >
                <span className="relative">
                  Careers
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ease-out ${isActive('/careers') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </span>
              </Link>
              <Link 
                to="/contact" 
                className={`relative py-2 text-lg font-medium group ${isActive('/contact') ? 'text-[#ff813a]' : 'text-gray-800 hover:text-[#ff813a]'} transition-colors duration-200`}
              >
                <span className="relative">
                  Contact Us
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ease-out ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </span>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-8 pr-4">
              <Link 
                to="/contact" 
                className="relative py-2 text-lg font-medium group text-[#ff813a] hover:text-[#ff813a] transition-colors duration-200"
              >
                <span className="relative flex items-center">
                  <span>Get A Quote</span>
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
                </span>
              </Link>
              <a 
                href="tel:0455365528" 
                className="text-[#ff813a] flex items-center"
              >
                <svg className="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">0455 365 528</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-white text-[#ff813a] px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <Link to="/" className="block">
            <img src="/assets/images/logo.png" alt="GMR Logo" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            {/* Email Icon */}
            <a href="mailto:ADMIN@GMR.COM.AU" className="text-[#ff813a]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>

            {/* Phone Number with Icon */}
            <a href="tel:0455365528" className="text-[#ff813a] flex items-center">
              <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm font-medium">0455 365 528</span>
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#ff813a] focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 py-2 pb-8 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 text-base ${isActive('/') ? 'bg-[#ff813a] text-white rounded-md' : 'text-gray-800'} hover:text-[#ff813a]`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 text-base ${isActive('/about') ? 'bg-[#ff813a] text-white rounded-md' : 'text-gray-800'} hover:text-[#ff813a]`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 text-base ${isActive('/services') ? 'bg-[#ff813a] text-white rounded-md' : 'text-gray-800'} hover:text-[#ff813a]`}
              >
                Services
              </Link>
              <Link 
                to="/careers" 
                className={`block px-3 py-2 text-base ${isActive('/careers') ? 'bg-[#ff813a] text-white rounded-md' : 'text-gray-800'} hover:text-[#ff813a]`}
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 text-base ${isActive('/contact') ? 'bg-[#ff813a] text-white rounded-md' : 'text-gray-800'} hover:text-[#ff813a]`}
              >
                Contact Us
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 mt-6 mb-2 text-base border border-[#ff813a] rounded-md text-[#ff813a] flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get A Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;