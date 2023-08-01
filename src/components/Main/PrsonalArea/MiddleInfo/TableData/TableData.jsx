import { IoFileTraySharp } from 'react-icons/io5';
import styles from './TableData.module.css';

const TableData = ({ tableTitles, data, showOrHideMore }) => {
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
            //  if data array is empty here is icon and text that user don't have data yet
            <td>
              <div className={styles.infoTableEmpty}>
                <IoFileTraySharp className={styles.infoTableEmptyIcon} />
                <small>нет данных</small>
              </div>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};
export default TableData;
