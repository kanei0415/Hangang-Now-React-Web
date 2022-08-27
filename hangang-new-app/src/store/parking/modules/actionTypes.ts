export const UPDATE_PARKING_TYPES = 'UPDATE_PARKING_TYPES' as const;

export type ParkingMarkerTypes = {
  id: number;
  local: {
    localname: string;
    x_pos: number;
    y_pos: number;
  };
};
