import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/assets/images/logo.png" 
              alt="GMR-1" 
              className="h-12 w-auto"
            />
            <h3 className="text-xl font-bold">Granger Mechanical Repairs PTY LTD</h3>
            <p className="text-gray-400">Mining - Rural - Civil</p>
            <p className="text-gray-400">ABN 18 620 759 195</p>
            <p className="text-gray-400">ACN 620 759 195</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Po Box 50</p>
              <p className="text-gray-400">Westwood Qld 4702</p>
              <a href="tel:+61455365528" className="text-gray-400 hover:text-[#ff813a] block transition-colors duration-300">
                Ph: +61 455 365 528
              </a>
              <a href="tel:+61455365506" className="text-gray-400 hover:text-[#ff813a] block transition-colors duration-300">
                +61 455 365 506
              </a>
            </div>
          </div>

          {/* Email Contacts */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Email</h3>
            <div className="space-y-2">
              <a href="mailto:admin@gmr1.com.au" className="text-gray-400 hover:text-[#ff813a] block">admin@gmr1.com.au</a>
              <a href="mailto:ggranger@gmr1.com.au" className="text-gray-400 hover:text-[#ff813a] block">ggranger@gmr1.com.au</a>
              <a href="mailto:bgranger@gmr1.com.au" className="text-gray-400 hover:text-[#ff813a] block">bgranger@gmr1.com.au</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="text-gray-400 hover:text-[#ff813a] block">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-[#ff813a] block">About</Link>
              <Link to="/services" className="text-gray-400 hover:text-[#ff813a] block">Services</Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#ff813a] block">Contact</Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Granger Mechanical Repairs PTY LTD Mining - Rural - Civil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 