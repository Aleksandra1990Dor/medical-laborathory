import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoDiamondSharp, IoPersonSharp } from 'react-icons/io5';
import BackLink from '../../../../Utils/BackLink';
import styles from './VisiterDataHeader.module.css';

const VisiterDataHeader = () => {
  // get visiter info from state
  const info = useSelector((state) => state.mainInfoReduser.visiterInfo);
  return (
    <>
      {/* link 'back to main page' */}
      <BackLink />
      {/* greeting div with name and line */}
      <div className={styles.visiterGreeting}>
        {`Приветствую, ${info.name} ${info.surName}`} <IoDiamondSharp />
      </div>
      <div className={styles.visiterName}>
        {/* person icon */}
        <IoPersonSharp className={styles.visiterNameIcon} />
        {/* visiter name */}
        <span className={styles.visiterNameText}>
          {`${info.name} ${info.surName} `}
          {/* link chane user redirect to login */}
          <NavLink
            className={styles.visiterNameLink}
            to="/login"
          >
            (изменить)
          </NavLink>
        </span>
      </div>
    </>
  );
};
export default VisiterDataHeader;
