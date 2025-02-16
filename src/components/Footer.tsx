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
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 text-[#ff813a] text-sm sm:text-base">
                <a href="/" className="hover:text-[#ff813a]/80">Home</a>
                <a href="/about" className="hover:text-[#ff813a]/80">About Us</a>
                <a href="/services" className="hover:text-[#ff813a]/80">Services</a>
                <a href="/history" className="hover:text-[#ff813a]/80">History</a>
                <a href="/blog" className="hover:text-[#ff813a]/80">Blog</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 