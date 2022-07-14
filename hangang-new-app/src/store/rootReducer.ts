import { combineReducers } from 'redux';
import initReducer from './init/reducer';

const rootReducer = combineReducers({
  initReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
