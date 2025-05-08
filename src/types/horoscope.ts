export type ZodiacSign = "Aries" | "Taurus" | "Gemini" | "Cancer" | "Leo" | "Virgo" | "Libra" | "Scorpio" | "Sagittarius" | "Capricorn" | "Aquarius" | "Pisces";


export type HoroscopeData = {
  sign: ZodiacSign;
  health: number;
  relationships: number;
  career: number;
  avgHealth: number;
  period: number;
  date: string;
};
