import { useSelector } from 'react-redux';
import HomeServiseMoreOptionsItem from './HomeServiseMoreOptionsItem';
import styles from './HomeServiseMoreOptions.module.css';

const HomeServiseMoreOptions = () => {
  // cards information from state
  const servises = useSelector(
    (state) => state.frontPageReduser.homeServiseMoreOptions
  );
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Дополнительные возможности</h3>
      <div className={styles.cards_wrapper}>
        {servises.map((servise, index) => (
          <HomeServiseMoreOptionsItem
            key={index}
            servise={servise}
          />
        ))}
      </div>
    </section>
  );
};
export default HomeServiseMoreOptions;
