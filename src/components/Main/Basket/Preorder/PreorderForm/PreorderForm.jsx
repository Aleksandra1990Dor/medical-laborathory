import styles from './PreorderForm.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { BasketButtonSubmit } from '../../BasketUtils/BasketButton';
import { setOrderInformationAC } from '../../../../store/mainInfoReduser';
import CustumInput from '../Utils/CustumInput/CustumInput';
import CustumFormButtons from '../Utils/CustumFormButtons/CustumFormButtons';
import CustumSwitchTrack from '../Utils/CustumSwitchTrack/CustumSwitchTrack';

const PreorderForm = ({ atHome, showOrhideInfo }) => {
  // get info about user
  const userData = useSelector((state) => state.mainInfoReduser.visiterInfo);
  const fatherName = userData.fatherName ? userData.fatherName : '';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // get methods from useForm
  const { handleSubmit, reset, getValues, control, setValue } = useForm({
    mode: 'onChange',
  });
  //  get value 'true' or 'false' of field 'at-home'
  const atHomeCurrentValue = getValues().atHome;
  //   in shitch track showing or hiding fields 'adress' and 'date of servise'
  const onSwitch = () => {
    setValue('atHome', !atHomeCurrentValue);
    showOrhideInfo();
  };
  //   on submit data
  const submitHandler = (data) => {
    data.atHome
      ? dispatch(
          setOrderInformationAC(
            data.fullName,
            data.dateOfBurn,
            data.sex,
            data.phone,
            data.email,
            data.atHome,
            data.adress,
            data.dateOfDeparture
          )
        )
      : dispatch(
          setOrderInformationAC(
            data.fullName,
            data.dateOfBurn,
            data.sex,
            data.phone,
            data.email,
            data.atHome,
            null,
            null
          )
        );
    reset();
    navigate('../order/step2');
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.merch}>
        <Controller
          rules={{ required: 'Заполните поле ФИО' }}
          name="fullName"
          control={control}
          defaultValue={
            userData.isAuth
              ? `${userData.name} ${userData.surName} ${fatherName}`
              : ''
          }
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <CustumInput
              title="Фио *"
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
          name="dateOfBurn"
          control={control}
          rules={{ required: 'Заполните поле Дата рождения' }}
          defaultValue={userData.isAuth ? userData.dateOfBurn : ''}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <CustumInput
              title="Дата рождения *"
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
      <Controller
        name="sex"
        control={control}
        defaultValue={userData.isAuth ? userData.sex : 'мужской'}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { error },
        }) => (
          <CustumFormButtons
            title="Пол"
            name={name}
            inputRef={ref}
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            error={error}
            setValue={setValue}
          />
        )}
      />
      <div className={styles.merch}>
        <Controller
          name="phone"
          control={control}
          rules={{ required: 'Заполните поле Телефон' }}
          defaultValue={userData.isAuth ? userData.phone : ''}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <CustumInput
              title="Телефон *"
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
          name="email"
          control={control}
          rules={{ required: 'Заполните поле E-mail' }}
          defaultValue={userData.isAuth ? userData.email : ''}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <CustumInput
              title="E-mail *"
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
      <Controller
        name="atHome"
        control={control}
        defaultValue={false}
        render={({
          field: { onBlur, value, name, ref },
          fieldState: { error },
        }) => (
          <CustumSwitchTrack
            title="Пол *"
            name={name}
            inputRef={ref}
            onBlur={onBlur}
            value={value}
            onChange={onSwitch}
            error={error}
            setValue={setValue}
          />
        )}
      />
      <div className={atHome}>
        <Controller
          name="adress"
          control={control}
          defaultValue={userData.isAuth ? userData.adress : ''}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <CustumInput
              title="Введите адрес для выезда"
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
          name="dateOfDeparture"
          control={control}
          defaultValue={''}
          render={({
            field: { onChange, onBlur, value, name, ref },

            fieldState: { error },
          }) => (
            <CustumInput
              title="Желаемый день для выезда мобильной службы"
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
      <BasketButtonSubmit> Далее</BasketButtonSubmit>
    </form>
  );
};
export default PreorderForm;
