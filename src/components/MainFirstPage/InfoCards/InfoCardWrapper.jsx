import InfoCard from './InfoCard';
import styles from './InfoCard.module.css';
import family from '../../../img/family.png';
import privateArea from '../../../img/privateArea.png';

const InfoCardWrapper = () => {
  return (
    <div className={styles.main_wrapper}>
      <InfoCard
        title="Личный кабинет"
        src={family}
        alt="личный кбинет"
      >
        Заказывайе анализы, отслеживайте статус заказов и получайте результаты
        за пару кликов.
      </InfoCard>
      <InfoCard
        title="Сдать анализы по ДМС"
        src={privateArea}
        alt="сдать по дмс"
      >
        Анализы в Лабораторной службе Victoria можно выполнить по полису
        добровольного медицинского страхования (ДМС). Чтобы воспользоваться
        полисом ДМС:
      </InfoCard>
    </div>
  );
};
export default InfoCardWrapper;
