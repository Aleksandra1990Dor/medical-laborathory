import { BsDot } from 'react-icons/bs';
import styles from './AdressesPageRightSide.module.css';
const AdressItem = ({ adress }) => {
  return (
    <div className={styles.city_item}>
      <BsDot className={styles.city_icon} />
      <strong>{adress}</strong>
    </div>
  );
};
export default AdressItem;
