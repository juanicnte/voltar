import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
    </Router>
  )
}

export default App