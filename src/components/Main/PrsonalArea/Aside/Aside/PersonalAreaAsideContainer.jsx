import { useState } from 'react';
import PersonalAreaAside from './PersonalAreaAside';
import styles from './PersonalAreaAside.module.css';
import { timeOut } from '../../../../Helpers/helpers';

const PersonalAreaAsideContainer = () => {
  //   hidden blocks styles
  const [basketToggleClass, setBasketToggleClass] = useState(styles.hidden);
  const [homeServisToggleClass, setHomeServiseToggleClass] = useState(
    styles.hidden
  );
  const [infoToggleClass, setInfoToggleClass] = useState(styles.hidden);
  // container styles
  const [contanerToggleClass, setContanerToggleClass] = useState(
    styles.infoContainer
  );
  // toggleClasses array
  const classes = [
    [basketToggleClass, setBasketToggleClass],
    [homeServisToggleClass, setHomeServiseToggleClass],
    [infoToggleClass, setInfoToggleClass],
  ];
  // function showing hidden info
  const showHiddenInfo = (toggleClass, setToggleClass) => {
    if (toggleClass === styles.hidden) {
      //hide aside
      setContanerToggleClass(`${styles.infoContainer} ${styles.hideInfo}`);
      timeOut(1000, setContanerToggleClass, styles.hidden);
      //show block with more information
      timeOut(300, setToggleClass, `${styles.infoWrapper} ${styles.showInfo}`);
    } else {
      //hide more informetion
      setToggleClass(`${toggleClass} ${styles.hideInfo}`);
      timeOut(1000, setToggleClass, styles.hidden);
      //show aside
      timeOut(
        500,
        setContanerToggleClass,
        `${styles.infoContainer} ${styles.showInfo}`
      );
    }
  };
  return (
    <PersonalAreaAside
      showHiddenInfo={showHiddenInfo}
      contanerToggleClass={contanerToggleClass}
      classes={classes}
    />
  );
};

export default PersonalAreaAsideContainer;
