import { useSelector, useDispatch } from 'react-redux';
import styles from './ActionsPage.module.css';
import AnalysItem from '../Analysis/AnalysisMenu/Item/AnalysisItem';
import {
  addServisToBasketAC,
  getPriceSumAC,
} from '../../store/mainInfoReduser';
const ActionsPage = () => {
  const actions = useSelector((state) => state.analysisReduser.actions);
  const dispatch = useDispatch();
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const addToBascet = (analys) => {
    dispatch(addServisToBasketAC(analys));
    dispatch(getPriceSumAC(analys.price));
  };
  return (
    <div className={styles.actions}>
      <h4>Действующие акции:</h4>
      {actions.map((a) => {
        return (
          <AnalysItem
            key={a.id}
            analys={a}
          />
        );
      })}
    </div>
  );
};
export default ActionsPage;
