import { useNavigate } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.logo_container}
      onClick={() => navigate('/medical-laborathory/')}
    >
      <h1 className={styles.logotype}>VIKTORIA</h1>
      <small>Сеть медицинских лабораторий</small>
    </div>
  );
};

export default Logo;
