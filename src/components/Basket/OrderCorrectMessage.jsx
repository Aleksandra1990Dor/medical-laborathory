import { useLayoutEffect } from 'react';
import { BasketButton } from './BasketUtils/BasketButton';
import styles from './OrderCorrectMessage.module.css';

const OrderCorrectMessage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.wrapper}>
      <h1>
        Ваш заказ оформлен <span>№ 41898-427534 </span>
      </h1>
      <div className={styles.info}>
        На указанный электронный адрес выслано письмо с данными предварительного
        заказа.
      </div>
      <BasketButton to="/medical-laborathory/">На главную</BasketButton>
    </div>
  );
};

export default OrderCorrectMessage;
