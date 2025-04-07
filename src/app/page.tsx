import { Horoscope } from "./components/Horoscope/Horoscope";
import { ThemeSwitch } from "./components/Layout/ThemeSwitch";
import styles from './components/Layout/ThemeSwitch.module.css';
import StarrySkyWrapper from "./components/StarrySWrapper";

export default function HomePage() {
  return (
    <div>
      <StarrySkyWrapper />
      <header className={styles.switch}>
      <ThemeSwitch />
      </header>
      <Horoscope />
    </div>
  );
}

