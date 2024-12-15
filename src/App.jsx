import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";

import "./App.css"

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home'
import Hotels from './components/Hotels';
import Agencies from './components/Agencies';
import OptionsHeader from './components/OptionsHeader';

const RouteWithTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
};

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Función que maneja el evento de scroll
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };

    // Agrega el listener al evento scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return showButton ? (
    <span onClick={scrollToTop} className='scrollToTop'>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg> */}
      <FaArrowUp></FaArrowUp>
    </span>
  ) : (
    <p>esperando</p>
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
            </Routes>
          </main>
            <div className='overlay-active'></div>
          <Footer />
          <ScrollToTopButton />
    </Router>
  )
}

export default App