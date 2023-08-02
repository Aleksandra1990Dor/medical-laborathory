import styles from '../Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
const HiddenNavbarElement = ({ link, hideMore }) => {
  return (
    <div className={styles.more_item}>
      <NavLink
        to={link.href}
        className={styles.more_link}
        onClick={hideMore}
      >
        {link.title}
        <IoMdArrowForward className={styles.test_block_icon} />
      </NavLink>
    </div>
  );
};
export default HiddenNavbarElement;
