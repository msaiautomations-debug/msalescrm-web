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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
