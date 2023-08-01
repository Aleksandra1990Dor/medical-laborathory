import { useSelector } from 'react-redux';
import NavbarItem from './NavbarItem';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navlinks = useSelector((state) => state.linksReduser.navLinks);
  return (
    <div className={styles.navbar}>
      {navlinks.map((link, index) => {
        return (
          <NavbarItem
            text={link.title}
            key={index}
            index={index}
            links={link.links}
          />
        );
      })}
    </div>
  );
};
export default Navbar;
