import HeaderSectionTwo from './HeaderSectionTwo/HeaderSectionTwo';
import HeaderSectionOne from './HeaderSectionOne/HeaderSectionOne';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderSectionOne />
      <HeaderSectionTwo />
    </header>
  );
};
export default Header;
