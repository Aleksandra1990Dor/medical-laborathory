import { useDispatch, useSelector } from 'react-redux';
import { changeCityAC } from '../../../store/mainInfoReduser';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './ChangAdressHiddenPage.module.css';

const ChangAdressHiddenPage = ({ toggleClass, showOrHideMore }) => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.mainInfoReduser.cities);
  const ChangeCity = (city) => {
    dispatch(changeCityAC(city));
    showOrHideMore();
  };
  return (
    <div className={toggleClass}>
      <div className={styles.changeInfoMainContainer}>
        <div className={styles.changeInfoContainer}>
          {/* closing icon */}
          <AiOutlineClose
            className={styles.closeIcon}
            onClick={showOrHideMore}
          />
          <h5>Выберите город:</h5>
          {cities?.map((city, index) => {
            return (
              <CityItem
                city={city}
                key={index}
                changeCity={ChangeCity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const CityItem = ({ city, changeCity }) => {
  return (
    <div
      className={styles.city_item}
      onClick={() => {
        changeCity(city);
      }}
    >
      <strong>{city}</strong>
    </div>
  );
};
export default ChangAdressHiddenPage;
