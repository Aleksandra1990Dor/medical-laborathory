import { useSelector } from 'react-redux';
import PrCard from './PrCard';
import styles from './PrCards.module.css';
const ForPationsPrCard = () => {
  const cards = useSelector((state) => state.frontPageReduser.cardsForPations);
  return (
    <div className={styles.prCards}>
      {cards.map((card) => {
        if (cards.indexOf(card) === 2) {
          return (
            <PrCard
              key={card.id}
              src={card.src}
              alt={card.alt}
              price={card.price}
              activeStyle={styles.prCards__cardHidden}
              text={card.title}
              href={card.link}
            />
          );
        }
        return (
          <PrCard
            key={card.id}
            src={card.src}
            alt={card.alt}
            price={card.price}
            text={card.title}
            href={card.link}
          />
        );
      })}
    </div>
  );
};
export default ForPationsPrCard;
