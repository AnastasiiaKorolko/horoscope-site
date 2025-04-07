import { HoroscopeData, ZodiacSign } from '@/types/horoscope';

export type HoroscopeDetailProps = {
  selectedDay: HoroscopeData;
  selectedSign: ZodiacSign;
  zodiacImages: Record<ZodiacSign, string>;
};

export type BestScore = {
  label: string;
  icon: string;
}