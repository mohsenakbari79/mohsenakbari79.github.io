import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
// import { useTranslation } from 'react-i18next';
import './Header.css';

function Header({ changeLanguage }) {
  // const { t } = useTranslation();
  const [activeLang, setActiveLang] = useState('fa'); 

  const handleLanguageChange = (lang) => {
    setActiveLang(lang);
    changeLanguage(lang);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className="language-buttons">
            <Button
              className={activeLang === 'fa' ? 'active' : ''}
              onClick={() => handleLanguageChange('fa')}
            >
              فارسی
            </Button>
            <Button
              className={activeLang === 'en' ? 'active' : ''}
              onClick={() => handleLanguageChange('en')}
            >
              English
            </Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
