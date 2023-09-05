import BackLink from '../../../Utils/BackLink';
import styles from '../MainContainer/HomeServise.module.css';

const HomeServiseTitleSection = () => {
  return (
    <section className={styles.section_title}>
      <div>
        <BackLink />
      </div>
      <h1 className={styles.title}>Выезд на дом</h1>
      <div className={styles.main_information}>
        <h2 className={styles.subtitle}>Сдавайте анализы там, где удобно</h2>
        <p className={styles.title_after}>
          * Если у вас нет времени на посещение медицинского офиса VICTORIA,
          следите за состоянием здоровья и сдавайте анализы, не выходя из дома.
          В привычной обстановке вы можете выполнить даже ПЦР-тест на COVID-19.
          Результаты исследования будут готовы уже через 3 часа. Оставьте
          заявку, и наши специалисты выездной службы приедут к вам для взятия
          биоматериала.
        </p>
      </div>
    </section>
  );
};
export default HomeServiseTitleSection;
