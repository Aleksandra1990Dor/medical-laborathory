import { useSelector, useDispatch } from 'react-redux';
import AnalysItem from '../Analysis/AnalysisMenu/Item/AnalysisItem';
import {
  addServisToBasketAC,
  getPriceSumAC,
} from '../../store/mainInfoReduser';
import styles from './OtherServisesPage.module.css';
const OtherServisesPage = () => {
  //   const links = useSelector((state) => state.linksReduser.navLinks[6].links);
  const servises = useSelector((state) => state.analysisReduser.otherServises);
  const dispatch = useDispatch();
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const addToBascet = (analys) => {
    dispatch(addServisToBasketAC(analys));
    dispatch(getPriceSumAC(analys.price));
  };
  return (
    <div className={styles.actions}>
      <h4>Другие услуги:</h4>
      {servises.map((servise, index) => {
        return (
          <AnalysItem
            key={servise.id}
            analys={servise}
            noLink={true}
          />
        );
      })}
    </div>
  );
};
export default OtherServisesPage;
