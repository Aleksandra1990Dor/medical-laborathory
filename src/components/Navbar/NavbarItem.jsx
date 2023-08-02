import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useToggleClass } from '../CustomHooks/UseToggle';
import HiddenNavbarElement from './HiddenItem/HiddenNavbarElement';
import styles from './Navbar.module.css';

const NavbarItem = ({ text, links, index }) => {
  const navigate = useNavigate();

  let hiddenClass = styles.moreInfo_middle;
  if (index === 6) hiddenClass = styles.moreInfo_rightSide;
  if (index === 0 || index === 4 || index === 2)
    hiddenClass = styles.moreInfo_leftSide;
  const [toggleClassList, showItems, hideItems] = useToggleClass(
    hiddenClass,
    styles.hidden,
    styles.hideMore,
    450
  );
  const showMore = () => {
    if (typeof links === 'string') {
      navigate(links);
    } else {
      showItems();
    }
  };
  return (
    <div
      className={styles.navbar__item}
      onClick={showMore}
      onMouseLeave={hideItems}
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
                hideMore={hideItems}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default NavbarItem;
