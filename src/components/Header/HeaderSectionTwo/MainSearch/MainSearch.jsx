import { useSearchParams } from 'react-router-dom';
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
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
              searching(filter);
            } else setSearchParams({});
          }}
          className={styles.search_input}
          type="search"
          // placeholder="Поиск по сайту"
        />
        <label
          htmlFor="main-search"
          className={styles.main_search_placeholder}
        >
          Поиск по сайту
        </label>
        <BsSearch className={styles.search_icon} />
        <div
          className={toggleClassList}
          // onMouseLeave={hideItems}
        >
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
