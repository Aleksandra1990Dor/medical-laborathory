import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './MainSearch.module.css';
import SearchingItem from './SearchingItem';
const MainSearch = ({
  searchFilter,
  hideItems,
  searching,
  toggleClassList,
}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div>
      <div className={styles.main_search}>
        <input
          id="main-search"
          value={searchParams.get('filter') || ''}
          onBlur={() => {
            setSearchParams({});
            hideItems();
          }}
          ref={ref}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
              searching(filter);
            } else setSearchParams({});
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
          {searchFilter.map((el) => {
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
                key={el.id}
                onClick={hideItems}
                id={el.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainSearch;
