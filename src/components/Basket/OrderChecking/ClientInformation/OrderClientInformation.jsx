import styles from './OrderClientInformation.module.css';
import { IoPersonSharp } from 'react-icons/io5';

const OrderClientInformation = ({ data }) => {
  return (
    <>
      <div className={styles.info_main_information}>
        <IoPersonSharp className={styles.order_icon} />
        {data.fullName}
      </div>
      <div className={styles.info_information}>
        <div>{data.dateOfBurn}</div>
        <div>{data.sex}</div>
        <div>{data.phone}</div>
        <div>{data.email}</div>
      </div>
    </>
  );
};
export default OrderClientInformation;
