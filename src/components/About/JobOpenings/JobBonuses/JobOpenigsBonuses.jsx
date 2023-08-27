import { useSelector } from 'react-redux';
import styles from './JobOpenigsBonuses.module.css';
import team from '../../../../img/team.png';

const JobOpenigsBonuses = () => {
  const bonuses = useSelector((state) => state.frontPageReduser.jobBonuses);
  return (
    <section className={styles.section_offers_bonus}>
      <div className={styles.section_title_img}>
        <img
          src={team}
          alt="Сотрудники компании"
        />
      </div>
      <div className={styles.offers_bonus}>
        <h4>Работа в VICTORIA – это:</h4>
        <ul>
          {bonuses.map((bonus, index) => (
            <li key={index}>{bonus}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default JobOpenigsBonuses;
