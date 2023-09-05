import Achivments from './Achivments/Achivments';
import ForPationsPrCard from './Cards/ForPationsPrCard';
import InfoCardWrapper from './InfoCards/InfoCardWrapper';
import MainAnalysis from './MainAnalysis/MainAnalysis';
import MainCaruselSection from './MainCarusel/MainCaruselSection';
import FrontPageLinks from './FrontPageLinks/FrontPageLinks';
import styles from './MainFirstPage.module.css';

const MainFirstPage = () => {
  return (
    <main className={styles.main}>
      <MobileFirstPage dataAos="fade-left" />
      <div className={styles.desctop}>
        <div data-aos="fade-up">
          <ForPationsPrCard />
          <Achivments />
        </div>
        <MainAnalysis />
        <InfoCardWrapper />
        <MainCaruselSection />
        <FrontPageLinks />
      </div>
    </main>
  );
};
const MobileFirstPage = ({ dataAos }) => {
  return (
    <div className={styles.mobile_first_page}>
      <MainCaruselSection />
      <div data-aos={dataAos}>
        <Achivments />
      </div>
      <MainAnalysis />
      <InfoCardWrapper />
      <FrontPageLinks />
    </div>
  );
};
export default MainFirstPage;
