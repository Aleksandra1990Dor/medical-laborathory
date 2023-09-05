import { BsFillStarFill } from 'react-icons/bs';
import styles from './LisenseItem.module.css';

const LicenseItem = ({ children, description, title }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.icon_container}>
          <BsFillStarFill className={styles.icon} />
        </div>
        {title}
      </div>
      <div className={styles.description}>{description}</div>
      {children}
    </section>
  );
};
export default LicenseItem;
