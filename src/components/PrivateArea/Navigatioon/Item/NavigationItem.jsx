import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = ({ title, children, link, end }) => {
  return (
    <div className={styles.item_wrapper}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_item} ${styles.nav_item_active}`
            : styles.nav_item
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
