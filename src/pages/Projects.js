import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';

const Projects = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/images/project1.jpg',
    '/images/project2.jpg',
    '/images/project3.jpg',
    '/images/project4.jpg',
    '/images/project5.jpg',
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="projects">
      <div className="carousel">
        <button className="carousel-btn left" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="carousel-image">
          <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
        <button className="carousel-btn right" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="project-description">
        <h2>{t('projects.description.title')}</h2>
        <p>{t('projects.description.text')}</p>
        <p>{t('projects.contact')}</p>
      </div>

      <div className="map">
        <h3>{t('projects.map.title')}</h3>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCUncNHTTC"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
          title="Project Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Projects;
