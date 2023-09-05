import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './HiddenInfo.module.css';

const MobileServiceInfoAside = ({
  toggleClass,
  showHiddenInfo,
  showInfo,
  hideInfo,
  navigate,
}) => {
  // get visiter city
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  return (
    <div className={toggleClass}>
      <AiOutlineClose
        className={styles.closing_icon}
        onClick={() => showHiddenInfo(toggleClass, showInfo, hideInfo)}
      />
      <div className={styles.info}>выезд Мобильной службы</div>
      <div className={styles.info}>по г. {city}</div>
      <div className={styles.info}>
        <span className={styles.infoSpan}>бесплатно</span>
      </div>
      <button
        onClick={() => navigate('../about/home-servis')}
        className={styles.btn}
      >
        Узнать подробнее
      </button>
    </div>
  );
};

export default MobileServiceInfoAside;
