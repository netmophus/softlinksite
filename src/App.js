// import React from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import ServicesSection from './components/ServicesSection';
// import ProjectsSection from './components/ProjectsSection';
// import TeamSection from './components/TeamSection';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';
// import TrainingSection from './components/TrainingSection';

// function App() {
//   return (
//     <>
//       <Header />
//       <HeroSection />
//       <ServicesSection />
//       <ProjectsSection />
//       <TeamSection />
//       <TrainingSection />
//       <ContactSection />
//       <Footer />
//       <main>
//         {/* Autres sections à venir */}
//       </main>
//     </>
//   );
// }

// export default App;





import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import TrainingSection from './components/TrainingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InscriptionPage from './pages/InscriptionPage'; // ✅ import de ta page d'inscription
import ModalListeInscriptions from './components/ModalListeInscriptions';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-YNG4CMY4GN', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}



function HomePage() {
  const [openListModal, setOpenListModal] = useState(false);

  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <TrainingSection />
      <ContactSection />
     <Footer onOpenList={() => setOpenListModal(true)} />
<ModalListeInscriptions open={openListModal} onClose={() => setOpenListModal(false)} />

    </>
  );
}

function App() {
  return (
    <Router>
      <RouteTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inscription" element={<InscriptionPage />} />
      </Routes>
    </Router>
  );
}


export default App;
