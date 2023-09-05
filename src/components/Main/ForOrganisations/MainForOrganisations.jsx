import ForOrganisationsPrCard from './ForOrganisationsPrCard';
import Achivments from '../../MainFirstPage/Achivments/Achivments';
import styles from './ForOrganisations.module.css';

const MainForOrganisations = () => {
  return (
    <div className={styles.wrapper}>
      <ForOrganisationsPrCard />
      <Achivments iconColor={styles.icon_red} />
    </div>
  );
};
export default MainForOrganisations;
