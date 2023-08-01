import { useSelector } from 'react-redux';
import FronPageLinksItem from './FrontPageLinksItem';
import styles from './FrontPageLinks.module.css';

const FrontPageLinks = () => {
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const cardInfo = useSelector(
    (state) => state.frontPageReduser.frontPageLinks
  );
  return (
    <div className={styles.wrapper}>
      {cardInfo.map((card, index) => (
        <FronPageLinksItem
          key={card.id}
          link={card}
          city={index === cardInfo.length - 1 && city}
        />
      ))}
    </div>
  );
};
export default FrontPageLinks;
