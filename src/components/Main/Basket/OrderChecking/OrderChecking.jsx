import { useSelector, useDispatch } from 'react-redux';
import OrderClientInformation from './ClientInformation/OrderClientInformation';
import OrderPlaceInfo from './PlaseInfo/OrderPlaceInfo';
import OrderInfoWrapper from './InfoWrapper/OrderInfoWrapper';
import OrderInfo from './OrderInformation/OrderInfo';
import { BasketButton } from '../BasketUtils/BasketButton';
import { clearBasketAC } from '../../../store/mainInfoReduser';
import styles from './OrderChecking.module.css';

const OrderChecking = () => {
  const data = useSelector((state) => state.mainInfoReduser.orderInformation);
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <h1>Проверка заказа:</h1>
      <OrderInfoWrapper title="Клиент">
        <OrderClientInformation data={data} />
      </OrderInfoWrapper>
      <OrderInfoWrapper title="Место сдачи">
        <OrderPlaceInfo adress={data.adress || 'Диагностический центр'} />
      </OrderInfoWrapper>
      <OrderInfoWrapper title="Заказ">
        <OrderInfo />
      </OrderInfoWrapper>
      <div className={styles.order_small}>
        * Нажимая «Оплатить в Диагностическом центре», вы даёте согласие на
        обработку своих персональных данных
      </div>
      <BasketButton
        onClick={() => {
          dispatch(clearBasketAC());
        }}
        to="../../preorder/complete/№=41898-427534"
      >
        Оплатить в диагностическом центре
      </BasketButton>
    </div>
  );
};
export default OrderChecking;
