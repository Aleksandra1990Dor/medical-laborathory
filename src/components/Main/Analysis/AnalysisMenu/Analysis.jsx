import { useSelector } from 'react-redux';
import AnalysisNavigation from './Navigation/AnalysisNavigation';
import styles from './Analysis.module.css';
import { Outlet } from 'react-router-dom';
const Analysis = () => {
  const links = useSelector((state) => state.linksReduser.navLinks[0].links);
  return (
    <div className={styles.analysis}>
      <AnalysisNavigation links={links} />
      <Outlet />
    </div>
  );
};
export default Analysis;
