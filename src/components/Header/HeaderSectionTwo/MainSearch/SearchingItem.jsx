import styles from './MainSearch.module.css';
import { NavLink } from 'react-router-dom';

const SearchingItem = ({ text, onClick, id }) => {
  return (
    <NavLink
      key={id}
      onClick={onClick}
      to={`analys/${id}`}
      className={styles.searching_item}
      tabIndex={id}
    >
      {text}
    </NavLink>
  );
};

export default SearchingItem;
