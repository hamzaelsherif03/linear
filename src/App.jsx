import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntegrationsSection from './components/IntegrationsSection';
import TimelineSection from './components/TimelineSection';
import FeaturesSection from './components/FeaturesSection';
import UnderHoodSection from './components/UnderHoodSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <IntegrationsSection />
        <TimelineSection />
        <FeaturesSection />
        <UnderHoodSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;