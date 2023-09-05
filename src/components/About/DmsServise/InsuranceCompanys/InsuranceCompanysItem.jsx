import styles from './InsuranceCompanys.module.css';

const InsuranceCompanysItem = ({ img }) => {
  return (
    <div className={styles.img_wrapper}>
      <img
        src={img.src}
        alt={img.alt}
      />
    </div>
  );
};

export default InsuranceCompanysItem;
