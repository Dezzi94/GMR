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
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
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
    <nav className="sticky top-0 z-50 bg-white shadow-md font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="/assets/images/logo.png"
                alt="logo"
                className="w-32"
              />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`group relative py-2 ${
                  location.pathname === item.path
                    ? 'text-[#ff813a] font-semibold'
                    : 'text-gray-700 hover:text-[#ff813a]'
                } transition-colors duration-300 text-[15px] tracking-wide`}
                onClick={() => setIsOpen(false)}
              >
                <span className={`${
                  location.pathname === item.path
                    ? 'text-[#ff813a] font-semibold'
                    : 'text-gray-700 hover:text-[#ff813a]'
                } transition-colors duration-300 text-[15px] tracking-wide`}>
                  {item.label}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ff813a] transform origin-left transition-transform duration-300 ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`} />
              </NavLink>
            ))}

            {/* CTA Section */}
            <div className="flex items-center space-x-8 ml-10">
              <a 
                href="tel:0455365528" 
                className="text-gray-700 hover:text-[#ff813a] font-medium transition-colors duration-300 text-[15px] tracking-wide"
              >
                0455 365 528
              </a>
              <NavLink
                to="/contact"
                className="bg-white border-2 border-[#ff813a] text-[#ff813a] hover:bg-[#ff813a] hover:text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 text-[15px]"
                onClick={() => setIsOpen(false)}
              >
                <span>Get A Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-6">
            <a 
              href="tel:0455365528" 
              className="text-gray-700 hover:text-[#ff813a] font-medium transition-colors duration-300 text-[15px]"
            >
              0455 365 528
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#ff813a] hover:bg-gray-50 focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <div className="h-6 w-6 flex flex-col justify-around">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-6 bg-current transform origin-center transition-all duration-300"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="h-0.5 w-6 bg-current transition-all duration-300"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-6 bg-current transform origin-center transition-all duration-300"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-gray-50"
      >
        <div className="px-4 pt-3 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? 'bg-[#ff813a] text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-[#ff813a]'
              } block px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="flex items-center space-x-2 bg-white border-2 border-[#ff813a] text-[#ff813a] hover:bg-[#ff813a] hover:text-white px-4 py-3 rounded-lg text-[15px] font-semibold transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span>Get A Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </NavLink>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 