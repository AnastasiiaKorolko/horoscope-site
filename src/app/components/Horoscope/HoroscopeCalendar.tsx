import React from 'react';
import { HoroscopeItem } from "./HoroscopeItem";
import { HoroscopeCalendarProps } from '@/types/horoscopeCalendar';
import { GiHealthNormal, GiHeartBeats, GiTie } from 'react-icons/gi';
import styles from "./Horoscope.module.css";

const HoroscopeCalendar = ({ horoscopeData, onDayClick}: HoroscopeCalendarProps) => {
  return (
     <div className={styles.calendar}>
            {horoscopeData.map((dayData, index) => (
              <div 
                key={index} 
                className={styles.card}
                onClick={() => onDayClick(dayData)}
              >
                <div className={styles.date}>{dayData.date}</div>
                
                <div className={styles.cardContent}>
                  <HoroscopeItem 
                    label="Здоров'я" value={dayData.health} 
                    icon={<GiHealthNormal size={18} />} 
                    isDetailed={false}
                  />
                  <HoroscopeItem 
                    label="Стосунки"
                    value={dayData.relationships} 
                    icon={<GiHeartBeats size={18} />} 
                    isDetailed={false}
                  />
                  <HoroscopeItem 
                    label="Кар'єра"
                    value={dayData.career}
                    icon={<GiTie size={18} />}
                    isDetailed={false} 
                  />
                </div>
              </div>
            ))}
          </div> 
  )

}

export default HoroscopeCalendar;