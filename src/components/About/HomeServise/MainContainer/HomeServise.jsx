import { useEffect, useRef } from 'react';
import HomeServiseTitleSection from '../TitleSection/HomeServiseTitleSection';
import HomeServiseMoreOptions from '../MoreOptions/HomeServiseMoreOptions';
import Steps from '../Steps/Steps';
import OrderCallBackForm from '../Form/OrderCallBackForm';
import styles from './HomeServise.module.css';

const HomeServise = () => {
  const mainRef = useRef(null);
  // scrolling to top after render
  useEffect(() => {
    mainRef.current.scrollIntoView();
  }, []);

  return (
    <main
      className={styles.wrapper}
      ref={mainRef}
    >
      <HomeServiseTitleSection />
      <Steps />
      <HomeServiseMoreOptions />
      <OrderCallBackForm />
    </main>
  );
};
export default HomeServise;
