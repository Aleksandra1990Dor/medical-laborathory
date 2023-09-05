import { useNavigate } from 'react-router-dom';
import { useToggle } from '../../../CustomHooks/UseToggle';
import Button from '../../Utils/Button';
import styles from './PrCards.module.css';

const PrCard = ({ src, alt, text, price, href }) => {
  const navigate = useNavigate();
  // animaton show or hide more
  const [toggleClassList, setToggleClassList] = useToggle(
    styles.more_information,
    styles.hidden,
    styles.hide_info,
    600
  );
  const onClick = () => {
    if (!price) {
      navigate('/medical-laborathory/authorisation/login');
    } else setToggleClassList();
  };
  return (
    <div
      className={styles.card_wrapper}
      onClick={onClick}
    >
      <img
        src={src}
        className={styles.img}
        alt={alt}
      />

      <div className={toggleClassList}>
        {price && <h6>Комплекс</h6>}
        {text && <small>{text}</small>}
        {price && <h3>{price}</h3>}
        {price ? (
          <Button
            href={href}
            text="Заказать анализ"
            toggleClass={styles.brown_btn}
          />
        ) : (
          <Button
            href="/medical-laborathory/authorisation/login"
            text="Войти в личный кабинет"
            toggleClass={styles.brown_btn}
          />
        )}
      </div>
    </div>
  );
};
export default PrCard;
