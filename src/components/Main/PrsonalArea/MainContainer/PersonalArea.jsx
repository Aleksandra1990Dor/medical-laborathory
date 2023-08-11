import PersonalAreaAsideContainer from '../Aside/Aside/PersonalAreaAsideContainer';
import PersonalAreaNavigation from '../Navigatioon/Wrappeer/PersonalAreaNavigation';
import styles from './PersonalArea.module.css';
import PrivateAreaLayout from '../MiddleInfo/Layout/PrivateAreaLayout';

const PersonalArea = () => {
  return (
    <div className={styles.personalAreaWrapper}>
      <PersonalAreaNavigation />
      <PrivateAreaLayout />
      <PersonalAreaAsideContainer />
    </div>
  );
};
export default PersonalArea;
