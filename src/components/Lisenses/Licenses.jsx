import styles from './Licenses.module.css';
import LicenseItem from './LisenseItem/LisenseItem';
import LicenseImgDescription from './LisenceImgDescription/LisenseImgDescription';
import license from '../../img/license.png';
import acreditation from '../../img/acreditate.png';

const Licenses = () => {
  return (
    <main className={styles.wrapper}>
      <h1>Лицензии и сертификаты</h1>
      <LicenseItem
        title=" Лицензия"
        description="Деятельность Компании ООО «НПФ «VICTORIA» с 2013 года осуществляется
          на основе лицензии, выданной уполномоченным органом исполнительной
          власти субъекта Российской Федерации."
      >
        <LicenseImgDescription
          src={license}
          alt="Лицензия"
          description="Лицензия на осуществление медицинской деятельности №
          Л041-01126-23/00553381 от 10.11.2020."
        />
      </LicenseItem>
      <LicenseItem
        title="Сертификат стандартов качества лабораторной диагностики CAP (The
          College of American Pathologists)"
        description="В 2021 году 'VICTORIA' получилa международный сертификат стандартов
        качества лабораторной диагностики Коллегии американских патологов
        (Certificate of The College of American Pathologists) и был включен в
        список лучших лабораторий мира."
      >
        <LicenseImgDescription
          src={acreditation}
          alt="Акредитация"
          description="Сертификат CAP выдается при условии, что деятельность Компании
          полностью отвечает более чем 3000 требований, сформулированным при
          участии 500 экспертов в области лабораторной диагностики."
        />
      </LicenseItem>
      <LicenseItem
        title="Sigma-metric Performance от американской компании Westgard QC, Inc."
        description='В 2019 году Лабораторная служба "VICTORIA" прошла сертификацию по
        международному стандарту Sigma-metric Performance от американской
        компании Westgard QC, Inc . Верификация проводится по программе «Шесть
        сигм» (англ. six sigma). Такая верификация означает, что погрешности
        при выполнении исследований статистически возможны всего лишь в 3,4
        случая из одного миллиона.'
      />
      <LicenseItem
        title="Статус референс-лаборатории Roche Diagnostics"
        description="В 2018 году Компания получила статус референс-лаборатории Roche
        Diagnostics . Что означает соответствие высокому уровню аналитического
        качества и построения производственных процессов, регулярно
        подтверждаемому на международном уровне."
      />
    </main>
  );
};
export default Licenses;
