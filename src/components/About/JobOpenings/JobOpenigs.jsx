import JobOpenigsBonuses from './JobBonuses/JobOpenigsBonuses';
import JobOpenigsTitleSection from './TitleSection/JobOpenigsTitleSection';
import JobOpenigsOffers from './Offers/JobOpenigsOffers';
import styles from './JobOpenings.module.css';

const JobOpenigs = () => {
  return (
    <main className={styles.wrapper}>
      <h1>Вакансии в VICTORIA</h1>
      <JobOpenigsTitleSection />
      <JobOpenigsBonuses />
      <JobOpenigsOffers />
    </main>
  );
};
export default JobOpenigs;
