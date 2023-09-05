import styles from './LicenseItemDescription.module.css';

const LicenseItemDescription = ({ src, description, alt }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.license_info_wrapper}>
        <div className={styles.license_info_description}>{description}</div>
        <img
          className={styles.license_info_img}
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};
export default LicenseItemDescription;
