import { useState } from 'react';
import styles from './MainSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setResultsAC } from '../../../store/mainInfoReduser';
import { analysisSearching } from '../../../Helpers/helpers';
import MainSearch from './MainSearch';
import { useToggle } from '../../../CustomHooks/UseToggle';

const MainSearchContainer = () => {
  //get results and analysis from state
  const searchFilter = useSelector(
    (state) => state.mainInfoReduser.searchFilter
  );
  const analysis = useSelector((state) => state.analysisReduser);
  //get dispatch
  const dispatch = useDispatch();
  // filter data
  const analysisFilterData = (value) => {
    const results = analysisSearching(analysis, value);
    dispatch(setResultsAC(results));
  };
  // show or hide searching results DIV
  const [toggleClassList, setToggleClassList] = useToggle(
    styles.results_block,
    styles.hidden,
    styles.hideInfo,
    300
  );
  //searching
  const searching = (value) => {
    if (value) {
      analysisFilterData(value);
      if (value.length === 1) {
        setToggleClassList();
      }
    }
  };
  return (
    <MainSearch
      searchFilter={searchFilter}
      toggleClassList={toggleClassList}
      hideItems={setToggleClassList}
      searching={searching}
      analysisFilterData={analysisFilterData}
    />
  );
};

export default MainSearchContainer;
