import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileStickyCTA from './components/MobileStickyCTA'
import WhatsAppButton from './components/WhatsAppButton'
import About from './sections/About'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Gallery from './sections/Gallery'
import Hero from './sections/Hero'
import MapSection from './sections/MapSection'
import Programs from './sections/Programs'
import ServiceArea from './sections/ServiceArea'
import Testimonials from './sections/Testimonials'

function App() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Achievements />
      <Gallery />
      <Testimonials />
      <Contact />
      <MapSection />
      <ServiceArea />
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </main>
  )
}

export default App
