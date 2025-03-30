import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';
import Project from './Project';
import Courses from './Courses';
import './CSS/Resume.css';

function Resume() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';
  const skills = ['Python', 'Django', 'Flask', 'Redis', 'SQL', 'React.js', 'Tkinter','Kafka','celery'];
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
          <a href='https://virgool.io/@malevin2020'>
            <img className='social-icons-img' src={`${process.env.PUBLIC_URL}/logovirgool.svg`} alt="My SVG Icon" />
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

      {/* پروژه‌ها */}
      <div className="resume-container">
        <h1>{t('project.title')}</h1>
        <Project />
      </div>
      <div className="resume-container">
        <h1>{t('courses.title')}</h1>
        <Courses />
      </div>

    </div>
  );
}

export default Resume;
