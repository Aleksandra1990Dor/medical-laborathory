import { useEffect, useRef } from 'react';
import JobOpenigsBonuses from './JobBonuses/JobOpenigsBonuses';
import JobOpenigsTitleSection from './TitleSection/JobOpenigsTitleSection';
import JobOpenigsOffers from './Offers/JobOpenigsOffers';
import BackLink from '../../Utils/BackLink';
import styles from './JobOpenings.module.css';

const JobOpenigs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const jobSectionRef = useRef(null);
  // scrolling to section with offerings
  const onClick = () => jobSectionRef.current.scrollIntoView();
  return (
    <main className={styles.wrapper}>
      <BackLink />
      <h1 className={styles.title}>Вакансии в VICTORIA</h1>
      <JobOpenigsTitleSection onClick={onClick} />
      <JobOpenigsBonuses />
      <JobOpenigsOffers refProp={jobSectionRef} />
    </main>
  );
};
export default JobOpenigs;
