import { BsChevronDown } from 'react-icons/bs';
import styles from './HeaderRightSide.module.css';
import { useSelector } from 'react-redux';
import Cities from './Cities';
import { NavLink } from 'react-router-dom';
import { useToggleClass } from '../../../CustomHooks/UseToggle';
const City = ({ city }) => {
  const cities = useSelector((state) => state.mainInfoReduser.cities);
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  // animation show or hide div
  const [toggleClassList, showItems, hideItems] = useToggleClass(
    styles.choose_city,
    styles.hidden,
    styles.hideMore,
    450
  );
  return (
    <div
      className={styles.city}
      onClick={showItems}
    >
      {auth ? (
        <NavLink to="private-area">Личный кабинет</NavLink>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
export default City;
