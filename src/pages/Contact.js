import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>{t('contact.title')}</h1>
      </div>
      <div className="contact-content">
        <p>{t('contact.description')}</p>
        <div className="contact-info">
          <p>
            <strong>{t('contact.emailLabel')}:</strong> {t('contact.email')}
          </p>
          <p>
            <strong>{t('contact.phoneLabel')}:</strong> {t('contact.phone')}
          </p>
          <p>
            <strong>{t('contact.addressLabel')}:</strong> {t('contact.address')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
