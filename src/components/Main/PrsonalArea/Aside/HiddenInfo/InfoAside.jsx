import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styles from './HiddenInfo.module.css';
const InfoAside = ({ ToggleClass, setToggleClass, showHiddenInfo }) => {
  const Navigate = useNavigate();
  return (
    <div className={ToggleClass}>
      {/* closing icon */}
      <AiOutlineClose
        className={styles.closeIcon}
        onClick={() => showHiddenInfo(ToggleClass, setToggleClass)}
      />
      {/* fish */}
      <strong className={styles.infoText}>Анализы в Лабораторной службе</strong>
      <strong className={styles.infoText}>
        <span>Victoria</span>
      </strong>
      <strong className={styles.infoText}>
        можно выполнить по полису добровольного медицинского страхования (ДМС).
      </strong>
      <button
        className={styles.infoBtn}
        onClick={() => Navigate('../dms')}
      >
        Больше информации
      </button>
    </div>
  );
};
export default InfoAside;
