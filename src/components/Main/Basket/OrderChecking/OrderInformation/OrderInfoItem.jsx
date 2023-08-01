import { BsDot } from 'react-icons/bs';
import styles from './OrderInfo.module.css';

const OrderInfoItem = ({ good }) => {
  return (
    <div className={styles.order_item}>
      <BsDot className={styles.order_icon} />
      <small>{good.id}</small>
      {good.title}
    </div>
  );
};
export default OrderInfoItem;
