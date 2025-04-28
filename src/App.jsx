import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import AppointmentForm from './components/AppointmentForm';
import InstagramGallery from './components/InstagramGallery';
import './App.css';

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <Testimonial />
      <AppointmentForm />
      <InstagramGallery />
      <Footer />
    </div>
  );
}
export default App;