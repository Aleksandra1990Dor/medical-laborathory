import { useEffect, useState } from 'react';
// import { timeOut } from '../Helpers/helpers';
export const useToggle = (
  mainClass,
  hiddenClass,
  hiddenAnimationClass,
  time
) => {
  const [value, setValue] = useState(hiddenClass);
  useEffect(() => {
    if (value === `${hiddenAnimationClass} ${mainClass}`) {
      setTimeout(() => setValue(hiddenClass), time);
    }
  }, [value]);
  const toggle = () => {
    if (
      value === hiddenClass &&
      value !== `${hiddenAnimationClass} ${mainClass}`
    ) {
      setValue(mainClass);
    } else if (value === mainClass) {
      setValue(`${hiddenAnimationClass} ${mainClass}`);
    }
  };
  return [value, toggle];
};

export const useToggleClass = (
  mainClass,
  hiddenClass,
  hiddenAnimationClass,
  time
) => {
  const [value, setValue] = useState(hiddenClass);
  const [hiddenSygnal, setHiddenSygnal] = useState(false);
  const showItems = () => {
    if (
      value === hiddenClass &&
      value !== `${mainClass} ${hiddenAnimationClass}`
    ) {
      setValue(mainClass);
    }
  };
  useEffect(() => {
    if (value === `${mainClass} ${hiddenAnimationClass}`) {
      setTimeout(() => setValue(hiddenClass), time);
    }
  }, [hiddenSygnal]);
  const hideItems = () => {
    if (value === mainClass) {
      setHiddenSygnal(!hiddenSygnal);
      setValue(`${mainClass} ${hiddenAnimationClass}`);
    }
  };

  return [value, showItems, hideItems];
};
