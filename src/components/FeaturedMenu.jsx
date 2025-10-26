const FeaturedMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "CHICKEN CHETTINAD",
      price: "£9.99",
      image: "/herofood.png"
    },
    {
      id: 2,
      name: "CHICKEN CHETTINAD",
      price: "£9.99",
      image: "/herofood.png"
    },
    {
      id: 3,
      name: "CHICKEN CHETTINAD",
      price: "£9.99",
      image: "/herofood.png"
    }
  ];

  const handleExploreMenu = () => {
    // TODO: Navigate to full menu page
    console.log('Explore menu clicked');
  };

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="text-gray-400 text-4xl sm:text-6xl lg:text-8xl font-bold text-center">
          <div className="text-xs sm:text-sm">the</div>
          <div className="text-3xl sm:text-4xl lg:text-6xl font-black">tiffin</div>
          <div className="text-xs sm:text-sm">box.</div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-yellow-400 text-sm font-sans font-semibold uppercase tracking-widest mb-4">
            FEATURED MENU
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-tight tracking-tight">
            <div>DISCOVER OUR MOST</div>
            <div>POPULAR DISHES</div>
          </h2>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {menuItems.map((item) => (
            <div key={item.id} className="text-center">
              <div className="mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-white text-base sm:text-lg font-sans font-bold uppercase mb-2 tracking-wide">
                {item.name}
              </h3>
              <p className="text-white text-lg sm:text-xl font-sans font-semibold tracking-wide">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button 
            onClick={handleExploreMenu}
            className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-sans font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 mx-auto text-base sm:text-lg tracking-wide"
          >
            Explore Full Menu
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
