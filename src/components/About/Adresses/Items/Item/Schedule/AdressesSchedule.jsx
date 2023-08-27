import { useSelector } from 'react-redux';
import AdressSchedule from './AdressSchedule';
import styles from '../MainContainer/AdressItem.module.css';

const AdressesSchedule = () => {
  //schedule titles from state
  const scheduleTitles = useSelector(
    (state) => state.mainInfoReduser.adressesInfoTitles
  );
  return (
    <div className={styles.schedule_wrapper}>
      {scheduleTitles.map((title, index) => (
        <AdressSchedule
          title={title}
          key={index}
        />
      ))}
    </div>
  );
};
export default AdressesSchedule;
