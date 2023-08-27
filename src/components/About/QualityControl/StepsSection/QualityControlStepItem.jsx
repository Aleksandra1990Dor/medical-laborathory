import styles from './QualityControlSteps.module.css';

const QualityControlStepItem = ({ step }) => {
  return (
    <div className={styles.step}>
      <img
        className={styles.img}
        src={step.src}
        alt={step.alt}
      />
      <h3 className={styles.step_title}>{step.title}</h3>
      <div className={styles.description}>{step.description}</div>
    </div>
  );
};
export default QualityControlStepItem;
