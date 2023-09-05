import PrivateAreaAsideContainer from '../Aside/Aside/PrivateAreaAsideContainer';
import PrivateAreaNavigation from '../Navigatioon/Wrappeer/PrivateAreaNavigation';
import PrivateAreaLayout from '../MiddleInfo/Layout/PrivateAreaLayout';
import styles from './PrivateArea.module.css';

const PrivateArea = () => {
  return (
    <main className={styles.wrapper}>
      <PrivateAreaNavigation />
      <PrivateAreaLayout />
      <PrivateAreaAsideContainer />
    </main>
  );
};
export default PrivateArea;
