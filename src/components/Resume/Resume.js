import React from 'react';
import { useTranslation } from 'react-i18next';

function Resume() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('resume.name')}</h2>
      <p>{t('resume.experience')}</p>
    </div>
  );
}

export default Resume;
