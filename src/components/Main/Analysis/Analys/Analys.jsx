import Button from '../../../Utils/Button';
import AboutAnalysItem from './AboutAnaltsItem';
import styles from './AnalysPage.module.css';
import {
  addServisToBasketAC,
  getPriceSumAC,
} from '../../../store/mainInfoReduser';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import AddedToBasketMsg from '../../../Utils/AddedToBasketMsg';
import BackLink from '../../../Utils/BackLink';
import { findAnalysById } from '../../../Helpers/helpers';
const Analys = () => {
  // get analysis from state
  const analysis = useSelector((state) => state.analysisReduser);
  // get navigate, dispatch and params
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  // className for hidden message "added to basket"
  const [toggleClass, setToggleClass] = useState(styles.hidden);
  //
  // finding analys by id from params
  const analys = findAnalysById(analysis, params.id);
  //
  // function add to backet
  const addToBascet = (analys) => {
    // adding servise to bascet
    dispatch(addServisToBasketAC(analys));
    // adding price to visiter bill
    dispatch(getPriceSumAC(analys.price));
    // showing message "good added tko basket"
    setToggleClass(styles.added);
  };
  return (
    <div className={styles.analysisPage}>
      <div className={styles.analysisPageLeft}>
        <BackLink />
        <h3 className={styles.title}>{analys.title}</h3>
        <p className={styles.smallDescription}>{analys.smallDescription}</p>
        <div>
          {analys.about && (
            <h3 className={styles.about}>Показания для сдачи анализа:</h3>
          )}
          {analys.about &&
            analys.about.map((el, index) => {
              return (
                <AboutAnalysItem
                  key={index}
                  element={el}
                />
              );
            })}
        </div>
      </div>
      <div className={styles.analysisPageRight}>
        <div className={styles.analysisPageRight_wrapper}>
          <h5 className={styles.analysisArticle}>артикул: {analys.id}.</h5>
          <small className={styles.price}>цена:</small>
          <h3 className={styles.priceTitle}>{analys.priceTitle}</h3>
          <small className={styles.time}>Срок изготовления анализа:</small>
          <p className={styles.priceText}>5 рабочих дней</p>
          <Button
            toggleClass={styles.btn}
            text="В КОРЗИНУ"
            onClick={() => addToBascet(analys)}
          />
          <AddedToBasketMsg toggleClass={toggleClass} />
          <small
            className={styles.analysAtHome}
            onClick={() => navigate('/home-servis')}
          >
            Можно сдать дома
          </small>
        </div>
      </div>
    </div>
  );
};
export default Analys;
