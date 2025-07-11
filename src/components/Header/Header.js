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
        .projects-container {
          padding: 0 !important;
          margin: 0 !important;
          width: 100% !important;
          background: transparent !important;
        }
        .slick-track {
          width: 100% !important;
          display: block !important;
          transform: none !important;
          height: auto !important;
          margin: 0 !important; /* حذف فاصله اضافی */
        }
        .slick-list {
          overflow: visible !important;
          width: 100% !important;
          margin: 0 !important; /* حذف فاصله اضافی */
          padding: 0 !important; /* حذف پدینگ اضافی */
        }
        .slick-slide:not(.slick-cloned) {
          display: block !important;
          float: left !important;
          height: auto !important;
          width: calc(50% - 25px) !important; /* کاهش فاصله بین ستون‌ها */
          box-sizing: border-box !important;
          padding: 0 4px !important; /* کاهش پدینگ */
          margin: 0 4px 4px 0 !important; /* کاهش فاصله عمودی و افقی */
          opacity: 1 !important;
          min-height: 1px !important;
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        .project-box {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          overflow: visible !important;
          border: 2px solid var(--border-color) !important;
          border-radius: 1rem !important;
          padding: 8px !important; /* کاهش پدینگ داخلی */
          margin: 0 !important; /* حذف حاشیه اضافی */
          background-color: var(--background-container-color) !important;
          color: inherit !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
         
        }
        .project-box h3 {
          font-size: 14px !important; /* کاهش اندازه فونت عنوان */
          margin: 4px 0 !important; /* کاهش فاصله */
        }
        .project-box p {
          margin: 4px 0 !important; /* کاهش فاصله پاراگراف‌ها */
          font-size: 12px !important; /* کاهش اندازه فونت */
        }
        .technologies-list {
          gap: 4px !important; /* کاهش فاصله بین آیتم‌ها */
          margin: 4px 0 !important; /* کاهش فاصله عمودی */
        }
        .technologies-list li {
          padding: 4px 8px !important; /* کاهش پدینگ */
          font-size: 10px !important; /* کاهش اندازه فونت */
        }
        .project-time {
          margin: 4px 0 !important; /* کاهش فاصله */
          font-size: 10px !important; /* کاهش اندازه فونت */
        }
        .slick-track::after {
          content: "";
          display: block;
          clear: both !important;
          height: 0 !important;
        }
          .resume-container h1 {

          padding: 1rem 3rem;
          margin: 1rem;
        }
      `;
      document.head.appendChild(styleElement);
  
      // بقیه کد بدون تغییر
      const experienceBoxes = element.querySelectorAll('.experience-box');
      const originalTexts = [];
      if (activeLang === 'fa') {
        experienceBoxes.forEach((box, index) => {
          originalTexts[index] = box.innerHTML;
          box.innerHTML = box.innerHTML
            .replace(/\(/g, '\u200E)')
            .replace(/\)/g, '(\u200E');
        });
      }
  
      const slickSlides = element.querySelectorAll('.slick-slide:not(.slick-cloned)');
      const originalStyles = [];
      slickSlides.forEach((slide, index) => {
        originalStyles[index] = slide.style.cssText;
        slide.style.opacity = '1';
        slide.style.display = 'block';
        slide.style.width = 'calc(50% - 8px)';
        slide.style.float = 'left';
        slide.style.height = 'auto';
        slide.style.margin = '0 4px 4px 0';
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
  
      const opt = {
        margin: [5, 5, 5, 5],
        filename: 'Mohsen_Akbari_Resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          width: 794,
          windowWidth: 794,
          windowHeight: 1123,
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
