import { NavLink } from 'react-router-dom';
import { BiHome, BiTime } from 'react-icons/bi';
import styles from './AnalysisItemDescription.module.css';

const AnalysisItemDescription = ({ analys, navigate, noLink }) => {
  //noLink means that user can't order the good
  // if there's a link on click redirect to analys page else just showing this item
  return (
    <div
      className={styles.wrapper}
      onClick={() =>
        navigate(
          !noLink &&
            `/medical-laborathory/servises/analysis/analys/${analys?.id}`
        )
      }
    >
      <h2 className={styles.analys_article}>№ {analys?.id}</h2>
      {noLink ? (
        <div className={`${styles.analys_title} ${styles.no_link}`}>
          {analys?.title}
        </div>
      ) : (
        <NavLink className={styles.analys_title}>{analys?.title}</NavLink>
      )}
      <p className={styles.analys_description}>
        {analys?.smallDescription || analys?.fullName}
      </p>
      {analys?.experience && (
        <p
          className={styles.analys_description_experience}
        >{`Опыт работы ${analys?.experience}`}</p>
      )}
      <div className={styles.small_info_wrapper}>
        <div className={styles.small_info}>
          <BiTime className={styles.small_info_icon} />
          {analys?.time || 'до 5 дней'}
        </div>
        {!noLink && (
          <div className={styles.small_info}>
            <BiHome className={styles.small_info_icon} /> Сдать на дому
          </div>
        )}
      </div>
    </div>
  );
};
export default AnalysisItemDescription;
