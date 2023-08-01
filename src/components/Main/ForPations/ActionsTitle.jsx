import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Actions.module.css';

const Actions = () => {
  const actions = useSelector((state) => state.analysisReduser.actions);
  return (
    <div className={styles.actionsContainer}>
      <h4>Действующие акции</h4>
      <div className={styles.actionsWrapper}>
        {actions.map((a) => {
          return (
            <NavLink
              to={`/analys/${a.id}`}
              className={styles.action}
              key={a.id}
            >
              <strong>{a.title}</strong>
              <small>{a.price}</small>
              <div className={styles.btn}>Узнать больше</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default Actions;
