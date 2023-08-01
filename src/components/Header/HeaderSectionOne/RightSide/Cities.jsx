import styles from './HeaderRightSide.module.css';
import { useDispatch } from 'react-redux';
import { changeCityAC } from '../../../store/mainInfoReduser';

const Cities = ({ cities, hideCities, toggleClassList }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={toggleClassList}
      onMouseLeave={hideCities}
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
