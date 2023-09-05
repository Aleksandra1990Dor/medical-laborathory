import { NavLink } from 'react-router-dom';
import styles from './BackLink.module.css';
const BackLink = () => {
  return (
    <div className={styles.linkWrapper}>
      <NavLink
        to="/medical-laborathory/"
        className={styles.back}
      >
        Главная
      </NavLink>
    </div>
  );
};
export default BackLink;
