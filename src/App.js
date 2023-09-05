import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useToggle } from './CustomHooks/UseToggle';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import MainForDoctors from './components/Main/ForDoctors/MainForDoctors';
import MainForOrganisations from './components/Main/ForOrganisations/MainForOrganisations';
import Chat from './components/Chat/ChatIcon/Chat';
import ChatsDialogContainer from './components/Chat/CahtsDialog/ChatsDialogContainer';
import MainFirstPage from './components/MainFirstPage/MainFirstPage';
import Basket from './components/Basket/MainLayout/Basket';
import MainLayout from './components/MainLayout/MainLayout';
import PrivateArea from './components/PrivateArea/MainContainer/PrivateArea';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Fish from './components/Utils/Fish';
import AuthContainer from './components/AuthBlock/Wrapper/AuthContainer';
import Servises from './components/Servises/MainContainer/Servises';

const App = () => {
  const [toggleClass, setToggleClass] = useToggle(
    'dialog_wrapper',
    'hidden',
    'hide_dialog',
    700
  );
  useEffect(() => {
    Aos.init({ duration: 1500 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/medical-laborathory/"
            element={<MainLayout />}
          >
            <Route
              index
              element={<MainFirstPage />}
            />
            <Route
              path="private-area/*"
              element={<PrivateArea />}
            />
            <Route
              path="basket/*"
              element={<Basket />}
            />
            <Route
              path="authorisation/*"
              element={<AuthContainer />}
            />
            <Route
              path="about/*"
              element={<About />}
            />
            <Route
              path="servises/*"
              element={<Servises />}
            />
            {/* rotes need refactoring  */}
            <Route
              path="for-doctors"
              element={<MainForDoctors />}
            />
            <Route
              path="for-organisations"
              element={<MainForOrganisations />}
            />
            <Route
              path="*"
              element={<Fish />}
            />
          </Route>
        </Routes>
        <Footer />
        <Chat showDialog={setToggleClass} />
        <ChatsDialogContainer
          showDialog={setToggleClass}
          toggleClass={toggleClass}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
