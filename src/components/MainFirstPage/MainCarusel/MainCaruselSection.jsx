import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import CaruselItem from './Item/CaruselItem';
import bgMicroscope from '../../../img/bg-microscoop.jpg';
import styles from './MainCaruselSection.module.css';

const MainCaruselSection = () => {
  const items = useSelector((state) => state.frontPageReduser.caruselItems);
  // carusel ofset and width
  const caruselWidth = 33.33;
  const [offset, setOffset] = useState(0);
  // right icon function
  const goRight = () => {
    if (offset === -66.66) {
      setOffset(0);
    } else setOffset((currentOffset) => (currentOffset -= caruselWidth));
  };
  // left icon function
  const goLeft = () => {
    if (offset === 0) {
      return false;
    } else setOffset((currentOffset) => (currentOffset += caruselWidth));
  };

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (offset === -66.66) {
        setOffset(0);
      } else setOffset((currentOffset) => (currentOffset -= caruselWidth));
    }, 5000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [offset]);

  return (
    <section className={styles.wrapper}>
      <img
        alt="лаборатория"
        className={styles.bg_img}
        src={bgMicroscope}
      />
      <div
        className={styles.carusel_wrapper}
        data-aos="fade-right"
      >
        <div className={styles.icon_wrapper_left}>
          <HiArrowSmLeft onClick={goLeft} />
        </div>
        <div className={styles.carusel_window}>
          <div
            className={styles.all_items_container}
            style={{ transform: `translateX(${offset}%)` }}
          >
            {items.map((item, index) => (
              <CaruselItem
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className={styles.icon_wrapper_right}>
          <HiArrowSmRight onClick={goRight} />
        </div>
      </div>
    </section>
  );
};
export default MainCaruselSection;
