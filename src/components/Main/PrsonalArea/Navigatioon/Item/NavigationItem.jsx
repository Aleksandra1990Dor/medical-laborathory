import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = ({ title, children, link, end }) => {
  return (
    <div className={styles.navItemWrapper}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${styles.navItem} ${styles.navItem_active}`
            : styles.navItem
        }
        to={link}
        end={end}
      >
        {`${title} `}
        {children}
      </NavLink>
    </div>
  );
};
export default NavigationItem;
