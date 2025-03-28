import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaDownload } from "react-icons/fa6";
import { GiNotebook } from 'react-icons/gi';
// eslint-disable-next-line
import html2pdf from 'html2pdf.js';


function Header({ changeLanguage, activeLang }) {
  const location = useLocation();



  const downloadPageAsPDF = async () => {
    if (location.pathname === '/') {
      const element = document.getElementById('home-content');
      if (!element) return;
  
      const printStyles = extractPrintStyles();
      const styleElement = document.createElement('style');
      styleElement.innerHTML = `
        ${printStyles}
       .slick-track {
          width: 100% !important;
          display: block !important;
          transform: none !important;
          height: auto !important;
        }
        .slick-list {
          overflow: visible !important;
          width: 100% !important;
        }
        .slick-slide:not(.slick-cloned) {
          display: block !important;
          float: left !important;
          height: auto !important;
          width: calc(48% - 22px) !important;
          box-sizing: border-box !important;
          padding: 0 10px !important;
          margin-bottom: 15px !important;
          opacity: 1 !important;
          min-height: 1px !important;
        }
        .courses-slider .slick-slide:not(.slick-cloned) {
          display: block !important;
          float: left !important;
          height: auto !important;
          width: calc(33.33% - 20px) !important;
          box-sizing: border-box !important;
          padding: 0 !important;
          margin: 0 10px 15px 0 !important;
          opacity: 1 !important;
          min-height: 1px !important;
        }
        /* clearfix برای چیدمان دو ستونی */
        .slick-track::after {
          content: "";
          display: block;
          clear: both !important;
          height: 0 !important;
        }
        .resume-container h1 {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          overflow: hidden !important;
          padding: 1rem 3rem;
          margin-bottom: 14px;
        }
        .courses-slider {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        .experience-box {
          text-align: center !important;
          font-family: 'Vazir', 'Tahoma', sans-serif !important;
          ${activeLang === 'fa' ? `
            direction: rtl !important;
            unicode-bidi: embed !important;
          ` : `
            direction: ltr !important;
            unicode-bidi: normal !important;
          `}
        }
        [lang="en"] {
          direction: ltr !important;
          unicode-bidi: embed !important;
          display: inline !important;
        }
      `;
      document.head.appendChild(styleElement);
  
      // 2. معکوس کردن پرانتزها فقط برای زبان فارسی
      const experienceBoxes = element.querySelectorAll('.experience-box');
      const originalTexts = [];
      if (activeLang === 'fa') {
        experienceBoxes.forEach((box, index) => {
          originalTexts[index] = box.innerHTML;
          // معکوس کردن پرانتزها با یونیکد
          box.innerHTML = box.innerHTML
            .replace(/\(/g, '\u200E)')
            .replace(/\)/g, '(\u200E');
        });
      }
  
      // 3. تنظیم اسلایدها
      const slickSlides = element.querySelectorAll('.slick-slide:not(.slick-cloned)');
      const originalStyles = [];
      slickSlides.forEach((slide, index) => {
        originalStyles[index] = slide.style.cssText;
        slide.style.opacity = '1';
        slide.style.display = 'block';
        slide.style.width = 'calc(50% - 20px)';
        slide.style.float = 'left';
        slide.style.height = 'auto';
        slide.style.margin = '0 10px 15px 0';
        slide.style.boxSizing = 'border-box';
        slide.style.minHeight = '1px';
      });
  
      const slickTrack = element.querySelector('.slick-track');
      const slickList = element.querySelector('.slick-list');
      slickTrack.style.transform = 'none';
      slickTrack.style.width = '100%';
      slickTrack.style.display = 'block';
      slickTrack.style.height = 'auto';
      slickList.style.overflow = 'visible';
      slickList.style.width = '100%';
  
      // 4. تنظیمات html2pdf
      const opt = {
        margin: [10, 5, 10, 5],
        filename: 'Mohsen_Akbari_Resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          width: 794,
          windowWidth: 794,
          windowHeight: slickTrack.scrollHeight + 50,
          logging: true,
          imageTimeout: 15000,
          backgroundColor: '#FFFFFF',
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
      };
  
      try {
        await new Promise((resolve) => setTimeout(resolve, 50));
        await html2pdf().set(opt).from(element).save();
      } finally {
        // 5. بازگرداندن تغییرات
        if (activeLang === 'fa') {
          experienceBoxes.forEach((box, index) => {
            box.innerHTML = originalTexts[index];
          });
        }
        slickSlides.forEach((slide, index) => {
          slide.style.cssText = originalStyles[index];
        });
        slickTrack.style.cssText = '';
        slickList.style.cssText = '';
        styleElement.remove();
      }
    }
  };
  
  const extractPrintStyles = () => {
    let printStyles = '';
    Array.from(document.styleSheets).forEach(sheet => {
      try {
        Array.from(sheet.cssRules).forEach(rule => {
          if (rule.media && rule.media.mediaText.includes('print')) {
            printStyles += rule.cssText + '\n';
          }
        });
      } catch (e) {
        console.warn('Cannot access stylesheet:', e);
      }
    });
    return printStyles.replace(/@media print\s*{([\s\S]*?)}/g, (match, p1) => {
      return p1.replace(/^\s+/gm, '');
    });
  };
  
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
      {location.pathname === '/' && (
          <Nav.Link onClick={downloadPageAsPDF} className="space-icon">
            <FaDownload />
          </Nav.Link>
        )}
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
