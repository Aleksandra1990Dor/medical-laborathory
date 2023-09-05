import ForDoctorsPrCard from './ForDoctorsPrCard';
import Achivments from '../../MainFirstPage/Achivments/Achivments';
import styles from './ForDoctors..module.css';

const MainForDoctors = () => {
  return (
    <div className={styles.wrapper}>
      <ForDoctorsPrCard />
      <Achivments iconColor={styles.icon_pink} />
    </div>
  );
};
export default MainForDoctors;
