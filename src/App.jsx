import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import FeaturedMenu from './components/FeaturedMenu'
import OnlineOrders from './components/OnlineOrders'
import BookTable from './components/BookTable'
import WhyTiffinBox from './components/WhyTiffinBox'
import Chef from './components/Chef'
import Testimonials from './components/Testimonials'
import Locations from './components/Locations'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedMenu />
      <OnlineOrders />
      <BookTable />
      <WhyTiffinBox />
      <Chef />
      <Testimonials />
      <Locations />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App