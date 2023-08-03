import { NavLink, useParams } from 'react-router-dom';
import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import AnalysisPageHeader from './AnalysisHeader/AnalysisPageHeader';
import AnalysItem from './Item/AnalysisItem';
import styles from './Analysis.module.css';
import { AiOutlineDown } from 'react-icons/ai';
import { useToggleClass } from '../../../CustomHooks/UseToggle';

const AnalysisPage = ({ noLink }) => {
  let allAnalysis = useSelector((state) => state.analysisReduser);
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const doctors = useSelector((state) => state.doctorsReduser);
  const params = useParams();
  let links = useSelector((state) => state.linksReduser.navLinks[0].links);
  const doctorsLinks = useSelector(
    (state) => state.linksReduser.navLinks[2].links
  );
  let currentAnalysis = links.find((link) => link.key === params.slug);
  let analysis = allAnalysis[params.slug];
  if (!analysis) {
    analysis = doctors[params.slug];
    links = doctorsLinks;
    currentAnalysis = doctorsLinks.find((link) => link.key === params.slug);
  }
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
  // show or hide searching results DIV
  const [toggleClassList, showItems, hideItems] = useToggleClass(
    styles.mobile_navigation,
    styles.hidden,
    styles.hideInfo,
    300
  );
  return (
    <div className={styles.analysis_description}>
      <AnalysisPageHeader city={city} />
      <div className={styles.mobile_navigation_wrapper}>
        <div
          onClick={toggleClassList === styles.hidden ? showItems : hideItems}
        >
          <h2>
            Анализы: {currentAnalysis.title} <AiOutlineDown />
          </h2>
        </div>
        <div className={toggleClassList}>
          {links.map((link) => (
            <NavLink
              key={link.key}
              onClick={hideItems}
              to={`../../${link.href}`}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div style={{ width: '100%' }}>
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
    </div>
  );
};
export default AnalysisPage;
