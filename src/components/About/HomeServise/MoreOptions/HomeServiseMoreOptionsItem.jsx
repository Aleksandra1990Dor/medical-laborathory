import styles from './HomeServiseMoreOptions.module.css';

const HomeServiseMoreOptionsItem = ({ servise }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.icon_wrapper}>{servise.icon}</div>
      <div className={styles.card_title}>{servise.title}</div>
      <div className={styles.card_description}>{servise.description}</div>
    </div>
  );
};
export default HomeServiseMoreOptionsItem;
