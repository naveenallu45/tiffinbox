const Footer = () => {
  return (
    <footer className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4">
            {/* Tiffin carrier icon */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <div className="text-white text-center">
              <div className="text-xs sm:text-sm font-light">the</div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">tiffin</div>
              <div className="text-xs sm:text-sm font-light">box.</div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-white text-base sm:text-lg font-light uppercase tracking-widest mb-4 sm:mb-6">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="flex-1 w-full sm:w-auto">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-2 focus:border-white focus:outline-none text-sm sm:text-base"
              />
            </div>
            <button className="border border-white text-white px-4 sm:px-6 py-2 font-light hover:bg-white hover:text-black transition-colors flex items-center gap-2 text-sm sm:text-base">
              Subscribe
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-white text-base sm:text-lg font-light uppercase tracking-widest mb-4 sm:mb-6">
            CONTACT U
          </h3>
          <div className="space-y-2 text-white font-light text-sm sm:text-base">
            <p>0151 245 1500</p>
            <p>INFO@TIFFINBOX.CO.UK</p>
            <p>ALLERTON RD. LIVERPOOL L25 7RE</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <nav className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
            <a href="#" className="text-white font-light hover:text-yellow-400 transition-colors text-sm sm:text-base">
              MENU
            </a>
            <div className="hidden sm:block text-gray-600">|</div>
            <a href="#" className="text-white font-light hover:text-yellow-400 transition-colors text-sm sm:text-base">
              ORDER ONLINE
            </a>
            <div className="hidden sm:block text-gray-600">|</div>
            <a href="#" className="text-white font-light hover:text-yellow-400 transition-colors text-sm sm:text-base">
              BOOK A TABLE
            </a>
            <div className="hidden sm:block text-gray-600">|</div>
            <a href="#" className="text-white font-light hover:text-yellow-400 transition-colors text-sm sm:text-base">
              ABOUT US
            </a>
            <div className="hidden sm:block text-gray-600">|</div>
            <a href="#" className="text-white font-light hover:text-yellow-400 transition-colors text-sm sm:text-base">
              CONTACT U
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
