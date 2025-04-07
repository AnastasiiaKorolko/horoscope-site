import styles from './HoroscopeItem.module.css';
import { HoroscopeItemProps } from '@/types/horoscopeItem';

export const HoroscopeItem = ({ label, value, icon, isDetailed }: HoroscopeItemProps) => {
  console.log("HoroscopeItem props:", { label, value, icon, isDetailed });

  return (
    <div className={styles.horoscopeItem}>
      <div className={styles.horoscopeItemIcon}>
        {icon}
        {!isDetailed && label && (
          <span className={styles.tooltipText}>{label}</span>
        )}
      </div>

      {isDetailed ? (
        <div className={styles.horoscopeItemText}>
          <span>{label}</span>: {value}
        </div>
      ) : (
        <div className={styles.horoscopeItemValue}>{value}</div>
      )}
    </div>
  );
};

