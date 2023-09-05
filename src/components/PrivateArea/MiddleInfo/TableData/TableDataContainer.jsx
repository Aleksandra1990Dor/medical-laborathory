import { NavLink } from 'react-router-dom';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { useToggleClass } from '../../../../CustomHooks/UseToggle';
import TableData from './TableData';
import ChangeUserInformation from './ChangeInformationPage/ChangeUserInformation';
import AddCenter from './AddCenter/AddCenter';
import AddAdress from './AddAdress/AddAdress';
import styles from './TableDataContainer.module.css';

const TableDataContainer = ({ title, tableTitles, data }) => {
  // classes for hidden div
  const [toggleClass, showMore, hideMore] = useToggleClass(
    styles.changeInfoWrapper,
    styles.hidden,
    styles.hideInfo,
    400
  );
  return (
    <div className={styles.table_wrapper}>
      <div className={styles.title_wrapper}>
        <div className={styles.title}>
          <IoChevronForwardSharp className={styles.title_icon} />
          <h6>{title}</h6>
        </div>
        <NavLink
          className={styles.btn}
          onClick={showMore}
        >
          Добавить
        </NavLink>
      </div>
      <TableData
        tableTitles={tableTitles}
        data={data}
        showMore={showMore}
      />
      {title === 'Предпочитаемые диагностические центры' && (
        <AddCenter
          toggleClass={toggleClass}
          hideMore={hideMore}
        />
      )}
      {title === 'Персоналные данные' && (
        <ChangeUserInformation
          toggleClass={toggleClass}
          hideMore={hideMore}
          title={title}
        />
      )}
      {title === 'Адреса для выезда мобильной службы' && (
        <AddAdress
          toggleClass={toggleClass}
          hideMore={hideMore}
        />
      )}
    </div>
  );
};
export default TableDataContainer;
