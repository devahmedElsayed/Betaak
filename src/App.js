import React, { useEffect } from 'react';

import './App.css';
import Home from './componant/page/Home';
import {  Routes, Route, HashRouter } from 'react-router-dom';
import NavbarB from "./componant/Navbar/Navbar";
import About from './componant/About/About';
import Property from './componant/property type/Property';
import PropertyList from './componant/PropertyList/PropertyList';
import Contact from './componant/Contact/Contact';
import Footer from './componant/Footer/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('btn_scroll');
      if (btn) {
        btn.style.display = window.scrollY >= 400 ? 'block' : 'none';
      }
    };

    const handleBtnClick = () => {
      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);
    const btn = document.getElementById('btn_scroll');
    if (btn) {
      btn.addEventListener('click', handleBtnClick);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (btn) {
        btn.removeEventListener('click', handleBtnClick);
      }
    };
  }, []);

  return (
    <div>
      <HashRouter>
        <NavbarB />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About category='About' />} />
          <Route path='/Property' element={<Property category='Property' />} />
          <Route path='/PropertyList' element={<PropertyList category='PropertyList' />} />
          <Route path='/contact' element={<Contact category='contact' />} />
        </Routes>
        <button id='btn_scroll'>^</button>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
