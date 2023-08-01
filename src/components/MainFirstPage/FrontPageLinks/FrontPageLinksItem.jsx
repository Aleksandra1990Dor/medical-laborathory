import { useNavigate } from 'react-router-dom';
import { RiSendPlaneLine } from 'react-icons/ri';
import { IoMdArrowForward } from 'react-icons/io';
import styles from './FrontPageLinks.module.css';

const FronPageLinksItem = ({ link, city }) => {
  const navigate = useNavigate();
  return (
    <div
      className={city ? styles.block_wrapper_map : styles.block_wrapper}
      onClick={() => navigate(link.link)}
    >
      <h3 className={styles.title}>{link.title}</h3>
      {city && (
        <div className={styles.city}>
          <RiSendPlaneLine className={styles.city_icon} /> {city}
        </div>
      )}
      <IoMdArrowForward className={styles.icon_more} />
      <img
        className={city ? styles.img_map : styles.img}
        src={link.src}
        alt={link.alt}
      />
    </div>
  );
};
export default FronPageLinksItem;
