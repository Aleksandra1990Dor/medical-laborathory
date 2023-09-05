import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  addServisToBasketAC,
  getPriceSumAC,
} from '../../../../store/mainInfoReduser';
import { findAnalysById } from '../../../Helpers/helpers';
import Analys from './Analys';
import styles from './Analys.module.css';

const AnalysContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // get analysis from state
  const analysis = useSelector((state) => state.analysisReduser);
  // className for hidden message "added to basket"
  const [disabled, setDisabled] = useState(false);
  const [toggleClass, setToggleClass] = useState(styles.hidden);
  // finding analys by id from params
  // let analys = findAnalysById(analysis, params.id);
  const analys = findAnalysById(analysis, params.id);
  // function add to backet
  const addToBascet = (analys) => {
    dispatch(addServisToBasketAC(analys));
    dispatch(getPriceSumAC(analys.price));
    setToggleClass(styles.added);
    setDisabled(true);
  };
  return (
    <Analys
      toggleClass={toggleClass}
      addToBascet={addToBascet}
      analys={analys}
      disabled={disabled}
    />
  );
};
export default AnalysContainer;
