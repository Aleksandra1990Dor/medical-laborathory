import styles from './InfoCard.module.css';

const InfoCard = ({ children, title, src, alt, onClick, dataAos }) => {
  return (
    <div
      className={styles.card_wrapper}
      onClick={onClick}
      data-aos={dataAos}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{children}</p>
      <img
        className={title === 'Личный кабинет' ? styles.img_1 : styles.img_2}
        src={src}
        alt={alt}
      />
      <button className={styles.btn}>Узнать больше</button>
    </div>
  );
};
export default InfoCard;
