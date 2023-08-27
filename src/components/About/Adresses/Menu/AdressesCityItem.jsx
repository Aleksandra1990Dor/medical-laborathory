import { memo } from 'react';
import styles from './AdressesMenu.module.css';

const AdressesCityItem = memo(({ city, activeCity, setCurrentCity }) => {
  return (
    <div
      className={activeCity ? styles.activeCityItem : styles.cityItem}
      onClick={() => setCurrentCity(city)}
    >
      {city}
    </div>
  );
});
export default AdressesCityItem;
