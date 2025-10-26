const Gallery = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-yellow-400 text-sm sm:text-lg font-normal uppercase tracking-widest mb-4">
            INSTAGRAM
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase leading-tight tracking-wide">
            <div>JOIN OUR</div>
            <div>COMMUNITY</div>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {/* Image 1 - Community Photo */}
          <div className="aspect-square">
            <img 
              src="/community.png" 
              alt="Tiffin Box community"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Image 2 - Chef and Customer */}
          <div className="aspect-square">
            <img 
              src="/chif.png" 
              alt="Chef and customer interaction"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Image 3 - Family Portrait */}
          <div className="aspect-square">
            <img 
              src="/aboutus.png" 
              alt="Family dining at Tiffin Box"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Image 4 - Food Close-up */}
          <div className="aspect-square">
            <img 
              src="/aboutus.png" 
              alt="Delicious South Indian cuisine"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Gallery Description */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-white text-sm sm:text-base lg:text-lg font-light">
            Experience the authentic flavors and warm hospitality of The Tiffin Box
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
