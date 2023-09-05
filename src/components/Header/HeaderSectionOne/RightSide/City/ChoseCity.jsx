import { BsChevronDown } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useToggleClass } from '../../../../../CustomHooks/UseToggle';
import Cities from './Cities';
import styles from './City.module.css';

const ChoseCity = ({ city }) => {
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
      className={styles.city}
      onClick={hideItems}
    >
      <span>Ваш город: </span>
      <button
        className={styles.btn}
        onClick={showItems}
      >
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
export default ChoseCity;
