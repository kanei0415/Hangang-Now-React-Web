import { combineReducers } from 'redux';
import centeerPosReducer from './centerPos/reducer';
import parkingReducer from './parking/reducer';
import facilityReducer from './facility/reducer';

const rootReducer = combineReducers({
  centeerPosReducer,
  parkingReducer,
  facilityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
