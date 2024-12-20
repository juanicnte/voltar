import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import "./App.css"

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home'
import Hotels from './components/Hotels';
import Agencies from './components/Agencies';
import OptionsHeader from './components/OptionsHeader';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';

const RouteWithTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
};

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 50); // Mostrar después de 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`scrollToTop ${showButton ? 'visible' : ''}`}>
      <a href='https://wa.me/<543764239352>?text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20tus%20servicios' className="contact-header">
        <FaWhatsapp />
      </a>
      <FaArrowUp onClick={scrollToTop} />
    </div>
  );
};


function App() {
  return (
    <Router>
      <Header />
      <main>
        <OptionsHeader></OptionsHeader>
        <Routes>
          <Route path="/" element={<RouteWithTitle title="Home - Voltar"><Home /></RouteWithTitle>} />
          <Route path="/hoteles" element={<RouteWithTitle title="Hoteles - Voltar"><Hotels /></RouteWithTitle>} />
          <Route path="/agencias" element={<RouteWithTitle title="Agencias - Voltar"><Agencies /></RouteWithTitle>} />
          <Route path="/contacto" element={<RouteWithTitle title="Contacto - Voltar"><Contact /></RouteWithTitle>} />
          <Route path="/nosotros" element={<RouteWithTitle title="Sobre Nosotros - Voltar"><AboutUs /></RouteWithTitle>} />
        </Routes>
      </main>
      <div className='overlay-active'></div>
      <Footer />
      <ScrollToTopButton />
    </Router >
  )
}

export default App