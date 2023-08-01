import { useDispatch, useSelector } from 'react-redux';
import styles from './HeaderLinks.module.css';
import LinksItem from '../../../Utils/LinksItem';
import AboutCompanyHiddenList from './AboutCompanyHiddenList';
import { changeOrientationAC } from '../../../store/mainInfoReduser';

const HeaderLinks = ({ orientation }) => {
  const links = useSelector((state) => state.linksReduser.headerMainLinks);
  const dispatch = useDispatch();
  return (
    <div className={styles.header__links}>
      {links.map((link, index) => {
        return (
          <LinksItem
            text={link.text}
            href={link.href}
            key={index}
            toggleClass={
              orientation === link.text
                ? `${styles.link_item_active} ${styles.link_item}`
                : styles.link_item
            }
            onClick={() => dispatch(changeOrientationAC(link.text))}
          />
        );
      })}
      <AboutCompanyHiddenList toggleClass={styles.link_item} />
    </div>
  );
};
export default HeaderLinks;
