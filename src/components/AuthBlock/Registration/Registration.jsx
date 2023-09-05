import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { registrationAC } from '../../../store/mainInfoReduser';
import { BasketButtonSubmit } from '../../Basket/BasketUtils/BasketButton';
import CustumInput from '../../Basket/Preorder/Utils/CustumInput/CustumInput';
import styles from './registration.module.css';

const Registration = ({ city, setCity, error, setError, cities }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // distructure form's methods
  const { handleSubmit, reset, control } = useForm({
    mode: 'onChange',
  });
  // func setting data to state if password !== password repeat will be error
  const submitHandler = (data) => {
    const { login, password, name, surName, passwordRepeat } = { ...data };
    if (password !== passwordRepeat) {
      setError('Ваши пароли не совпадают');
    } else {
      dispatch(registrationAC(login, password, name, surName, city));
      reset();
      navigate('../correct-msg');
    }
  };
  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(submitHandler)}
    >
      <AiOutlineClose
        className={styles.closing_icon}
        onClick={() => navigate(-2)}
      />
      <div className={styles.title_wrapper}>
        <h1>Регистрация</h1>
      </div>
      <div className={styles.registration_row}>
        <div className={styles.registration_column}>
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
            rules={{ required: 'Заполните поле имя' }}
            name="name"
            control={control}
            defaultValue={''}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <CustumInput
                title="Имя"
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
            rules={{ required: 'Заполните поле фамилия' }}
            name="surName"
            control={control}
            defaultValue={''}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <CustumInput
                title="Фамилия"
                name={name}
                inputRef={ref}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={error}
              />
            )}
          />
        </div>
        <div className={styles.registration_column}>
          <Controller
            rules={{ required: 'Заполните поле пароль', minLength: 6 }}
            name="password"
            control={control}
            defaultValue={''}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <CustumInput
                type="password"
                title="Пароль"
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
            rules={{ required: 'Заполните поле повторите пароль' }}
            name="passwordRepeat"
            control={control}
            defaultValue={''}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <CustumInput
                type="password"
                title="Повторите пароль"
                name={name}
                inputRef={ref}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={error}
              />
            )}
          />
          <label
            className={styles.select_label}
            htmlFor="select"
          >
            Ваш город:
          </label>
          <select
            id="select"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            {cities.map((city, index) => {
              return (
                <option
                  value={city}
                  key={index}
                >
                  {city}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className={styles.btn_wrapper}>
        <div className={styles.error}>{error}</div>
        <BasketButtonSubmit className={styles.btn}>
          Зарегистрироваться
        </BasketButtonSubmit>
      </div>
    </form>
  );
};
export default Registration;
