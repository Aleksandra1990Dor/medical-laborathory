import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { addAdressAC } from '../../../../../store/mainInfoReduser';
import { BasketButtonSubmit } from '../../../../Basket/BasketUtils/BasketButton';
import { Controller, useForm } from 'react-hook-form';
import CustumInput from '../../../../Basket/Preorder/Utils/CustumInput/CustumInput';
import styles from '../AddCenter/AddCenter.module.css';

const AddAdress = ({ toggleClass, hideMore }) => {
  const dispatch = useDispatch();
  // distructure form's methodes
  const { handleSubmit, control } = useForm({ mode: 'onSubmit' });
  // function on submit
  const addAdress = (data) => {
    dispatch(addAdressAC(data.adress));
    hideMore();
  };

  return (
    <div className={toggleClass}>
      <form
        className={styles.form_wrapper}
        onSubmit={handleSubmit(addAdress)}
      >
        <AiOutlineClose
          className={styles.cloing_icon}
          onClick={hideMore}
        />
        <h3>Добавление адреса для выезда:</h3>
        <Controller
          name="adress"
          control={control}
          defaultValue=""
          rules={{ required: 'Введите адрес' }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <CustumInput
              title="Введите адрес"
              name={name}
              inputRef={ref}
              onBlur={onBlur}
              value={value}
              onChange={onChange}
              error={error}
              style={{ width: '100%' }}
              inputStyle={{ width: '100%' }}
            />
          )}
        />
        <BasketButtonSubmit>Добавить</BasketButtonSubmit>
      </form>
    </div>
  );
};

export default AddAdress;
