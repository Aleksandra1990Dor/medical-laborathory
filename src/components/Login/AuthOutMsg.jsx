import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillHeartPulseFill } from 'react-icons/bs';
import styles from './AuthOutMsg.module.css';
import { useEffect } from 'react';

const AuthOutMsg = () => {
  const info = useSelector((state) => state.mainInfoReduser.visiterInfo);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('../private-area'), 3000);
  }, [navigate]);
  return (
    <div className={styles.msgContainer}>
      <h4>Добро пожаловать, {info.name}</h4>
      <div className={styles.heartWrapper}>
        <BsFillHeartPulseFill className={styles.heart} />
      </div>
    </div>
  );
};
export default AuthOutMsg;
