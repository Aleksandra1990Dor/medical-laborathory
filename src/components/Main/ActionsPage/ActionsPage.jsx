import { useSelector } from 'react-redux';
import styles from './ActionsPage.module.css';
import AnalysItem from '../Analysis/AnalysisMenu/Item/AnalysisItem';
const ActionsPage = () => {
  const actions = useSelector((state) => state.analysisReduser.actions);
  return (
    <div className={styles.actions}>
      <h4>Действующие акции:</h4>
      {actions.map((a) => {
        return (
          <AnalysItem
            key={a.id}
            analys={a}
          />
        );
      })}
    </div>
  );
};
export default ActionsPage;
