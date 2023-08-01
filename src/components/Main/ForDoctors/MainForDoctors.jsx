import ForDoctorsPrCard from './ForDoctorsPrCard';
import Achivments from '../../MainFirstPage/Achivments/Achivments';
import styles from '../../MainFirstPage/Achivments/Achivments.module.css';

const MainForDoctors = () => {
  return (
    <div>
      <ForDoctorsPrCard />
      <Achivments iconColor={styles.icon_pink} />
    </div>
  );
};
export default MainForDoctors;
