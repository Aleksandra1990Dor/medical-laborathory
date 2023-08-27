import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useToggle } from './components/CustomHooks/UseToggle';
import './App.css';
import MainFirstPage from './components/MainFirstPage/MainFirstPage';
import MainForDoctors from './components/Main/ForDoctors/MainForDoctors';
import MainForOrganisations from './components/Main/ForOrganisations/MainForOrganisations';
import Fish from './components/Utils/fish';
import Footer from './components/footer/Footer';
import AnalysisPage from './components/Main/Analysis/AnalysisMenu/AnalysisPage';
import Chat from './components/Chat/ChatIcon/Chat';
import Analysis from './components/Main/Analysis/AnalysisMenu/Analysis';
import Basket from './components/Main/Basket/MainLayout/Basket';
import ActionsPage from './components/Main/ActionsPage/ActionsPage';
import Login from './components/Login/Login';
import AuthOutMsg from './components/Login/AuthOutMsg';
import Registration from './components/Login/Registration';
import PersonalArea from './components/Main/PrsonalArea/MainContainer/PersonalArea';
import DoctorsServisePage from './components/Main/DoctorsServicePage/DoctorsServisePage';
import OtherServisesPage from './components/Main/OtherServises/OtherServisesPage';
import MainLayout from './components/MainLayout/MainLayout';
import Analys from './components/Main/Analysis/Analys/Analys';
import ChatsDialog from './components/Chat/CahtsDialog/ChatsDialog';
import Preorder from './components/Main/Basket/Preorder/Preorder';
import OrderChecking from './components/Main/Basket/OrderChecking/OrderChecking';
import BasketMain from './components/Main/Basket/MainLayout/BasketMain';
import OrderCorrectMessage from './components/Main/Basket/OrderCorrectMessage';
import VisiterPrivateData from './components/Main/PrsonalArea/MiddleInfo/VisiterPrivateData/VisiterPrivateData';
import VisiterAnalysisData from './components/Main/PrsonalArea/MiddleInfo/VisiterAnalysis/VisiterAnalysisData';
import VisiterDynamicData from './components/Main/PrsonalArea/MiddleInfo/VisiterDynamicData/VisiterDynamicData';
import About from './components/About/About';
const App = () => {
  const [toggleClass, setToggleClass] = useToggle(
    'dialog_wrapper',
    'hidden',
    'hide_dialog',
    700
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/medical-laborathory/"
            element={<MainLayout />}
          >
            {/* route to home with index */}
            <Route
              index
              element={<MainFirstPage />}
            />
            {/* parent route for navigation in private area*/}
            <Route
              path="private-area/*"
              element={<PersonalArea />}
            >
              <Route
                index
                element={<VisiterPrivateData />}
              />
              <Route
                path="analysis"
                element={<VisiterAnalysisData />}
              />
              <Route
                path="dynamics"
                element={<VisiterDynamicData />}
              />
            </Route>
            {/* parent route for page with doctors servise */}
            <Route
              path="doctors/*"
              element={<DoctorsServisePage />}
            >
              <Route
                path=":slug"
                element={<AnalysisPage noLink={true} />}
              />
            </Route>
            {/* parent route for page with analysis */}
            <Route
              path="analysis/*"
              element={<Analysis />}
            >
              <Route
                path=":slug"
                element={<AnalysisPage />}
              />
            </Route>
            <Route
              path="basket/*"
              element={<Basket />}
            >
              <Route
                index
                element={<BasketMain />}
              />
              <Route
                path="order/step1"
                element={<Preorder />}
              />
              <Route
                path="order/step2"
                element={<OrderChecking />}
              />
            </Route>
            {/*
            
             regular rotes to pages
             
             */}
            <Route
              path="login"
              element={<Login />}
            />

            <Route
              path="for-doctors"
              element={<MainForDoctors />}
            />

            <Route
              path="for-organisations"
              element={<MainForOrganisations />}
            />
            <Route
              path="about/*"
              element={<About />}
            />
            <Route
              path="preorder/complete/№=41898-427534"
              element={<OrderCorrectMessage />}
            />

            <Route
              path="other-servises"
              element={<OtherServisesPage />}
            />

            <Route
              path="actions-page"
              element={<ActionsPage />}
            />
            <Route
              path="registration"
              element={<Registration />}
            />
            <Route
              path="correct-msg"
              element={<AuthOutMsg />}
            />
            <Route
              path="analys/:id"
              element={<Analys />}
            />
            <Route
              path="*"
              element={<Fish />}
            />
          </Route>
        </Routes>
        <Footer />
        <Chat showDialog={setToggleClass} />
        <ChatsDialog
          showDialog={setToggleClass}
          toggleClass={toggleClass}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
