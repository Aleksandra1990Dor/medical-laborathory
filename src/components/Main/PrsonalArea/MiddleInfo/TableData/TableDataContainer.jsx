import { NavLink } from 'react-router-dom';
import { IoChevronForwardSharp } from 'react-icons/io5';
import TableData from './TableData';
import styles from './TableDataContainer.module.css';
import { useState } from 'react';
import ChangeUserInformation from './ChangeInformationPage/ChangeUserInformation';
import AddCenter from './AddCenter/AddCenter';
import AddAdress from './AddAdress/AddAdress';

const TableDataContainer = ({ title, tableTitles, data }) => {
  // classes for hidden div
  const [toggleClass, setToggleClass] = useState(styles.hidden);

  const showOrHideMore = () => {
    if (toggleClass === styles.hidden) {
      setToggleClass(`${styles.changeInfoWrapper} ${styles.showInfo}`);
    } else {
      setToggleClass(`${styles.changeInfoWrapper} ${styles.hideInfo}`);
      setTimeout(() => setToggleClass(styles.hidden), 500);
    }
  };

  return (
    <div className={styles.infoTable}>
      <div className={styles.infoTitleWrapper}>
        <div className={styles.infoTableTitle}>
          <IoChevronForwardSharp className={styles.infoTableIcon} />
          <h6>{title}</h6>
        </div>
        <NavLink
          className={styles.infoTitleBtn}
          onClick={showOrHideMore}
        >
          Добавить
        </NavLink>
      </div>
      <TableData
        tableTitles={tableTitles}
        data={data}
        showOrHideMore={showOrHideMore}
      />
      {title === 'Предпочитаемые диагностические центры' && (
        <AddCenter
          toggleClass={toggleClass}
          showOrHideMore={showOrHideMore}
        />
      )}
      {title === 'Персоналные данные' && (
        <ChangeUserInformation
          toggleClass={toggleClass}
          showOrHideMore={showOrHideMore}
          title={title}
          tableTitles={tableTitles}
        />
      )}
      {title === 'Адреса для выезда мобильной службы' && (
        <AddAdress
          toggleClass={toggleClass}
          showOrHideMore={showOrHideMore}
        />
      )}
    </div>
  );
};
export default TableDataContainer;
