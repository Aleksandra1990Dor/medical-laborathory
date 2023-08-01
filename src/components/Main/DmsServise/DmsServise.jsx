import document from '../../../img/document.png';
import calendar from '../../../img/calendar.png';
import fanendoscop from '../../../img/fanendoskop.png';
import dna from '../../../img/dna-test.png';
import jantung from '../../../img/Shield-test.png';
import styles from './DmsServise.module.css';
const DmsServise = () => {
  return (
    <div className={styles.dms_container}>
      <div className={styles.bg_image_1}>
        <img src={dna} />
      </div>
      <div className={styles.dms_title_wrapper}>
        <h2>Прием по ДМС</h2>
        <small>
          Анализы в Лабораторной службе Victoria можно выполнить по полису
          добровольного медицинского страхования (ДМС). Чтобы воспользоваться
          полисом ДМС:
        </small>
      </div>
      <div className={styles.dms_wrapper}>
        <div className={styles.dms_item}>
          <img src={fanendoscop} />
          <p>Обратитесь в свою страховую компанию</p>
        </div>
        <div className={styles.dms_item}>
          <img src={calendar} />
          <p>
            Согласуйте со страховой компанией список анализов, а также формат
            визита: в Центры Victoria или вызов Мобильной службы на дом
          </p>
        </div>
        <div className={styles.dms_item}>
          <img src={document} />
          <p>Ваш заказ будет оплачен страховой компанией</p>
        </div>
      </div>
      <div className={styles.after}>
        <small>
          *Необходимо уточнить с какими лаборатоиями сотрудничает ваша страховая
          компания
        </small>
      </div>
    </div>
  );
};

export default DmsServise;
