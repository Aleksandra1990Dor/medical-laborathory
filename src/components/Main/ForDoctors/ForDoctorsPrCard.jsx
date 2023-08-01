import { useSelector } from 'react-redux';
import PrCard from '../../MainFirstPage/Cards/PrCard';
import styles from '../../MainFirstPage/Cards/PrCards.module.css';

const ForDoctorsPrCard = () => {
  const cards = useSelector((state) => state.frontPageReduser.cardsForDoctors);
  return (
    <div className={styles.prCards}>
      {cards.map((card) => {
        return (
          <PrCard
            src={card.src}
            key={card.id}
            alt={card.alt}
          />
        );
      })}
    </div>
  );
};
export default ForDoctorsPrCard;
