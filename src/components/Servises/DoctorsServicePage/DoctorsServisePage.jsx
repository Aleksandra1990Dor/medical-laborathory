import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AnalysisNavigation from '../Analysis/AnalysisMenu/Navigation/AnalysisNavigation';
import styles from './DoctorsServisePage.module.css';
const DoctorsServisePage = () => {
  const links = useSelector((state) => state.linksReduser.navLinks[2].links);
  return (
    <div className={styles.analysis}>
      <AnalysisNavigation links={links} />
      <Outlet />
    </div>
  );
};
export default DoctorsServisePage;
