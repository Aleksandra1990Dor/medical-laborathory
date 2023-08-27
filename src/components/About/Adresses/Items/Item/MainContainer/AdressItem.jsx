import { BsDot } from 'react-icons/bs';
import { useToggleClass } from '../../../../../CustomHooks/UseToggle';
import AddAdressToFavorites from '../AddToFavorites/AddAdressToFavorites';
import AdressesSchedule from '../Schedule/AdressesSchedule';
import AdressesIcons from '../Icons/AdressesIcons';
import styles from './AdressItem.module.css';

const AdressItem = ({ adress }) => {
  // className for sign 'added'
  const [adressAddedClassName, showSign, hideSign] = useToggleClass(
    styles.add_to_favoriles_icon_description,
    styles.hidden,
    styles.hidde_info_animation,
    300
  );
  // className for sign 'deleted'
  const [adressDeletedClassName, showDeletedSign, hideDeletedSign] =
    useToggleClass(
      styles.add_to_favoriles_icon_description,
      styles.hidden,
      styles.hidde_info_animation,
      300
    );

  return (
    <div
      className={styles.adress_item}
      onMouseLeave={() => {
        hideSign();
        hideDeletedSign();
      }}
    >
      <div className={styles.main_section_wrapper}>
        <div className={styles.title_wrapper}>
          <BsDot className={styles.icon_circle} />
          <strong className={styles.adress_title}>{adress}</strong>
        </div>
        <AdressesSchedule />
        <AdressesIcons />
      </div>
      <AddAdressToFavorites
        adress={adress}
        adressAddedClassName={adressAddedClassName}
        adressDeletedClassName={adressDeletedClassName}
        showSign={showSign}
        showDeletedSign={showDeletedSign}
        hideSign={hideSign}
        hideDeletedSign={hideDeletedSign}
      />
    </div>
  );
};
export default AdressItem;
