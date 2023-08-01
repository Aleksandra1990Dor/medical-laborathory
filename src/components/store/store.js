import { legacy_createStore as createStore, combineReducers } from 'redux';
import linksReduser from './linksReduser';
import mainInfoReduser from './mainInfoReduser';
import analysisReduser from './analysisReduser';
import doctorsReduser from './doctorsReduser';
import dialogsReduser from './dialogsReduser';
import frontPageReduser from './frontPageReduser';

const rootRedusers = combineReducers({
  linksReduser,
  mainInfoReduser,
  analysisReduser,
  doctorsReduser,
  dialogsReduser,
  frontPageReduser,
});

const store = createStore(rootRedusers);

export default store;
window.store = store;
