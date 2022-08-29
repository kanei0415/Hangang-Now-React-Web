import { ParkingMarkerTypes } from './modules/actionTypes';
import { UPDATE_PARKING_TYPES } from './modules/actionTypes';

export const updateParking = (data: ParkingMarkerTypes[]) => ({
  type: UPDATE_PARKING_TYPES,
  payload: data,
});

export type ParkingActionTypes = ReturnType<typeof updateParking>;
