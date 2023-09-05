import styles from './MainAnalysisItem.module.css';
import { IoMdArrowForward } from 'react-icons/io';
import { BsHeartPulse } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const MainAnalysisItem = ({ analys }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.wrapper}
      data-aos="fade-up"
      onClick={() => navigate(`servises/analysis/analys/${analys.id}`)}
    >
      <div className={styles.icon_wrapper}>
        <BsHeartPulse className={styles.icon_heart} />
      </div>
      <h4>{analys.title}</h4>
      <div className={styles.price}>{analys.priceTitle}</div>
      <div>
        <IoMdArrowForward className={styles.icon_forward} />
      </div>
    </div>
  );
};
export default MainAnalysisItem;
