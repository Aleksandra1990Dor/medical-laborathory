import { NavLink } from 'react-router-dom';
import styles from './Buttons.module.css';
const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <NavLink className={`${styles.btn} ${styles.btnLeft}`}>
        Оформить заказ
      </NavLink>
      <NavLink className={`${styles.btn} ${styles.btnRight}`}>
        Обратный звонок
      </NavLink>
    </div>
  );
};
export default Buttons;
