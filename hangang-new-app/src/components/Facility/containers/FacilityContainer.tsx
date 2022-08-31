import { store } from '@components/App';
import useCenterPos from '@hooks/useCenterPos';
import useFacility from '@hooks/useFacility';
import { FacilityDataType } from '@store/facility/acitons';
import React, { useCallback, useEffect, useRef } from 'react';
import Facility from '../Facility';

const handler: EventListener = (e: any) => {
  store.dispatch(JSON.parse(e.data));
};

const FacilityContainer = () => {
  const { centerPos } = useCenterPos();
  const { data } = useFacility();

  const mapRef = useRef<kakao.maps.Map>(null);

  const onMarkerPressed = useCallback((item: FacilityDataType) => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify(item));
    }
  }, []);

  useEffect(() => {
    document.addEventListener('message', handler);

    return () => {
      document.removeEventListener('message', handler);
    };
  }, []);

  useEffect(() => {
    if (centerPos) {
      mapRef?.current?.setCenter(
        new kakao.maps.LatLng(centerPos.lat, centerPos.lng),
      );
    }
  }, [mapRef, centerPos]);

  return (
    <Facility
      mapRef={mapRef}
      centerPos={centerPos}
      data={data}
      onMarkerPressed={onMarkerPressed}
    />
  );
};

export default FacilityContainer;
