import { useState } from 'react';
import { useToggle } from '../../../CustomHooks/UseToggle';
import { FaPhone } from 'react-icons/fa';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import styles from './HeaderRightSide.module.css';
import LinksItem from '../../../Utils/LinksItem';

const Phones = ({ phones }) => {
  // const [toggleClassList, setToggleClassList] = useState(styles.hidden);
  // const showMorePhones = () => {
  //   toggleClassList === styles.hidden && setToggleClassList(styles.more);
  // };
  // const hideMorePhones = () => {
  //   if (toggleClassList === styles.more) {
  //     setToggleClassList(`${styles.more} ${styles.hideMore}`);
  //     setTimeout(() => setToggleClassList(styles.hidden), 450);
  //   }
  // };
  const [toggleClassList, setToggleClassList] = useToggle(
    styles.more,
    styles.hidden,
    styles.hideMore,
    450
  );
  return (
    <>
      <h4 onClick={setToggleClassList}>
        {`${phones[0].phone} `}
        <FaPhone className={styles.phones_icon} />
      </h4>
      <div
        className={toggleClassList}
        onMouseLeave={setToggleClassList}
      >
        {phones.map((phone, index) => {
          return (
            <LinksItem
              href="*"
              key={index}
              text={phone.phone}
              toggleClass={styles.phones_item}
            />
          );
        })}
        <BsFillTelephoneOutboundFill
          className={`${styles.phones_icon} ${styles.hidden__icon}`}
        />
        <span>Бесплатный звонок по россии</span>
      </div>
    </>
  );
};
export default Phones;
