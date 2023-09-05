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
  style,
  inputStyle,
}) => {
  return (
    <div
      className={styles.input_wrapper}
      style={style}
    >
      <label htmlFor="#">{title}</label>
      <input
        type={type || 'text'}
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={inputStyle}
      />
      <div className={styles.error}>{error && error?.message}</div>
    </div>
  );
};
export default CustumInput;
