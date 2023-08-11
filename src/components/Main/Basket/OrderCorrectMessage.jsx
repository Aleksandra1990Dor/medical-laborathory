import { useEffect } from 'react';
import styles from './OrderCorrectMessage.module.css';
import { BasketButton } from './BasketUtils/BasketButton';

const OrderCorrectMessage = () => {
  useEffect(() => {
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
