import { useSelector } from 'react-redux';
import BasketItemsWrapper from '../LeftSide/BasketItemsWrapper';
import BasketHeader from '../LeftSide/BasketHeader/BasketHeader';
import BasketMainInformation from '../RightSide/BasketMainInformation';
import styles from './Basket.module.css';

const BasketMain = () => {
  const priceSum = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.priceSum
  );
  return (
    <>
      <div className={styles.left_side_wrapper}>
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
