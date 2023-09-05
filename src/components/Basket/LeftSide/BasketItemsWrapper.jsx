import { useSelector, useDispatch } from 'react-redux';
import { BasketButton } from '../BasketUtils/BasketButton';
import { removeServisAC } from '../../../store/mainInfoReduser';
import BasketItem from './BasketItem';
import styles from './BasketItem.module.css';

const BasketItemsWrapper = () => {
  const basket = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.basket
  );
  const dispatch = useDispatch();
  return (
    <div className={styles.basket_items_wrapper}>
      {basket.length
        ? basket.map((good, index) => {
            return (
              <BasketItem
                title={good.title}
                priceTitle={good.priceTitle}
                key={index}
                id={good.id}
                removeServis={() => dispatch(removeServisAC(index, good.price))}
              />
            );
          })
        : 'Ваша корзина пуста'}
      {!!basket.length && (
        <BasketButton
          style={{ marginBottom: 0 }}
          to="order/step1"
        >
          Оформить заказ
        </BasketButton>
      )}
    </div>
  );
};
export default BasketItemsWrapper;
