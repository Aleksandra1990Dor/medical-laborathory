import { useDispatch } from 'react-redux';
import { changeCityAC } from '../../../../../store/mainInfoReduser';
import styles from './City.module.css';

const Cities = ({ cities, hideCities, toggleClassList }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={toggleClassList}
      onMouseLeave={hideCities}
      onClick={hideCities}
    >
      {cities.map((city, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              dispatch(changeCityAC(city));
              hideCities();
            }}
            className={styles.city_item}
          >
            {city}
          </button>
        );
      })}
    </div>
  );
};

export default Cities;
