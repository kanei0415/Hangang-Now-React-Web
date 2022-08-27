import { combineReducers } from 'redux';
import centeerPosReducer from './centerPos/reducer';
import parkingReducer from './parking/reducer';

const rootReducer = combineReducers({
  centeerPosReducer,
  parkingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
