const BookTable = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side - Image */}
        <div className="flex-1 mb-8 lg:mb-0 lg:pr-8">
          <img 
            src="/herofood.png" 
            alt="Elegant dining table setup at The Tiffin Box"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Right side - Text Content */}
        <div className="flex-1 text-center lg:text-left lg:pl-8">
          {/* Small Heading */}
          <div className="text-yellow-400 text-sm font-medium uppercase tracking-wider mb-4">
            BOOK TABLE
          </div>

          {/* Main Heading */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight mb-6 sm:mb-8">
            <div>PLANNING A MEAL</div>
            <div>AT THE</div>
            <div>TIFFIN BOX?</div>
          </h2>

          {/* Paragraph Text */}
          <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time.
          </p>

          {/* Call to Action Button */}
          <button className="border border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 font-medium hover:bg-white hover:text-black transition-colors flex items-center gap-2 mx-auto lg:mx-0 text-sm sm:text-base">
            Book Table
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookTable;