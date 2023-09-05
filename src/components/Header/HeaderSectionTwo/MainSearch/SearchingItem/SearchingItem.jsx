import { NavLink } from 'react-router-dom';
import styles from './SearchingItem.module.css';

const SearchingItem = ({ text, onClick, id }) => {
  return (
    <NavLink
      key={id}
      onClick={onClick}
      to={`/medical-laborathory/servises/analysis/analys/${id}`}
      className={styles.searching_item}
      tabIndex={id}
    >
      {text}
    </NavLink>
  );
};

export default SearchingItem;
