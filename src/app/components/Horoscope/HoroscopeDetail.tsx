import React from 'react';
import { GiHealthNormal, GiHeartBeats, GiTie } from 'react-icons/gi';
import styles from "./Horoscope.module.css";
import { HoroscopeItem } from './HoroscopeItem';
import { HoroscopeDetailProps } from '@/types/horoscopeDetail';
import { BestScore } from '@/types/horoscopeDetail';
import { HoroscopeData } from '@/types/horoscope';
import Image from 'next/image';

const bestImages = { Best: "/images/star.png" };

const HoroscopeDetail = ({ selectedDay, selectedSign, zodiacImages }: HoroscopeDetailProps) => {
  const getBestScore = (data: HoroscopeData): BestScore => {
    const best = Math.max(data.health, data.relationships, data.career);
    let bestScoreLabel = '';
    const bestScoreIcon = bestImages.Best;

    if (best === data.health) {
      bestScoreLabel = "Здоров'я";
    } else if (best === data.relationships) {
      bestScoreLabel ='Стосунки';
    } else {
      bestScoreLabel = "Кар'єра";
    }

    return { label: bestScoreLabel, icon: bestScoreIcon };
  }

  const best = getBestScore(selectedDay);

  return (
    <div className={styles.zodiacInfoContainer}>
      <div className={styles.zodiacImageContainer}>
        <Image
          src={zodiacImages[selectedSign]}
          alt={`Зображення настрою для ${selectedSign}`}
          className={styles.zodiacImage}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.zodiacTextContainer}>
        <h3>{selectedDay.date}</h3>
        <div>
          <HoroscopeItem label="Здоров'я" value={selectedDay.health} icon={<GiHealthNormal size={18} />} isDetailed={true} />
          <HoroscopeItem label="Стосунки" value={selectedDay.relationships} icon={<GiHeartBeats size={18} />} isDetailed={true} />
          <HoroscopeItem label="Кар'єра" value={selectedDay.career} icon={<GiTie size={18} />} isDetailed={true} />
        </div>
        <div className={styles.bestScoreContainer}>
          <Image
            src={best.icon}
            alt="Найкраща сфера"
            width={24}
            height={24}
          />
          <span>Найкраща сфера: {best.label}</span>
        </div>
      </div>
    </div>
  )
}

export default HoroscopeDetail;
