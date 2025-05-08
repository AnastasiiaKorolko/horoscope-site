'use client';

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { ZodiacSign } from '../../../types/horoscope';
import { HoroscopeFormProps } from "@/types/horoscopeForm";
import styles from "./Horoscope.module.css";

export const HoroscopeForm = ({ signs, onSelectSign, onSelectDays }: HoroscopeFormProps) => {

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
      <h1>Welcome</h1>
        <select 
          className={styles.selectZodiac}
          onChange={handleChange}
        >
          <option value="">Select zodiac</option>
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
