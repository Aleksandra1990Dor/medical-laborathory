import BasketItemsWrapper from '../LeftSide/BasketItemsWrapper';
import BasketHeader from '../BasketHeader/BasketHeader';

import styles from './Basket.module.css';

const BasketMain = () => {
  return (
    <>
      <div className={styles.basket_title}>
        <BasketHeader />
        <BasketItemsWrapper />
      </div>
    </>
  );
};
export default BasketMain;
