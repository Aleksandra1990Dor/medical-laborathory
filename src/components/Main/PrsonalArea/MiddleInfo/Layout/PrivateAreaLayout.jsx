import React from 'react';
import VisiterDataHeader from '../MiddleInfoHeader/VisiterDataHeader';
import MobileNavigation from '../../Navigatioon/MobileNavigation/MobileNavigation';
import { Outlet } from 'react-router-dom';
import styles from '../VisiterPrivateData/VisiterPrivateData.module.css';

const PrivateAreaLayout = () => {
  return (
    <div className={styles.infoWrapper}>
      <VisiterDataHeader />
      <MobileNavigation />
      <Outlet />
    </div>
  );
};

export default PrivateAreaLayout;
