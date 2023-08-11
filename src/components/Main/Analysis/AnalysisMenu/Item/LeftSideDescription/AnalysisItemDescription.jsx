import { NavLink } from 'react-router-dom';
import { BiHome, BiTime } from 'react-icons/bi';
import styles from './AnalysisItemDescription.module.css';

const AnalysisItemDescription = ({ analys, navigate, noLink }) => {
  return (
    <div
      onClick={() =>
        navigate(noLink ? '' : `/medical-laborathory/analys/${analys?.id}`)
      }
    >
      <h2 className={styles.analys_article}>№ {analys?.id}</h2>
      <NavLink className={styles.analys_title}>{analys?.title}</NavLink>
      <p className={styles.analys_description}>
        {analys?.smallDescription || analys?.fullName}
      </p>
      {analys?.experience && (
        <p
          className={styles.analys_description_experience}
        >{`Опыт работы ${analys?.experience}`}</p>
      )}
      <div>
        <span className={styles.span}>
          <BiTime className={styles.span_icon} />
          {analys?.time || 'до 5 дней'}
        </span>
        <span className={styles.span}>
          <BiHome className={styles.span_icon} /> Сдать на дому
        </span>
      </div>
    </div>
  );
};
export default AnalysisItemDescription;
