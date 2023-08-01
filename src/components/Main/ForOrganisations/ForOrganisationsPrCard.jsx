import { useSelector } from 'react-redux';
import PrCard from '../../MainFirstPage/Cards/PrCard';
import styles from '../../MainFirstPage/Cards/PrCards.module.css';

const ForOrganisationsPrCard = () => {
  const cards = useSelector(
    (state) => state.frontPageReduser.cardsForOrganisations
  );
  return (
    <div className={styles.prCards}>
      {cards.map((card) => {
        return (
          <PrCard
            src={card.src}
            alt={card.alt}
            key={card.id}
          />
        );
      })}
    </div>
  );
};
export default ForOrganisationsPrCard;
