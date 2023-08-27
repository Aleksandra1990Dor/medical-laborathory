import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import AdressesMenu from '../Menu/AdressesMenu';
import AdressesItems from '../Items/MainContainer/AdressesItems';
import styles from './AdressesPage.module.css';
import BackLink from '../../../Utils/BackLink';

const AdressesPage = () => {
  // take city and adresses form state
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const allAdresses = useSelector((state) => state.mainInfoReduser.adresses);
  // active city in menu
  const [currentCity, setCurrentCity] = useState(city);
  // ref to main container for creating scroll
  const mainRef = useRef(null);
  // scrolling to top in the beginning
  useEffect(() => {
    mainRef.current.scrollIntoView();
  }, [currentCity]);

  return (
    <div
      className={styles.adresses_page_wrapper}
      ref={mainRef}
    >
      <BackLink />
      <h1 className={styles.title}>Адреса клиник:</h1>
      <div className={styles.content_wrapper}>
        <AdressesMenu
          city={currentCity}
          setCurrentCity={setCurrentCity}
        />
        <AdressesItems
          allAdresses={allAdresses}
          city={currentCity}
        />
      </div>
    </div>
  );
};
export default AdressesPage;
