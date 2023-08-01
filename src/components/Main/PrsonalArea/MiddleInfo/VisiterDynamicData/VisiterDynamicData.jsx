import VisiterDataHeader from '../MiddleInfoHeader/VisiterDataHeader';
import styles from './VisiterDynamicData.module.css';
const VisiterDynamicData = () => {
  return (
    <div className={styles.infoWrapper}>
      <VisiterDataHeader />
      <div>
        <strong>Здесь будет показана динамика ваших анализов.</strong>
      </div>
    </div>
  );
};
export default VisiterDynamicData;
