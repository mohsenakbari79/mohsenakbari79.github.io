import React, { useState } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './i18n';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState('rtl');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDirection(lang === 'fa' ? 'rtl' : 'ltr');
  };

  return (
    <div className="App">
      <ThemeProvider dir={direction}>
        <Router>
          <Header changeLanguage={changeLanguage} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
