import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

import './Resume.css';
function Resume() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';
  const skills = ['python', 'django', 'flask', 'redis', 'SQL', 'react', 'tkinter'];
  return (
    <div className='resume-container'>
      <div className={`about-me-container ${isRTL ? 'rtl' : 'ltr'}`}>
        <h1>{t('about_me.title')}</h1>
        <p >
          {t('about_me.summary')}
        </p>
      </div>
      <div className="resume-container">
        <h1>{t('social_media.title')}</h1>
        <div className="social-icons">
          <a href="https://github.com/mohsenakbari79" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://t.me/malevin" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
        </div>
      </div>
      <div className="resume-container">
        <h1>{t('skills.title')}</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              {skill}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Resume;
