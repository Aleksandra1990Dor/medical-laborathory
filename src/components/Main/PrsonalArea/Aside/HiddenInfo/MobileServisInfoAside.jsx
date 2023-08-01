import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './HiddenInfo.module.css';

const MobileServiceInfoAside = ({
  ToggleClass,
  setToggleClass,
  showHiddenInfo,
  navigate,
}) => {
  // get visiter city name
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  return (
    <div className={ToggleClass}>
      {/* closing icon */}
      <AiOutlineClose
        className={styles.closeIcon}
        onClick={() => showHiddenInfo(ToggleClass, setToggleClass)}
      />
      {/* mobile servise info */}
      <strong className={styles.infoText}>выезд Мобильной службы</strong>
      <strong className={styles.infoText}>по г. {city}</strong>
      <strong className={styles.infoText}>
        <span className={styles.infoTextSpan}>бесплатно</span>
      </strong>
      {/* link to basket to order mobile servise */}
      <button
        onClick={() => navigate('../home-servis')}
        className={styles.infoBtn}
      >
        Узнать подробнее
      </button>
    </div>
  );
};

export default MobileServiceInfoAside;
