import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

import './Resume.css';
function Resume() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';
  const skills = ['python', 'django', 'flask', 'redis', 'SQL', 'react', 'tkinter'];
  const experiences = t('experience.jobs', { returnObjects: true });

  return (
    <div className='resume-container'>
      <div className={`about-me-container ${isRTL ? 'rtl' : ''}`}>
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
      
      <div className="resume-container">
        <h1>{t('experience.title')}</h1>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-box my-4 p-4 bg-light rounded">
            <h2 className="position">{exp.position}</h2>
            <h5 className="company">{exp.company}</h5>
            <p className="period">{exp.period}</p>
            <h5 className="tasks-title">{t('experience.tasks_title')}</h5>
            <ul className={`tasks-list ${isRTL ? 'rtl' : ''}`}>
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Resume;
