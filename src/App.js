import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TrainingSection from './components/TrainingSection';
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <TrainingSection />
      <ContactSection />
      <Footer />
      <main>
        {/* Autres sections à venir */}
      </main>
    </>
  );
}

export default App;
