import { useState } from 'react';
import { RiShoppingCartFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import AddedToBasketMsg from '../../../../../Utils/AddedToBasketMsg';
import {
  addServisToBasketAC,
  getPriceSumAC,
} from '../../../../../store/mainInfoReduser';
import styles from './AnalysItemOrder.module.css';

const AnalysItemOrder = ({ analys, noLink, navigate }) => {
  const dispatch = useDispatch();
  const [toggleClass, setToggleClass] = useState(styles.hidden);
  const add = () => {
    dispatch(addServisToBasketAC(analys));
    dispatch(getPriceSumAC(analys?.price));
    setToggleClass(styles.added);
  };
  return (
    <div className={styles.order}>
      <h4 className={styles.price}>{`${analys?.price} ₽`}</h4>
      {noLink ? (
        <button
          className={styles.btn}
          onClick={() => navigate('/netu')}
        >
          Записаться
        </button>
      ) : (
        <button
          className={styles.btn}
          onClick={add}
        >
          <RiShoppingCartFill className={styles.btn_icon} />В корзину
        </button>
      )}
      <AddedToBasketMsg toggleClass={toggleClass} />
    </div>
  );
};
export default AnalysItemOrder;
