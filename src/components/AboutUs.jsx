const AboutUs = () => {
  const handleKnowMoreClick = () => {
    // TODO: Add navigation to about page or modal
    console.log('Know more clicked');
  };

  return (
    <section className="flex flex-col lg:flex-row h-auto lg:h-screen">
      {/* Image Section */}
      <div className="flex-1 relative h-64 sm:h-80 lg:h-full">
        <img 
          src="/aboutus.png" 
          alt="The Tiffin Box team - Authentic South Indian restaurant staff"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 bg-orange-400 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-0">
        <div>
          {/* Section Label */}
          <div className="text-black text-sm sm:text-lg font-sans font-semibold uppercase tracking-widest mb-4 sm:mb-8">
            ABOUT US
          </div>

          {/* Main Heading */}
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-tight mb-6 sm:mb-8 tracking-tight">
            <div>EXPERIENCE</div>
            <div>AUTHENTIC</div>
            <div>SOUTH INDIAN</div>
            <div>FLAVORS AT THE</div>
            <div>TIFFIN BOX</div>
          </h2>

          {/* Action Button */}
          <button 
            onClick={handleKnowMoreClick}
            className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 font-sans font-semibold hover:bg-black hover:text-orange-400 transition-all duration-300 flex items-center gap-2 rounded-sm text-base sm:text-lg tracking-wide"
          >
            Know More
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;