import { useSelector } from 'react-redux';
import team from '../../../../img/images/team.png';
import styles from './JobOpenigsBonuses.module.css';

const JobOpenigsBonuses = () => {
  // bonuses information from state
  const bonuses = useSelector((state) => state.frontPageReduser.jobBonuses);
  return (
    <section className={styles.section_offers_bonus}>
      <div className={styles.img_wrapper}>
        <img
          src={team}
          alt="Сотрудники компании"
        />
      </div>
      <div className={styles.offers_bonus}>
        <h4 className={styles.title}>Работа в VICTORIA – это:</h4>
        <ul className={styles.list}>
          {bonuses.map((bonus, index) => (
            <li
              className={styles.list_item}
              key={index}
            >
              {bonus}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default JobOpenigsBonuses;
