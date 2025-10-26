const WhyTiffinBox = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-yellow-400 text-sm font-sans font-semibold uppercase tracking-widest mb-4">
            WHY TIFFIN BOX
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-tight tracking-tight">
            OUR SPECIALTIES
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex-1 space-y-6 sm:space-y-8">
            {/* AUTHENTIC SOUTH INDIAN CUISINE */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-sm sm:text-base lg:text-lg font-sans font-bold uppercase mb-2 leading-tight tracking-wide">
                AUTHENTIC SOUTH INDIAN CUISINE
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base font-sans leading-relaxed">
                Our dishes are prepared using traditional recipes to bring you the true flavors of South India.
              </p>
            </div>

            {/* EXPERT CHEFS */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-sm sm:text-base lg:text-lg font-sans font-bold uppercase mb-2 leading-tight tracking-wide">
                EXPERT CHEFS
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base font-sans leading-relaxed">
                Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.
              </p>
            </div>

            {/* FRESH, QUALITY INGREDIENTS */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-sm sm:text-base lg:text-lg font-sans font-bold uppercase mb-2 leading-tight tracking-wide">
                FRESH, QUALITY INGREDIENTS
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base font-sans leading-relaxed">
                We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal.
              </p>
            </div>
          </div>

          {/* Center - Food Image */}
          <div className="flex-shrink-0 order-first lg:order-none">
            <img 
              src="/herofood.png" 
              alt="Traditional South Indian specialties"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6 sm:space-y-8">
            {/* COMFORTABLE DINING EXPERIENCE */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-sm sm:text-base lg:text-lg font-sans font-bold uppercase mb-2 leading-tight tracking-wide">
                COMFORTABLE DINING EXPERIENCE
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base font-sans leading-relaxed">
                Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.
              </p>
            </div>

            {/* HEALTH-CONSCIOUS OPTIONS */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-sm sm:text-base lg:text-lg font-sans font-bold uppercase mb-2 leading-tight tracking-wide">
                HEALTH-CONSCIOUS OPTIONS
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base font-sans leading-relaxed">
                From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor.
              </p>
            </div>

            {/* SEAMLESS ONLINE ORDERING & DELIVERY */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-sm sm:text-base lg:text-lg font-sans font-bold uppercase mb-2 leading-tight tracking-wide">
                SEAMLESS ONLINE ORDERING & DELIVERY
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base font-sans leading-relaxed">
                Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTiffinBox;
