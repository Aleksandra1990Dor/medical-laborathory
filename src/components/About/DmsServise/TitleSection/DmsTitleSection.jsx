import BackLink from '../../../Utils/BackLink';
import styles from './DmsTitleSection.module.css';

const DmsTitleSection = () => {
  return (
    <section className={styles.section_title}>
      <BackLink />
      <h1 className={styles.title}>Прием по ДМС</h1>
      <p className={styles.description}>
        Анализы в Лабораторной службе Victoria можно выполнить по полису
        добровольного медицинского страхования (ДМС). Чтобы воспользоваться
        полисом ДМС:
      </p>
    </section>
  );
};

export default DmsTitleSection;
