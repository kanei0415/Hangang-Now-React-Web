import { updateCenterPosAction } from '@store/centerPos/actions';
import { RootState } from '@store/rootReducer';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useCenterPos() {
  const { centerPos } = useSelector(
    (root: RootState) => root.centeerPosReducer,
  );

  const dispatch = useDispatch();

  const __updateCenterPosFromHooks = useCallback(
    (diff: { lat: number; lng: number }) =>
      dispatch(updateCenterPosAction(diff)),
    [dispatch],
  );

  return {
    centerPos,
    __updateCenterPosFromHooks,
  };
}
