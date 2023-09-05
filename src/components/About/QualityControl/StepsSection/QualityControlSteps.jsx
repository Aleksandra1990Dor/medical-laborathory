import { useSelector } from 'react-redux';
import QualityControlStepItem from './QualityControlStepItem';
import styles from './QualityControlSteps.module.css';

const QualityControlSteps = () => {
  // steps information from state
  const steps = useSelector(
    (state) => state.frontPageReduser.qualityControlSteps
  );
  return (
    <section className={styles.steps_container}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>Полный лабораторный цикл состоит из:</h2>
        <div className={styles.steps_description}>
          В основе системы контроля качества лежит принцип стандартизации всех
          этапов выполнения исследования.
        </div>
      </div>
      <div className={styles.steps}>
        {steps.map((step) => (
          <QualityControlStepItem
            key={step.id}
            step={step}
          />
        ))}
      </div>
    </section>
  );
};
export default QualityControlSteps;
