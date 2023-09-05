import { useSelector } from 'react-redux';
import StepItem from './StepItem';
import styles from './Steps.module.css';

const Steps = () => {
  const steps = useSelector((state) => state.frontPageReduser.stepsForOrder);
  return (
    <section>
      <div className={styles.steps_title}>
        <h3 className={styles.title}>
          <span>4</span> простых шага для вызова Мобильной службы:
        </h3>
      </div>
      <div className={styles.steps_wrapper}>
        {steps.map((step, index) => (
          <StepItem
            step={step}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
export default Steps;
