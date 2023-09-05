import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './MobileAboutNavigation.module.css';

const MobileAboutNavigation = ({ hideItems }) => {
  const links = useSelector((state) => state.linksReduser);
  return (
    <div className={styles.info_navigation}>
      {links.headerHiddenLinks.map((link, index) => (
        <NavLink
          onClick={hideItems}
          key={index}
          to={link.href}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};
export default MobileAboutNavigation;
