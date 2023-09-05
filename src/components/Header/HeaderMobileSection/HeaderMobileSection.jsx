import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../HeaderSectionTwo/Logo/Logo';
import MainSearchContainer from '../HeaderSectionTwo/MainSearch/MainSearchContainer';
import styles from './HeaderMobileSection.module.css';
import IconInfo from '../HeaderSectionTwo/Icons/IconInfo';
const HeaderMobileSection = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  const basket = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.basket
  );
  return (
    <div className={styles.mobile_section}>
      <div className={styles.mobile_section_header}>
        <Logo />
        <div className={styles.links_wrapper}>
          <IconInfo
            discription="authtorisation"
            onClick={() =>
              auth
                ? navigate('/medical-laborathory/private-area')
                : navigate('/medical-laborathory/authorisation/login')
            }
            basket={basket}
          />
          <IconInfo
            discription="bag"
            onClick={() => navigate('/medical-laborathory/basket')}
            basket={basket}
          />
        </div>
      </div>
      <MainSearchContainer />
    </div>
  );
};

export default HeaderMobileSection;
