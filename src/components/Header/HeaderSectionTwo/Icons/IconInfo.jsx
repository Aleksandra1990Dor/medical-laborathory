import { useSelector } from 'react-redux';
import { RiShoppingCartFill } from 'react-icons/ri';
import { useToggleClass } from '../../../../CustomHooks/UseToggle';
import { BsFillPersonPlusFill, BsFillPersonFill } from 'react-icons/bs';
import styles from './HeaderIcons.module.css';

const IconInfo = ({ text, discription, onClick, basket }) => {
  // checkinfg is user authorize
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  // show or hide icon description
  const [toggleClassList, showInfo, hideInfo] = useToggleClass(
    styles.icon_discription,
    styles.hidden,
    '',
    100
  );

  return (
    <div
      className={styles.icons_container}
      onMouseOver={showInfo}
      onMouseLeave={hideInfo}
      onClick={onClick}
    >
      {discription === 'bag' ? (
        <RiShoppingCartFill className={styles.icon} />
      ) : auth ? (
        <BsFillPersonFill className={styles.icon} />
      ) : (
        <BsFillPersonPlusFill className={styles.icon} />
      )}
      <div
        className={toggleClassList}
        onMouseLeave={hideInfo}
      >
        {text}
      </div>
      {discription === 'bag' && (
        <div className={basket.length ? styles.basket_info : styles.hidden}>
          {basket.length}
        </div>
      )}
    </div>
  );
};
export default IconInfo;
