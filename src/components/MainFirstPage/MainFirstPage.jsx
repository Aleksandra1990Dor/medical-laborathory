import Achivments from './Achivments/Achivments';
import ForPationsPrCard from './Cards/ForPationsPrCard';
import InfoCardWrapper from './InfoCards/InfoCardWrapper';
import MainAnalysis from './MainAnalysis/MainAnalysis';
import MainCaruselSection from './MainCarusel/MainCaruselSection';
import FrontPageLinks from './FrontPageLinks/FrontPageLinks';

const MainFirstPage = () => {
  return (
    <main>
      <ForPationsPrCard />
      <Achivments />
      <MainAnalysis />
      <InfoCardWrapper />
      <MainCaruselSection />
      <FrontPageLinks />
    </main>
  );
};
export default MainFirstPage;
