import AddToFavoritesIconDescription from '../../Adresses/Items/Item/AddToFavorites/AddToFavoritesIconDescription';
import { BasketButtonSubmit } from '../../../Basket/BasketUtils/BasketButton';
import styles from './OrderCallBack.module.css';

const SendCallBackForm = ({ callAddedClassName, callBackAlreadyAddedCN }) => {
  return (
    <div className={styles.form_order_container}>
      <p className={styles.description}>
        * Нажимая на кнопку отправить вы соглашаетесь на обработку персональных
        данных
      </p>
      <BasketButtonSubmit>Заказать обратный звонок</BasketButtonSubmit>
      <AddToFavoritesIconDescription
        text="Вы заказали обратный звонок"
        className={callAddedClassName}
      />
      <AddToFavoritesIconDescription
        text="Обратный звонок уже заказан"
        className={callBackAlreadyAddedCN}
      />
    </div>
  );
};
export default SendCallBackForm;
