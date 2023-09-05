import { useDispatch, useSelector } from 'react-redux';
import {
  refreshFilterAC,
  setResultsAC,
} from '../../../../store/mainInfoReduser';
import { analysisSearching } from '../../../Helpers/helpers';
import { useToggleClass } from '../../../../CustomHooks/UseToggle';
import MainSearch from './MainSearch';
import styles from './MainSearch.module.css';

const MainSearchContainer = () => {
  const dispatch = useDispatch();
  const analysis = useSelector((state) => state.analysisReduser);
  // show or hide searching results DIV
  const [toggleClassList, showItems, hideItems] = useToggleClass(
    styles.results_block,
    styles.hidden,
    styles.hideInfo,
    300
  );
  //get results and analysis from state
  const searchFilter = useSelector(
    (state) => state.mainInfoReduser.searchFilter
  );
  // filter data
  const analysisFilterData = (value) => {
    const results = analysisSearching(analysis, value);
    dispatch(setResultsAC(results));
  };
  //searching
  const searching = (value) => {
    dispatch(refreshFilterAC());
    if (value) {
      analysisFilterData(value);
      if (value.length === 1) {
        showItems();
      }
    }
  };
  return (
    <MainSearch
      searchFilter={searchFilter}
      toggleClassList={toggleClassList}
      hideItems={hideItems}
      searching={searching}
      analysisFilterData={analysisFilterData}
    />
  );
};

export default MainSearchContainer;
