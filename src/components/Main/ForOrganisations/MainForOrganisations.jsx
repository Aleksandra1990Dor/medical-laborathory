import ForOrganisationsPrCard from './ForOrganisationsPrCard';
import Achivments from '../../MainFirstPage/Achivments/Achivments';
import styles from '../../MainFirstPage/Achivments/Achivments.module.css';

const MainForOrganisations = () => {
  return (
    <div>
      <ForOrganisationsPrCard />
      <Achivments iconColor={styles.icon_red} />
    </div>
  );
};
export default MainForOrganisations;
