import styles from './OrderInfoWrapper.module.css';

const OrderInfoWrapper = ({ children, title }) => {
  return (
    <div className={styles.info_wrapper}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
export default OrderInfoWrapper;
