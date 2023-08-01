import { useEffect, useState } from 'react';
import styles from './PrCards.module.css';
import Button from '../../Utils/Button';
import Preloader from '../../Utils/Preloader';
import { useToggle } from '../../CustomHooks/UseToggle';
const PrCard = ({ src, alt, text, price, activeStyle, href }) => {
  const [toggleClassList, setToggleClassList] = useToggle(
    styles.prCards__cardHidden,
    styles.hidden,
    styles.hide_info,
    600
  );
  useEffect(() => activeStyle && setToggleClassList(), [activeStyle]);
  return (
    <div
      className={styles.prCards__cardContainer}
      onClick={setToggleClassList}
    >
      {!!src ? (
        <img
          src={src}
          className={styles.prCards__cardImg}
          alt={alt}
        />
      ) : (
        <Preloader />
      )}
      <div className={toggleClassList}>
        <h6>
          {price
            ? 'Комплекс'
            : 'Информация доступна только зарегестрированным пользователям'}
        </h6>
        {text && <small>{text}</small>}
        {price && <h3>{price}</h3>}
        {price ? (
          <Button
            href={href}
            text="Заказать анализ"
            toggleClass={styles.prCards__cardHidden_btn}
          />
        ) : (
          <Button
            text="Войти в личный кабинет"
            toggleClass={styles.prCards__cardHidden_btn_privat}
          />
        )}
      </div>
    </div>
  );
};
export default PrCard;
