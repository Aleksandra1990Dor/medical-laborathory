import { useSelector } from 'react-redux';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './HiddenInfo.module.css';
import { checkGoods } from '../../../../Helpers/helpers';

const BasketInfoAside = ({
  ToggleClass,
  setToggleClass,
  showHiddenInfo,
  navigate,
}) => {
  // geting visiter's basket info
  const basket = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.basket
  );
  // geting visiter's price sum
  const price = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.priceSum
  );
  //   chosing right word for goods
  const goods = checkGoods(basket);
  return (
    <div className={ToggleClass}>
      {/* closing icon */}
      <AiOutlineClose
        className={styles.closeIcon}
        onClick={() => showHiddenInfo(ToggleClass, setToggleClass)}
      />
      {/* iformation about visiter basket */}
      <strong className={styles.infoText}>
        {basket.length ? 'в вашей корзине' : 'Ваша корзина пуста'}
      </strong>
      <div className={styles.mainInfoWrapper}>
        {basket.length ? <div>{basket.length}</div> : <RiShoppingBasketFill />}
      </div>

      {!!basket.length && <strong className={styles.infoText}>{goods}</strong>}
      {!!basket.length && (
        <strong className={styles.infoText}>
          на сумму <span>{price}</span> рублей
        </strong>
      )}
      {/* link to analysis page if basket is empty and to basket page if basket is full */}
      <button
        onClick={() => {
          !basket.length
            ? navigate('../analysis/clinickBloodtests')
            : navigate('../basket');
        }}
        className={styles.infoBtn}
      >
        {basket.length ? 'Оформить заказ' : 'Подобрать анализы'}
      </button>
    </div>
  );
};

export default BasketInfoAside;
