import styles from '../Achivments/Achivments.module.css';

const AchivmentsItem = ({ text, title, children }) => {
  return (
    <div className={styles.item_wrapper}>
      <div className={styles.title_wrapper}>
        <h3 className={styles.item_title}>{title}</h3>
        {children}
      </div>
      <small className={styles.item_text}>{text}</small>
    </div>
  );
};
export default AchivmentsItem;
