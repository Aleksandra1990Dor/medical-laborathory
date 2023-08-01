import { useSelector } from 'react-redux';
import Phones from '../RightSide/Phones';
import styles from './HeaderRightSide.module.css';
import City from './City';
const HeaderRightSide = () => {
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const phones = useSelector((state) => state.mainInfoReduser.phones);
  return (
    <div className={styles.header_right_side}>
      <City city={city} />
      <Phones phones={phones} />
    </div>
  );
};

export default HeaderRightSide;
