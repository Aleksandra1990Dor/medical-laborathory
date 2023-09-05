import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { useToggleClass } from '../../../../CustomHooks/UseToggle';
import { addCallBackAC } from '../../../../store/mainInfoReduser';
import CustumInput from '../../../Basket/Preorder/Utils/CustumInput/CustumInput';
import styles from './OrderCallBack.module.css';
import SendCallBackForm from './SendCallBackForm';

const OrderCallBackForm = () => {
  const dispatch = useDispatch();
  // if call back already added will be 'true' else will be 'false'
  const isCallBackAdded = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.callBack.isAdded
  );
  // className for sign 'call back added'
  const [callAddedClassName, showCallAddedMsg, hideCallAddedMsg] =
    useToggleClass(
      styles.message,
      styles.hidden,
      styles.hidde_info_animation,
      300
    );
  // className for sign 'you already add call back'
  const [callBackAlreadyAddedCN, showSign, hideSign] = useToggleClass(
    styles.message,
    styles.hidden,
    styles.hidde_info_animation,
    300
  );
  // destructure form methods
  const { handleSubmit, reset, control } = useForm({
    mode: 'onChange',
  });
  // if call back already added showing sign else setting data to state and showing sign 'added'
  const submitHandler = (data) => {
    hideCallAddedMsg();
    hideSign();
    if (isCallBackAdded) {
      showSign();
    } else {
      dispatch(addCallBackAC(data));
      showCallAddedMsg();
      reset();
    }
  };

  return (
    <section>
      <h3 className={styles.title}>Заказать обратный звонок</h3>
      <form
        className={styles.form}
        onSubmit={handleSubmit(submitHandler)}
        onMouseLeave={() => {
          hideCallAddedMsg();
          hideSign();
        }}
      >
        <div className={styles.form_inputs_container}>
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
                style={{ width: '100%' }}
                inputStyle={{ width: '100%' }}
              />
            )}
          />
          <Controller
            rules={{ required: 'Заполните поле телефон' }}
            name="phone"
            control={control}
            defaultValue={''}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <CustumInput
                title="Номер телефона"
                name={name}
                inputRef={ref}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={error}
                style={{ width: '100%', marginBottom: 0 }}
                inputStyle={{ width: '100%', marginBottom: 0 }}
              />
            )}
          />
        </div>
        <SendCallBackForm
          callAddedClassName={callAddedClassName}
          callBackAlreadyAddedCN={callBackAlreadyAddedCN}
        />
      </form>
    </section>
  );
};
export default OrderCallBackForm;
