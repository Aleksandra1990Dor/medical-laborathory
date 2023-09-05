import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ChoseCity from './ChoseCity';
import styles from './City.module.css';

const City = ({ city }) => {
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  return (
    <div className={styles.city}>
      {auth ? (
        <NavLink to="private-area">Личный кабинет</NavLink>
      ) : (
        <ChoseCity city={city} />
      )}
    </div>
  );
};
export default City;
