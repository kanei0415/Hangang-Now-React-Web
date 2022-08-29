import { store } from '@components/App';
import useCenterPos from '@hooks/useCenterPos';
import useFacility from '@hooks/useFacility';
import React, { useEffect, useRef } from 'react';
import Facility from '../Facility';

const handler: EventListener = (e: any) => {
  store.dispatch(JSON.parse(e.data));
};

const FacilityContainer = () => {
  const { centerPos } = useCenterPos();
  const { data } = useFacility();

  const mapRef = useRef<kakao.maps.Map>(null);

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

  return <Facility mapRef={mapRef} centerPos={centerPos} data={data} />;
};

export default FacilityContainer;
