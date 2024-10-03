import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GiNotebook } from "react-icons/gi";

function Header({ changeLanguage }) {
  const [activeLang, setActiveLang] = useState('fa');

  const handleLanguageChange = (lang) => {
    setActiveLang(lang);
    changeLanguage(lang);
  };

  return (
    <Navbar bg="light" className="justify-content-between">
      <div className="language-buttons mr-auto">
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
      <Nav className="ml-auto">
      <Nav.Link as={Link} to="/contact" className='space-icon'><GiNotebook /></Nav.Link>
      <Nav.Link as={Link} to="/" className='space-icon'><FaHome /></Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
