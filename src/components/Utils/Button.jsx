import { NavLink } from 'react-router-dom';

const Button = ({ toggleClass, text, href, children, onClick }) => {
  return (
    <div onClick={onClick}>
      <NavLink
        to={href}
        className={toggleClass}
      >
        <span>{children}</span>
        {text}
      </NavLink>
    </div>
  );
};

export default Button;
