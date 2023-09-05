import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { checkGoods } from '../../../Helpers/helpers';
import IconInfo from './IconInfo';
import styles from './HeaderIcons.module.css';

const HeaderIcons = () => {
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  const basket = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.basket
  );
  // function checking how many goods in basket
  const goods = checkGoods(basket);

  return (
    <div className={styles.icons_wrapper}>
      <NavLink
        to={
          auth
            ? '/medical-laborathory/private-area'
            : '/medical-laborathory/authorisation/login'
        }
        end={auth ? true : false}
      >
        <IconInfo
          text={auth ? 'Личный кабинет' : 'Регистрация / Вход'}
          discription="register"
          toggleClass={styles.hidden}
          basket={basket}
        />
      </NavLink>
      <div className={styles.basket_wrapper}>
        <NavLink to="basket">
          <IconInfo
            text={
              basket?.length
                ? `У вас в корзине ${basket.length} ${goods}`
                : 'Ваша корзина пуста'
            }
            discription="bag"
            basket={basket}
          />
          {/* {
            <div className={basket.length ? styles.basket_info : styles.hidden}>
              {basket.length}
            </div>
          } */}
        </NavLink>
      </div>
    </div>
  );
};
export default HeaderIcons;
