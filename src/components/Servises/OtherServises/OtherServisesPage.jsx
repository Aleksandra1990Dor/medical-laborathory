import { useSelector } from 'react-redux';
import AnalysItem from '../Analysis/AnalysisMenu/Item/AnalysisItem';
import BackLink from '../../Utils/BackLink';
import styles from './OtherServisesPage.module.css';

const OtherServisesPage = () => {
  const servises = useSelector((state) => state.analysisReduser.otherServises);

  return (
    <div className={styles.actions}>
      <BackLink />
      <h4
        className={styles.title}
        data-aos="fade-right"
      >
        Другие услуги:
      </h4>
      {servises.map((servise) => (
        <AnalysItem
          key={servise.id}
          analys={servise}
          noLink={true}
        />
      ))}
      <p
        className={styles.after}
        data-aos="fade-up"
      >
        * Запись на процедуры осуществляется по телефону или при личном
        обращение в центр VICTORIA
      </p>
    </div>
  );
};
export default OtherServisesPage;
