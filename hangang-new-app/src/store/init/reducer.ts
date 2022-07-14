import { InitActionTypes } from './actions';
import { INIT_ACTION_TYPE } from './modules/actionTypes';

export type InitStateTypes = {
  initialized: boolean;
};

const init: InitStateTypes = {
  initialized: false,
};

const initReducer = (
  prev: InitStateTypes = init,
  { type, payload }: InitActionTypes,
): InitStateTypes => {
  switch (type) {
    case INIT_ACTION_TYPE:
      return {
        initialized: true,
      };

    default:
      return prev;
  }
};

export default initReducer;
