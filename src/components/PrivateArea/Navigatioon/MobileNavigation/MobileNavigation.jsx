import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './MobileNavigation.module.css';

const MobileNavigation = () => {
  // private area navigation links
  const links = useSelector((state) => state.linksReduser.personalAreaLinks);
  return (
    <div className={styles.mobile_navigation}>
      {links.map((link, index) => (
        <NavLink
          to={link.link}
          key={index}
          end={index === 1 ? true : false}
          className={({ isActive }) =>
            isActive
              ? `${styles.nav_item} ${styles.nav_item_active}`
              : styles.nav_item
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileNavigation;
