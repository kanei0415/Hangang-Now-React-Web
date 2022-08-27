import { RootState } from '@store/rootReducer';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useParking() {
  const { data } = useSelector((root: RootState) => root.parkingReducer);

  const dispatch = useDispatch();

  return {
    data,
  };
}
