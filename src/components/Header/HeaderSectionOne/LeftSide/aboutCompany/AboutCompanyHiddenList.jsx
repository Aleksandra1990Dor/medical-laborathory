import { useSelector } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs';
import { useToggleClass } from '../../../../../CustomHooks/UseToggle';
import HiddenNavbarElement from '../../../../Navbar/HiddenItem/HiddenNavbarElement';
import styles from '../HeaderLinks.module.css';

const AboutCompanyHiddenList = () => {
  const links = useSelector((state) => state.linksReduser.headerHiddenLinks);
  // show or hide info
  const [toggleClassList, showMoreInfo, hideMoreInfo] = useToggleClass(
    styles.about,
    styles.hidden,
    styles.hideMore,
    450
  );

  return (
    <div className={styles.link_item}>
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
