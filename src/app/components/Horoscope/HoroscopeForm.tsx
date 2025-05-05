'use client';

import React from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { ZodiacSign } from '../../../types/horoscope';
import { HoroscopeFormProps } from "@/types/horoscopeForm";
import styles from "./Horoscope.module.css";
import i18next from 'i18next';
import '@/i18n/i18n.client';


export const HoroscopeForm = ({ signs, onSelectSign, onSelectDays }: HoroscopeFormProps) => {
  const { t } = useTranslation('common');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sign = e.target.value;
    
    if (sign === "") {
      onSelectSign(null);
    } else if (signs.includes(sign as ZodiacSign)) {
      onSelectSign(sign as ZodiacSign);
    } else {
      onSelectSign(null);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.selectContainer}>
      <h1>{t('welcome')}</h1>
      <button onClick={() => {
  console.log("Switching to Ukrainian");
  i18next.changeLanguage('uk');
}}>Українська</button>

<button onClick={() => {
  console.log("Switching to English");
  i18next.changeLanguage('en');
}}>English</button>


        <select 
          className={styles.selectZodiac}
          onChange={handleChange}
        >
          <option value="">{t('select_zodiac')}</option>
          {signs.map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={() => onSelectDays(3)}>
          <FontAwesomeIcon icon={faCalendarDays} /> 3 дні
        </button>
        <button onClick={() => onSelectDays(7)}>
          <FontAwesomeIcon icon={faCalendarDays} /> 7 днів
        </button>
      </div>
    </div>
  );
};
