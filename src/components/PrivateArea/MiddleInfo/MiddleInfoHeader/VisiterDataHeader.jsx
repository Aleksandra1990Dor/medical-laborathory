import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoDiamondSharp, IoPersonSharp } from 'react-icons/io5';
import BackLink from '../../../Utils/BackLink';
import styles from './VisiterDataHeader.module.css';

const VisiterDataHeader = () => {
  // get visiter info from state
  const info = useSelector((state) => state.mainInfoReduser.visiterInfo);
  return (
    <>
      <BackLink />
      <div className={styles.greeting}>
        <h1 className={styles.greeting_title}>
          {`Приветствую, ${info.name} ${info.surName}`} <IoDiamondSharp />
        </h1>
      </div>
      <div className={styles.user_wrapper}>
        <IoPersonSharp className={styles.user_icon} />
        <span className={styles.user_name}>
          {`${info.name} ${info.surName} `}
          <NavLink
            className={styles.user_name_link}
            to="http://localhost:3000/medical-laborathory/authorisation/login"
          >
            (изменить)
          </NavLink>
        </span>
      </div>
    </>
  );
};
export default VisiterDataHeader;
