import { useNavigate } from 'react-router-dom';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { MdAddHomeWork } from 'react-icons/md';
import { BsInfoCircleFill } from 'react-icons/bs';
import styles from './PersonalAreaAside.module.css';
import AsideItem from '../AsideItem/AsideItem';
import MobileServiceInfoAside from '../HiddenInfo/MobileServisInfoAside';
import BasketInfoAside from '../HiddenInfo/BasketInfoAside';
import InfoAside from '../HiddenInfo/InfoAside';
const PersonalAreaAside = ({
  showHiddenInfo,
  contanerToggleClass,
  classes,
}) => {
  // navigation for buttons
  const navigate = useNavigate();
  //icons array
  const icons = [
    <RiShoppingBasketFill className={styles.infoIcon} />,
    <MdAddHomeWork className={styles.infoIcon} />,
    <BsInfoCircleFill className={styles.infoIcon} />,
  ];

  return (
    <div className={styles.infoAsideWrapper}>
      <div className={contanerToggleClass}>
        {/* aside icons */}
        {icons.map((icon, index) => {
          // arguments here: class and functions for change class (form useState)
          return (
            <AsideItem
              key={index}
              onClick={() =>
                showHiddenInfo(classes[index][0], classes[index][1])
              }
            >
              {icon}
            </AsideItem>
          );
        })}
      </div>
      {/* hidden blocks: basket info, mobile service info and main info for visiter*/}

      <MobileServiceInfoAside
        ToggleClass={classes[1][0]}
        showHiddenInfo={showHiddenInfo}
        navigate={navigate}
        setToggleClass={classes[1][1]}
      />
      <BasketInfoAside
        ToggleClass={classes[0][0]}
        setToggleClass={classes[0][1]}
        showHiddenInfo={showHiddenInfo}
        navigate={navigate}
      />
      <InfoAside
        ToggleClass={classes[2][0]}
        setToggleClass={classes[2][1]}
        showHiddenInfo={showHiddenInfo}
      />
    </div>
  );
};
export default PersonalAreaAside;
