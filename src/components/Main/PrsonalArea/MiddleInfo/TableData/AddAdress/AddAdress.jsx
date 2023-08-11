import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import styles from '../AddCenter/AddCenter.module.css';
import { addAdressAC } from '../../../../../store/mainInfoReduser';
import { BasketButtonSubmit } from '../../../../Basket/BasketUtils/BasketButton';
import { Controller, useForm } from 'react-hook-form';
import CustumInput from '../../../../Basket/Preorder/Utils/CustumInput/CustumInput';

const AddAdress = ({ toggleClass, showOrHideMore }) => {
  const { handleSubmit, control } = useForm({ mode: 'onSubmit' });
  const dispatch = useDispatch();
  const addAdress = (data) => {
    dispatch(addAdressAC(data.adress));
    showOrHideMore();
  };

  return (
    <div className={toggleClass}>
      <form
        className={styles.changeInfoContainer}
        onSubmit={handleSubmit(addAdress)}
      >
        <AiOutlineClose
          className={styles.closeIcon}
          onClick={showOrHideMore}
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
            />
          )}
        />
        <BasketButtonSubmit>Добавить</BasketButtonSubmit>
      </form>
    </div>
  );
};

export default AddAdress;
