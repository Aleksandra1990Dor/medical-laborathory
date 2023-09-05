import { BasketButtonSubmit } from '../../../Basket/BasketUtils/BasketButton';
import nurce from '../../../../img/images/job-opening-nurce.png';
import styles from './JobOpenigsTitleSection.module.css';

const JobOpenigsTitleSection = ({ onClick }) => {
  return (
    <section className={styles.section_title}>
      <div className={styles.section_title_wrapper}>
        <h2 className={styles.title}>
          Возможность роста в одном из наиболее амбициозных проектов в сфере
          российской медицины
        </h2>
        <p className={styles.description}>
          Своим сотрудникам Лабораторная служба VICTORIA предлагает возможность
          обучения, достойную заработную плату, комфортные условия труда, скидки
          на услуги Компании и высокий уровень корпоративной культуры.
        </p>
        <BasketButtonSubmit onClick={onClick}>
          Смотреть вкансии
        </BasketButtonSubmit>
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
