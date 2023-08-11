import { BsChevronDown } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useToggleClass } from '../../../CustomHooks/UseToggle';
import Cities from './Cities';
import styles from './HeaderRightSide.module.css';

const City = ({ city }) => {
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  return (
    <div className={styles.city}>
      {auth ? (
        <NavLink to="private-area">Личный кабинет</NavLink>
      ) : (
        <ChoseCity city={city} />
      )}
    </div>
  );
};
export const ChoseCity = ({ city }) => {
  const cities = useSelector((state) => state.mainInfoReduser.cities);
  // animation show or hide div
  const [toggleClassList, showItems, hideItems] = useToggleClass(
    styles.choose_city,
    styles.hidden,
    styles.hideMore,
    450
  );
  return (
    <div
      onClick={showItems}
      className={styles.city}
    >
      <span>Ваш город: </span>
      <button className={styles.btn}>
        {city}
        <BsChevronDown className={styles.city__icon} />
      </button>
      <Cities
        cities={cities}
        hideCities={hideItems}
        toggleClassList={toggleClassList}
      />
    </div>
  );
};
export default City;
