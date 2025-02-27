import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#f1f3f6] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black">Granger Mechanical<br />Repairs PTY LTD Mining - Rural<br />- Civil</h2>
              <div className="h-1 w-20 sm:w-24 bg-[#ff813a] my-4 sm:my-6"></div>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-black italic">47 Macquarie Street, Gracemere, Queensland 4702</p>
                <p className="text-sm sm:text-base text-black italic">ADMIN@GMR.COM.AU</p>
                <p className="text-sm sm:text-base text-black italic">GGRANGER@GMR.COM.AU</p>
                <p className="text-sm sm:text-base text-black italic">BGRANGER@GMR.COM.AU</p>
              </div>
            </div>

            {/* Middle Column */}
            <div className="md:mt-0">
              <div className="h-1 w-20 sm:w-24 bg-[#ff813a] mb-4 sm:mb-6"></div>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-black italic">PH: +61 455 365 528</p>
                <p className="text-sm sm:text-base text-black italic">+61 455 365 506</p>
                <p className="text-sm sm:text-base text-black italic">ABN 18 620 759 195</p>
                <p className="text-sm sm:text-base text-black italic">ACN 620 759 195</p>
              </div>
            </div>

            {/* Right Column - Logo */}
            <div className="flex justify-center md:justify-end items-start">
              <img 
                src="/assets/images/logo.png" 
                alt="GMR Logo" 
                className="w-24 sm:w-32 h-24 sm:h-32 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-200 mt-12 sm:mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                © Granger Mechanical Repairs PTY LTD Mining - Rural - Civil
              </p>
              <div className="flex items-center gap-8">
                <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 text-[#ff813a] text-sm sm:text-base">
                  <a href="/" className="hover:text-[#ff813a]/80">Home</a>
                  <a href="/about" className="hover:text-[#ff813a]/80">About</a>
                  <a href="/services" className="hover:text-[#ff813a]/80">Services</a>
                  <a href="/careers" className="hover:text-[#ff813a]/80">Careers</a>
                  <a href="/contact" className="hover:text-[#ff813a]/80">Contact</a>
                </div>
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/grangermechanicalrepairs" target="_blank" rel="noopener noreferrer" className="text-[#ff813a] hover:text-[#ff813a]/80">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/granger-mechanical-repairs" target="_blank" rel="noopener noreferrer" className="text-[#ff813a] hover:text-[#ff813a]/80">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 