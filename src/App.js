import React, { useState } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './i18n';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

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
        <Header changeLanguage={changeLanguage} />
        <Resume />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
