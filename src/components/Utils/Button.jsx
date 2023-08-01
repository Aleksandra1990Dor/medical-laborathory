import { NavLink } from 'react-router-dom';
import styles from './Button.module.css';
const Button = ({ toggleClass, text, href, children, onClick }) => {
  return (
    <div
      className={styles.header__section_two_get_result}
      onClick={onClick}
    >
      <NavLink
        to={href}
        className={`${styles.btn} ${toggleClass}`}
      >
        <span>{children}</span>
        {text}
      </NavLink>
    </div>
  );
};

export default Button;
