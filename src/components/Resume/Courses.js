import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/Courses.css';

const Courses = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const all_course = t('course', { returnObjects: true });

  return (
    <div className="slider-container courses-slider">
      <Slider {...settings}>
        {all_course.map((course, index) => (
          <div key={index} className="course-card">
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <h3 className="course-title">{course.title}</h3>
            </a>
            <div className="course-dates">
              <p>
                {t('courses.date')} : <span>{course.date}</span>
              </p>
            </div>
            {/* اضافه کردن بخش جدید برای منبع */}
            <div className="course-source">
              <p>
                {t('courses.source')} : <span>{course.source}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Courses;
