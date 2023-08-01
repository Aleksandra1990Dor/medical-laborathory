import styles from '../Header.module.css';
import MainSearchContainer from './MainSearch/MainSearchContainer';
import Logo from './Logo/Logo';
import HeaderIcons from './Icons/HeaderIcons';
import HeaderButtons from './Buttons/HeaderButtons';
const HeaderSectionTwo = () => {
  return (
    <div className={styles.section_two}>
      <Logo />
      <MainSearchContainer />
      <HeaderButtons />
      <HeaderIcons />
    </div>
  );
};

export default HeaderSectionTwo;
