import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Utils/Button';
import styles from './HeaderButtons.module.css';

const HeaderButtons = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);

  return (
    <div className={styles.btn_wrapper}>
      <Button
        text="Получить результат"
        toggleClass={styles.btn_green}
        onClick={() => {
          auth
            ? navigate('/medical-laborathory/private-area/analysis')
            : navigate('/medical-laborathory/authorisation/login');
        }}
      />
      {auth || (
        <Button
          text="Личный кабинет"
          toggleClass={styles.btn_white}
          onClick={() => {
            auth
              ? navigate('/medical-laborathory/private-area')
              : navigate('/medical-laborathory/authorisation/login');
          }}
        />
      )}
    </div>
  );
};
export default HeaderButtons;
