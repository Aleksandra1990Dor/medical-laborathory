import styles from './Steps.module.css';

const StepItem = ({ step, style }) => {
  return (
    <figure
      className={styles.step}
      style={style}
    >
      <h4 className={styles.step_number}>{step.number}</h4>
      <div className={styles.img_wrapper}>
        <img
          src={step.src}
          alt={step.alt}
        />
      </div>
      <figcaption className={styles.step_description}>{step.text}</figcaption>
    </figure>
  );
};
export default StepItem;
