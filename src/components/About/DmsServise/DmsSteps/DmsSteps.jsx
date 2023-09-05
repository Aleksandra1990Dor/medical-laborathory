import { useSelector } from 'react-redux';
import StepItem from '../../HomeServise/Steps/StepItem';
import styles from './DmsSteps.module.css';

const DmsSteps = () => {
  const cards = useSelector((state) => state.frontPageReduser.dmsCards);
  return (
    <section>
      <div className={styles.steps_wrapper}>
        {cards.map((card, index) => (
          <StepItem
            step={card}
            key={index}
            style={{ minWidth: '28%' }}
          />
        ))}
      </div>
      <div className={styles.after}>
        <p className={styles.after_text}>
          *Необходимо уточнить с какими лаборатоиями сотрудничает ваша страховая
          компания
        </p>
      </div>
    </section>
  );
};

export default DmsSteps;
