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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<HoroscopeData | null>(null);

  const signs: ZodiacSign[] = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];

  const zodiacImages = {
    Aries: "/images/aries.png",
    Taurus: "/images/taurus.png",
    Gemini: "/images/gemini.png",
    Cancer: "/images/cancer.png",
    Leo: "/images/leo.png",
    Virgo: "/images/virgo.png",
    Libra: "/images/libra.png",
    Scorpio: "/images/scorpio.png",
    Sagittarius: "/images/sagittarius.png",
    Capricorn: "/images/capricorn.png",
    Aquarius: "/images/aquarius.png",
    Pisces: "/images/pisces.png"
  };
  

  useEffect(() => {
    if (selectedSign) {
      setIsLoading(true);

      setTimeout(() => {
        const generatedData = generateHoroscopeData(selectedSign, days);
        setHoroscopeData(generatedData);
        setIsLoading(false);
      }, 0);
    }
  }, [selectedSign, days]);

  useEffect(() => {
    if (horoscopeData && horoscopeData.length > 0) {
      const factDay = `catFact-${selectedSign}-${days}`;
      const cachedFact = localStorage.getItem(factDay);

      if (cachedFact) {
        setCatFact(cachedFact);
      } else {
        fetchCatFact().then((fact) => {
          setCatFact(fact);
          localStorage.setItem(factDay, fact);
        });
      }
    }
  }, [horoscopeData, selectedSign, days]);

  const generateHoroscopeData = (sign: ZodiacSign, days: number): HoroscopeData[] => {
    const data: HoroscopeData[] = [];

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const horoscopeKey = `${sign}-${days}`;
    const cachedHoroscope = localStorage.getItem(horoscopeKey);

    if (cachedHoroscope) {
      return JSON.parse(cachedHoroscope);
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

      data.push({ sign, health, relationships, career, avgHealth, period: days, date: formattedDate });
    }

    localStorage.setItem(horoscopeKey, JSON.stringify(data));
    return data;
  };

  const handleDayClick = (dayData: HoroscopeData) => {
    setSelectedDay(dayData);
  };

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
                    <Image src={zodiacImages[selectedSign]} alt={`${selectedSign} зодіак`} width={60} height={60} />
                  </>
                )}
              </h2>
              <HoroscopeForm signs={signs} onSelectSign={setSelectedSign} onSelectDays={setDays} />
            </div>
            {horoscopeData && horoscopeData.length > 0 && (
              <div className={styles.container}>
                <HoroscopeCalendar horoscopeData={horoscopeData} onDayClick={handleDayClick} />
                {selectedSign && selectedDay && (
                  <HoroscopeDetail selectedDay={selectedDay} selectedSign={selectedSign} zodiacImages={zodiacImages} />
                )}
                <p className={styles.catFact}>Cat fact: {catFact}</p>
                <HoroscopeShareButtom selectedSign={selectedSign} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
