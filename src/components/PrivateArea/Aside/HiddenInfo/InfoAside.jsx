import { AiOutlineClose } from 'react-icons/ai';
import styles from './HiddenInfo.module.css';

const DmsInfoAside = ({
  toggleClass,
  showInfo,
  hideInfo,
  showHiddenInfo,
  navigate,
}) => {
  return (
    <div className={toggleClass}>
      <AiOutlineClose
        className={styles.closing_icon}
        onClick={() => showHiddenInfo(toggleClass, showInfo, hideInfo)}
      />
      <div className={styles.info}>Анализы в Лабораторной службе</div>
      <div className={styles.info}>
        <span>Victoria</span>
      </div>
      <div className={styles.info}>
        можно выполнить по полису добровольного медицинского страхования (ДМС).
      </div>
      <button
        className={styles.btn}
        onClick={() => navigate('../about/dms')}
      >
        Больше информации
      </button>
    </div>
  );
};
export default DmsInfoAside;
