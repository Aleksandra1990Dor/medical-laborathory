import { useSelector } from 'react-redux';
import {
  IoStatsChartSharp,
  IoCalendarSharp,
  IoBarChart,
} from 'react-icons/io5';
import NavigationItem from '../Item/NavigationItem';
import styles from './PrivateAreaNavigation.module.css';

const PersonalAreaNavigation = () => {
  // links for navigation
  const links = useSelector((state) => state.linksReduser.personalAreaLinks);
  // array with navigation icons
  const icons = [<IoCalendarSharp />, <IoStatsChartSharp />, <IoBarChart />];
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav_container}>
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
