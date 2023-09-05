import testTubes from '../../../../img/images/test-tubes.png';
import styles from './QualityControlTitleSection.module.css';

const QualityControlTitleSection = () => {
  return (
    <section className={styles.title_section_container}>
      <div>
        <h1 className={styles.main_title}>
          Контроль качества клинических лабораторных исследований
        </h1>
        <div className={styles.description_wrapper}>
          <p className={styles.description}>
            Контроль качества клинических лабораторных исследований — это
            создание и регулярное осуществление системы мероприятий для
            выявления и предотвращения недопустимых погрешностей, которые могут
            проявиться в процессе выполнения лабораторных исследований.Контроль
            качества клинических лабораторных исследований — это создание и
            регулярное осуществление системы мероприятий для выявления и
            предотвращения недопустимых погрешностей, которые могут проявиться в
            процессе выполнения лабораторных исследований.
          </p>
          <p className={styles.description}>
            Контроль аналитического процесса необходим для создания уверенности
            в том, что аналитические ошибки не влияют на клиническую значимость
            результатов.
          </p>
        </div>
      </div>
      <div className={styles.img_container}>
        <img
          className={styles.img}
          src={testTubes}
          alt="Лабораторный процесс"
        />
      </div>
    </section>
  );
};
export default QualityControlTitleSection;
