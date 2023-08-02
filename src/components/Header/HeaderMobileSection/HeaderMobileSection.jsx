import HeaderIcons from '../HeaderSectionTwo/Icons/HeaderIcons';
import Logo from '../HeaderSectionTwo/Logo/Logo';
import MainSearchContainer from '../HeaderSectionTwo/MainSearch/MainSearchContainer';
import styles from './HeaderMobileSection.module.css';
const HeaderMobileSection = () => {
  return (
    <div className={styles.mobile_section}>
      <div className={styles.mobile_section_two}>
        <Logo />
        <HeaderIcons />
      </div>
      <MainSearchContainer />
    </div>
  );
};

export default HeaderMobileSection;
