import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';

function Header({ changeLanguage, activeLang }) {
  return (
    <Navbar bg="light" className="justify-content-between">
      <div className="language-buttons mr-auto">
        <Button
          className={activeLang === 'fa' ? 'active' : ''}
          onClick={() => changeLanguage('fa')}
        >
          فارسی
        </Button>
        <Button
          className={activeLang === 'en' ? 'active' : ''}
          onClick={() => changeLanguage('en')}
        >
          English
        </Button>
      </div>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/contact" className="space-icon">
          <GiNotebook />
        </Nav.Link>
        <Nav.Link as={Link} to="/" className="space-icon">
          <FaHome />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
