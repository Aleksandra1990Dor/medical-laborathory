import styles from './Aside.module.css';

const AsideItem = ({ children, onClick }) => {
  return (
    <div
      className={styles.basketIconWrapper}
      onClick={onClick}
    >
      <div className={styles.basketIconContainer}>{children}</div>
    </div>
  );
};

export default AsideItem;
