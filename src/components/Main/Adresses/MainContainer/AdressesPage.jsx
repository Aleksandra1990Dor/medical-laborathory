import { useSelector } from 'react-redux';
import ChangAdressHiddenPage from '../ChangeCityHiddenPart/ChangeAdressHiddenPage';
import AdressesPageLeftSide from '../LeftSide/AdressesPageLeftSide';
import AdressesPageRightSide from '../RightSide/AdressesPageRightSide';
import { useToggle } from '../../../CustomHooks/UseToggle';
import styles from './AdressesPage.module.css';

const AdressesPage = () => {
  // take city and adresses form state
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const allAdresses = useSelector((state) => state.mainInfoReduser.adresses);
  // classes for animated hidden div
  const [toggleClass, setToggleClass] = useToggle(
    styles.changeInfoWrapper,
    styles.hidden,
    styles.hideInfo,
    500
  );

  return (
    <div className={styles.adresses_page_wrapper}>
      <ChangAdressHiddenPage
        showOrHideMore={setToggleClass}
        toggleClass={toggleClass}
      />
      <AdressesPageLeftSide
        city={city}
        showOrHideMore={setToggleClass}
      />
      <AdressesPageRightSide
        allAdresses={allAdresses}
        city={city}
      />
    </div>
  );
};
export default AdressesPage;
