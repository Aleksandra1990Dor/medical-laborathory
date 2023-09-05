import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import RegistrationContainer from '../Registration/RegistrationContainer';
import AuthOutMsg from '../CorrectMessaage/AuthOutMsg';

const AuthContainer = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={<Login />}
      />
      <Route
        path="registration"
        element={<RegistrationContainer />}
      />
      <Route
        path="correct-msg"
        element={<AuthOutMsg />}
      />
    </Routes>
  );
};

export default AuthContainer;
