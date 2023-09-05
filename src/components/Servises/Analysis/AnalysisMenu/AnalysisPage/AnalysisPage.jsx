import { NavLink } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import { useToggleClass } from '../../../../../CustomHooks/UseToggle';
import AnalysisPageHeader from '../AnalysisHeader/AnalysisPageHeader';
import AnalysItem from '../Item/AnalysisItem';
import styles from '../Analysis.module.css';

const AnalysisPage = ({ city, links, analysis, noLink, currentAnalysis }) => {
  // show or hide hidden info
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
              to={`../../../${link.href}`}
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
      {noLink && (
        <p
          className={styles.after}
          data-aos="fade-up"
        >
          * Запись к врачу осуществляется по телефону или при личном обращение в
          центр VICTORIA
        </p>
      )}
    </div>
  );
};
export default AnalysisPage;
