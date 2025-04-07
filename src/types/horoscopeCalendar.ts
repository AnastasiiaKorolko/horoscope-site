import { HoroscopeData } from "./horoscope";

export type HoroscopeCalendarProps = {
  horoscopeData: HoroscopeData[];
  onDayClick: (dayData: HoroscopeData) => void;
}