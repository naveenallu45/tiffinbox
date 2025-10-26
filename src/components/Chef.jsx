const Chef = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-yellow-400 text-sm sm:text-lg font-normal uppercase tracking-widest mb-4">
            CHEF
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase leading-tight tracking-wide">
            OUR BRAND CHEF
          </h2>
        </div>

        {/* Chef Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Chef Image */}
          <div className="flex-1 relative mb-8 lg:mb-0 lg:pr-8">
            <img 
              src="/chif.png" 
              alt="Chef Jomon - Senior Chef at The Tiffin Box"
              className="w-full max-w-md mx-auto lg:mx-0 h-auto rounded-lg shadow-2xl"
            />
            
            {/* Stylized Signature */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-yellow-400 text-lg sm:text-xl lg:text-2xl font-bold italic transform rotate-12 opacity-80">
              Chef Jomon
            </div>
          </div>

          {/* Right side - Chef Details */}
          <div className="flex-1 text-center lg:text-left lg:pl-8">
            <div className="mb-6">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light uppercase mb-2 tracking-wide">
                CHEF JOMON
              </h3>
              <p className="text-yellow-400 text-base sm:text-lg lg:text-xl font-normal uppercase tracking-wider">
                senior chef at tiffin box
              </p>
            </div>

            <div className="space-y-4 text-white text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              <p>
                Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time.
              </p>
              <p>
                With years of experience in traditional South Indian cuisine, Chef Jomon brings authentic flavors and innovative techniques to every dish. His passion for quality ingredients and traditional cooking methods ensures that every meal at The Tiffin Box is a memorable culinary experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;