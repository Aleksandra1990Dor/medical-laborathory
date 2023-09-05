import { RiMapPin3Fill } from 'react-icons/ri';
import styles from './OrderPlaceInfo.module.css';

const OrderPlaceInfo = ({ adress }) => {
  return (
    <div className={styles.info_main_information}>
      <RiMapPin3Fill className={styles.order_icon} />
      {adress}
    </div>
  );
};
export default OrderPlaceInfo;
