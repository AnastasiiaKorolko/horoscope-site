import { ZodiacSign } from "./horoscope";

export type HoroscopeFormProps = {
  signs: ZodiacSign[];
  onSelectSign: React.Dispatch<React.SetStateAction<ZodiacSign | null>>;
  onSelectDays: (days: number) => void;
};