import { useSelector, useDispatch } from 'react-redux';
import styles from './HeaderIcons.module.css';
import IconInfo from './IconInfo';
import { NavLink } from 'react-router-dom';
import { checkGoods } from '../../../Helpers/helpers';
import { quitAuthAC } from '../../../store/mainInfoReduser';
import { RiSendPlaneLine } from 'react-icons/ri';
const HeaderIcons = () => {
  const dispatch = useDispatch();
  const basket = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.basket
  );
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  const goods = checkGoods(basket);
  return (
    <div className={styles.icons_wrapper}>
      <NavLink
        to={auth ? '.' : 'login'}
        end={auth ? true : false}
        onClick={() => {
          if (auth) {
            dispatch(quitAuthAC());
          }
        }}
      >
        <div className={styles.media_icons_container}>
          <RiSendPlaneLine className={styles.icon} />
        </div>
      </NavLink>
      <NavLink
        to={auth ? '.' : 'login'}
        end={auth ? true : false}
        onClick={() => {
          if (auth) {
            dispatch(quitAuthAC());
          }
        }}
      >
        <IconInfo
          text={auth ? 'Выход' : 'Регистрация / Вход'}
          discription="register"
          toggleClass={styles.hidden}
        />
      </NavLink>
      <div className={styles.basket_wrapper}>
        <NavLink to="basket">
          <IconInfo
            text={
              basket?.length
                ? 'У вас в корзине  ' + `${basket.length} ${goods}`
                : 'Ваша корзина пуста'
            }
            discription="bag"
            toggleClass={styles.hidden}
          />
          {
            <div className={basket.length ? styles.basket_info : styles.hidden}>
              {basket.length}
            </div>
          }
        </NavLink>
      </div>
    </div>
  );
};
export default HeaderIcons;
