import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './AddCenter.module.css';
import { addCenterAC } from '../../../../../store/mainInfoReduser';
import { ChoseCity } from '../../../../../Header/HeaderSectionOne/RightSide/City';

const AddCenter = ({ toggleClass, showOrHideMore }) => {
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const adresses = useSelector((state) => state.mainInfoReduser.adresses[city]);
  const dispatch = useDispatch();
  const addCenter = (center) => {
    dispatch(addCenterAC(center));
    showOrHideMore();
  };
  return (
    <div className={toggleClass}>
      <div className={styles.changeInfoContainer}>
        <AiOutlineClose
          className={styles.closeIcon}
          onClick={showOrHideMore}
        />
        <h3>
          <ChoseCity city={city} />
        </h3>

        {adresses.map((adress, index) => (
          <div
            key={index}
            className={styles.info_table_row}
            onClick={() => addCenter(adress)}
          >
            {adress}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCenter;
