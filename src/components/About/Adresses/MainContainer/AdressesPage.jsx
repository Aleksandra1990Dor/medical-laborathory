import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { changeCityAC } from '../../../../store/mainInfoReduser';
import AdressesMenu from '../Menu/AdressesMenu';
import AdressesItems from '../Items/MainContainer/AdressesItems';
import BackLink from '../../../Utils/BackLink';
import ChoseCity from '../../../Header/HeaderSectionOne/RightSide/City/ChoseCity';
import styles from './AdressesPage.module.css';

const AdressesPage = () => {
  // take city and adresses form state
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const allAdresses = useSelector((state) => state.mainInfoReduser.adresses);
  const mainRef = useRef(null);
  // scrolling to top in the beginning
  useEffect(() => {
    mainRef.current.scrollIntoView();
  }, [city]);

  return (
    <main
      className={styles.adresses_page_wrapper}
      ref={mainRef}
    >
      <BackLink />
      <h1 className={styles.title}>Адреса клиник:</h1>
      <div className={styles.mobile}>
        <ChoseCity city={city} />
      </div>
      <div className={styles.content_wrapper}>
        <AdressesMenu
          city={city}
          setCurrentCity={changeCityAC}
        />
        <AdressesItems
          allAdresses={allAdresses}
          city={city}
        />
      </div>
    </main>
  );
};
export default AdressesPage;
