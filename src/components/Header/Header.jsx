import HeaderSectionTwo from './HeaderSectionTwo/HeaderSectionTwo';
import HeaderSectionOne from './HeaderSectionOne/HeaderSectionOne';
import HeaderMobileSection from './HeaderMobileSection/HeaderMobileSection';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderSectionOne />
      <HeaderSectionTwo />
      <HeaderMobileSection />
    </header>
  );
};
export default Header;
