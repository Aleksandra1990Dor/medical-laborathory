import { useSelector } from 'react-redux';
import AdressIconItem from './AdressIconItem';
import styles from '../MainContainer/AdressItem.module.css';

const AdressesIcons = () => {
  // icons
  const icons = useSelector((state) => state.mainInfoReduser.adressIconsInfo);
  return (
    <div className={styles.icons_section}>
      {icons.map((icon, index) => (
        <AdressIconItem
          key={index}
          icon={icon}
        />
      ))}
    </div>
  );
};
export default AdressesIcons;
