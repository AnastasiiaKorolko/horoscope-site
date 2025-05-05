"use client";

import React, { useEffect, useState } from "react";
import { HoroscopeForm } from "./HoroscopeForm";
import { fetchCatFact } from "../../Utils/utils";
import { ZodiacSign, HoroscopeData } from "../../../types/horoscope";
import Image from "next/image";

import styles from "./Horoscope.module.css";
import HoroscopeCalendar from "./HoroscopeCalendar";
import HoroscopeDetail from "./HoroscopeDetail";
import HoroscopeShareButtom from "./HoroscopeShareButton";

export const Horoscope = () => {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [days, setDays] = useState(7);
  const [horoscopeData, setHoroscopeData] = useState<HoroscopeData[] | null>([]);
  const [catFact, setCatFact] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedDay, setSelectedDay] = useState<HoroscopeData | null>(null)

  const signs: ZodiacSign[] = ["Овен", "Телець", "Близнюки", "Рак", "Лев", "Діва", "Терези", "Скорпіон", "Стрілець", "Козеріг", "Водолій", "Риби"];

  const zodiacImages = {
    Овен: "/images/aries.png", 
    Телець: "/images/taurus.png", 
    Близнюки: "/images/gemini.png", 
    Рак: "/images/cancer.png", 
    Лев: "/images/leo.png", 
    Діва: "/images/virgo.png", 
    Терези: "/images/libra.png", 
    Скорпіон: "/images/scorpio.png", 
    Стрілець: "/images/sagittarius.png", 
    Козеріг: "/images/capricorn.png", 
    Водолій: "/images/aquarius.png", 
    Риби: "/images/pisces.png"
  };

  useEffect(() => {
    if (selectedSign) {
      setIsLoading(true)
      
      setTimeout(() => {
        const generatedData = generateHoroscopeData(selectedSign, days);
        setHoroscopeData(generatedData);
        setIsLoading(false)
      }, 0)
    }
  }, [selectedSign, days]);

  useEffect(() => {
    if (horoscopeData && horoscopeData.length > 0) {

      const factDay = `catFact-${selectedSign}-${days}`

      const cashedFact = localStorage.getItem(factDay);
      if (cashedFact) {
        setCatFact(cashedFact);
      } else {
        fetchCatFact().then((fact) => {
          setCatFact(fact);
          localStorage.setItem(factDay, fact);
        });
      } 
    }
  }, [horoscopeData]);

  const generateHoroscopeData = (sign: ZodiacSign, days: number): HoroscopeData[] => {
    const data: HoroscopeData[] = [];
    
    const weekDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", 
                   "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
    
    const horoscopeKey = `${sign}-${days}`;
    const cashedHoroscope = localStorage.getItem(horoscopeKey);

    if (cashedHoroscope) {
      return JSON.parse(cashedHoroscope);
    }
    
    for (let i = 0; i < days; i++) {
      const health = Math.floor(Math.random() * 10);
      const relationships = Math.floor(Math.random() * 10);
      const career = Math.floor(Math.random() * 10);
      const avgHealth = (health + relationships + career) / 3;
      
      const currentDate = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
      
      const dayOfWeek = weekDays[currentDate.getDay()];
      const dayOfMonth = currentDate.getDate();
      const month = months[currentDate.getMonth()];
      
      const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
      
      data.push({
        sign,
        health,
        relationships,
        career,
        avgHealth,
        period: days,
        date: formattedDate,
      });
    }

    localStorage.setItem(horoscopeKey, JSON.stringify(data));
    return data;
  };
   
  const handleDayClick = (dayData: HoroscopeData) => {
    setSelectedDay(dayData);
  }

  return (
    <>
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.pageWrapper}>
      <div className={styles.formContainer}>
      <h2 className={styles.title}>
      {selectedSign && (
    <>
    <span>{selectedSign}</span>
    <Image src={zodiacImages[selectedSign]} alt={`${selectedSign} зодіак`} style={{ width: 60, height: 60 }} />
    </>
    )}
          </h2>
        <HoroscopeForm signs={signs} onSelectSign={setSelectedSign} onSelectDays={setDays} />
        
      </div>
      
      {horoscopeData && horoscopeData.length > 0 && (
        <div className={styles.container}>
          
          <HoroscopeCalendar horoscopeData={horoscopeData} onDayClick={handleDayClick}/>

          {selectedSign && selectedDay && (
          <HoroscopeDetail 
            selectedDay={selectedDay} 
            selectedSign={selectedSign}
            zodiacImages={zodiacImages}/>
      )}
          <p className={styles.catFact}>Факт про котів: {catFact}</p>
          <HoroscopeShareButtom selectedSign={selectedSign}/>
        </div>
      )}
    </div>
      )}
    </div>

    </>
  );
};


