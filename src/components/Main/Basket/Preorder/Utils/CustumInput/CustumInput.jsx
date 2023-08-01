import styles from './CustumInput.module.css';

const CustumInput = ({
  title,
  name,
  onChange,
  onBlur,
  value,
  ref,
  error,
  type,
}) => {
  return (
    <div className={styles.input_wrapper}>
      <label htmlFor="#">{title}</label>
      <input
        type={type || 'text'}
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className={styles.error}>{error && error?.message}</div>
    </div>
  );
};
export default CustumInput;
