import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/News.css';

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="news">
      <div className="news-header">
        <h1>{t('news.title')}</h1>
      </div>
      <div className="news-image">
        <img src="/images/newsimage.jpg" alt={t('news.imageAlt')} />
      </div>
      <div className="news-content">
        <p>{t('news.text1')}</p>
        <p>{t('news.text2')}</p>
        <p>{t('news.text3')}</p>
        <p>{t('news.text4')}</p>
        <p>{t('news.text5')}</p>
        <p>{t('news.text6')}</p>
        <p>{t('news.text7')}</p>
      </div>
    </div>
  );
};

export default News;
