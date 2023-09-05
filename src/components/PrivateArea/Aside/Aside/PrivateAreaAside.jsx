import { useNavigate } from 'react-router-dom';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { MdAddHomeWork } from 'react-icons/md';
import { BsInfoCircleFill } from 'react-icons/bs';
import AsideItem from '../AsideItem/AsideItem';
import MobileServiceInfoAside from '../HiddenInfo/MobileServisInfoAside';
import BasketInfoAside from '../HiddenInfo/BasketInfoAside';
import DmsInfoAside from '../HiddenInfo/InfoAside';
import styles from './PrivateAreaAside.module.css';

const PrivateAreaAside = ({ showHiddenInfo, contanerToggleClass, classes }) => {
  // navigation for buttons
  const navigate = useNavigate();
  //icons array
  const icons = [
    <RiShoppingBasketFill className={styles.infoIcon} />,
    <MdAddHomeWork className={styles.infoIcon} />,
    <BsInfoCircleFill className={styles.infoIcon} />,
  ];

  return (
    <div>
      <div className={contanerToggleClass}>
        {icons.map((icon, index) => {
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
      <MobileServiceInfoAside
        toggleClass={classes[1][0]}
        showHiddenInfo={showHiddenInfo}
        navigate={navigate}
        showInfo={classes[1][1]}
        hideInfo={classes[1][2]}
      />
      <BasketInfoAside
        toggleClass={classes[0][0]}
        showInfo={classes[0][1]}
        hideInfo={classes[0][2]}
        showHiddenInfo={showHiddenInfo}
        navigate={navigate}
      />
      <DmsInfoAside
        toggleClass={classes[2][0]}
        showInfo={classes[2][1]}
        hideInfo={classes[2][2]}
        showHiddenInfo={showHiddenInfo}
        navigate={navigate}
      />
    </div>
  );
};
export default PrivateAreaAside;
