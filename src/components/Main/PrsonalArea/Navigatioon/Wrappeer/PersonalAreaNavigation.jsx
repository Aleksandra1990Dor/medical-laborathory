import { useSelector } from 'react-redux';
import {
  IoStatsChartSharp,
  IoCalendarSharp,
  IoBarChart,
} from 'react-icons/io5';
import NavigationItem from '../Item/NavigationItem';
import styles from './PersonalAreaNavigation.module.css';

const PersonalAreaNavigation = () => {
  // links for navigation from sore
  const links = useSelector((state) => state.linksReduser.personalAreaLinks);
  // array with navigation icons
  const icons = [<IoCalendarSharp />, <IoStatsChartSharp />, <IoBarChart />];
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        {icons.map((icon, index) => {
          return (
            <NavigationItem
              title={links[index].title}
              link={links[index].link}
              key={index}
              end={index === 1 ? true : false}
            >
              {icon}
            </NavigationItem>
          );
        })}
      </div>
    </div>
  );
};
export default PersonalAreaNavigation;
