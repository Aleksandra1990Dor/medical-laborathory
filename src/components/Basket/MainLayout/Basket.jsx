import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import BasketRightSide from '../RightSide/BasketRightSide';
import styles from './Basket.module.css';
import BasketMain from './BasketMain';
import Preorder from '../Preorder/Preorder';
import OrderChecking from '../OrderChecking/OrderChecking';
import OrderCorrectMessage from '../OrderCorrectMessage';

const Basket = () => {
  // priceSum from state
  const priceSum = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.priceSum
  );
  return (
    <div className={styles.basket}>
      {!!priceSum && <BasketRightSide priceSum={priceSum} />}
      <Routes>
        <Route
          index
          element={<BasketMain />}
        />
        <Route
          path="order/step1"
          element={<Preorder />}
        />
        <Route
          path="order/step2"
          element={<OrderChecking />}
        />
        <Route
          path="preorder/complete/№=41898-427534"
          element={<OrderCorrectMessage />}
        />
      </Routes>
    </div>
  );
};
export default Basket;
