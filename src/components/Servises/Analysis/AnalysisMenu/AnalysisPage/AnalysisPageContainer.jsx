import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AnalysisPage from './AnalysisPage';

const AnalysisPageContainer = ({ noLink }) => {
  // get all analysis, doctors, user city and links to all analysis from state
  let allAnalysis = useSelector((state) => state.analysisReduser);
  const city = useSelector((state) => state.mainInfoReduser.visiterInfo.city);
  const doctors = useSelector((state) => state.doctorsReduser);
  let links = useSelector((state) => state.linksReduser.navLinks[0].links);
  const doctorsLinks = useSelector(
    (state) => state.linksReduser.navLinks[2].links
  );
  // get params
  const params = useParams();
  // checking current analysis key in links
  let currentAnalysis = links.find((link) => link.key === params.slug);
  // setting current analysis by key
  let analysis = allAnalysis[params.slug];
  // if there's no current analysis finding all this in doctors
  if (!analysis) {
    analysis = doctors[params.slug];
    links = doctorsLinks;
    currentAnalysis = doctorsLinks.find((link) => link.key === params.slug);
  }
  return (
    <AnalysisPage
      city={city}
      links={links}
      analysis={analysis}
      currentAnalysis={currentAnalysis}
      noLink={noLink}
    />
  );
};
export default AnalysisPageContainer;
