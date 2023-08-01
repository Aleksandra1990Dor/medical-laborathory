import { AiOutlineClose } from 'react-icons/ai';
import styles from './ChangeUserInformation.module.css';
import { useForm } from 'react-hook-form';
import { changeVisiterInfoAC } from '../../../../../store/mainInfoReduser';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input';

const ChangeUserInformation = ({
  toggleClass,
  showOrHideMore,
  title,
  tableTitles,
}) => {
  // get dispatch
  const dispatch = useDispatch();
  //   get register and handleSubmit functions from useForm
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  // function for submit form
  const submitHandler = (data) => {
    // distructure of object with data
    const { fatherName, dateOfBurn, sex, phone, email } = { ...data };
    // if form is "changing personal info" - set new info to state
    if (title === 'Персоналные данные') {
      dispatch(changeVisiterInfoAC(fatherName, dateOfBurn, sex, phone, email));
    }
    // close form in the end
    showOrHideMore();
  };
  //   array with names for inputs
  const inputValues = ['fatherName', 'dateOfBurn', 'sex', 'phone', 'email'];
  //   function checking values of input and returning type of input
  const switchInputType = (title) => {
    if (title === 'Дата рождения') {
      return 'date';
    } else {
      return 'text';
    }
  };
  return (
    <div className={toggleClass}>
      <div className={styles.changeInfoContainer}>
        {/* closing icon */}
        <AiOutlineClose
          className={styles.closeIcon}
          onClick={showOrHideMore}
        />
        {/* form */}
        <form onSubmit={handleSubmit(submitHandler)}>
          {/* maping titles as a name of inputs */}
          {tableTitles.map((title, index) => {
            // there is empty area of table return false
            if (title === ' ') {
              return false;
            }
            return (
              <Input
                switchInputType={switchInputType}
                title={title}
                initialValue={inputValues[index]}
                key={index}
                register={register}
              />
            );
          })}
          <button className={styles.infoTitleBtn}>сохранить</button>
        </form>
      </div>
    </div>
  );
};
export default ChangeUserInformation;
