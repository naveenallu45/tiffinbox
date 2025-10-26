import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black relative overflow-hidden">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Hamburger Menu */}
        <button 
          onClick={toggleMenu}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors z-50"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col space-y-1">
            <div className="w-4 h-0.5 bg-orange-300"></div>
            <div className="w-4 h-0.5 bg-orange-300"></div>
          </div>
        </button>

        {/* View Menu Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-black font-sans font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base tracking-wide">
          <span className="hidden sm:inline">View Menu</span>
          <span className="sm:hidden">Menu</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button 
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white text-2xl"
            aria-label="Close menu"
          >
            ×
          </button>
          
          <div className="text-center space-y-6">
            <a href="#home" className="block text-white text-2xl font-sans font-medium hover:text-orange-300 transition-all duration-300 tracking-wide" onClick={closeMenu}>
              Home
            </a>
            <a href="#menu" className="block text-white text-2xl font-sans font-medium hover:text-orange-300 transition-all duration-300 tracking-wide" onClick={closeMenu}>
              Menu
            </a>
            <a href="#about" className="block text-white text-2xl font-sans font-medium hover:text-orange-300 transition-all duration-300 tracking-wide" onClick={closeMenu}>
              About Us
            </a>
            <a href="#contact" className="block text-white text-2xl font-sans font-medium hover:text-orange-300 transition-all duration-300 tracking-wide" onClick={closeMenu}>
              Contact
            </a>
            <a href="#order" className="block text-white text-2xl font-sans font-medium hover:text-orange-300 transition-all duration-300 tracking-wide" onClick={closeMenu}>
              Order Online
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;