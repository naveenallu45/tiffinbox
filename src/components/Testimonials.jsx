const Testimonials = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-yellow-400 text-lg font-normal uppercase tracking-widest mb-4">
            TESTIMONIAL
          </div>
          <h2 className="text-white text-5xl md:text-6xl font-light uppercase leading-tight tracking-wide">
            WHAT OUR CUSTOMERS SAYS
          </h2>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Review 1 */}
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-white text-sm leading-relaxed mb-4 font-light">
              Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back. We booked private dining for our anniversary and it was perfect.
            </p>
            <div className="flex items-center">
              <img 
                src="/herofood.png" 
                alt="Anna Mathew"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-white font-light">Anna Mathew</p>
                <p className="text-gray-400 text-sm font-light">one day ago</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-white text-sm leading-relaxed mb-4 font-light">
              The Tiffin Box exceeded all our expectations! The authentic South Indian flavors brought back memories of home. The service was impeccable and the atmosphere was warm and welcoming.
            </p>
            <div className="flex items-center">
              <img 
                src="/herofood.png" 
                alt="Gerrin Tom"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-white font-light">Gerrin Tom</p>
                <p className="text-gray-400 text-sm font-light">two days ago</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-white text-sm leading-relaxed mb-4 font-light">
              Amazing food and excellent service! The online ordering was seamless and delivery was fast. The quality of ingredients really shows in every dish. Highly recommended!
            </p>
            <div className="flex items-center">
              <img 
                src="/herofood.png" 
                alt="Mery Elza"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-white font-light">Mery Elza</p>
                <p className="text-gray-400 text-sm font-light">three days ago</p>
              </div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-white text-sm leading-relaxed mb-4 font-light">
              The Tiffin Box has become our go-to restaurant for authentic South Indian cuisine. The flavors are incredible and the staff is always friendly. The online ordering system is very convenient.
            </p>
            <div className="flex items-center">
              <img 
                src="/herofood.png" 
                alt="David Kumar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-white font-light">David Kumar</p>
                <p className="text-gray-400 text-sm font-light">one week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
