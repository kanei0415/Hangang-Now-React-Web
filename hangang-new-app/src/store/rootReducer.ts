import { combineReducers } from 'redux';
import centeerPosReducer from './centerPos/reducer';

const rootReducer = combineReducers({
  centeerPosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
