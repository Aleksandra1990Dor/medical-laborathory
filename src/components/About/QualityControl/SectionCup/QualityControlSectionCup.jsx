import styles from './/QualityControlSectionCup.module.css';
import cup from '../../../../img/cup.png';

const QualityControlSectionCup = () => {
  return (
    <section className={styles.cup_wrapper}>
      <div className={styles.description}>
        <div>
          По данным внешней оценки качества,
          <span> VICTORIA регулярно попадает в группу «Лучшие» </span>среди
          большинства лабораторий мира, работающих на аналогичном оборудовании.
        </div>
      </div>
      <img
        className={styles.img}
        src={cup}
        alt="кубок"
      />
    </section>
  );
};
export default QualityControlSectionCup;
