import { Outlet } from 'react-router-dom';
import PersonalAreaAsideContainer from '../Aside/Aside/PersonalAreaAsideContainer';
import PersonalAreaNavigation from '../Navigatioon/Wrappeer/PersonalAreaNavigation';
import styles from './PersonalArea.module.css';

const PersonalArea = () => {
  return (
    <div className={styles.personalAreaWrapper}>
      <PersonalAreaNavigation />
      <Outlet />
      <PersonalAreaAsideContainer />
    </div>
  );
};
export default PersonalArea;
