import { RiShoppingCartFill } from 'react-icons/ri';
import { useState } from 'react';
import { BsFillPersonPlusFill, BsFillPersonCheckFill } from 'react-icons/bs';
import styles from './HeaderIcons.module.css';
import { useSelector } from 'react-redux';

const IconInfo = ({ text, toggleClass, discription }) => {
  const [toggleClassList, setToggleClassList] = useState(toggleClass);
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  const showIconsInfo = () => {
    if (toggleClassList === styles.hidden) {
      setToggleClassList(styles.icon_discription);
    }
  };
  const hideIconsInfo = () => {
    setToggleClassList(styles.hidden);
  };
  return (
    <div
      className={styles.icons_container}
      onMouseOver={showIconsInfo}
      onMouseLeave={hideIconsInfo}
    >
      {discription === 'bag' ? (
        <RiShoppingCartFill className={styles.icon} />
      ) : auth ? (
        <BsFillPersonCheckFill className={styles.icon} />
      ) : (
        <BsFillPersonPlusFill className={styles.icon} />
      )}
      <div
        className={toggleClassList}
        onMouseLeave={hideIconsInfo}
      >
        {text}
      </div>
    </div>
  );
};
export default IconInfo;
