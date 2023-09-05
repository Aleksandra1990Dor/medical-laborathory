import { Route, Routes } from 'react-router-dom';
import VisiterDataHeader from '../MiddleInfoHeader/VisiterDataHeader';
import MobileNavigation from '../../Navigatioon/MobileNavigation/MobileNavigation';
import VisiterPrivateData from '../VisiterPrivateData/VisiterPrivateData';
import VisiterAnalysisData from '../VisiterAnalysis/VisiterAnalysisData';
import VisiterDynamicData from '../VisiterDynamicData/VisiterDynamicData';
import styles from './PrivateAreaLayout.module.css';

const PrivateAreaLayout = () => {
  return (
    <div className={styles.wrapper}>
      <VisiterDataHeader />
      <MobileNavigation />
      <Routes>
        <Route
          index
          element={<VisiterPrivateData />}
        />
        <Route
          path="analysis"
          element={<VisiterAnalysisData />}
        />
        <Route
          path="dynamics"
          element={<VisiterDynamicData />}
        />
      </Routes>
    </div>
  );
};

export default PrivateAreaLayout;
