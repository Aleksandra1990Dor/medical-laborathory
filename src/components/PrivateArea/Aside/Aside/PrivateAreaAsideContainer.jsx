import { useEffect } from 'react';
import { useToggleClass } from '../../../../CustomHooks/UseToggle';
import PrivateAreaAside from './PrivateAreaAside';
import styles from './PrivateAreaAside.module.css';

const PrivateAreaAsideContainer = () => {
  //   hidden blocks styles
  const [basketToggleClass, showBasket, hideBasket] = useToggleClass(
    styles.container,
    styles.hidden,
    styles.hideInfo,
    1000
  );
  const [homeServisToggleClass, showHomeServise, hideHomeServise] =
    useToggleClass(styles.container, styles.hidden, styles.hideInfo, 1000);
  const [dmsToggleClass, showDms, hideDms] = useToggleClass(
    styles.container,
    styles.hidden,
    styles.hideInfo,
    1000
  );
  // container styles
  const [asideToggleClass, showMore, hideMore] = useToggleClass(
    styles.wrapper,
    styles.hidden,
    styles.hideInfo,
    300
  );
  useEffect(() => showMore(), [showMore]);
  // toggleClasses array
  const classes = [
    [basketToggleClass, showBasket, hideBasket],
    [homeServisToggleClass, showHomeServise, hideHomeServise],
    [dmsToggleClass, showDms, hideDms],
  ];
  // function showing hidden info
  const showHiddenInfo = (className, showClass, hideClass) => {
    if (className === styles.hidden) {
      hideMore();
      showClass();
    } else {
      hideClass();
      showMore();
    }
  };
  return (
    <PrivateAreaAside
      showHiddenInfo={showHiddenInfo}
      contanerToggleClass={asideToggleClass}
      classes={classes}
    />
  );
};

export default PrivateAreaAsideContainer;
