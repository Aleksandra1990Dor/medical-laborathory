import { useSelector } from 'react-redux';
import AnalysItem from '../Analysis/AnalysisMenu/Item/AnalysisItem';
import BackLink from '../../Utils/BackLink';
import styles from './ActionsPage.module.css';

const ActionsPage = () => {
  const actions = useSelector((state) => state.analysisReduser.actions);
  return (
    <div className={styles.actions}>
      <BackLink />
      <h4
        className={styles.title}
        data-aos="fade-right"
      >
        Действующие акции:
      </h4>
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
