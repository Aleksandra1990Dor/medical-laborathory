import { useSelector } from 'react-redux';
import AdressesCityItem from './AdressesCityItem';
import styles from './AdressesMenu.module.css';

const AdressesMenu = ({ city, setCurrentCity }) => {
  const cities = useSelector((state) => state.mainInfoReduser.cities);
  return (
    <div className={styles.wrapper}>
      {cities.map((currentCity, i) => (
        <AdressesCityItem
          key={i}
          city={currentCity}
          activeCity={city === currentCity && true}
          setCurrentCity={setCurrentCity}
        />
      ))}
    </div>
  );
};
export default AdressesMenu;
