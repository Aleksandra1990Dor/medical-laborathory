import styles from './registration.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { registrationAC } from '../store/mainInfoReduser';
import CustumInput from '../Main/Basket/Preorder/Utils/CustumInput/CustumInput';
import { BasketButtonSubmit } from '../Main/Basket/BasketUtils/BasketButton';
const Registration = () => {
  const cities = useSelector((state) => state.mainInfoReduser.cities);
  const info = useSelector((state) => state.mainInfoReduser.visiterInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [city, setCity] = useState(info.city);
  const [error, setError] = useState(null);
  const { handleSubmit, reset, control } = useForm({
    mode: 'onChange',
  });
  const submitHandler = (data) => {
    // distructure of object with data
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
    <div className={styles.registrationWrapper}>
      <form
        className={styles.registrationContainer}
        onSubmit={handleSubmit(submitHandler)}
      >
        <AiOutlineClose
          className={styles.closeIcon}
          onClick={() => navigate('../')}
        />
        <div className={styles.registrationTitle}>
          <h5>Регистрация</h5>
        </div>
        <div className={styles.registrationRow}>
          <div className={styles.registrationColumn}>
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
          <div>
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
        <div className={styles.btnWrapper}>
          <div className={styles.error}>{error}</div>
          <BasketButtonSubmit className={styles.btn}>
            Зарегистрироваться
          </BasketButtonSubmit>
        </div>
      </form>
    </div>
  );
};
export default Registration;
