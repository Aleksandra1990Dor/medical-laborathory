import { useState } from 'react';
import nurce from '../../../img/nurce.png';
import { NavLink } from 'react-router-dom';
import styles from './Carusel.module.css';
const Carusel = () => {
  const [toggleClass, setToggleClass] = useState(styles.hidden);
  const showMore = () => {
    if (toggleClass === styles.hidden) {
      setToggleClass(styles.message);
    }
  };
  const hideMore = () => {
    if (toggleClass === styles.message) {
      setToggleClass(`${styles.hideMessage} ${styles.message}`);
      setTimeout(() => setToggleClass(styles.hidden), 1000);
    }
  };
  return (
    <div
      className={styles.carusel}
      onMouseOver={showMore}
      onMouseLeave={hideMore}
    >
      <div className={styles.title_wrapper}>
        <h4>Сдавайте анализы там, где удобно</h4>
        <small>
          Выезд Мобильной службы <br /> <span>бесплатно*</span>
        </small>
        <div className={styles.buttons}>
          <NavLink className={`${styles.btn} ${styles.btnLeft}`}>
            Оформить заказ
          </NavLink>
          <NavLink className={`${styles.btn} ${styles.btnRight}`}>
            Обратный звонок
          </NavLink>
        </div>
      </div>
      <div className={styles.img}>
        <img src={nurce} />
        <div className={toggleClass}>
          <p>Заказать звонок</p>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
