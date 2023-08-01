import NavigationItem from '../../../PrsonalArea/Navigatioon/Item/NavigationItem';
import styles from './AnalysisNavigation.module.css';
const AnalysisNavigation = ({ links }) => {
  return (
    <div className={styles.analysis_nav_wrapper}>
      <div className={styles.analysis_nav}>
        {links.map((link, index) => {
          return (
            <NavigationItem
              link={link.key}
              key={index}
              title={link.title}
            />
          );
        })}
      </div>
    </div>
  );
};
export default AnalysisNavigation;
