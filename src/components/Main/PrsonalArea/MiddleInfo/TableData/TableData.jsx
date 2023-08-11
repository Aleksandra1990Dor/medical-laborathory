import { IoFileTraySharp } from 'react-icons/io5';
import styles from './TableData.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { deleteCenterAC } from '../../../../store/mainInfoReduser';
import { useDispatch } from 'react-redux';

const TableData = ({ tableTitles, data, showOrHideMore }) => {
  const dispatch = useDispatch();
  return (
    <table className={styles.infoTableContainer}>
      <thead>
        {/* titles for table come as titles array and maping here */}
        <tr>
          {tableTitles.map((title, index) => {
            return <td key={index}>{title}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableTitles.length > 1 && (
          <tr>
            {/* data for table come as array and maping here */}
            {data.length ? (
              data.map((info, index) => {
                if (info === 'редактировать') {
                  return (
                    <td
                      className={styles.infoTableContainerLink}
                      key={index}
                      onClick={showOrHideMore}
                    >
                      {info}
                    </td>
                  );
                }
                return <td key={index}>{info}</td>;
              })
            ) : (
              <td>
                <div className={styles.infoTableEmpty}>
                  <IoFileTraySharp className={styles.infoTableEmptyIcon} />
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
                      className={styles.deleteIcon}
                      onClick={() => dispatch(deleteCenterAC(info))}
                    />
                  </div>
                ))}
              </td>
            ) : (
              <td>
                <div className={styles.infoTableEmpty}>
                  <IoFileTraySharp className={styles.infoTableEmptyIcon} />
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
