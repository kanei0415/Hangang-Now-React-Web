import { INIT_ACTION_TYPE } from './modules/actionTypes';

export const initAction = () => ({
  type: INIT_ACTION_TYPE,
  payload: {},
});

export type InitActionTypes = ReturnType<typeof initAction>;
