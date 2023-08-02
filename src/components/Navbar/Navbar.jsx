import { useSelector } from 'react-redux';
import NavbarItem from './NavbarItem';
import styles from './Navbar.module.css';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const navlinks = useSelector((state) => state.linksReduser.navLinks);
  return (
    <nav className={styles.navbar}>
      <NavbarMobile />
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
    </nav>
  );
};
export default Navbar;
