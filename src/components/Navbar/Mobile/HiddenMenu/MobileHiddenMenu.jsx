import { useSelector } from 'react-redux';
import { RiCloseFill } from 'react-icons/ri';
import ChoseCity from '../../../Header/HeaderSectionOne/RightSide/City/ChoseCity';
import MobileMainNavigation from '../MainLinks/MobileMainNavigation';
import MobileAboutNavigation from '../About/MobileAboutNavigation';
import MobilePhones from '../Phones/MobilePhones';
import styles from './MobileHiddenMenu.module.css';

const MobileHiddenMenu = ({ hideItems }) => {
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);

  return (
    <div className={styles.nav_container}>
      <RiCloseFill
        onClick={hideItems}
        className={styles.closing_icon}
      />
      <ChoseCity city={city} />
      <MobileMainNavigation hideItems={hideItems} />
      <MobileAboutNavigation hideItems={hideItems} />
      <MobilePhones />
    </div>
  );
};
export default MobileHiddenMenu;
