import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/Project.css';

function Project() {
  const { t } = useTranslation();

  const PrevArrow = ({ slideCount, currentSlide, ...props }) => {
    return <button className="slider-arrow" {...props}>Prev</button>;
  };

  const NextArrow = ({ slideCount, currentSlide, ...props }) => {
    return <button className="slider-arrow" {...props}>Next</button>;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = t('projects', { returnObjects: true });

  return (
    <div className="projects-container">
      <Slider {...settings}>
        {Array.isArray(projects) ? (
          projects.map((project, index) => (
            <div key={index} className="project-box">
              <h3>{project.title}</h3>
              <p>
                <strong>{t('project.client')}:</strong>{' '}
                <a className='client-link' href={project.urls} target="_blank" rel="noopener noreferrer">
                  {project.client}
                </a>
              </p>
              {Array.isArray(project.description) ? (
                <ul className="description-list">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p>No description available</p>
              )}
              <h4>{t('project.technologiesUsed')}</h4>
              <ul className="technologies-list">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="project-time">
                <div className="start-date">
                  {t('project.startDate')}: <strong> {project.startDate}</strong>
                </div>
                <div className="end-date">
                  {t('project.endDate')}: <strong>{project.endDate}</strong>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </Slider>
    </div>
  );
}

export default Project;