import styles from './LisenseItem.module.css';
import { BsFillStarFill } from 'react-icons/bs';

const LicenseItem = ({ children, description, title }) => {
  return (
    <div className={styles.license_block}>
      <div className={styles.license_title}>
        <BsFillStarFill className={styles.license_title_icon_star} />
        {title}
      </div>
      <div className={styles.license_description}>{description}</div>
      {children}
    </div>
  );
};
export default LicenseItem;
