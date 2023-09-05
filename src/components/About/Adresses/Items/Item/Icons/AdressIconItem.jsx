import styles from './AdressIconItem.module.css';
import { useToggleClass } from '../../../../../../CustomHooks/UseToggle';

const AdressIconItem = ({ icon }) => {
  // classes for show or hide icon description
  const [iconClassName, showIconDescription, hideIconDescription] =
    useToggleClass(
      styles.icon_description,
      styles.hidden,
      styles.hide_info_animation,
      300
    );
  return (
    <div
      className={styles.icon_wrapper}
      onMouseOver={showIconDescription}
      onMouseLeave={hideIconDescription}
    >
      <div className={styles.icon_container}> {icon.icon}</div>
      <div className={iconClassName}>{icon.description}</div>
    </div>
  );
};
export default AdressIconItem;
