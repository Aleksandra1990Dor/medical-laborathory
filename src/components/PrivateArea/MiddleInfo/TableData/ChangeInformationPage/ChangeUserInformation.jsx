import { AiOutlineClose } from 'react-icons/ai';
import { Controller, useForm } from 'react-hook-form';
import { changeVisiterInfoAC } from '../../../../../store/mainInfoReduser';
import { useDispatch } from 'react-redux';
import { BasketButtonSubmit } from '../../../../Basket/BasketUtils/BasketButton';
import CustumInput from '../../../../Basket/Preorder/Utils/CustumInput/CustumInput';
import CustumFormButtons from '../../../../Basket/Preorder/Utils/CustumFormButtons/CustumFormButtons';
import styles from './ChangeUserInformation.module.css';

const ChangeUserInformation = ({ toggleClass, hideMore, title }) => {
  const dispatch = useDispatch();

  // distructure form methods
  const { handleSubmit, control, setValue } = useForm({ mode: 'onSubmit' });

  // function on submit
  const submitHandler = (data) => {
    const { fatherName, dateOfBurn, sex, phone, email } = { ...data };
    if (title === 'Персоналные данные') {
      dispatch(changeVisiterInfoAC(fatherName, dateOfBurn, sex, phone, email));
    }
    hideMore();
  };

  return (
    <div className={toggleClass}>
      <div className={styles.change_info_container}>
        <AiOutlineClose
          className={styles.closing_icon}
          onClick={hideMore}
        />
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.merch}>
            <Controller
              name="fatherName"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <CustumInput
                  title="Отчество"
                  name={name}
                  inputRef={ref}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  inputStyle={{ width: '97%' }}
                />
              )}
            />
            <Controller
              name="dateOfBurn"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <CustumInput
                  title="Дата рождения"
                  name={name}
                  inputRef={ref}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  inputStyle={{ width: '97%' }}
                />
              )}
            />
          </div>
          <Controller
            name="sex"
            control={control}
            defaultValue="мужской"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <CustumFormButtons
                title="Пол"
                name={name}
                inputRef={ref}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
                setValue={setValue}
              />
            )}
          />
          <div className={styles.merch}>
            <Controller
              name="phone"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <CustumInput
                  title="Телефон"
                  name={name}
                  inputRef={ref}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  inputStyle={{ width: '97%' }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <CustumInput
                  title="E-mail"
                  name={name}
                  inputRef={ref}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  inputStyle={{ width: '97%' }}
                />
              )}
            />
          </div>
          <BasketButtonSubmit>сохранить</BasketButtonSubmit>
        </form>
      </div>
    </div>
  );
};
export default ChangeUserInformation;
