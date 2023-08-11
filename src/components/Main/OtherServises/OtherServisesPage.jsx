import { useSelector } from 'react-redux';
import AnalysItem from '../Analysis/AnalysisMenu/Item/AnalysisItem';
import styles from './OtherServisesPage.module.css';
const OtherServisesPage = () => {
  //   const links = useSelector((state) => state.linksReduser.navLinks[6].links);
  const servises = useSelector((state) => state.analysisReduser.otherServises);
  return (
    <div className={styles.actions}>
      <h4>Другие услуги:</h4>
      {servises.map((servise, index) => {
        return (
          <AnalysItem
            key={servise.id}
            analys={servise}
            noLink={true}
          />
        );
      })}
    </div>
  );
};
export default OtherServisesPage;
