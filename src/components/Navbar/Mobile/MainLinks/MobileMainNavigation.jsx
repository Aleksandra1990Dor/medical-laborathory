import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './MobileMainNavigation.module.css';

const MobileMainNavigation = ({ hideItems }) => {
  const links = useSelector((state) => state.linksReduser);

  return (
    <div className={styles.main_navigation}>
      {links.navLinks.map((link, index) => {
        if (index === 0 || index === 1 || index === 4) {
          return false;
        }
        return (
          <NavLink
            key={index}
            to={Array.isArray(link.links) ? link.links[0].href : link.links}
            onClick={hideItems}
          >
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
};
export default MobileMainNavigation;
