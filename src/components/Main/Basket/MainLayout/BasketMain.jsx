import BasketItemsWrapper from '../LeftSide/BasketItemsWrapper';
import BasketHeader from '../BasketHeader/BasketHeader';
import BasketMainInformation from '../RightSide/BasketMainInformation';
import styles from './Basket.module.css';
import { useSelector } from 'react-redux';

const BasketMain = () => {
  const priceSum = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.priceSum
  );
  return (
    <>
      <div className={styles.basket_title}>
        <BasketHeader />
        {!!priceSum && <BasketMainInformation priceSum={priceSum} />}
        <BasketItemsWrapper />
      </div>
    </>
  );
};
export default BasketMain;
