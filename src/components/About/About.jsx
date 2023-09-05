import { Routes, Route } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import Licenses from './Lisenses/Licenses';
import QualityControl from './QualityControl/QualityControl';
import JobOpenigs from './JobOpenings/JobOpenigs';
import AdressesPage from './Adresses/MainContainer/AdressesPage';
import DmsServise from './DmsServise/MainContainer/DmsServise';
import HomeServise from './HomeServise/MainContainer/HomeServise';

const About = () => {
  return (
    <Routes>
      <Route
        path="contacts"
        element={<Contacts />}
      />
      <Route
        path="licenses"
        element={<Licenses />}
      />
      <Route
        path="quality-control"
        element={<QualityControl />}
      />
      <Route
        path="job-openings"
        element={<JobOpenigs />}
      />
      <Route
        path="home-servis"
        element={<HomeServise />}
      />
      <Route
        path="adresses"
        element={<AdressesPage />}
      />
      <Route
        path="dms"
        element={<DmsServise />}
      />
    </Routes>
  );
};

export default About;
