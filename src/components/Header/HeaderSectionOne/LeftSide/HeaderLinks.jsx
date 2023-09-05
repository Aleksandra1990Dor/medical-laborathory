import { useDispatch, useSelector } from 'react-redux';
import styles from './HeaderLinks.module.css';
import LinksItem from './LinksItem/LinksItem';
import AboutCompanyHiddenList from './aboutCompany/AboutCompanyHiddenList';
import { changeOrientationAC } from '../../../../store/mainInfoReduser';

const HeaderLinks = ({ orientation }) => {
  const dispatch = useDispatch();
  const links = useSelector((state) => state.linksReduser.headerMainLinks);

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
      <AboutCompanyHiddenList />
    </div>
  );
};
export default HeaderLinks;
