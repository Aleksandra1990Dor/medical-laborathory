import { NavLink } from 'react-router-dom';
const LinksItem = ({ text, toggleClass, onMouseOver, onClick, href }) => {
  return (
    <NavLink
      to={href}
      className={toggleClass}
      onMouseOver={onMouseOver}
      end={text === 'Клиентам' ? true : false}
      onClick={() => {
        onClick(text);
      }}
    >
      {text}
    </NavLink>
  );
};

export default LinksItem;
