import { Horoscope } from "../components/Horoscope/Horoscope";
import { ThemeSwitch } from "../components/Layout/ThemeSwitch";
import styles from '../components/Layout/ThemeSwitch.module.css';
import StarrySkyWrapper from "../components/StarrySWrapper";

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'uk' }
  ];
}

export default async function HomePage(props: { params: { lang: string } }) {
  const { lang } = props.params;

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
