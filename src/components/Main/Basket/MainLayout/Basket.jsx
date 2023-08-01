import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import BasketRightSide from '../RightSide/BasketRightSide';
import styles from './Basket.module.css';

const Basket = () => {
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
  const priceSum = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.priceSum
  );
  const [order, setOrder] = useState(true);
  return (
    <div className={styles.basket}>
      <div className={styles.basket_wrapper}>
        {!!priceSum && (
          <BasketRightSide
            order={order}
            priceSum={priceSum}
            setOrder={setOrder}
          />
        )}
        <Outlet />
      </div>
    </div>
  );
};
export default Basket;
