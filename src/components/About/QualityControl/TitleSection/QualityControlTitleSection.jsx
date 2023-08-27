import styles from './QualityControlTitleSection.module.css';
import testTubes from '../../../../img/test-tubes.png';

const QualityControlTitleSection = () => {
  return (
    <section className={styles.title_section_container}>
      <div>
        <h1 className={styles.main_title}>
          Контроль качества клинических лабораторных исследований
        </h1>
        <p className={styles.description}>
          Контроль качества клинических лабораторных исследований — это создание
          и регулярное осуществление системы мероприятий для выявления и
          предотвращения недопустимых погрешностей, которые могут проявиться в
          процессе выполнения лабораторных исследований.Контроль качества
          клинических лабораторных исследований — это создание и регулярное
          осуществление системы мероприятий для выявления и предотвращения
          недопустимых погрешностей, которые могут проявиться в процессе
          выполнения лабораторных исследований.
        </p>
        <p className={styles.description}>
          Контроль аналитического процесса необходим для создания уверенности в
          том, что аналитические ошибки не влияют на клиническую значимость
          результатов.
        </p>
      </div>
      <div>
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
