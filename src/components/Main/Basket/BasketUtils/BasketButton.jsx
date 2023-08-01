import { NavLink } from 'react-router-dom';
import styles from './BasketButton.module.css';

export const BasketButton = ({ to, onClick, children }) => {
  return (
    <NavLink
      className={styles.btn_order}
      onClick={onClick}
      to={to}
    >
      {children}
    </NavLink>
  );
};
export const BasketButtonSubmit = ({ children }) => {
  return <button className={styles.btn_order}>{children}</button>;
};
