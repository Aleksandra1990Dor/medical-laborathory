import AddedToBasketMsg from '../../../Utils/AddedToBasketMsg';
import BackLink from '../../../Utils/BackLink';
import AboutAnalysItem from './AboutAnalysItem';
import styles from './Analys.module.css';

const Analys = ({ toggleClass, addToBascet, analys, disabled }) => {
  return (
    <div className={styles.wrapper}>
      <BackLink />
      <h3 className={styles.title}>{analys.title}</h3>
      <p className={styles.description}>{analys.smallDescription}</p>

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
      <h3 className={styles.price_wrapper}>
        цена:<span>{analys.priceTitle}</span>
      </h3>
      <h3 className={styles.text_wrapper}>
        cрок изготовления анализа:<span>5 рабочих дней</span>
      </h3>
      <button
        disabled={disabled}
        className={styles.btn}
        onClick={() => addToBascet(analys)}
      >
        Заказать анализ
      </button>
      <AddedToBasketMsg toggleClass={toggleClass} />
    </div>
  );
};
export default Analys;
