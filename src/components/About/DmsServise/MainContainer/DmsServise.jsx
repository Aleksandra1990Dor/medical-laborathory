import { useEffect, useRef } from 'react';
import OrderCallBackForm from '../../HomeServise/Form/OrderCallBackForm';
import DmsSteps from '../DmsSteps/DmsSteps';
import DmsTitleSection from '../TitleSection/DmsTitleSection';
import InsuranceCompanys from '../InsuranceCompanys/InsuranceCompanys';
import styles from './DmsServise.module.css';

const DmsServise = () => {
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
      <DmsTitleSection />
      <DmsSteps />
      <InsuranceCompanys />
      <OrderCallBackForm />
    </main>
  );
};

export default DmsServise;
