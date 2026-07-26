import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Solutions from './sections/Solutions'
import Formations from './sections/Formations'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <Formations />
      {/* Section Contact à venir */}
      <Footer />
    </>
  )
}
