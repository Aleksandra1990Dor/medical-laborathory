import { useSelector } from 'react-redux';
import styles from './JobOpenigsOffers.module.css';

const JobOpenigsOffers = () => {
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  return (
    <section className={styles.section_offers}>
      <h3>Вакансии - {city}</h3>
      <div className={styles.offers}>
        В настоящее время в Компании нет открытых вакансий.
      </div>
    </section>
  );
};
export default JobOpenigsOffers;
