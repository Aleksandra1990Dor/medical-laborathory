import BackLink from '../../../../Utils/BackLink';
import styles from '../Analysis.module.css';

const AnalysisPageHeader = ({ city }) => {
  return (
    <div className={styles.city}>
      <BackLink />
      <div className={styles.city_name}>
        <small> Сдать анализы в городе:&nbsp;&nbsp;</small>
        <span>{city}</span>
      </div>
    </div>
  );
};

export default AnalysisPageHeader;
