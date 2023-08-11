import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { loginAC } from '../store/mainInfoReduser';
import CustumInput from '../Main/Basket/Preorder/Utils/CustumInput/CustumInput';
import { BasketButtonSubmit } from '../Main/Basket/BasketUtils/BasketButton';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  const { handleSubmit, reset, control } = useForm({
    mode: 'onChange',
  });
  const submitHandler = (data) => {
    // distructure of object with data
    const { login, password } = { ...data };
    if (!login || !password || login !== 'Vasya' || password !== 'Pupkin') {
      setError('ТЫ не Вася');
    } else {
      dispatch(loginAC(login, password, 'Вася', 'Пупкин'));
      reset();
      navigate('../correct-msg');
    }
  };
  const redirect = () => {
    return auth
      ? navigate('/medical-laborathory/private-area')
      : navigate('../');
  };
  return (
    <div className={styles.loginWrapper}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.loginContainer}>
          <AiOutlineClose
            className={styles.closeIcon}
            onClick={redirect}
          />

          <h5>Вход</h5>
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
