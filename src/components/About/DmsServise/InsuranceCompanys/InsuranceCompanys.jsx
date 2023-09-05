import { useSelector } from 'react-redux';
import InsuranceCompanysItem from './InsuranceCompanysItem';
import styles from './InsuranceCompanys.module.css';

const InsuranceCompanys = () => {
  const companys = useSelector(
    (state) => state.frontPageReduser.insuranceCompanys
  );
  return (
    <section className={styles.companys_wrapper}>
      <h2 className={styles.companys_title}>
        Компании с которыми мы сотрудничаем:
      </h2>
      <div className={styles.companys}>
        {companys.map((img, index) => (
          <InsuranceCompanysItem
            img={img}
            key={index}
          />
        ))}
      </div>
      <p className={styles.companys_description}>
        Для обладателей действующих полисов ДМС любых страховых компаний в
        медицинском центре действует <span> скидка 5% </span> на все услуги, не
        входящие в программу добровольного медицинского страхования.
      </p>
    </section>
  );
};

export default InsuranceCompanys;
