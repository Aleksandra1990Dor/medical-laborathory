import AdressItem from '../Item/MainContainer/AdressItem';
import styles from './AdressesItems.module.css';

const AdressesItems = ({ allAdresses, city }) => {
  return (
    <div className={styles.wrapper}>
      {allAdresses[city].map((adress, index) => {
        return (
          <AdressItem
            key={index}
            adress={adress}
          />
        );
      })}
    </div>
  );
};
export default AdressesItems;
