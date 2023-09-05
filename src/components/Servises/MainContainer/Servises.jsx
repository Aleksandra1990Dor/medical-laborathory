import { Route, Routes, useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Analysis from '../Analysis/AnalysisMenu/Analysis';
import AnalysContainer from '../Analysis/Analys/AnalysContainer';
import DoctorsServisePage from '../DoctorsServicePage/DoctorsServisePage';
import OtherServisesPage from '../OtherServises/OtherServisesPage';
import ActionsPage from '../ActionsPage/ActionsPage';
import AnalysisPageContainer from '../Analysis/AnalysisMenu/AnalysisPage/AnalysisPageContainer';
import styles from './Servises.module.css';

const Servises = () => {
  const mainRef = useRef(null);
  const params = useParams();
  useEffect(() => {
    mainRef.current.scrollIntoView();
  }, [params]);
  return (
    <div
      className={styles.servises_wrapper}
      ref={mainRef}
    >
      <Routes>
        <Route
          path="analysis/*"
          element={<Analysis />}
        >
          <Route
            path=":slug"
            element={<AnalysisPageContainer />}
          />
          <Route
            path="analys/:id"
            element={<AnalysContainer />}
          />
        </Route>
        <Route
          path="doctors/*"
          element={<DoctorsServisePage />}
        >
          <Route
            path=":slug"
            element={<AnalysisPageContainer noLink={true} />}
          />
        </Route>
        <Route
          path="other-servises"
          element={<OtherServisesPage />}
        />
        <Route
          path="actions-page"
          element={<ActionsPage />}
        />
      </Routes>
    </div>
  );
};

export default Servises;
