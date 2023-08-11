import styles from './Preorder.module.css';
import { useState } from 'react';
import PreorderForm from './PreorderForm/PreorderForm';

const Preorder = () => {
  // classes for hidden div
  const [atHome, setAtHome] = useState(styles.hidden);
  // show or hide hidden form
  const showOrhideInfo = () => {
    if (atHome === styles.hidden) {
      setAtHome(styles.at_home);
    } else {
      setAtHome(styles.hidden);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Оформление заказа:</h1>
      <PreorderForm
        atHome={atHome}
        setAtHome={setAtHome}
        showOrhideInfo={showOrhideInfo}
      />
    </div>
  );
};

export default Preorder;
