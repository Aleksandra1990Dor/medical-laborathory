import { NavLink } from 'react-router-dom';
import React from 'react';

import styles from '../Analysis.module.css';
const AnalysisPageHeader = ({ city }) => {
  return (
    <div className={styles.city}>
      <NavLink
        className={styles.home}
        to="../../"
      >
        Назад
      </NavLink>
      <div className={styles.city_name}>
        <small> Сдать анализы в городе:&nbsp;&nbsp;</small>
        <span>{city}</span>
      </div>
    </div>
  );
};
export default AnalysisPageHeader;
