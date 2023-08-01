import styles from './Input.module.css';

const Input = ({ switchInputType, title, initialValue, register }) => {
  // function checking type for input
  const type = switchInputType(title);
  return (
    <label className={styles.inputLabel}>
      {/* if title is 'ФИО' we changing only fathers name */}
      <span>{title === 'ФИО' ? 'Отчество' : title}</span>
      {/* if title is 'sex' we using input type radio */}
      {initialValue === 'sex' ? (
        <>
          <label className={styles.radio}>
            <small> мужской</small>
            <input
              type="radio"
              value={'мужской'}
              {...register('sex')}
            />
          </label>
          <label className={styles.radio}>
            <small>женский</small>
            <input
              type="radio"
              value={'женский'}
              {...register('sex')}
            />
          </label>
        </>
      ) : (
        // else usin regular input
        <input
          type={type}
          min="1960-01-01"
          max="2007-12-31"
          {...register(initialValue)}
        />
      )}
    </label>
  );
};
export default Input;
