import styles from './Aside.module.css';

const AsideItem = ({ children, onClick }) => {
  return (
    <div
      className={styles.item}
      onClick={onClick}
    >
      <div className={styles.icon_container}>{children}</div>
    </div>
  );
};

export default AsideItem;
