import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styles from './HeaderLinks.module.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HiddenNavbarElement } from '../../../Navbar/NavbarItem';

const AboutCompanyHiddenList = ({ toggleClass }) => {
  const links = useSelector((state) => state.linksReduser.headerHiddenLinks);
  const [toggleClassList, setToggleClassList] = useState(styles.hidden);
  const showMoreInfo = () => {
    if (toggleClassList === styles.hidden) {
      setToggleClassList(styles.about);
    }
  };
  const hideMoreInfo = () => {
    if (toggleClassList === styles.about) {
      setToggleClassList(`${styles.about} ${styles.hideMore}`);
      setTimeout(() => {
        setToggleClassList(styles.hidden);
      }, 450);
    }
  };
  return (
    <div className={toggleClass}>
      <div
        onClick={showMoreInfo}
        className={styles.link_item}
      >
        <span>О компании</span>
        <BsChevronDown className={styles.link_icon} />
      </div>
      <div
        className={toggleClassList}
        onMouseLeave={hideMoreInfo}
      >
        {links.map((link, index) => {
          return (
            <HiddenNavbarElement
              key={index}
              link={link}
              hideMore={hideMoreInfo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default AboutCompanyHiddenList;
