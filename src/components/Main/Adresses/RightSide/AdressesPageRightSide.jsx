import AdressItem from './AdressItem';
import styles from './AdressesPageRightSide.module.css';

const AdressesPageRightSide = ({ allAdresses, city }) => {
  return (
    <div className={styles.right_side_wrapper}>
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
export default AdressesPageRightSide;
