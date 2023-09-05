import styles from './Footer.module.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const phones = useSelector((state) => state.mainInfoReduser.phones);
  const links = useSelector((state) => state.linksReduser);
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_left}>
        <div className={styles.footer_phones}>
          <h4 className={styles.phones_title}>Телефоны:</h4>
          {phones.map((phone, index) => {
            return (
              <h5
                className={styles.phones_item}
                key={index}
              >
                {phone.phone}
              </h5>
            );
          })}
        </div>
      </div>
      <div className={styles.footer_right}>
        <div className={styles.footer_links_container}>
          <h4 className={styles.links_title}> Услуги клиентам:</h4>
          <div className={styles.footer_links_wrapper}>
            <div className={styles.footer_links_container}>
              {links.navLinks.map((link, index) => {
                const href =
                  typeof link.links === 'object'
                    ? link.links[0].href
                    : link.links;
                if (index > 4) {
                  return false;
                }
                return (
                  <NavLink
                    className={styles.footer_link}
                    key={index}
                    to={`/medical-laborathory/${href}`}
                  >
                    {link.title}
                  </NavLink>
                );
              })}
            </div>
            <div className={styles.footer_links_container}>
              <NavLink
                className={styles.footer_link}
                to="/medical-laborathory/about/dms"
              >
                Программы ДМС
              </NavLink>
              <NavLink
                className={styles.footer_link}
                to="/medical-laborathory/about/home-servis"
              >
                Выезд на дом
              </NavLink>
              <NavLink
                className={styles.footer_link}
                to="/medical-laborathory/servises/doctors/nevrolog"
              >
                Консультации врача
              </NavLink>
              <NavLink
                className={styles.footer_link}
                to="/medical-laborathory/servises/other-servises"
              >
                Другие услуги
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.footer_links_container}>
          <h4 className={styles.links_title}>О компании:</h4>
          {links.headerHiddenLinks.map((link, index) => {
            return (
              <NavLink
                className={styles.footer_link}
                key={index}
                to={`/medical-laborathory/${link.href}`}
              >
                {link.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
