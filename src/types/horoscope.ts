export type ZodiacSign = "Овен" | "Телець" | "Близнюки" | "Рак" | "Лев" | "Діва" | "Терези" | "Скорпіон" | "Стрілець" | "Козеріг" | "Водолій" | "Риби";

export type HoroscopeData = {
  sign: ZodiacSign;
  health: number;
  relationships: number;
  career: number;
  avgHealth: number;
  period: number;
  date: string;
};
