import { useSelector } from 'react-redux';
import HeaderLinks from './LeftSide/HeaderLinks';
import HeaderRightSide from './RightSide/HeaderRightSide';
import styles from '../Header.module.css';
const HeaderSectionOne = () => {
  const orientation = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.orientation
  );
  return (
    <div className={styles.section_one}>
      <HeaderLinks orientation={orientation} />
      <HeaderRightSide />
    </div>
  );
};
export default HeaderSectionOne;
