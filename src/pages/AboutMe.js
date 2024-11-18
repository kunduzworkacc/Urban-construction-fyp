import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/AboutMe.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about-me">
      <div className="about-me-header">
        <h1>{t('aboutMe.title')}</h1>
      </div>
      <div className="about-me-intro">
        <img src="/images/iconMe.jpg" alt="Mukanbetova Kunduz" className="avatar" />
        <p className="intro-text">{t('aboutMe.description')}</p>
      </div>
      <div className="about-me-carousel">
        <div className="carousel">
          <div className="carousel-item">
            <img src="/images/me1.png" alt="Carousel 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/me2.png" alt="Carousel 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/me3.png" alt="Carousel 3" />
          </div>
        </div>
      </div>
      <div className="contact-icons">
        <a
          href="https://www.instagram.com/mukanbet0vvva?igsh=bDI5b3llNHZjNWpt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon instagram" />
        </a>
        <a href="mailto:kunduzmuka@gmail.com">
          <FaEnvelope className="icon email" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
