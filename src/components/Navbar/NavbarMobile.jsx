import styles from './NavbarMobile.module.css';
import { GiDrippingTube, GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import { BsCardChecklist } from 'react-icons/bs';
import { FaAmbulance } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useToggleClass } from '../CustomHooks/UseToggle';
import { useSelector } from 'react-redux';
import { ChoseCity } from '../Header/HeaderSectionOne/RightSide/City';
const NavbarMobile = () => {
  const [toggleClassList, showItems, hideItems] = useToggleClass(
    styles.hidden_animation,
    styles.hidden,
    styles.hideInfo,
    100
  );
  const links = useSelector((state) => state.linksReduser);
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const phones = useSelector((state) => state.mainInfoReduser.phones);
  return (
    <div className={styles.footer_mobile}>
      <NavLink
        className={styles.item_container}
        to="/medical-laborathory/analysis/popularAnalysis"
      >
        <GiDrippingTube className={styles.icon} />
        Анализы
      </NavLink>
      <NavLink
        className={styles.item_container}
        to="/medical-laborathory/actions-page"
      >
        <BsCardChecklist className={styles.icon} />
        Акции
      </NavLink>
      <NavLink
        className={styles.item_container}
        to="/medical-laborathory/home-servis"
      >
        <FaAmbulance className={styles.icon} />
        Выезд на дом
      </NavLink>
      <div>
        <GiHamburgerMenu
          className={styles.icon_menu}
          onClick={showItems}
        />
        <div className={toggleClassList}>
          <div className={styles.nav_container}>
            <RiCloseFill
              onClick={hideItems}
              className={styles.closing_icon}
            />
            <ChoseCity city={city} />
            <div className={styles.main_navigation}>
              {links.navLinks.map((link, index) => {
                if (index === 0 || index === 1 || index === 4) {
                  return false;
                }
                return (
                  <NavLink
                    key={index}
                    to={
                      Array.isArray(link.links)
                        ? link.links[0].href
                        : link.links
                    }
                    onClick={hideItems}
                  >
                    {link.title}
                  </NavLink>
                );
              })}
            </div>
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
            <div className={styles.phones}>
              {phones.map((phone, index) => {
                return <div key={index}>{phone.phone}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
