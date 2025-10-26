const OnlineOrders = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background decorative lines */}
      <div className="absolute bottom-0 right-0 w-32 h-16 sm:w-64 sm:h-32 opacity-10">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <path d="M20,80 Q60,40 100,80 Q140,40 180,80" stroke="#fbbf24" strokeWidth="2" fill="none"/>
          <path d="M10,70 Q50,30 90,70 Q130,30 170,70" stroke="#fbbf24" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side - Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left lg:pr-8">
          {/* Small Heading */}
          <div className="text-yellow-400 text-sm font-medium uppercase tracking-wider mb-4">
            ONLINE ORDER
          </div>

          {/* Main Heading */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight mb-6 sm:mb-8">
            <div>FRESH SOUTH</div>
            <div>INDIAN FLAVORS</div>
            <div>DELIVERED!</div>
          </h2>

          {/* Paragraph Text */}
          <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time.
          </p>

          {/* Call to Action Button */}
          <button className="border border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 font-medium hover:bg-white hover:text-black transition-colors flex items-center gap-2 mx-auto lg:mx-0 text-sm sm:text-base">
            Order Online
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Right side - Visual Elements */}
        <div className="flex-1 flex flex-col items-center lg:items-end space-y-6 sm:space-y-8">
          {/* Food Image */}
          <div className="relative">
            <img 
              src="/herofood.png" 
              alt="Fresh South Indian dish"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Delivery Scooter Illustration */}
          <div className="w-48 h-36 sm:w-64 sm:h-48 flex items-center justify-center">
            <svg viewBox="0 0 200 150" className="w-full h-full text-yellow-400">
              {/* Scooter */}
              <path d="M50,100 Q60,80 80,85 Q100,90 120,85 Q140,80 150,100" stroke="currentColor" strokeWidth="3" fill="none"/>
              
              {/* Wheels */}
              <circle cx="70" cy="110" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="130" cy="110" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
              
              {/* Delivery box */}
              <rect x="140" y="70" width="40" height="30" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M140,70 L150,60 L180,60 L190,70" stroke="currentColor" strokeWidth="2" fill="none"/>
              
              {/* Person */}
              <circle cx="100" cy="60" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M100,72 L100,90" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M100,80 L85,95" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M100,80 L115,95" stroke="currentColor" strokeWidth="2" fill="none"/>
              
              {/* Helmet */}
              <path d="M88,55 Q100,50 112,55" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineOrders;
