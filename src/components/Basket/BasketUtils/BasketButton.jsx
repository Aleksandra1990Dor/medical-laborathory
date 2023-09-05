import { NavLink } from 'react-router-dom';
import styles from './BasketButton.module.css';

export const BasketButton = ({ to, onClick, children, style }) => {
  return (
    <NavLink
      className={styles.btn_order}
      onClick={onClick}
      to={to}
      style={style}
    >
      {children}
    </NavLink>
  );
};
export const BasketButtonSubmit = ({ children, style, onClick }) => {
  return (
    <button
      className={styles.btn_order}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
