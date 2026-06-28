import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Navigation from './components/navigation';
import Hero from './components/hero';
import TrustBar from './components/trustbar';
import Testimonials from './components/testimonials';
import HowItWorks from './components/howitworks';
import Eligibility from './components/eligiblity';
import Calculator from './components/calculator';
import UseCases from './components/usecases';
import AppFeatures from './components/appfeatures';
import Footer from './components/footer';
import DemoPage from './components/demo-page';
import InfoPage from './components/info-page';

const Landing = () => (
  <div className="App">
    <Navigation />
    <Hero />
    <Testimonials />
    <TrustBar />
    <HowItWorks />
    <Eligibility />
    <Calculator />
    <UseCases />
    <AppFeatures />
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/privacy" element={<InfoPage type="privacy" />} />
        <Route path="/terms" element={<InfoPage type="terms" />} />
        <Route path="/blog" element={<InfoPage type="blog" />} />
        <Route path="/about" element={<InfoPage type="about" />} />
        <Route path="/faqs" element={<InfoPage type="faqs" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
