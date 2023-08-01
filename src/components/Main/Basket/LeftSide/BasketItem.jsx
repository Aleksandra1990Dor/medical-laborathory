import { RiCloseFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import styles from './BasketItem.module.css';
const BasketItem = ({ title, priceTitle, removeServis, id }) => {
  return (
    <div className={styles.basket_item}>
      <div className={styles.basket_left}>
        <small>№{id}</small>
        <NavLink
          to={`/analys/${id}`}
          className={styles.item_name}
        >
          {title}
        </NavLink>
      </div>
      <div className={styles.basket_item_right}>
        <h2>{priceTitle}</h2>
        <RiCloseFill
          onClick={removeServis}
          className={styles.delete_item}
        />
      </div>
    </div>
  );
};
export default BasketItem;
