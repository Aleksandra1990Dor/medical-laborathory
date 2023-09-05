import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { addCenterAC } from '../../../../../store/mainInfoReduser';
import ChoseCity from '../../../../Header/HeaderSectionOne/RightSide/City/ChoseCity';
import styles from './AddCenter.module.css';

const AddCenter = ({ toggleClass, hideMore }) => {
  const dispatch = useDispatch();
  // get city and adresses from state
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const adresses = useSelector((state) => state.mainInfoReduser.adresses[city]);
  // func add center to favorites
  const addCenter = (center) => {
    dispatch(addCenterAC(center));
    hideMore();
  };
  return (
    <div className={toggleClass}>
      <div className={styles.form_wrapper}>
        <AiOutlineClose
          className={styles.cloing_icon}
          onClick={hideMore}
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
