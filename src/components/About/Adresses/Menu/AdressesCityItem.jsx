import { memo } from 'react';
import { useDispatch } from 'react-redux';
import styles from './AdressesMenu.module.css';

const AdressesCityItem = memo(({ city, activeCity, setCurrentCity }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={activeCity ? styles.activeCityItem : styles.cityItem}
      onClick={() => dispatch(setCurrentCity(city))}
    >
      {city}
    </div>
  );
});
export default AdressesCityItem;
