import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import styles from './MainCaruselSection.module.css';
import bgMicroscope from '../../../img/bg-microscoop.jpg';

const MainCaruselSection = () => {
  return (
    <section className={styles.wrapper}>
      <img
        className={styles.bg_img}
        src={bgMicroscope}
      />
      <div className={styles.carusel_wrapper}>
        <div className={styles.icon_wrapper_left}>
          <HiArrowSmLeft />
        </div>
        <h2 className={styles.title}>
          Более <span> 500</span>
        </h2>
        <p className={styles.description}>
          современных лабораторий, предлагающих широкий спектр различных
          исследований: гематологических, биохимических, гемостазиологических,
          иммунологических, микробиологических, цитологических и
          гистологических, микроскопии, иммуноферментном анализе, а также ПЦР,
          ДНК-диагностику
        </p>
        <div className={styles.icon_wrapper_right}>
          <HiArrowSmRight />
        </div>
      </div>
    </section>
  );
};
export default MainCaruselSection;
