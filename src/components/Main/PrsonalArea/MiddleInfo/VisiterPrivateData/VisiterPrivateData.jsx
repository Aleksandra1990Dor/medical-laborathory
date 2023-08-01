import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TableDataContainer from '../TableData/TableDataContainer';
import styles from './VisiterPrivateData.module.css';
import { useEffect } from 'react';
import VisiterDataHeader from '../MiddleInfoHeader/VisiterDataHeader';

const VisiterPrivateData = () => {
  const navigate = useNavigate();

  // get visiter info from state
  const info = useSelector((state) => state.mainInfoReduser.visiterInfo);

  //   array with visiter data for table
  const userTableData = [
    info.fatherName
      ? `${info.name} ${info.fatherName} ${info.surName} `
      : `${info.name} ${info.surName}`,
    info.dateOfBurn || 'не заполнено',
    info.sex || 'не заполнено',
    info.phone || 'не заполнено',
    info.email || 'не заполнено',
    'редактировать',
  ];
  //   array with visiter adresses for table
  const userAdresses = [];
  //array with visiter centers for table
  const userCenters = [];
  // if user not autorized redirect to login
  useEffect(() => {
    if (!info.isAuth) {
      return navigate('../login');
    }
  });
  return (
    <div className={styles.infoWrapper}>
      <VisiterDataHeader />
      <TableDataContainer
        title={'Персоналные данные'}
        tableTitles={['ФИО', 'Дата рождения', 'Пол', 'Телефон', 'email', ' ']}
        data={userTableData}
      />
      <TableDataContainer
        tableTitles={['Диагностический центр']}
        title={'Предпочитаемые диагностические центры'}
        data={userCenters}
      />
      <TableDataContainer
        tableTitles={['Адрес']}
        title={'Адреса для выезда мобильной службы'}
        data={userAdresses}
      />
    </div>
  );
};
export default VisiterPrivateData;
