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
          <h4>Телефоны:</h4>
          {phones.map((phone, index) => {
            return <h5 key={index}>{phone.phone}</h5>;
          })}
        </div>
        <div>
          <button className={styles.footer_btn}>Вход для партнеров</button>
        </div>
      </div>
      <div className={styles.footer_right}>
        <div className={styles.footer_links_container}>
          <h4> Услуги клиентам:</h4>
          <div className={styles.footer_links_wrapper}>
            <div className={styles.footer_links_container}>
              {links.navLinks.map((link, index) => {
                if (index > 4) {
                  return false;
                }
                return (
                  <NavLink
                    className={styles.footer_link}
                    key={index}
                    to={link.links.length ? link.links[1] : link.links}
                  >
                    {link.title}
                  </NavLink>
                );
              })}
            </div>
            <div className={styles.footer_links_container}>
              <NavLink
                className={styles.footer_link}
                to="dms"
              >
                Программы ДМС
              </NavLink>
              <NavLink
                className={styles.footer_link}
                to="home-servise"
              >
                Выезд на дом
              </NavLink>
              <NavLink
                className={styles.footer_link}
                to=""
              >
                Консультации врача
              </NavLink>
              <NavLink
                className={styles.footer_link}
                to="#"
              >
                Другие услуги
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.footer_links_container}>
          <h4>Справочная информация:</h4>
          <NavLink
            className={styles.footer_link}
            to=""
          >
            Франшиза
          </NavLink>
          <NavLink
            className={styles.footer_link}
            to="#"
          >
            Обучающие конференции для врачей
          </NavLink>
          <NavLink
            className={styles.footer_link}
            to=""
          >
            Партнерские программы
          </NavLink>
        </div>
        <div className={styles.footer_links_container}>
          <h4>О компании:</h4>
          {links.headerHiddenLinks.map((link, index) => {
            return (
              <NavLink
                className={styles.footer_link}
                key={index}
                to={link.href}
              >
                {link.text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
