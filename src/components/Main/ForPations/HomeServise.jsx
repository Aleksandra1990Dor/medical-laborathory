import saveTime from '../../../img/savetTime.png';
import probirka from '../../../img/probirkaandchecklist.png';
import { useLayoutEffect } from 'react';
import check from '../../../img/check.png';
import calendar from '../../../img/calendar.png';
import computer from '../../../img/computer.png';
import styles from './HomeServise.module.css';
import Buttons from './Buttions';
const StepsForOrder = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.homeServise}>
      <div className={styles.home_servise_title_wrapper}>
        {/* <BackLink /> */}
        <div className={styles.home_servise_title}>
          <h2>Сдавайте анализы там, где удобно</h2>
          <small>Выезд Мобильной службы бесплатно *</small>
          <Buttons />
        </div>
        <div className={styles.home_servise_title_img}>
          <img
            src={saveTime}
            alt="экономия времени"
          />
        </div>
      </div>
      <Steps />
    </div>
  );
};
export const Steps = () => {
  return (
    <>
      <div className={styles.homeServiseHeader}>
        <h3>4 простых шага для вызова Мобильной службы</h3>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.iconWrapper}>
            <img
              src={probirka}
              alt="пробирка"
            />
          </div>
          <small>Выберите необходимые анализы</small>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.iconWrapper}>
            <img
              src={calendar}
              alt="кальендарь"
            />
          </div>
          <small>Оформите заказ и укажите удобное время</small>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.iconWrapper}>
            <img
              src={check}
              alt="проверка"
            />
          </div>
          <small>
            В назначенное время к вам на дом приедет медратниик и возьмет
            анализы
          </small>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>4</div>
          <div className={styles.iconWrapper}>
            <img
              src={computer}
              alt="компьюютер"
            />
          </div>
          <small> Получите результат в личном кабинете</small>
        </div>
      </div>
    </>
  );
};
export default StepsForOrder;
