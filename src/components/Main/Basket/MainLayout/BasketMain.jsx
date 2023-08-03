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
        {!!priceSum && (
          <div className={styles.basket_main_information_wrapper}>
            <BasketMainInformation priceSum={priceSum} />
          </div>
        )}
        <BasketItemsWrapper />
      </div>
    </>
  );
};
export default BasketMain;
