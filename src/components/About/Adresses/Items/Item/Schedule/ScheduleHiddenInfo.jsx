import styles from './AdressSchedule.module.css';

const ScheduleHiddenInfo = ({ className, schedule }) => {
  return (
    <div className={className}>
      <div className={styles.schedule}>
        {schedule.map((info, index) => {
          return (
            <div
              className={styles.row}
              key={index}
            >
              <div className={styles.row_title}>{`${info[0]} :`}</div>
              <div>{info[1]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ScheduleHiddenInfo;
