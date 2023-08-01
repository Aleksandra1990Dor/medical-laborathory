import styles from './JobOpenigsTitleSection.module.css';
import nurce from '../../../img/job-opening-nurce.png';

const JobOpenigsTitleSection = () => {
  return (
    <section className={styles.section_title}>
      <div className={styles.title_description}>
        <h2>
          Возможность роста в одном из наиболее амбициозных проектов в сфере
          российской медицины
        </h2>
        <p>
          Своим сотрудникам Лабораторная служба Хеликс предлагает возможность
          обучения, достойную заработную плату, комфортные условия труда, скидки
          на услуги Компании и высокий уровень корпоративной культуры.
        </p>
        <button>Смотреть вкансии</button>
      </div>
      <div className={styles.title_img}>
        <img
          src={nurce}
          alt="Сотрудники компании"
        />
      </div>
    </section>
  );
};
export default JobOpenigsTitleSection;
