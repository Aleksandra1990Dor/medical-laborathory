import InfoCard from './InfoCard';
import { useNavigate } from 'react-router-dom';
import styles from './InfoCard.module.css';
import family from '../../../img/family.png';
import privateArea from '../../../img/privateArea.png';

const InfoCardWrapper = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main_wrapper}>
      <InfoCard
        title="Личный кабинет"
        src={family}
        onClick={() => navigate('private-area/')}
        alt="личный кбинет"
      >
        Заказывайе анализы, отслеживайте статус заказов и получайте результаты
        за пару кликов.
      </InfoCard>
      <InfoCard
        title="Сдать анализы по ДМС"
        src={privateArea}
        onClick={() => navigate('dms')}
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
