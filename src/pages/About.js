import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      {/* Header Section */}
      <div className="about-header">
        <h1>{t('about.title')}</h1>
      </div>

      {/* Avatar Section */}
      <div className="about-avatar">
        <img src="/images/about1.png" alt="Avatar" className="avatar" />
        <div className="about-info">
          <p>{t('about.address')}</p>
          <p>{t('about.phone')}</p>
          <p>{t('about.email')}</p>
          <p>{t('about.company')}</p>
          <p>{t('about.license')}</p>
        </div>
      </div>

      {/* Additional Images Section */}
      <div className="about-images">
        <img src="/images/about2.png" alt="About Us 2" />
        <img src="/images/about3.png" alt="About Us 3" />
      </div>
    </div>
  );
};

export default About;
