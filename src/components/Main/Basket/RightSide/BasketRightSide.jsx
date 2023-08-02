import BasketMainInformation from './BasketMainInformation';
import styles from './BasketRightSide.module.css';

const BasketRightSide = ({ priceSum }) => {
  return (
    <div className={styles.basket_order}>
      <BasketMainInformation priceSum={priceSum} />
    </div>
  );
};
export default BasketRightSide;
