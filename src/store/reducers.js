import { combineReducers } from 'redux';
import { profileReducer } from '../containers/Profile/store';

const rootReducer = combineReducers({
  profile: profileReducer
});

export default rootReducer;
