import { BsChevronDown } from 'react-icons/bs';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
const NavbarItem = ({ text, links, index }) => {
  const navigate = useNavigate();
  let hiddenClass = styles.moreInfo_middle;
  if (index === 6) hiddenClass = styles.moreInfo_rightSide;
  if (index === 0 || index === 4 || index === 2)
    hiddenClass = styles.moreInfo_leftSide;
  const [toggleClassList, setToggleClassList] = useState(styles.hidden);
  const showMore = () => {
    if (toggleClassList === styles.hidden) {
      setToggleClassList(hiddenClass);
    }
    if (typeof links === 'string') {
      navigate(links);
    }
  };
  const hideMore = () => {
    if (toggleClassList === hiddenClass) {
      setToggleClassList(`${hiddenClass} ${styles.hideMore}`);
      setTimeout(() => setToggleClassList(styles.hidden), 450);
    }
  };
  return (
    <div
      className={styles.navbar__item}
      onClick={showMore}
      onMouseLeave={hideMore}
    >
      <div className={styles.navbar__item_wrapper}>
        <span className={styles.navbar__item_link}>{text}</span>
        {typeof links !== 'string' && (
          <BsChevronDown className={styles.navbar__item_icon} />
        )}
      </div>
      {typeof links !== 'string' && (
        <div className={toggleClassList}>
          {links.map((link, index) => {
            return (
              <HiddenNavbarElement
                key={index}
                link={link}
                hideMore={hideMore}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export const HiddenNavbarElement = ({ link, hideMore }) => {
  return (
    <div className={styles.more_item}>
      <NavLink
        to={link.href}
        className={styles.more_link}
        onClick={hideMore}
      >
        {link.title}
        <IoMdArrowForward className={styles.test_block_icon} />
      </NavLink>
    </div>
  );
};
export default NavbarItem;
