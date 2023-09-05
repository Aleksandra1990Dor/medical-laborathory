import { useSelector, useDispatch } from 'react-redux';
import { clearBasketAC } from '../../../store/mainInfoReduser';
import { BasketButton } from '../BasketUtils/BasketButton';
import OrderClientInformation from './ClientInformation/OrderClientInformation';
import OrderPlaceInfo from './PlaseInfo/OrderPlaceInfo';
import { useEffect, useRef } from 'react';
import OrderInfoWrapper from './InfoWrapper/OrderInfoWrapper';
import OrderInfo from './OrderInformation/OrderInfo';
import styles from './OrderChecking.module.css';

const OrderChecking = () => {
  const dispatch = useDispatch();
  const mainRef = useRef(null);
  useEffect(() => mainRef.current.scrollIntoView(), []);
  // data
  const data = useSelector((state) => state.mainInfoReduser.orderInformation);
  const cardsArray = [
    {
      title: 'Клиент',
      component: <OrderClientInformation data={data} />,
    },
    {
      title: 'Место сдачи',
      component: (
        <OrderPlaceInfo adress={data.adress || 'Диагностический центр'} />
      ),
    },
    {
      title: 'Заказ',
      component: <OrderInfo />,
    },
  ];
  return (
    <div
      className={styles.wrapper}
      ref={mainRef}
    >
      <h1>Проверка заказа:</h1>
      {cardsArray.map((child, index) => (
        <OrderInfoWrapper
          title={child.title}
          key={index}
        >
          {child.component}
        </OrderInfoWrapper>
      ))}
      <div className={styles.order_small}>
        * Нажимая «Оплатить в Диагностическом центре», вы даёте согласие на
        обработку своих персональных данных
      </div>
      <BasketButton
        onClick={() => {
          dispatch(clearBasketAC());
        }}
        to="../preorder/complete/№=41898-427534"
      >
        Оплатить в диагностическом центре
      </BasketButton>
    </div>
  );
};
export default OrderChecking;
