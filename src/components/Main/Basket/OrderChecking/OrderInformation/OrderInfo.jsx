import { useSelector } from 'react-redux';
import OrderInfoItem from './OrderInfoItem';
import styles from './OrderInfo.module.css';

const OrderInfo = () => {
  const basket = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.basket
  );
  return (
    <div className={styles.order_items_wrapper}>
      {basket.map((good, index) => (
        <OrderInfoItem
          key={index}
          good={good}
        />
      ))}
    </div>
  );
};
export default OrderInfo;
