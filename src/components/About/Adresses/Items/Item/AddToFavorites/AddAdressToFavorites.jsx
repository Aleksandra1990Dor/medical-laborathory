import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { useToggleClass } from '../../../../../CustomHooks/UseToggle';
import {
  addCenterAC,
  deleteCenterAC,
} from '../../../../../store/mainInfoReduser';
import AddToFavoritesIconDescription from './AddToFavoritesIconDescription';
import styles from '../MainContainer/AdressItem.module.css';

const AddAdressToFavorites = ({
  adress,
  adressAddedClassName,
  adressDeletedClassName,
  showSign,
  showDeletedSign,
  hideSign,
  hideDeletedSign,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // checking informaition is user authorized
  const auth = useSelector((state) => state.mainInfoReduser.visiterInfo.isAuth);
  // users favorite adresses
  const favAdresses = useSelector(
    (state) => state.mainInfoReduser.visiterInfo.myCenters
  );
  // className for sign 'add to favorite'
  const [iconClassName, showIconDescription, hideIconDescription] =
    useToggleClass(
      styles.add_to_favoriles_icon_description,
      styles.hidden,
      styles.hidde_info_animation,
      300
    );
  // messages 'ordered', 'deleted' etc
  const addToFavoriteMessages = [
    { text: 'Добавить адрес в избранное', className: iconClassName },
    {
      text: 'Адрес успешно добавлен в избранное',
      className: adressAddedClassName,
      style: { color: '#37a42a' },
    },
    {
      text: 'Адрес удален из избранного',
      className: adressDeletedClassName,
      style: { color: '#10a46d' },
    },
  ];

  // function adding adress to favorites if user is authorized
  const addAdressToFavorites = () => {
    if (!auth) {
      navigate('/medical-laborathory/login');
    } else {
      if (adressDeletedClassName !== styles.hidden) {
        hideDeletedSign();
      }
      dispatch(addCenterAC(adress));
      showSign();
    }
  };

  // function deleting adress from favorites
  const deleteAdressFromFavorites = () => {
    if (adressAddedClassName !== styles.hidden) {
      hideSign();
    }
    dispatch(deleteCenterAC(adress));
    showDeletedSign();
  };

  return (
    <div className={styles.add_to_favorites}>
      {favAdresses.includes(adress) ? (
        <AiFillStar
          className={styles.icon_star_active}
          onMouseLeave={hideIconDescription}
          onClick={deleteAdressFromFavorites}
        />
      ) : (
        <AiFillStar
          className={styles.icon_star}
          onMouseOver={showIconDescription}
          onMouseLeave={hideIconDescription}
          onClick={addAdressToFavorites}
        />
      )}
      {addToFavoriteMessages.map((info, index) => (
        <AddToFavoritesIconDescription
          key={index}
          text={info.text}
          style={info.style}
          className={info.className}
        />
      ))}
    </div>
  );
};
export default AddAdressToFavorites;
