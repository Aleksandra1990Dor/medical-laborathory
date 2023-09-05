import styles from './CaruselItem.module.css';

const CaruselItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <h2 className={styles.title}>
        {item.title} <span>{item.span}</span>
      </h2>
      <p className={styles.description}>{item.text}</p>
    </div>
  );
};
export default CaruselItem;
