import { useSelector } from 'react-redux';
import styles from './MobilePhones.module.css';

const MobilePhones = () => {
  const phones = useSelector((state) => state.mainInfoReduser.phones);
  return (
    <div className={styles.phones}>
      {phones.map((phone, index) => {
        return <div key={index}>{phone.phone}</div>;
      })}
    </div>
  );
};
export default MobilePhones;
