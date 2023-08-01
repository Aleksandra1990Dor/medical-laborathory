import styles from './LisenseImgDescription.module.css';

const LicenseImgDescription = ({ src, description, alt }) => {
  return (
    <div className={styles.license_info_wrapper}>
      <div className={styles.license_info_description}>{description}</div>
      <img
        src={src}
        alt={alt}
      />
    </div>
  );
};
export default LicenseImgDescription;
