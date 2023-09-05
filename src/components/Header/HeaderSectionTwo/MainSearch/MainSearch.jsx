import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import SearchingItem from './SearchingItem/SearchingItem';
import styles from './MainSearch.module.css';

const MainSearch = ({
  searchFilter,
  hideItems,
  searching,
  toggleClassList,
}) => {
  const ref = useRef('');
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div className={styles.main_search}>
      <input
        id="main-search"
        value={ref.current.value}
        onBlur={hideItems}
        ref={ref}
        onChange={(e) => {
          let filter = e.target.value;
          searching(filter);
        }}
        className={styles.search_input}
        type="search"
      />
      <label
        htmlFor="main-search"
        onClick={handleClick}
        className={styles.main_search_placeholder}
      >
        Поиск по сайту
      </label>
      <BsSearch className={styles.search_icon} />
      <div className={toggleClassList}>
        {searchFilter.map((el, index) => {
          if (el === 'Ничего не найдено') {
            return (
              <div
                className={styles.searching_item}
                key={0}
              >
                {el}
              </div>
            );
          }
          return (
            <SearchingItem
              text={el.title}
              key={index}
              onClick={hideItems}
              id={el.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainSearch;
