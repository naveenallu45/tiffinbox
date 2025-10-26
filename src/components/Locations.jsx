const Locations = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Text Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-8">
            {/* Small Heading */}
            <div className="text-yellow-400 text-sm sm:text-lg font-normal uppercase tracking-widest mb-4">
              OUR LOCATIONS
            </div>

            {/* Main Heading */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase leading-tight tracking-wide mb-6 sm:mb-8">
              <div>FIND US AT</div>
              <div>THESE</div>
              <div>CONVENIENT</div>
              <div>LOCATIONS</div>
            </h2>

            {/* Call to Action Button */}
            <button className="border border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 font-light hover:bg-white hover:text-black transition-colors flex items-center gap-2 mx-auto lg:mx-0 text-sm sm:text-base">
              Our Store
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Right side - Map */}
          <div className="flex-1 flex justify-center lg:justify-end lg:pl-8">
            {/* Map placeholder using herofood image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <img 
                src="/herofood.png" 
                alt="Map showing Tiffin Box locations"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
              
              {/* Map pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>

              {/* Address overlay */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-gray-900 bg-opacity-90 text-white p-2 sm:p-4 rounded-lg max-w-40 sm:max-w-none">
                <div className="text-xs sm:text-sm font-light">
                  <div className="font-medium text-sm sm:text-base">TIFFIN BOX</div>
                  <div>ALLERTON RD,</div>
                  <div>LIVERPOOL L25 7RE</div>
                  <div className="border-t border-gray-600 my-1 sm:my-2"></div>
                  <div className="text-yellow-400 cursor-pointer hover:text-yellow-300 text-xs sm:text-sm">
                    GET DIRECTION
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;