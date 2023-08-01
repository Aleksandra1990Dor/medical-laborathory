import VisiterDataHeader from '../MiddleInfoHeader/VisiterDataHeader';
import styles from './VisiterAnalysisData.module.css';
const VisiterAnalysisData = () => {
  return (
    <div className={styles.infoWrapper}>
      <VisiterDataHeader />
      <div>
        <strong>Здесь будут показаны результаты ваших анализов.</strong>
      </div>
    </div>
  );
};
export default VisiterAnalysisData;
