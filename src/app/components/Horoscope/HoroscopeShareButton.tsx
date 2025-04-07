import React from 'react';
import styles from "./Horoscope.module.css";
import { HoroscopeShareButtomProps } from '@/types/horoscopeShareButton';

const HoroscopeShareButtom = ({ selectedSign }: HoroscopeShareButtomProps) => {
  const shareHoroscope = () => {
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: `Гороскоп для ${selectedSign}`,
        url: url
      });
    } else {
      alert("Поділитися не підтримується в цьому браузері.");
    }
  };

  return (
    <div className={styles.shareButtonContainer}>
      <button className={styles.shareButton} onClick={shareHoroscope}>
        Поділитися посиланням
      </button>
    </div>
  )

}

export default HoroscopeShareButtom;