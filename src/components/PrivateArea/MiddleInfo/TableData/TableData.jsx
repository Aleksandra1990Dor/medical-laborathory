import { useDispatch } from 'react-redux';
import { IoFileTraySharp } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { deleteCenterAC } from '../../../../store/mainInfoReduser';
import styles from './TableData.module.css';

const TableData = ({ tableTitles, data, showMore }) => {
  const dispatch = useDispatch();
  return (
    <table className={styles.table_wrapper}>
      <thead>
        <tr>
          {tableTitles.map((title, index) => {
            return <td key={index}>{title}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableTitles.length > 1 && (
          <tr>
            {data.length ? (
              data.map((info, index) => {
                if (info === 'редактировать') {
                  return (
                    <td
                      className={styles.link}
                      key={index}
                      onClick={showMore}
                    >
                      {info}
                    </td>
                  );
                }
                return <td key={index}>{info}</td>;
              })
            ) : (
              <td>
                <div className={styles.empty_container}>
                  <IoFileTraySharp className={styles.empty_icon} />
                  <small>нет данных</small>
                </div>
              </td>
            )}
          </tr>
        )}
        {tableTitles.length === 1 && (
          <tr>
            {data.length ? (
              <td>
                {data.map((info, index) => (
                  <div
                    key={index}
                    className={styles.info_table_row}
                  >
                    <h5>{`- ${info}`}</h5>
                    <AiOutlineClose
                      className={styles.delete_icon}
                      onClick={() => dispatch(deleteCenterAC(info))}
                    />
                  </div>
                ))}
              </td>
            ) : (
              <td>
                <div className={styles.empty_container}>
                  <IoFileTraySharp className={styles.empty_icon} />
                  <small>нет данных</small>
                </div>
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default TableData;
