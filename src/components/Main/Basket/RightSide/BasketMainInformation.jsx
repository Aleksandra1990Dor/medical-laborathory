import { useSelector } from 'react-redux';
import { RiMapPinLine } from 'react-icons/ri';
import styles from './BasketRightSide.module.css';

const BasketMainInformation = ({ priceSum }) => {
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  return (
    <div className={styles.basket_price_view}>
      <div className={styles.order_city}>
        <RiMapPinLine /> <span>{city}</span>
      </div>
      <div className={styles.order_price}>
        <h2>Сумма заказа:</h2>
        <h3>{priceSum} ₽</h3>
      </div>
    </div>
  );
};
export default BasketMainInformation;
