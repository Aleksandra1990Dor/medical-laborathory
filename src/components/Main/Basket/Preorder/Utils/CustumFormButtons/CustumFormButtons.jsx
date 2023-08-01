import styles from './CustumFormButtons.module.css';
const CustumFormButtons = ({
  title,
  name,
  onChange,
  value,
  onBlur,
  setValue,
  ref,
}) => {
  return (
    <div>
      <label className={styles.btn_label}>{title}</label>
      <div className={styles.btn_wrapper}>
        <input
          className={styles.custom_radio}
          type="radio"
          value="мужской"
          name={name}
          ref={ref}
          checked={value === 'мужской'}
          id="male"
          onChange={onChange}
          onBlur={onBlur}
        />

        <label
          htmlFor="male"
          onClick={() => {
            setValue('sex', 'мужской');
          }}
        >
          Мужчина
        </label>
        <input
          className={styles.custom_radio}
          type="radio"
          value="женский"
          id="female"
          name={name}
          checked={value === 'женский'}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label
          htmlFor="female"
          onClick={() => {
            setValue('sex', 'женский');
          }}
        >
          Женщина
        </label>
      </div>
    </div>
  );
};
export default CustumFormButtons;
