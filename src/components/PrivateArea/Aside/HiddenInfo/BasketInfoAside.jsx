import { useSelector } from 'react-redux';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { checkGoods } from '../../../Helpers/helpers';
import styles from './HiddenInfo.module.css';

const BasketInfoAside = ({
  toggleClass,
  showInfo,
  hideInfo,
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
    <div className={toggleClass}>
      <AiOutlineClose
        className={styles.closing_icon}
        onClick={() => showHiddenInfo(toggleClass, showInfo, hideInfo)}
      />
      <div className={styles.info}>
        {basket.length ? 'в вашей корзине' : 'Ваша корзина пуста'}
      </div>
      <div className={styles.sum}>
        {basket.length ? <div>{basket.length}</div> : <RiShoppingBasketFill />}
      </div>
      {!!basket.length && <div className={styles.info}>{goods}</div>}
      {!!basket.length && (
        <div className={styles.info}>
          на сумму <span>{price}</span> рублей
        </div>
      )}
      <button
        onClick={() => {
          !basket.length
            ? navigate(
                '/medical-laborathory/servises/analysis/clinickBloodtests'
              )
            : navigate('/medical-laborathory/basket');
        }}
        className={styles.btn}
      >
        {basket.length ? 'Оформить заказ' : 'Подобрать анализы'}
      </button>
    </div>
  );
};

export default BasketInfoAside;
