import { useParams } from 'react-router-dom';
import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import AnalysisPageHeader from './AnalysisHeader/AnalysisPageHeader';
import AnalysItem from './Item/AnalysisItem';
import styles from './Analysis.module.css';

const AnalysisPage = ({ noLink }) => {
  let allAnalysis = useSelector((state) => state.analysisReduser);
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const doctors = useSelector((state) => state.doctorsReduser);
  const params = useParams();
  let analysis = allAnalysis[params.slug];
  if (!analysis) {
    analysis = doctors[params.slug];
  }
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <div className={styles.analysis_description}>
      <AnalysisPageHeader city={city} />
      {analysis.map((analys) => {
        return (
          <AnalysItem
            key={analys.id}
            city={city}
            noLink={noLink}
            analys={analys}
          />
        );
      })}
    </div>
  );
};
export default AnalysisPage;
