import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <video autoPlay loop muted className="hero-video">
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1>{t('home.heading')}</h1>
          <p>{t('home.subheading')}</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="intro-section">
        <h2>{t('home.intro.title')}</h2>
        <p>{t('home.intro.description')}</p>
      </div>

 

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>{t('home.testimonials.title')}</h2>
        <div className="testimonials">
          <blockquote>
            <p>{t('home.testimonials.testimonial1')}</p>
          </blockquote>
          <blockquote>
            <p>{t('home.testimonials.testimonial2')}</p>
          </blockquote>
          <blockquote>
            <p>{t('home.testimonials.testimonial3')}</p>
          </blockquote>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <h2>{t('home.videoSection.title')}</h2>
        <video controls className="feature-video">
          <source src="/videos/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>{t('home.videoSection.description')}</p>
      </div>
    </div>
  );
};

export default Home;
