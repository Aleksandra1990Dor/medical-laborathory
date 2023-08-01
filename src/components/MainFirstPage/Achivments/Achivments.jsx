import { AiFillExperiment, AiOutlineTrophy } from 'react-icons/ai';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { GiHealing } from 'react-icons/gi';
import { BiDonateBlood } from 'react-icons/bi';
import AchivmentsItem from './AchivmentsItem';
import styles from './Achivments.module.css';
import { useSelector } from 'react-redux';

const Achivments = ({ iconColor }) => {
  const toggleClass = `${styles.icon} ${iconColor}`;
  const achivments = useSelector((state) => state.mainInfoReduser.achivments);
  const iconsArray = [
    <AiFillExperiment className={toggleClass} />,
    <BiDonateBlood className={toggleClass} />,
    <GiHealing className={toggleClass} />,
    <FaHandHoldingMedical className={toggleClass} />,
    <AiOutlineTrophy className={toggleClass} />,
  ];
  return (
    <div className={styles.achivments}>
      {achivments.map((achivment, index) => {
        return (
          <AchivmentsItem
            text={achivment.text}
            title={achivment.title}
            key={index}
            children={iconsArray[index]}
          />
        );
      })}
    </div>
  );
};
export default Achivments;
