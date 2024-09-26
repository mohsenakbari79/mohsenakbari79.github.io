import React from 'react';
import './App.css';
import './i18n'; 
import Header from './components/Header';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
