import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LicenseItem from './LisenseItem/LisenseItem';
import LicenseItemDescription from './LisenceItemDescription/LicenseItemDescription';
import BackLink from '../../Utils/BackLink';
import styles from './Licenses.module.css';

const Licenses = () => {
  const mainRef = useRef(null);
  // scrolling to top after render
  useEffect(() => {
    mainRef.current.scrollIntoView();
  }, []);
  // licenses information from state
  const licenses = useSelector((state) => state.frontPageReduser.licenses);
  return (
    <main
      className={styles.wrapper}
      ref={mainRef}
    >
      <BackLink />
      <h1 className={styles.title}>Лицензии и сертификаты</h1>
      {licenses.map((license, index) => (
        <LicenseItem
          title={license.title}
          description={license.description}
          key={index}
        >
          {license.hasItemDescription && (
            <LicenseItemDescription
              src={license.itemDescription.src}
              alt={license.itemDescription.alt}
              description={license.itemDescription.description}
            />
          )}
        </LicenseItem>
      ))}
    </main>
  );
};
export default Licenses;
