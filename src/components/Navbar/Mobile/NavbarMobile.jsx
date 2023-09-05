import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useToggleClass } from '../../../CustomHooks/UseToggle';
import MobileHiddenMenu from './HiddenMenu/MobileHiddenMenu';
import styles from './NavbarMobile.module.css';

const NavbarMobile = () => {
  const [toggleClassList, showItems, hideItems] = useToggleClass(
    styles.hidden_animation,
    styles.hidden,
    styles.hideInfo,
    1000
  );
  const links = useSelector((state) => state.linksReduser.mobileIconsLinks);
  return (
    <div className={styles.footer_mobile}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          className={styles.item_container}
          to={link.link}
        >
          {link.icon}
          {link.text}
        </NavLink>
      ))}
      <div>
        <GiHamburgerMenu
          className={styles.icon_menu}
          onClick={showItems}
        />
        <div className={toggleClassList}>
          <MobileHiddenMenu hideItems={hideItems} />
        </div>
      </div>
    </div>
  );
};
export default NavbarMobile;
