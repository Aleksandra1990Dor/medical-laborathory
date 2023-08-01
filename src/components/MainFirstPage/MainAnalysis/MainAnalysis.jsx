import { useSelector } from 'react-redux';
import MainAnalysisItem from './Item/MainAnalysisItem';
import styles from './MainAnalysis.module.css';

const MainAnalysis = () => {
  const analysis = useSelector(
    (state) => state.analysisReduser.popularAnalysis
  );
  return (
    <div className={styles.wrapper}>
      <h3>Популярные анализы:</h3>
      <div className={styles.analysis_wrapper}>
        {analysis.map((analys) => (
          <MainAnalysisItem
            analys={analys}
            key={analys.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MainAnalysis;
