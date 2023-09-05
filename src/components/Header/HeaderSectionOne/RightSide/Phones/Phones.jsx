import { useToggleClass } from '../../../../../CustomHooks/UseToggle';
import { FaPhone } from 'react-icons/fa';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import styles from './Phones.module.css';

const Phones = ({ phones }) => {
  const [toggleClassList, showPhones, hidePhones] = useToggleClass(
    styles.more,
    styles.hidden,
    styles.hideMore,
    450
  );
  return (
    <>
      <h4
        className={styles.title}
        onClick={showPhones}
      >
        {`${phones[0].phone} `}
        <FaPhone className={styles.phones_icon} />
      </h4>
      <div
        className={toggleClassList}
        onMouseLeave={hidePhones}
      >
        {phones.map((phone, index) => {
          return (
            <div
              key={index}
              className={styles.phones_item}
              onClick={hidePhones}
            >
              {phone.phone}
            </div>
          );
        })}
        <BsFillTelephoneOutboundFill
          className={`${styles.phones_icon} ${styles.hidden__icon}`}
        />
        <span>Бесплатный звонок по россии</span>
      </div>
    </>
  );
};
export default Phones;
