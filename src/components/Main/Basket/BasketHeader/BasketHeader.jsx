import { useDispatch, useSelector } from 'react-redux';
import { BsFillCartXFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import styles from './BasketHeader.module.css';
import { clearBasketAC } from '../../../store/mainInfoReduser';

const BasketHeader = () => {
  const priceSum = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.priceSum
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.basket_header}>
        <NavLink
          className={styles.back}
          to="../analysis/popularAnalysis"
        >
          <BiArrowBack className={styles.icon_back} /> Вернуться в каталог
        </NavLink>
      </div>
      <h2 className={styles.title}>
        Корзина
        {!!priceSum && (
          <NavLink
            className={styles.clear_basket}
            onClick={() => dispatch(clearBasketAC(null, []))}
          >
            Очистить корзину
            <BsFillCartXFill className={styles.clear_basket_icon} />
          </NavLink>
        )}
      </h2>
    </>
  );
};
export default BasketHeader;
