import { useSelector } from 'react-redux';
import { useToggleClass } from '../../../../../../CustomHooks/UseToggle';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import ScheduleHiddenInfo from './ScheduleHiddenInfo';
import styles from './AdressSchedule.module.css';

const AdressSchedule = ({ title }) => {
  // get schedule from state
  const schedule = useSelector((state) => state.mainInfoReduser.schedule);
  //   show or hide more information
  const [className, showItems, hideItems] = useToggleClass(
    styles.visible,
    styles.hidden,
    '',
    100
  );
  return (
    <div>
      <div
        className={styles.schedule_title}
        onClick={className === styles.hidden ? showItems : hideItems}
      >
        {title}
        {className === styles.hidden ? (
          <HiOutlineChevronDown className={styles.icon_more} />
        ) : (
          <HiOutlineChevronUp className={styles.icon_more} />
        )}
      </div>
      <ScheduleHiddenInfo
        className={className}
        schedule={schedule}
      />
    </div>
  );
};
export default AdressSchedule;
