import { useNavigate } from 'react-router-dom';
import styles from './AnalysisItem.module.css';
import AnalysisItemDescription from './LeftSideDescription/AnalysisItemDescription';
import AnalysItemOrder from './RightSideOrder/AnalysItemOrder';
import { memo } from 'react';
const AnalysItem = memo(({ noLink, analys }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.analys_item_wrapper}>
      <AnalysisItemDescription
        analys={analys}
        navigate={navigate}
        noLink={noLink}
      />
      <AnalysItemOrder
        analys={analys}
        navigate={navigate}
        noLink={noLink}
      />
    </div>
  );
});

export default AnalysItem;
