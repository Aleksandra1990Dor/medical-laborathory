import styles from './CustumSwitchTrack.module.css';
import { FaBriefcaseMedical } from 'react-icons/fa';

const CustumSwitchTrack = ({ name, onChange, value, onBlur, ref }) => {
  return (
    <div>
      <div className={styles.switch_label}>
        <div className={styles.switch_label_wrapper}>
          <FaBriefcaseMedical className={styles.switch_label_icon} />
          Сдать анализ дома, в офисе или на даче
        </div>
        <input
          type="checkbox"
          id="switch"
          className={styles.custom_switch}
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          checked={value === true}
        />
        <label htmlFor="switch"></label>
      </div>
    </div>
  );
};
export default CustumSwitchTrack;
