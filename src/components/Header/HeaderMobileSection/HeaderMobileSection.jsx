import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../Utils/Button';
import HeaderIcons from '../HeaderSectionTwo/Icons/HeaderIcons';
import Logo from '../HeaderSectionTwo/Logo/Logo';
import MainSearchContainer from '../HeaderSectionTwo/MainSearch/MainSearchContainer';
import styles from './HeaderMobileSection.module.css';
const HeaderMobileSection = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  return (
    <div className={styles.mobile_section}>
      <div className={styles.mobile_section_two}>
        <Logo />
        <div className={styles.links_wrapper}>
          <HeaderIcons />
          <Button
            text="личный кабинет"
            toggleClass={styles.btn_brown}
            onClick={() => {
              auth ? navigate('private-area/') : navigate('login');
            }}
          />
        </div>
      </div>
      <MainSearchContainer />
    </div>
  );
};

export default HeaderMobileSection;
