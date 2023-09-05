import { useState } from 'react';
import { useSelector } from 'react-redux';
import Registration from './Registration';
import styles from './registration.module.css';

const RegistrationContainer = () => {
  // cities and visiter info from state
  const cities = useSelector((state) => state.mainInfoReduser.cities);
  const info = useSelector((state) => state.mainInfoReduser.visiterInfo);
  const [city, setCity] = useState(info.city);
  const [error, setError] = useState(null);
  return (
    <div className={styles.wrapper}>
      <Registration
        city={city}
        setCity={setCity}
        error={error}
        setError={setError}
        cities={cities}
      />
    </div>
  );
};
export default RegistrationContainer;
