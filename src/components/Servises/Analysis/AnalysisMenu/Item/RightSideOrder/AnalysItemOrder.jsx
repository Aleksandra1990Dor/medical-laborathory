import { useState } from 'react';
import { RiShoppingCartFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import AddedToBasketMsg from '../../../../../Utils/AddedToBasketMsg';
import {
  addServisToBasketAC,
  getPriceSumAC,
} from '../../../../../../store/mainInfoReduser';
import styles from './AnalysItemOrder.module.css';

const AnalysItemOrder = ({ analys, noLink }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [toggleClass, setToggleClass] = useState(styles.hidden);
  // function adding good to basket, adding price sum, setting disable to btn and showing message 'added'
  const add = () => {
    dispatch(addServisToBasketAC(analys));
    dispatch(getPriceSumAC(analys?.price));
    setToggleClass(styles.added);
    setDisabled(true);
  };

  return (
    <div className={styles.order}>
      <h4 className={styles.price}>{`${analys?.price} ₽`}</h4>
      {!noLink && (
        <button
          className={styles.btn}
          onClick={add}
          disabled={disabled}
        >
          <RiShoppingCartFill className={styles.btn_icon} />В корзину
        </button>
      )}
      <AddedToBasketMsg toggleClass={toggleClass} />
    </div>
  );
};
export default AnalysItemOrder;
