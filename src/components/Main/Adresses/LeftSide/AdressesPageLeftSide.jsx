import Preloader from '../../../Utils/Preloader';
import styles from './AdressesPageLeftSide.module.css';
import geolocation from '../../../../img/geocoding.png';
const AdressesPageLeftSide = ({ city, showOrHideMore }) => {
  return (
    <div className={styles.left_side_wrapper}>
      <h4>
        {`Адреса в городе `}
        <span onClick={showOrHideMore}>{city} </span>
        <small onClick={showOrHideMore}>(изменить)</small>:
      </h4>
      <div className={styles.img_conteiner}>
        {geolocation ? (
          <img
            src={geolocation}
            alt="геолокация"
          />
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default AdressesPageLeftSide;
