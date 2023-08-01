import Button from '../../../Utils/Button';
import styles from './HeaderButtons.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HeaderButtons = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  return (
    <div className={styles.btn_wrapper}>
      <Button
        text="Получить результат"
        toggleClass={styles.btn_brown}
        onClick={() => {
          auth ? navigate('private-area/analysis') : navigate('login');
        }}
      />
      {auth || (
        <Button
          text="Личный кабинет"
          toggleClass={styles.btn_white}
          onClick={() => {
            navigate('login');
          }}
        />
      )}
    </div>
  );
};
export default HeaderButtons;
