import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './MobileNavigation.module.css';

const MobileNavigation = () => {
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
              ? `${styles.navItem} ${styles.navItem_active}`
              : styles.navItem
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileNavigation;
