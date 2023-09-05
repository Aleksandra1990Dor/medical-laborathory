import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { loginAC } from '../../../store/mainInfoReduser';
import { BasketButtonSubmit } from '../../Basket/BasketUtils/BasketButton';
import CustumInput from '../../Basket/Preorder/Utils/CustumInput/CustumInput';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  // if login or password incorrect will be error
  const [error, setError] = useState(null);
  // distructure form's methods
  const { handleSubmit, reset, control } = useForm({
    mode: 'onChange',
  });
  const submitHandler = (data) => {
    // distructure of object with data
    const { login, password } = { ...data };
    if (!login || !password || login !== 'Vasya' || password !== 'Pupkin') {
      setError('Некорректный логин или пароль');
    } else {
      dispatch(loginAC(login, password, 'Вася', 'Пупкин'));
      reset();
      navigate('../correct-msg');
    }
  };
  const redirect = () => {
    return auth ? navigate('/medical-laborathory/private-area') : navigate(-1);
  };
  return (
    <div className={styles.login_wrapper}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.container}>
          <AiOutlineClose
            className={styles.closing_icon}
            onClick={redirect}
          />

          <h1>Вход</h1>
          <Controller
            rules={{ required: 'Заполните поле логин' }}
            name="login"
            control={control}
            defaultValue={''}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <CustumInput
                title="Логин"
                name={name}
                inputRef={ref}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={error}
              />
            )}
          />
          <Controller
            rules={{ required: 'Заполните поле пароль' }}
            name="password"
            control={control}
            defaultValue={''}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <CustumInput
                title="Пароль"
                name={name}
                inputRef={ref}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={error}
                type="password"
              />
            )}
          />
          <div className={styles.error}>{error}</div>
          <BasketButtonSubmit className={styles.btn}>Войти</BasketButtonSubmit>
          <small onClick={() => navigate('../registration')}>
            зарегистрироваться
          </small>
        </div>
      </form>
    </div>
  );
};

export default Login;
