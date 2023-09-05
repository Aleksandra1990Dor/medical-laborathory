import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InfoCard from './InfoCard';
import family from '../../../img/images/family.png';
import privateArea from '../../../img/images/privateArea.png';
import styles from './InfoCard.module.css';

const InfoCardWrapper = () => {
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  const navigate = useNavigate();
  return (
    <div className={styles.main_wrapper}>
      <InfoCard
        title="Личный кабинет"
        src={family}
        onClick={() =>
          navigate(
            auth ? 'private-area/' : '/medical-laborathory/authorisation/login'
          )
        }
        alt="личный кбинет"
        dataAos="fade-up-right"
      >
        Заказывайе анализы, отслеживайте статус заказов и получайте результаты
        за пару кликов.
      </InfoCard>
      <InfoCard
        title="Сдать анализы по ДМС"
        src={privateArea}
        onClick={() => navigate('about/dms')}
        alt="сдать по дмс"
        dataAos="fade-up-left"
      >
        Анализы в Лабораторной службе Victoria можно выполнить по полису
        добровольного медицинского страхования (ДМС). Чтобы воспользоваться
        полисом ДМС:
      </InfoCard>
    </div>
  );
};
export default InfoCardWrapper;
